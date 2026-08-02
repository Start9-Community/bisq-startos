import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.4:1',
  releaseNotes: {
    en_US:
      'Increases the Bisq JVM heap limit to 4 GiB to prevent out-of-memory failures while serializing and monitoring DAO state. Bisq now requires at least 8 GiB of system memory.',
    es_ES:
      'Aumenta el límite de memoria del montículo JVM de Bisq a 4 GiB para evitar fallos por falta de memoria al serializar y supervisar el estado de la DAO. Bisq ahora requiere al menos 8 GiB de memoria del sistema.',
    de_DE:
      'Erhöht das JVM-Heap-Limit von Bisq auf 4 GiB, um Speicherfehler bei der Serialisierung und Überwachung des DAO-Zustands zu verhindern. Bisq benötigt jetzt mindestens 8 GiB Systemspeicher.',
    pl_PL:
      'Zwiększa limit sterty JVM Bisq do 4 GiB, aby zapobiec błędom braku pamięci podczas serializacji i monitorowania stanu DAO. Bisq wymaga teraz co najmniej 8 GiB pamięci systemowej.',
    fr_FR:
      'Augmente la limite du tas JVM de Bisq à 4 Gio afin d’éviter les erreurs de mémoire lors de la sérialisation et de la surveillance de l’état de la DAO. Bisq nécessite désormais au moins 8 Gio de mémoire système.',
  },
  migrations: {},
})
