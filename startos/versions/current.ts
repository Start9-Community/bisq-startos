import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.8:0',
  releaseNotes: {
    en_US: `Important security update required to continue trading. It hardens refund validation and authorization, blocks replay and cross-chain payout attacks, improves DAO and BSQ swap checks, and updates Tor. It also fixes altcoin precision, deposit and withdrawal handling, shutdown reliability, and reproducible builds.`,
    es_ES: `Actualización de seguridad importante y necesaria para seguir operando. Refuerza la validación y autorización de reembolsos, bloquea ataques de repetición y pagos entre cadenas, mejora las comprobaciones de DAO y swaps de BSQ, y actualiza Tor. También corrige la precisión de altcoins, la gestión de depósitos y retiros, la fiabilidad del apagado y las compilaciones reproducibles.`,
    de_DE: `Wichtiges Sicherheitsupdate, das für den weiteren Handel erforderlich ist. Es stärkt die Validierung und Autorisierung von Rückerstattungen, blockiert Replay- und chainübergreifende Auszahlungsangriffe, verbessert DAO- und BSQ-Swap-Prüfungen und aktualisiert Tor. Außerdem werden Altcoin-Präzision, Ein- und Auszahlungen, die Zuverlässigkeit beim Herunterfahren und reproduzierbare Builds verbessert.`,
    pl_PL: `Ważna aktualizacja zabezpieczeń wymagana do dalszego handlu. Wzmacnia walidację i autoryzację zwrotów, blokuje ataki polegające na powtórzeniu oraz wypłaty między łańcuchami, usprawnia kontrole DAO i swapów BSQ, a także aktualizuje Tor. Poprawia również precyzję altcoinów, obsługę wpłat i wypłat, niezawodność zamykania oraz powtarzalne kompilacje.`,
    fr_FR: `Mise à jour de sécurité importante, requise pour continuer à trader. Elle renforce la validation et l'autorisation des remboursements, bloque les attaques par rejeu et les paiements inter-chaînes, améliore les contrôles DAO et les swaps BSQ, et met Tor à jour. Elle corrige aussi la précision des altcoins, la gestion des dépôts et retraits, la fiabilité de l'arrêt et les builds reproductibles.`,
  },
  migrations: {},
})
