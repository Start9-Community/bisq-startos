const assert = require('node:assert/strict')
const { spawnSync } = require('node:child_process')
const { readFileSync } = require('node:fs')
const { test } = require('node:test')
const { runInNewContext } = require('node:vm')
const ts = require('typescript')

async function desktopExec(memoryGiB) {
  let exec
  const chain = {
    addOneshot: () => chain,
    addDaemon: (_id, daemon) => {
      exec = daemon.exec
      return chain
    },
  }
  const sdk = {
    setupMain: (fn) => fn,
    SubContainer: { of: () => ({}) },
    Mounts: { of: () => ({ mountVolume: () => ({}) }) },
    Daemons: { of: () => chain },
    useEntrypoint: () => ['/init'],
  }
  const modules = {
    'node:os': { totalmem: () => memoryGiB * 1024 ** 3 },
    './sdk': { sdk },
    './i18n': { i18n: (s) => s },
    './utils': { bisqNetworkFallbackNodes: 'test-peer:8333' },
    './fileModels/store.json': {
      defaultBitcoinConnectionMode: 'local-only',
      defaultUseTorSandbox: true,
      storeJson: {
        read: (select) => ({
          const: async () =>
            select({ PASSWORD: 'test', bitcoinConnectionMode: 'bisq-network' }),
        }),
      },
    },
  }
  const exports = {}
  runInNewContext(
    ts.transpileModule(readFileSync('startos/main.ts', 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText,
    {
      exports,
      console,
      require: (name) => {
        assert.ok(name in modules, `Unexpected import: ${name}`)
        return modules[name]
      },
    },
  )
  await exports.main({ effects: {} })
  return exec
}

for (const [memoryGiB, heapMiB] of [
  [8, 4096],
  [64, 8192],
]) {
  test(`desktop launcher disables Base64 intrinsics with ${heapMiB} MiB heap`, () =>
    desktopExec(memoryGiB).then((exec) => {
      assert.equal(exec.runAsInit, true)
      assert.equal(exec.command[0], '/init')
      const result = spawnSync(
        'docker',
        [
          'run',
          '--rm',
          '--network',
          'none',
          '-e',
          `JAVA_TOOL_OPTIONS=${exec.env.JAVA_TOOL_OPTIONS} -XX:+PrintFlagsFinal`,
          process.env.BISQ_JVM_IMAGE || 'helix/bisq-jvm-security:1.10.11',
          '/opt/bisq/bin/Bisq',
          '--help',
        ],
        { encoding: 'utf8', timeout: 30000 },
      )
      assert.ifError(result.error)
      const output = result.stdout + result.stderr
      assert.equal(result.status, 0, output)
      assert.match(
        output,
        /UseBASE64Intrinsics\s+= false\s+\{product\} \{environment\}/,
      )
      assert.match(
        output,
        new RegExp(`MaxHeapSize\\s+= ${heapMiB * 1024 ** 2}\\s`),
      )
    }))
}
