import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.11:0',
  releaseNotes: {
    en_US: `Back up Bisq from StartOS before updating; this update cannot be downgraded.

Updates Bisq to 1.10.11, required to continue trading, with sandboxed Tor 0.4.9.15, Java security updates, and stronger protection for backups and private keys.

- New Configure Tor Sandbox action: turn off Tor isolation if it stops Tor from starting or your bridges from working.
- For bridges with pluggable transports, enable "Allow pluggable transports in the Tor sandbox" in Bisq’s Tor network settings.
- The provided bridge list no longer includes obfs3, meek-amazon, or meek-azure; use a supported bridge instead.

Full release notes: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    es_ES: `Haz una copia de seguridad de Bisq desde StartOS antes de actualizar; esta actualización no permite volver a una versión anterior.

Actualiza Bisq a 1.10.11, necesario para seguir operando, con Tor 0.4.9.15 aislado, actualizaciones de seguridad de Java y mayor protección de copias de seguridad y claves privadas.

- Nueva acción Configurar aislamiento de Tor: desactiva el aislamiento si impide iniciar Tor o usar tus puentes.
- Para puentes con transportes conectables, activa "Allow pluggable transports in the Tor sandbox" en los ajustes de red Tor de Bisq.
- La lista de puentes proporcionados ya no incluye obfs3, meek-amazon ni meek-azure; usa un puente compatible.

Notas completas: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    de_DE: `Vor dem Update Bisq über StartOS sichern; nach diesem Update ist keine Rückkehr zu einer älteren Version möglich.

Aktualisiert Bisq auf 1.10.11, erforderlich für den weiteren Handel, mit Tor 0.4.9.15 in einer Sandbox, Java-Sicherheitsupdates und stärkerem Schutz für Sicherungen und private Schlüssel.

- Neue Aktion Tor-Sandbox konfigurieren: Deaktivieren Sie die Isolation, wenn sie den Start von Tor oder die Nutzung Ihrer Bridges verhindert.
- Bei Bridges mit verschleiernden Transporten "Allow pluggable transports in the Tor sandbox" in Bisqs Tor-Netzwerkeinstellungen aktivieren.
- Die bereitgestellte Bridge-Liste enthält obfs3, meek-amazon und meek-azure nicht mehr; verwenden Sie eine unterstützte Bridge.

Vollständige Versionshinweise: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    pl_PL: `Przed aktualizacją wykonaj kopię zapasową Bisq w StartOS; po tej aktualizacji powrót do starszej wersji jest niemożliwy.

Aktualizuje Bisq do wersji 1.10.11, wymaganej do dalszego handlu, z izolowanym Torem 0.4.9.15, aktualizacjami zabezpieczeń Javy oraz lepszą ochroną kopii zapasowych i kluczy prywatnych.

- Nowa akcja Skonfiguruj izolację Tora: wyłącz izolację, jeśli uniemożliwia uruchomienie Tora lub działanie mostów.
- W przypadku mostów z transportami wtykowymi włącz "Allow pluggable transports in the Tor sandbox" w ustawieniach sieci Tor w Bisq.
- Dostarczana lista mostów nie zawiera już obfs3, meek-amazon ani meek-azure; użyj obsługiwanego mostu.

Pełne informacje: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    fr_FR: `Sauvegardez Bisq depuis StartOS avant la mise à jour ; après cette mise à jour, le retour à une version antérieure est impossible.

Met à jour Bisq vers la version 1.10.11, requise pour continuer à trader, avec Tor 0.4.9.15 isolé, des mises à jour de sécurité Java et une meilleure protection des sauvegardes et des clés privées.

- Nouvelle action Configurer l’isolation de Tor : désactivez l’isolation si elle empêche Tor de démarrer ou vos ponts de fonctionner.
- Pour les ponts utilisant des transports enfichables, activez "Allow pluggable transports in the Tor sandbox" dans les paramètres réseau Tor de Bisq.
- La liste de ponts fournie ne contient plus obfs3, meek-amazon ni meek-azure ; utilisez un pont pris en charge.

Notes complètes : https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
  },
  migrations: { down: IMPOSSIBLE },
})
