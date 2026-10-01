# Project backlog

> Actionable task ledger. Statuses: ⬜ backlog · 🚧 in progress · ✅ done.
> Product direction lives in `ROADMAP.md`; confirmed defects live in `BUGS.md`.
> Items below are candidates, not commitments or shipped behavior.

## 🎯 Current focus: reliability foundation

No release version or date is committed. Prioritize the highest-impact reliability work and validate scope before implementation.

### Active tasks

- ⬜ **Resolve UI-blocking image operations**:
  - Reproduce the source-confirmed synchronous wait documented in `BUGS.md`.
  - Design progress, cancellation, and partial-failure reporting for single and batch operations.
- ⬜ **Improve automated coverage**:
  - Add testable seams for command construction, path handling, batch filtering/output naming, and process failures when implementation work requires it.
- ⬜ **Expand syntax validation coverage**:
  - Consider CI coverage for all application-owned cog modules without compiling vendored source.
- ⬜ **Review command/path handling**:
  - Evaluate filenames with spaces, quotes, Unicode, and platform-specific path characters.

## ⬜ Backlog / future enhancements

- [ ] Document supported ImageMagick versions and verify important operations against supported platforms.
- [ ] Define a repeatable desktop packaging/release process for Windows, macOS, and Linux.
- [ ] Review accessibility and keyboard navigation across the tabs and dialogs.
- [ ] Keep the static site installation steps and application requirements synchronized.

## ✅ Done

_No backlog items recorded as complete in this ledger._
