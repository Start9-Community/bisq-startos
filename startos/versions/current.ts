import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.4:1',
  releaseNotes: {
    en_US: `Updated Bisq to 1.10.4, a required security update that strengthens validation of DAO blocks, blind votes, disputes, witness signatures, and network data.

- Replaced KasmVNC with Selkies for the browser desktop
- Uses Bitcoin's dedicated, trusted local connection by default; StartOS prompts you to enable Bloom filters, and an explicit Bisq network fallback mode is available
- Raised the Bisq JVM heap limit to 4 GiB to prevent out-of-memory failures during DAO state serialization
- Requires at least 8 GiB of system memory; smaller hosts cannot install or update to this release

[Full upstream release notes](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    es_ES: `Bisq se actualizó a 1.10.4, una actualización de seguridad obligatoria que refuerza la validación de bloques DAO, votos ciegos, disputas, firmas de testigos y datos de red.

- Se reemplazó KasmVNC por Selkies para el escritorio en el navegador
- Usa de forma predeterminada la conexión local dedicada y de confianza de Bitcoin; StartOS solicita habilitar los filtros Bloom y ofrece un modo alternativo explícito mediante la red Bisq
- Se aumentó el límite del montículo JVM de Bisq a 4 GiB para evitar fallos por falta de memoria durante la serialización del estado de la DAO
- Requiere al menos 8 GiB de memoria del sistema; los servidores con menos memoria no pueden instalar ni actualizar a esta versión

[Notas completas de la versión](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    de_DE: `Bisq wurde auf 1.10.4 aktualisiert. Dieses erforderliche Sicherheitsupdate verbessert die Validierung von DAO-Blöcken, Blind Votes, Streitfällen, Witness-Signaturen und Netzwerkdaten.

- KasmVNC wurde für den Browser-Desktop durch Selkies ersetzt
- Verwendet standardmäßig die dedizierte, vertrauenswürdige lokale Bitcoin-Verbindung; StartOS fordert zur Aktivierung von Bloom-Filtern auf, und ein ausdrücklicher Bisq-Netzwerk-Ausweichmodus ist verfügbar
- Das JVM-Heap-Limit von Bisq wurde auf 4 GiB erhöht, um Speicherfehler bei der Serialisierung des DAO-Zustands zu verhindern
- Benötigt mindestens 8 GiB Systemspeicher; Hosts mit weniger Speicher können diese Version weder installieren noch darauf aktualisieren

[Vollständige Versionshinweise](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    pl_PL: `Zaktualizowano Bisq do wersji 1.10.4. Ta wymagana aktualizacja zabezpieczeń wzmacnia walidację bloków DAO, głosów ukrytych, sporów, podpisów świadków i danych sieciowych.

- KasmVNC zastąpiono Selkies jako pulpitem w przeglądarce
- Domyślnie korzysta z dedykowanego, zaufanego lokalnego połączenia Bitcoin; StartOS prosi o włączenie filtrów Blooma, a także udostępnia jawny tryb awaryjny sieci Bisq
- Zwiększono limit sterty JVM Bisq do 4 GiB, aby zapobiec błędom braku pamięci podczas serializacji stanu DAO
- Wymaga co najmniej 8 GiB pamięci systemowej; hosty z mniejszą ilością pamięci nie mogą zainstalować tej wersji ani się do niej zaktualizować

[Pełne informacje o wydaniu](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    fr_FR: `Bisq a été mis à jour vers la version 1.10.4. Cette mise à jour de sécurité obligatoire renforce la validation des blocs DAO, des votes aveugles, des litiges, des signatures de témoins et des données réseau.

- KasmVNC a été remplacé par Selkies pour le bureau dans le navigateur
- Utilise par défaut la connexion Bitcoin locale, dédiée et de confiance ; StartOS vous demande d’activer les filtres de Bloom et propose un mode de repli explicite sur le réseau Bisq
- La limite du tas JVM de Bisq a été portée à 4 Gio afin d’éviter les erreurs de mémoire lors de la sérialisation de l’état de la DAO
- Nécessite au moins 8 Gio de mémoire système ; les hôtes disposant de moins de mémoire ne peuvent pas installer cette version ni effectuer la mise à jour

[Notes de version complètes](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
  },
  migrations: {},
})
