# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **`runAsInit: true` is load-bearing.** The base image is s6-overlay and needs PID 1; drop it and nothing in the desktop comes up.
- **`root/defaults/autostart` is the package's, and it overwrites the persisted copy on every launch.** That is what stops an upgraded install from keeping an obsolete startup script on a volume that predates it — don't make it conditional. It also regenerates `bisq.properties` and clears Bisq's stale `.lock`/`.pid` files, so both belong there rather than in `main.ts`.
- **Don't relax the local-only failure path.** `check-bitcoin-node` gates the daemon and `main.ts` throws when the bridge address is absent; both exist so Bisq never silently reaches remote Bitcoin peers with the user's wallet addresses when they asked for their own node.
- **The Selkies hardening env is a security boundary, not tidiness.** `DISABLE_SUDO`, `DISABLE_TERMINALS`, `SELKIES_COMMAND_ENABLED=false` and the sidebar flags keep the webtop from being a general shell on the box. `SELKIES_FILE_TRANSFERS` is deliberately the exception — wallet exports need it.
- **`hardwareRequirements.ram` is 6 GiB to mean "8 GB or better".** StartOS compares it against `MemTotal`, which reads a few hundred MiB below the advertised capacity, so a literal 8 GiB rejects every 8 GB machine. Don't "correct" it.
