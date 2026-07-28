import { T, utils } from '@start9labs/start-sdk'
import {
  peerLocalHostId as btcPeerLocalHostId,
  peerPortLocal as btcPeerPortLocal,
} from 'bitcoin-core-startos/startos/utils'
import { sdk } from './sdk'

export const uiPort = 3000

export const bitcoindPeerBridge = async (effects: T.Effects) =>
  sdk.host
    .getBridgeAddress(effects, {
      packageId: 'bitcoind',
      hostId: btcPeerLocalHostId,
      internalPort: btcPeerPortLocal,
    })
    .const()

export function getDefaultPassword(): string {
  return utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 22 })
}
