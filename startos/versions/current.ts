import { VersionInfo } from '@start9labs/start-sdk'
import { execFile } from 'child_process'

export const current = VersionInfo.of({
  version: '1.10.9:1',
  releaseNotes: {
    en_US:
      'A Bisq carried over from StartOS 0.3.5.1 opens with its original wallet, trades and accounts. If it had already started over with a new wallet, that wallet is kept on the server rather than deleted.',
    es_ES:
      'Un Bisq traído desde StartOS 0.3.5.1 se abre con su monedero, sus operaciones y sus cuentas originales. Si ya había empezado de cero con un monedero nuevo, ese monedero se conserva en el servidor en lugar de eliminarse.',
    de_DE:
      'Ein von StartOS 0.3.5.1 übernommenes Bisq startet mit seiner ursprünglichen Wallet, seinen Trades und seinen Konten. Hat es bereits mit einer neuen Wallet von vorn begonnen, bleibt diese auf dem Server erhalten, statt gelöscht zu werden.',
    pl_PL:
      'Bisq przeniesiony ze StartOS 0.3.5.1 otwiera się z pierwotnym portfelem, transakcjami i kontami. Jeśli zaczął już od nowa z nowym portfelem, ten portfel pozostaje na serwerze zamiast zostać usunięty.',
    fr_FR:
      'Un Bisq repris de StartOS 0.3.5.1 s’ouvre avec son portefeuille, ses échanges et ses comptes d’origine. S’il avait déjà recommencé avec un nouveau portefeuille, celui-ci est conservé sur le serveur au lieu d’être supprimé.',
  },
  migrations: {
    up: () =>
      new Promise<void>((resolve, reject) =>
        execFile(
          'sh',
          [
            '-c',
            `set -e
            legacy=/media/startos/volumes/bisq
            share=/media/startos/volumes/main/.local/share
            copy=$share/.bisq-0.3.5.1
            [ -d "$copy" ] || [ -n "$(ls -A "$legacy")" ] || exit 0
            mkdir -p "$share"
            chown 1000:1000 "$share/.." "$share"
            if [ ! -d "$copy" ]; then
              rm -rf "$copy.partial"
              cp -a "$legacy/." "$copy.partial"
              chown -hR 1000:1000 "$copy.partial"
              mv "$copy.partial" "$copy"
            fi
            find "$legacy" -mindepth 1 -delete
            [ ! -e "$share/Bisq" ] || mv "$share/Bisq" "$share/Bisq-superseded-$(date -u +%Y%m%dT%H%M%SZ)"
            mv "$copy" "$share/Bisq"`,
          ],
          (err) => (err ? reject(err) : resolve()),
        ),
      ),
  },
})
