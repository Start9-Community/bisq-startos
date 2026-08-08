import { autoconfig } from 'bitcoin-core-startos/startos/actions/config/autoconfig'
import {
  defaultBitcoinConnectionMode,
  storeJson,
} from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  const bitcoinConnectionMode =
    (await storeJson
      .read((store) => store.bitcoinConnectionMode)
      .const(effects)) ?? defaultBitcoinConnectionMode
  const localOnly = bitcoinConnectionMode === 'local-only'

  if (!localOnly) {
    await sdk.action.clearTask(effects, 'bitcoind:autoconfig')
    return {}
  }

  await sdk.action.createTask(effects, 'bitcoind', autoconfig, 'critical', {
    input: {
      kind: 'partial',
      accept: [{ peerbloomfilters: true }],
      set: { peerbloomfilters: true },
    },
    when: { condition: 'input-not-matches', once: false },
    reason: i18n('Enable bloom filters so Bisq can use your Bitcoin service'),
  })

  return {
    bitcoind: {
      kind: 'running',
      versionRange: '>=28.4:17',
      healthChecks: ['bitcoind'],
    },
  }
})
