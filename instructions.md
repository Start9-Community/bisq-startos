# Bisq

Bisq is a JavaFX desktop application. This package runs it inside a browser-accessible Linux desktop streamed by Selkies, so the **Bisq Desktop** interface opens the full Bisq UI in your browser rather than a web app.

## Documentation

- [Bisq Wiki](https://bisq.wiki/) — the upstream documentation for trading, wallet management, and the Bisq protocol.

## What you get on StartOS

- A **Bisq Desktop** interface that streams the Bisq JavaFX application to your browser over Selkies.
- A single backed-up `main` volume that holds your Bisq wallet, trades, offers, and Selkies settings.
- The Bisq network profile is regenerated on every start so that Tor is handled at the StartOS network layer and Bitcoin traffic uses your StartOS Bitcoin node's private, trusted peer connection.

## Getting set up

1. Install **Bitcoin** first if you have not already — Bisq requires a Bitcoin full node and will not start without it.
2. After install, StartOS posts a critical task **Set your admin password**. Run it and copy the generated `bisq` username and password to a password manager — you'll need them to log into the desktop.
3. Start the service and open the **Bisq Desktop** interface. Enter the `bisq` username and the password from step 2 when your browser prompts for credentials.
4. Bisq's own first-run wizard appears in the desktop. Walk through it to create or restore a wallet. The first connection to the P2P trading network can take several minutes.

## Using Bisq

### Bisq Desktop

The **Bisq Desktop** interface is the full Bisq application rendered in your browser. Everything you would do on a native Bisq install — make and take offers, manage your wallet, participate in disputes, vote in the DAO — happens here. Selkies handles keyboard, mouse, audio, and clipboard between your browser and the Bisq desktop.

### Actions

- **Set Admin Password** — generate a new random password for the Selkies login and display the credentials. Run this if you lose the password or want to rotate it.

## Limitations

- **x86_64 only.** Bisq does not ship official ARM builds.
- **The Bisq network profile is regenerated on every start.** Manual edits to `bisq.properties` inside the container do not persist; Tor-for-BTC is intentionally disabled because StartOS manages Tor at the network layer, and the Bitcoin peer is set to your local Bitcoin service.
