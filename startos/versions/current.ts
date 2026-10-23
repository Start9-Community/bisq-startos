import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.9:5',
  releaseNotes: {
    en_US: `Updates the browser desktop to Selkies 2.1.0 with security fixes, improved reconnection, and streaming that adapts to your connection. New sessions default to constant bitrate (CBR); constant quality (CRF) remains available. Open Bisq Desktop directly: embedding it in another site's page is blocked. Bisq remains at 1.10.9.`,
    es_ES: `Actualiza el escritorio del navegador a Selkies 2.1.0 con correcciones de seguridad, mejor reconexión y transmisión que se adapta a tu conexión. Las sesiones nuevas usan una tasa de bits constante (CBR); la calidad constante (CRF) sigue disponible. Abre Bisq Desktop directamente: se bloquea su integración en páginas de otros sitios. Bisq sigue en 1.10.9.`,
    de_DE: `Aktualisiert den Browser-Desktop auf Selkies 2.1.0 mit Sicherheitskorrekturen, verbesserter Wiederverbindung und an die Verbindung angepasstem Streaming. Neue Sitzungen nutzen eine konstante Bitrate (CBR); konstante Qualität (CRF) bleibt verfügbar. Bisq Desktop direkt öffnen: Das Einbetten in Seiten anderer Websites wird blockiert. Bisq bleibt auf 1.10.9.`,
    pl_PL: `Aktualizuje pulpit w przeglądarce do Selkies 2.1.0 z poprawkami bezpieczeństwa, lepszym ponownym łączeniem i transmisją dostosowaną do połączenia. Nowe sesje używają stałej przepływności (CBR); stała jakość (CRF) pozostaje dostępna. Otwieraj Bisq Desktop bezpośrednio: osadzanie na stronach innych witryn jest blokowane. Bisq pozostaje w wersji 1.10.9.`,
    fr_FR: `Met à jour le bureau dans le navigateur vers Selkies 2.1.0 avec des correctifs de sécurité, une meilleure reconnexion et une diffusion adaptée à votre connexion. Les nouvelles sessions utilisent un débit constant (CBR) ; la qualité constante (CRF) reste disponible. Ouvrez Bisq Desktop directement : son intégration dans une page d’un autre site est bloquée. Bisq reste en version 1.10.9.`,
  },
  migrations: {},
})
