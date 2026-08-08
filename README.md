<p align="center">
  <img src="icon.png" alt="Bisq Logo" width="21%">
</p>

# Bisq on StartOS

> **Upstream docs:** <https://bisq.wiki/>
>
> Everything not listed in this document should behave the same as upstream
> Bisq. If a feature, setting, or behavior is not mentioned here, the upstream
> documentation is accurate and fully applicable.

[Bisq](https://bisq.network/) is a decentralized peer-to-peer Bitcoin exchange. Trade Bitcoin for fiat currencies and other cryptocurrencies without intermediaries, KYC, or centralized servers.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)

---

## Image and Container Runtime

| Property      | Value                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Image source  | Custom multi-stage Dockerfile (Ubuntu Jammy builder + pinned LinuxServer Selkies Debian Trixie webtop, flattened via `FROM scratch`) |
| Architectures | x86_64 only                                                                                                                          |
| Entrypoint    | Upstream `/init` launched via SDK `useEntrypoint()` and `runAsInit: true` so the container gets PID 1 for s6-overlay                 |
| Memory        | 8 GiB minimum system RAM; Bisq JVM heap capped at 4 GiB                                                                               |

Bisq is a JavaFX desktop application with no web interface. This package runs it inside a browser-accessible Linux desktop (webtop) streamed by Selkies:

```
Browser -> Selkies (port 3000) -> Openbox -> Bisq (JavaFX)
```

Selkies starts Openbox through its upstream D-Bus session wrapper. The
package-owned `/defaults/autostart` hook launches Bisq inside that session and
is copied over the persisted Openbox autostart file on every launch so upgrades
cannot retain an obsolete KasmVNC/Selkies startup file.

## Volume and Data Layout

| Volume | Mount point | Contents                                         |
| ------ | ----------- | ------------------------------------------------ |
| `main` | `/config`   | Webtop home, Bisq application data, `store.json` |

- **`store.json`** — StartOS-managed file storing the desktop password and Bitcoin connection mode (username is hardcoded to `bisq`)
- **`/config/.local/share/Bisq/`** — upstream Bisq data directory (wallet, trades, settings)
- **`/config/.local/share/Bisq/bisq.properties`** — generated at launch by the Selkies autostart hook

## Installation and First-Run Flow

1. On install, `store.json` is seeded empty (no password set) and the username `bisq` is hardcoded in the service.
2. A **critical task** prompts the user to run the **Set Admin Password** action, which generates a random password and displays the credentials.
3. The credentials are passed to Selkies via the `CUSTOM_USER` and `PASSWORD` environment variables.

Bisq launches directly into the desktop. Any upstream wallet/setup prompts run
inside the Bisq UI after the desktop opens.

## Configuration Management

| StartOS-Managed                      | Upstream-Managed                             |
| ------------------------------------ | -------------------------------------------- |
| Admin username and password            | All other Bisq application settings via its own UI |
| Bitcoin connection mode                | Wallet, trades, offers                            |
| Selkies webtop settings (port, auth)   |                                                   |
| `bisq.properties` (Tor/Bitcoin peers)  |                                                   |

The `bisq.properties` file is regenerated on every launch. The selected mode is:

- **Local node only (default):** `useTorForBtc=false` and
  `btcNodes=<bridge address>` target Bitcoin's private, whitelisted
  `peer-local` listener. A startup oneshot waits up to one minute for that
  listener and fails startup if it remains unreachable.
- **Bisq network fallback:** `useTorForBtc=true` and `btcNodes=<Bisq-provided
  peers>` use the remote peer set bundled with the packaged Bisq release over
  Tor. In this mode Bitcoin is not a required StartOS dependency.

`startos/main.ts` resolves the live bridge address from Bitcoin's `peer-local`
binding only in local-only mode. The address and connection-mode setting are
watched reactively: Bisq restarts when either changes, but not when Bitcoin
receives a routine update.

Selkies keeps upload and download enabled so users can move Bisq wallet/history
exports between machines. Passwordless sudo, terminal binaries, the remote
command channel, external open helpers, and the unrelated Applications sidebar
are disabled.

## Network Access and Interfaces

| Interface    | Port | Protocol | Purpose                                              |
| ------------ | ---- | -------- | ---------------------------------------------------- |
| Bisq Desktop | 3000 | HTTP     | Selkies web interface (full Bisq desktop in browser) |

Access via LAN (.local), Tor (.onion), or any other address type configured in StartOS. StartOS terminates TLS, so the interface is always available over HTTPS to the user.

## Actions (StartOS UI)

| Action                           | Purpose                                                         | Availability | Inputs                  | Outputs                   |
| -------------------------------- | --------------------------------------------------------------- | ------------ | ----------------------- | ------------------------- |
| **Set Admin Password**           | Generate a new random password for the Selkies interface        | Any status   | None                    | Username and new password |
| **Configure Bitcoin Connection** | Select local-only mode or the remote Bisq network fallback mode | Any status   | Bitcoin connection mode | None                      |

On first install, **Set Admin Password** is triggered automatically as a
critical task.

## Backups and Restore

- **Backed up:** The entire `main` volume (webtop config, Bisq data, wallet, trades, `store.json`)
- **Restore behavior:** Standard volume restore. On restore, `seedFiles` re-runs but does not create a password task (only on fresh install).

## Health Checks

| Check        | Method              | Success message         | Error message               |
| ------------ | ------------------- | ----------------------- | --------------------------- |
| Bisq Desktop | Port 3000 listening | "Bisq desktop is ready" | "Bisq desktop is not ready" |

## Dependencies

| Dependency           | Required                       | Health check | Purpose                                              |
| -------------------- | ------------------------------ | ------------ | ---------------------------------------------------- |
| Bitcoin (`bitcoind`) | In local-only mode (default)   | `bitcoind`   | Private, trusted peer connection for blockchain data |

When local-only mode is selected, a recurring critical dependency task requires
Bitcoin's `peerbloomfilters` setting to remain enabled. Switching to fallback
mode clears that task and removes the dependency warning.

## Limitations and Differences

1. **x86_64 only** — Bisq does not provide official ARM builds.
2. **No direct desktop access** — Bisq runs inside a Selkies webtop, not as a native desktop app.
3. **`bisq.properties` is overwritten on every start** — manual edits to this file will not persist.
4. **Local-only mode fails closed** — Bisq does not silently use remote Bitcoin peers when the local node is missing or unreachable.
5. **Fallback mode uses remote peers over Tor** — select it explicitly with the Configure Bitcoin Connection action when a local Bitcoin node is not available.
6. **8 GiB RAM minimum** — DAO state serialization can temporarily consume substantial heap; the package reserves up to 4 GiB for Bisq and requires enough system memory for the desktop and supporting processes.
7. **First launch is slow** — Bisq needs to connect to the P2P trading network and sync, which can take several minutes.

## What Is Unchanged from Upstream

- All trading functionality (offers, trades, disputes)
- Wallet management (send, receive, backup seed)
- All Bisq UI settings and preferences
- P2P network participation
- DAO functionality

## Contributing

Build and development workflow follow the StartOS packaging guide: <https://docs.start9.com/packaging>. Keep `README.md`, `instructions.md`, and `AGENTS.md` in sync with any change to user-visible behavior or package structure.

---

## Quick Reference for AI Consumers

```yaml
package_id: bisq
image: custom dockerBuild (multi-stage: ubuntu + pinned baseimage-selkies, flattened via FROM scratch)
architectures: [x86_64]
volumes:
  main: /config
ports:
  ui: 3000
dependencies:
  - bitcoind (local-only mode; running, health check: bitcoind)
startos_managed_env_vars:
  - CUSTOM_USER
  - PASSWORD
  - JAVA_TOOL_OPTIONS
  - BITCOIN_CONNECTION_MODE
  - BITCOIND_PEER_ADDR
  - BISQ_NETWORK_FALLBACK_NODES
  - PUID
  - PGID
  - TZ
  - TITLE
  - S6_CMD_WAIT_FOR_SERVICES_MAXTIME
  - S6_VERBOSITY
  - NO_DECOR
  - DISABLE_OPEN_TOOLS
  - DISABLE_SUDO
  - DISABLE_TERMINALS
  - SELKIES_COMMAND_ENABLED
  - SELKIES_UI_SIDEBAR_SHOW_APPS
  - SELKIES_UI_SIDEBAR_SHOW_FILES
  - SELKIES_FILE_TRANSFERS
actions:
  - set-password
  - configure-bitcoin-connection
```
