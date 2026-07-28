import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.4:0',
  releaseNotes: {
    en_US: `Updated Bisq to 1.10.4, a required security update that strengthens validation of DAO blocks, blind votes, disputes, witness signatures, and network data. Replaced KasmVNC with Selkies for the browser desktop. Bisq now uses Bitcoin Core's dedicated, trusted local peer connection.

[Full upstream release notes](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    es_ES: `Bisq se actualizó a 1.10.4, una actualización de seguridad obligatoria que refuerza la validación de bloques DAO, votos ciegos, disputas, firmas de testigos y datos de red. Se reemplazó KasmVNC por Selkies para el escritorio en el navegador. Bisq ahora usa la conexión local dedicada y de confianza de Bitcoin Core.

[Notas completas de la versión](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    de_DE: `Bisq wurde auf 1.10.4 aktualisiert. Dieses erforderliche Sicherheitsupdate verbessert die Validierung von DAO-Blöcken, Blind Votes, Streitfällen, Witness-Signaturen und Netzwerkdaten. KasmVNC wurde für den Browser-Desktop durch Selkies ersetzt. Bisq verwendet jetzt die dedizierte, vertrauenswürdige lokale Peer-Verbindung von Bitcoin Core.

[Vollständige Versionshinweise](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    pl_PL: `Zaktualizowano Bisq do wersji 1.10.4. Ta wymagana aktualizacja zabezpieczeń wzmacnia walidację bloków DAO, głosów ukrytych, sporów, podpisów świadków i danych sieciowych. KasmVNC zastąpiono Selkies jako pulpitem w przeglądarce. Bisq korzysta teraz z dedykowanego, zaufanego lokalnego połączenia równorzędnego Bitcoin Core.

[Pełne informacje o wydaniu](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    fr_FR: `Bisq a été mis à jour vers la version 1.10.4. Cette mise à jour de sécurité obligatoire renforce la validation des blocs DAO, des votes aveugles, des litiges, des signatures de témoins et des données réseau. KasmVNC a été remplacé par Selkies pour le bureau dans le navigateur. Bisq utilise désormais la connexion pair locale, dédiée et de confiance de Bitcoin Core.

[Notes de version complètes](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
  },
  migrations: {},
})
