# Updating the upstream version

This package wraps the Bisq desktop application (from `bisq-network/bisq`), installing the upstream `.deb` published at `bisq.network/downloads/v<version>/` into a KasmVNC webtop image and verifying it against a pinned PGP key.

## Determining the upstream version

- **Bisq** (`bisq-network/bisq`, https://github.com/bisq-network/bisq):

  ```
  gh release view -R bisq-network/bisq --json tagName -q .tagName
  ```

  Pinned as `BISQ_VERSION` in `Dockerfile` (the tag is `v<version>`; the pin omits the `v`).

## Applying the bump

- **Bisq**: in `Dockerfile`, update the `ARG BISQ_VERSION=...` line to the new version (without the leading `v`). If upstream rotated signers, also update `ARG BISQ_PGP_KEY=...` to the new fingerprint.
