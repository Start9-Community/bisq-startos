import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.11:1',
  releaseNotes: {
    en_US: `Back up Bisq from StartOS before updating; this update cannot be downgraded.

New Configure Tor Sandbox action: turn off Tor isolation if it stops Tor from starting or your bridges from working.`,
    es_ES: `Haz una copia de seguridad de Bisq desde StartOS antes de actualizar; esta actualización no permite volver a una versión anterior.

Nueva acción Configurar aislamiento de Tor: desactiva el aislamiento si impide iniciar Tor o usar tus puentes.`,
    de_DE: `Vor dem Update Bisq über StartOS sichern; nach diesem Update ist keine Rückkehr zu einer älteren Version möglich.

Neue Aktion Tor-Sandbox konfigurieren: Deaktivieren Sie die Isolation, wenn sie den Start von Tor oder die Nutzung Ihrer Bridges verhindert.`,
    pl_PL: `Przed aktualizacją wykonaj kopię zapasową Bisq w StartOS; po tej aktualizacji powrót do starszej wersji jest niemożliwy.

Nowa akcja Skonfiguruj izolację Tora: wyłącz izolację, jeśli uniemożliwia uruchomienie Tora lub działanie mostów.`,
    fr_FR: `Sauvegardez Bisq depuis StartOS avant la mise à jour ; après cette mise à jour, le retour à une version antérieure est impossible.

Nouvelle action Configurer l’isolation de Tor : désactivez l’isolation si elle empêche Tor de démarrer ou vos ponts de fonctionner.`,
  },
  migrations: { down: IMPOSSIBLE },
})
