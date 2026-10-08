import {
  defaultBitcoinConnectionMode,
  storeJson,
} from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  bitcoinConnectionMode: Value.select({
    name: i18n('Bitcoin Connection Mode'),
    description: i18n(
      "- Local node only: Bisq connects only to the Bitcoin service on this server, and does not start while it is unreachable.\n- Bisq network fallback: Bisq uses remote Bitcoin peers provided by the Bisq network, over Tor. The Bitcoin service is not needed, but those peers are asked about your wallet's addresses.",
    ),
    default: defaultBitcoinConnectionMode,
    values: {
      'local-only': i18n('Local node only (recommended)'),
      'bisq-network': i18n('Bisq network fallback'),
    },
  }),
})

export const configureBitcoinConnection = sdk.Action.withInput(
  'configure-bitcoin-connection',
  {
    name: i18n('Configure Bitcoin Connection'),
    description: i18n(
      'Choose whether Bisq requires your local Bitcoin node or uses the Bisq network fallback.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },
  inputSpec,
  async ({ effects }) => ({
    bitcoinConnectionMode:
      (await storeJson.read((store) => store.bitcoinConnectionMode).once()) ??
      defaultBitcoinConnectionMode,
  }),
  async ({ effects, input }) =>
    storeJson.merge(effects, {
      bitcoinConnectionMode: input.bitcoinConnectionMode,
    }),
)
