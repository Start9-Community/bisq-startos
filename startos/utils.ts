import { T, utils } from '@start9labs/start-sdk'
import {
  peerLocalHostId as btcPeerLocalHostId,
  peerPortLocal as btcPeerPortLocal,
} from 'bitcoin-core-startos/startos/utils'
import { sdk } from './sdk'

export const uiPort = 3000

export const getBitcoinPeerBridgeAddress = async (effects: T.Effects) =>
  sdk.host
    .getBridgeAddress(effects, {
      packageId: 'bitcoind',
      hostId: btcPeerLocalHostId,
      internalPort: btcPeerPortLocal,
    })
    .const()

// Bisq's provided Bitcoin peers for the packaged upstream release. Supplying
// them explicitly makes switching away from a previously persisted custom
// local node reliable. Verify this list when updating Bisq.
export const bisqNetworkFallbackNodes = [
  'uxu2kwzqakspsgojbzwazzmrmewwtgdle5uahb6oaonecamezc35vqyd.onion',
  'l65ab4jecc62mjihifr7m3mx7ljehwoy2iutz2lue4ra5goor3f4xeqd.onion',
  'oe6lfkjeuqkcvjw62dadzqfsiyd7xpeiznqvy4ugvboks6tcf3bgmjyd.onion',
  'ft7xwom4xfqj2tagj3rsu57rktqd7revklr6eb5dh7mta7uyertjboad.onion',
  '2oalsctcn76axnrnaqjddiiu5qhrc7hv3raik2lyfxb7eoktk4vw6sad.onion',
  'ybryiy2k4p4pery4qseap4iu2rxput2akuvpvczwvg4eyfafcdsvyqid.onion',
  'o7clg6znpl7a5kk6s6l75lskm63orxubygasuh73iscnffhvij2k5qqd.onion',
  'gl5mai53ucr7wgws6jrniiko3shxovxbnefvx5h4euhucprii52wl7ad.onion',
  'runbtcnd22qxdwlmhzsrw6zyfmkivuy5nuqbhasaztekildcxc7lseyd.onion',
  'runbtcnd7trpbqkvqa4qwg2s6cnlnyc2ajxk5nxh2znk7fkrphysn4ad.onion',
  'runbtcndu6cirobkbrpfr3lyagmokzuvp2bxep7thzg6pdmn3mir36yd.onion',
  'runbtcndaqt5cbdckelsijl7pmophlqq67gvjbd36mbyepbxy77xdeid.onion',
].join(',')

export function getDefaultPassword(): string {
  return utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 22 })
}
