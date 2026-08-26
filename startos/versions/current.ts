import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.7:0',
  releaseNotes: {
    en_US: `This is a hotfix release based on v1.10.6. The v1.10.5 release contained corrupted dao datastores that lead to failed trades.`,
    es_ES: `Esta es una versión de corrección urgente basada en v1.10.6. La versión v1.10.5 contenía almacenes de datos DAO corruptos que provocaban operaciones fallidas.`,
    de_DE: `Dies ist ein Hotfix-Release auf Basis von v1.10.6. Die Version v1.10.5 enthielt beschädigte DAO-Datenspeicher, die zu fehlgeschlagenen Trades führten.`,
    pl_PL: `To wydanie poprawkowe (hotfix) oparte na v1.10.6. Wydanie v1.10.5 zawierało uszkodzone magazyny danych DAO, które prowadziły do nieudanych transakcji.`,
    fr_FR: `Il s'agit d'une version corrective (hotfix) basée sur v1.10.6. La version v1.10.5 contenait des magasins de données DAO corrompus qui entraînaient l'échec des trades.`,
  },
  migrations: {},
})
