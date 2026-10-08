import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bisq',
  title: 'Bisq',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/Start9-Community/bisq-startos',
  upstreamRepo: 'https://github.com/bisq-network/bisq',
  marketingUrl: 'https://bisq.network/',
  donationUrl: 'https://bisq.network/contribute/',
  description: { short, long },
  volumes: ['main', 'bisq'], // bisq: where 0.3.5.1 kept Bisq's data directory
  images: {
    main: {
      source: { dockerBuild: {} },
      arch: ['x86_64'],
      emulateMissing: false,
    },
  },
  hardwareRequirements: {
    // Means "an 8 GB machine or better". StartOS compares this against MemTotal,
    // which is a few hundred MiB under the advertised capacity, so a literal
    // 8 GiB rejects every 8 GB machine. 6 GiB sits between the 4 and 8 GB tiers.
    ram: 6 * 1024 ** 3,
  },
})
