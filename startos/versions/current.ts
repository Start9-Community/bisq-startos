import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.10:0',
  releaseNotes: {
    en_US: `Updates Bisq to 1.10.10 with Tor 0.4.9.14 security fixes, renewed release signing keys, updated DAO data and checkpoints, and a new Burning Man address list.`,
    es_ES: `Actualiza Bisq a 1.10.10 con correcciones de seguridad de Tor 0.4.9.14, claves de firma de versiones renovadas, datos y puntos de control de DAO actualizados y una nueva lista de direcciones de Burning Man.`,
    de_DE: `Aktualisiert Bisq auf 1.10.10 mit Sicherheitskorrekturen in Tor 0.4.9.14, erneuerten Release-Signaturschlüsseln, aktualisierten DAO-Daten und Prüfpunkten sowie einer neuen Burning-Man-Adressliste.`,
    pl_PL: `Aktualizuje Bisq do wersji 1.10.10 z poprawkami bezpieczeństwa Tora 0.4.9.14, odnowionymi kluczami podpisywania wydań, zaktualizowanymi danymi i punktami kontrolnymi DAO oraz nową listą adresów Burning Man.`,
    fr_FR: `Met à jour Bisq vers la version 1.10.10 avec les correctifs de sécurité de Tor 0.4.9.14, des clés de signature des versions renouvelées, des données et points de contrôle DAO actualisés et une nouvelle liste d’adresses Burning Man.`,
  },
  migrations: {},
})
