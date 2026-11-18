import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.11:2',
  releaseNotes: {
    en_US: `Requires StartOS 0.4.2 or later. Mitigate CVE-2026-114938 (Java4Shell) by disabling the JVM Base64 intrinsic; preserve the existing heap limit and wallet configuration.

Back up Bisq from StartOS before updating; this update cannot be downgraded.

New Configure Tor Sandbox action: turn off Tor isolation if it stops Tor from starting or your bridges from working.

Permission to use bridge transports in the Tor sandbox survives service restarts.`,
    es_ES: `Requiere StartOS 0.4.2 o posterior. Mitiga CVE-2026-114938 (Java4Shell) desactivando el intrínseco Base64 de la JVM; conserva el límite de memoria y la configuración de la cartera.

Haz una copia de seguridad de Bisq desde StartOS antes de actualizar; esta actualización no permite volver a una versión anterior.

Nueva acción Configurar aislamiento de Tor: desactiva el aislamiento si impide iniciar Tor o usar tus puentes.

El permiso para usar transportes de puentes en el aislamiento de Tor se conserva al reiniciar el servicio.`,
    de_DE: `Erfordert StartOS 0.4.2 oder neuer. CVE-2026-114938 (Java4Shell) durch Deaktivieren des Base64-Intrinsics der JVM abmildern; Heap-Limit und Wallet-Konfiguration bleiben erhalten.

Vor dem Update Bisq über StartOS sichern; nach diesem Update ist keine Rückkehr zu einer älteren Version möglich.

Neue Aktion Tor-Sandbox konfigurieren: Deaktivieren Sie die Isolation, wenn sie den Start von Tor oder die Nutzung Ihrer Bridges verhindert.

Die Erlaubnis, Bridge-Transporte in der Tor-Sandbox zu verwenden, bleibt nach einem Dienstneustart erhalten.`,
    pl_PL: `Wymaga StartOS 0.4.2 lub nowszego. Ograniczenie CVE-2026-114938 (Java4Shell) przez wyłączenie intrinsics Base64 JVM; limit pamięci i konfiguracja portfela pozostają bez zmian.

Przed aktualizacją wykonaj kopię zapasową Bisq w StartOS; po tej aktualizacji powrót do starszej wersji jest niemożliwy.

Nowa akcja Skonfiguruj izolację Tora: wyłącz izolację, jeśli uniemożliwia uruchomienie Tora lub działanie mostów.

Zgoda na używanie transportów mostów w izolacji Tora pozostaje zachowana po ponownym uruchomieniu usługi.`,
    fr_FR: `Nécessite StartOS 0.4.2 ou une version ultérieure. Atténue CVE-2026-114938 (Java4Shell) en désactivant l’intrinsèque Base64 de la JVM ; la limite mémoire et la configuration du portefeuille sont conservées.

Sauvegardez Bisq depuis StartOS avant la mise à jour ; après cette mise à jour, le retour à une version antérieure est impossible.

Nouvelle action Configurer l’isolation de Tor : désactivez l’isolation si elle empêche Tor de démarrer ou vos ponts de fonctionner.

L’autorisation d’utiliser les transports des ponts dans l’isolation de Tor est conservée après le redémarrage du service.`,
  },
  migrations: { down: IMPOSSIBLE },
})
