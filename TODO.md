# Project backlog

> Actionable task ledger. Statuses: ⬜ backlog · 🚧 in progress · ✅ done.
> Product direction lives in `ROADMAP.md`; confirmed defects live in `BUGS.md`.
> Items below are candidates, not commitments or shipped behavior.

## 🎯 Current focus: unblock core workflows

No release version or date is committed. Address source-confirmed blockers in `BUGS.md` before expanding workflows. Source inspection and syntax checks do not establish runtime compatibility.

### Active tasks

- ⬜ **Restore image execution** (`BUGS.md`, `MagickStudio/core.py:31`):
  - Replace the nonexistent argument parser while keeping execution shell-free and paths intact.
  - Exercise single-image, identify, raw, and batch actions with ImageMagick; check malformed input, unavailable executable, stderr, and non-zero exit status.
- ⬜ **Repair file selection and batch setup** (`BUGS.md`):
  - Correct output-path suggestions in Geometry and Effects Browse dialogs.
  - Persist manually edited batch paths when changing views.
  - Preserve in-progress Geometry, Effects, and batch pipeline settings across view switches.
  - Restrict batch input enumeration to files; verify extension filtering and empty directories.
- ⬜ **Restore Linux startup** (`BUGS.md`):
  - Provide a working launcher or correct the desktop entry, then verify launch outside the application directory.
- ⬜ **Resolve UI-blocking image operations**:
  - Reproduce the source-confirmed synchronous wait documented in `BUGS.md`.
  - Design progress, cancellation, and partial-failure reporting for single and batch operations.
- ⬜ **Investigate output safety and argument boundaries** (`BUGS.md`, Investigating):
  - Reproduce batch name collisions and existing-output behavior before choosing an overwrite policy.
  - Check paths with spaces, quotes, and Unicode, empty entries, malformed raw commands, and launch working directories on supported platforms.
- ⬜ **Improve automated coverage**:
  - Add testable seams for command construction, path handling, batch filtering/output naming, and process failures when implementation work requires it.
- ⬜ **Expand syntax validation coverage**:
  - Include all application-owned cog modules in CI without compiling vendored source.
  - Validate the documented Python 3.10 minimum as well as the current CI Python 3.11 environment.

## ⬜ Backlog / future enhancements

- [ ] Document supported ImageMagick versions and verify important operations against supported platforms.
- [ ] Define a repeatable desktop packaging/release process for Windows, macOS, and Linux.
- [ ] Review accessibility and keyboard navigation across the tabs and dialogs.
- [ ] Keep the static site installation steps and application requirements synchronized.
- [ ] Verify and document launchers and icon assets when started from outside the application folder.

## ✅ Done

_No backlog items recorded as complete in this ledger._
