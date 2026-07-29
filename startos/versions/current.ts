import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.4:0',
  releaseNotes: {
    en_US: `Updated Bisq to 1.10.4, a required security update that strengthens validation of DAO blocks, blind votes, disputes, witness signatures, and network data. Replaced KasmVNC with Selkies for the browser desktop. Bisq uses Bitcoin's dedicated, trusted local peer connection by default and offers an explicit Bisq network fallback mode.

[Full upstream release notes](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    es_ES: `Bisq se actualizó a 1.10.4, una actualización de seguridad obligatoria que refuerza la validación de bloques DAO, votos ciegos, disputas, firmas de testigos y datos de red. Se reemplazó KasmVNC por Selkies para el escritorio en el navegador. Bisq usa de forma predeterminada la conexión local dedicada y de confianza de Bitcoin y ofrece un modo alternativo explícito mediante la red Bisq.

[Notas completas de la versión](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    de_DE: `Bisq wurde auf 1.10.4 aktualisiert. Dieses erforderliche Sicherheitsupdate verbessert die Validierung von DAO-Blöcken, Blind Votes, Streitfällen, Witness-Signaturen und Netzwerkdaten. KasmVNC wurde für den Browser-Desktop durch Selkies ersetzt. Bisq verwendet standardmäßig die dedizierte, vertrauenswürdige lokale Peer-Verbindung von Bitcoin und bietet einen ausdrücklichen Bisq-Netzwerk-Ausweichmodus.

[Vollständige Versionshinweise](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    pl_PL: `Zaktualizowano Bisq do wersji 1.10.4. Ta wymagana aktualizacja zabezpieczeń wzmacnia walidację bloków DAO, głosów ukrytych, sporów, podpisów świadków i danych sieciowych. KasmVNC zastąpiono Selkies jako pulpitem w przeglądarce. Bisq domyślnie korzysta z dedykowanego, zaufanego lokalnego połączenia Bitcoin i udostępnia jawny tryb awaryjny sieci Bisq.

[Pełne informacje o wydaniu](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
    fr_FR: `Bisq a été mis à jour vers la version 1.10.4. Cette mise à jour de sécurité obligatoire renforce la validation des blocs DAO, des votes aveugles, des litiges, des signatures de témoins et des données réseau. KasmVNC a été remplacé par Selkies pour le bureau dans le navigateur. Bisq utilise par défaut la connexion pair locale, dédiée et de confiance de Bitcoin et propose un mode de repli explicite sur le réseau Bisq.

[Notes de version complètes](https://github.com/bisq-network/bisq/releases/tag/v1.10.4)`,
  },
  migrations: {},
})
