# Project backlog

Items below are improvement candidates, not confirmed regressions. Prioritize against current user feedback and update this list when work begins or ships.

## Reliability and testability

- [ ] Address the confirmed UI-blocking ImageMagick operations in [`BUGS.md`](BUGS.md), including progress, cancellation, and per-file batch failure reporting.
- [ ] Add automated tests for command construction, path handling, batch filtering/output naming, and failure reporting; establish seams that do not require a display or installed ImageMagick.
- [ ] Expand CI syntax validation to cover all application-owned Python files, including cogs, while excluding vendored source.
- [ ] Review raw CLI and batch input parsing for filenames containing spaces, quotes, Unicode, and platform-specific path characters.

## Product and delivery

- [ ] Document supported ImageMagick versions and verify important operations against supported platforms.
- [ ] Define a repeatable desktop packaging/release process for Windows, macOS, and Linux.
- [ ] Review accessibility and keyboard navigation across the tabs and dialogs.
- [ ] Keep the static site installation steps and application requirements synchronized.
