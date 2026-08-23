import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.6:0',
  releaseNotes: {
    en_US: `This is an important security update that fixes vulnerabilities identified during our recent security audit.
Updating to this version is required to continue trading and using BSQ and the Bisq DAO.

This is a hotfix release based on v1.10.5. The v1.10.5 release contained a bug that lead to failed altcoin trades.`,
    es_ES: `Esta es una actualización de seguridad importante que corrige vulnerabilidades identificadas durante nuestra reciente auditoría de seguridad.
Es necesario actualizar a esta versión para continuar operando y usando BSQ y el DAO de Bisq.

Esta es una versión de corrección urgente basada en v1.10.5. La versión v1.10.5 contenía un error que provocaba el fallo de las operaciones con altcoins.`,
    de_DE: `Dies ist ein wichtiges Sicherheitsupdate, das Schwachstellen behebt, die während unseres jüngsten Sicherheitsaudits identifiziert wurden.
Ein Update auf diese Version ist erforderlich, um den Handel sowie die Nutzung von BSQ und dem Bisq DAO fortzusetzen.

Dies ist ein Hotfix-Release auf Basis von v1.10.5. Die Version v1.10.5 enthielt einen Fehler, der zu fehlgeschlagenen Altcoin-Trades führte.`,
    pl_PL: `To ważna aktualizacja bezpieczeństwa, która naprawia luki zidentyfikowane podczas naszego ostatniego audytu bezpieczeństwa.
Aktualizacja do tej wersji jest wymagana, aby kontynuować handlowanie oraz korzystanie z BSQ i DAO Bisq.

To wydanie poprawkowe (hotfix) oparte na v1.10.5. Wydanie v1.10.5 zawierało błąd, który prowadził do nieudanych transakcji altcoinów.`,
    fr_FR: `Il s'agit d'une importante mise à jour de sécurité qui corrige des vulnérabilités identifiées lors de notre récent audit de sécurité.
La mise à jour vers cette version est requise pour continuer à trader et utiliser le BSQ et la DAO Bisq.

Il s'agit d'une version corrective (hotfix) basée sur v1.10.5. La version v1.10.5 contenait un bug qui provoquait l'échec des trades d'altcoins.`,
  },
  migrations: {},
})
