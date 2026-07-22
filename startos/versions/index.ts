import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_1_10_3_1 } from './v1.10.3_1'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_1_10_3_1],
})
