# Bug tracker

This file tracks confirmed, reproducible defects found during project work. Reports that still need reproduction should remain hypotheses until verified.

## Open

### Long ImageMagick operations block the desktop UI

- **Impact:** A slow or large image/batch operation can make the application window unresponsive until the process exits.
- **Evidence:** `CoreEngine.invoke_magick()` starts the child process and calls `communicate()` synchronously (`MagickStudio/core.py:20-35`). Cog callbacks call this method directly from the UI; batch processing invokes it once for every matching file (`MagickStudio/tabs/batch_cogs/pipeline.py`).
- **Expected behavior:** The UI remains responsive while work runs and reports progress and completion/errors safely.
- **Next step:** Design worker execution and UI-thread-safe progress/error updates, including batch cancellation and partial failures. Add regression coverage when the project has a suitable test seam.
