import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.4:2',
  releaseNotes: {
    en_US: `Restores installs and updates on 8 GB machines.

The 8 GB memory requirement was written as a literal 8 GiB, but StartOS measures the memory the operating system can see, which is always a few hundred MiB below the capacity a machine is sold with. An 8 GB machine therefore failed its own minimum and Bisq stopped appearing in the marketplace. The requirement now sits between the 4 and 8 GB sizes, so 8 GB machines qualify as intended and 4 GB ones still do not.`,
    es_ES: `Restaura la instalación y las actualizaciones en máquinas de 8 GB.

El requisito de 8 GB de memoria estaba escrito como 8 GiB exactos, pero StartOS mide la memoria que el sistema operativo puede ver, que siempre queda unos cientos de MiB por debajo de la capacidad con la que se vende una máquina. Así que una máquina de 8 GB no cumplía su propio mínimo y Bisq dejaba de aparecer en el mercado. El requisito se sitúa ahora entre los tamaños de 4 y 8 GB, de modo que las máquinas de 8 GB califican como estaba previsto y las de 4 GB siguen sin hacerlo.`,
    de_DE: `Stellt Installation und Updates auf 8-GB-Geräten wieder her.

Die Speicheranforderung von 8 GB war als exakte 8 GiB hinterlegt, doch StartOS misst den Speicher, den das Betriebssystem sehen kann – und der liegt stets einige hundert MiB unter der verkauften Kapazität. Ein 8-GB-Gerät verfehlte damit sein eigenes Minimum, und Bisq erschien nicht mehr im Marktplatz. Die Anforderung liegt jetzt zwischen den Größen 4 und 8 GB, sodass 8-GB-Geräte wie vorgesehen erfüllt sind und 4-GB-Geräte weiterhin nicht.`,
    pl_PL: `Przywraca instalację i aktualizacje na maszynach z 8 GB.

Wymaganie 8 GB pamięci zapisano jako dokładne 8 GiB, ale StartOS mierzy pamięć widzianą przez system operacyjny, która zawsze jest o kilkaset MiB mniejsza niż pojemność, z jaką sprzedawana jest maszyna. Maszyna z 8 GB nie spełniała więc własnego minimum, a Bisq przestawał pojawiać się w sklepie. Wymaganie mieści się teraz między rozmiarami 4 i 8 GB, więc maszyny z 8 GB spełniają je zgodnie z zamysłem, a te z 4 GB nadal nie.`,
    fr_FR: `Rétablit l'installation et les mises à jour sur les machines de 8 Go.

L'exigence de 8 Go de mémoire était écrite comme 8 Gio exacts, alors que StartOS mesure la mémoire visible par le système d'exploitation, toujours inférieure de quelques centaines de Mio à la capacité annoncée d'une machine. Une machine de 8 Go échouait donc à son propre minimum et Bisq cessait d'apparaître dans la marketplace. L'exigence se situe désormais entre les tailles de 4 et 8 Go : les machines de 8 Go sont éligibles comme prévu, celles de 4 Go ne le sont toujours pas.`,
  },
  migrations: {},
})
