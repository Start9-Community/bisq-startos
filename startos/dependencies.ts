import { autoconfig } from 'bitcoin-core-startos/startos/actions/config/autoconfig'
import {
  defaultBitcoinConnectionMode,
  storeJson,
} from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'

const bitcoind = sdk.Dependency.optional('bitcoind', {
  description:
    'Provides the private, trusted Bitcoin connection used by the default local-only mode',
  metadata: {
    title: 'Bitcoin',
    icon: 'https://raw.githubusercontent.com/Start9Labs/bitcoin-core-startos/feec0b1dae42961a257948fe39b40caf8672fce1/dep-icon.svg',
  },
  versionRange:
    '(>=28.4:29 && <29) || (>=29.4:16 && <30) || (>=30.3:16 && <31) || >=31.1:16 || >=#knotsprerdts:29.3:29',
  kind: 'running',
  healthChecks: ['bitcoind'],
  enabled: async ({ effects }) =>
    ((await storeJson
      .read((store) => store.bitcoinConnectionMode)
      .const(effects)) ?? defaultBitcoinConnectionMode) === 'local-only',
}).withInit(async (effects) => {
  await sdk.action.createTask(effects, 'bitcoind', autoconfig, 'critical', {
    input: {
      kind: 'partial',
      accept: [{ peerbloomfilters: true }],
      set: { peerbloomfilters: true },
    },
    when: { condition: 'input-not-matches', once: false },
    reason: i18n('Enable bloom filters so Bisq can use your Bitcoin service'),
  })
})

export const dependencies = sdk.Dependencies.of().addDependency(bitcoind)
