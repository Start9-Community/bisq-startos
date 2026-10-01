import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.9:0',
  releaseNotes: {
    en_US: `Security update required to continue trading. Includes the latest Tor release, fixes audited vulnerabilities, validates BSQ swaps and payment flows, and improves reliability.`,
    es_ES: `Actualización de seguridad necesaria para seguir operando. Incluye la última versión de Tor, corrige vulnerabilidades auditadas, valida swaps de BSQ y flujos de pago, y mejora la fiabilidad.`,
    de_DE: `Sicherheitsupdate, das für den weiteren Handel erforderlich ist. Enthält die neueste Tor-Version, behebt geprüfte Schwachstellen, validiert BSQ-Swaps und Zahlungsabläufe und verbessert die Zuverlässigkeit.`,
    pl_PL: `Aktualizacja zabezpieczeń wymagana do dalszego handlu. Zawiera najnowszą wersję Tora, naprawia podatności z audytu, weryfikuje swapy BSQ oraz przepływy płatności i poprawia niezawodność.`,
    fr_FR: `Mise à jour de sécurité requise pour continuer à trader. Inclut la dernière version de Tor, corrige les vulnérabilités auditées, valide les swaps BSQ et les flux de paiement, et améliore la fiabilité.`,
  },
  migrations: {},
})
