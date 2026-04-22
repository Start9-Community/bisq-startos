import { IMPOSSIBLE, VersionInfo, YAML } from '@start9labs/start-sdk'
import { readFile, rm } from 'fs/promises'
import { storeJson } from '../fileModels/store.json'
import { getDefaultPassword } from '../utils'

export const v_1_9_22_2 = VersionInfo.of({
  version: '1.9.22:2',
  releaseNotes: {
    en_US: 'Internal updates (start-sdk 1.2.0)',
    es_ES: 'Actualizaciones internas (start-sdk 1.2.0)',
    de_DE: 'Interne Aktualisierungen (start-sdk 1.2.0)',
    pl_PL: 'Aktualizacje wewnętrzne (start-sdk 1.2.0)',
    fr_FR: 'Mises à jour internes (start-sdk 1.2.0)',
  },
  migrations: {
    up: async ({ effects }) => {
      // Migrate from old 0.3.x format — read old config if present
      const configYaml: { password?: string } | undefined = await readFile(
        '/media/startos/volumes/main/start9/config.yaml',
        'utf-8',
      ).then(YAML.parse, () => undefined)

      if (configYaml) {
        // Preserve old password if it existed, otherwise generate new
        await storeJson.merge(effects, {
          PASSWORD: configYaml.password || getDefaultPassword(),
        })
        // Remove old start9 config directory
        await rm('/media/startos/volumes/main/start9', {
          recursive: true,
        }).catch(console.error)
      }
    },
    down: IMPOSSIBLE,
  },
})
