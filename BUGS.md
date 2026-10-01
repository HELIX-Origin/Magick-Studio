# 🐛 BUGS

> This ledger records confirmed defects. Keep each entry evidence-based and distinguish source inspection from runtime reproduction.

## Status legend

- 🚨 **Open** — confirmed issue awaiting a fix.
- 🚧 **Investigating** — reproduction or root cause is still being established.
- ⚠️ **Accepted limitation** — known behavior retained intentionally.

## Open

### 🚨 Synchronous ImageMagick operations can freeze the UI

- **Severity:** High (usability)
- **Status:** Open; source-level cause confirmed, runtime reproduction not yet performed.
- **Affected areas:** `MagickStudio/core.py`, calling cogs, and `MagickStudio/tabs/batch_cogs/pipeline.py`.
- **Actual behavior:** The UI callback waits for ImageMagick to exit; batch processing waits for each file before starting the next.
- **Expected behavior:** The UI remains responsive and reports progress, completion, and failures while work runs.
- **Evidence:** `CoreEngine.invoke_magick()` starts a child process and synchronously calls `communicate()` (`MagickStudio/core.py:20-35`). `PipelineCog.fire_batch()` calls it in a loop (`MagickStudio/tabs/batch_cogs/pipeline.py:57-62`).
- **Next steps:** Reproduce with a deliberately long-running operation; design UI-thread-safe progress, cancellation, and partial-failure reporting, then validate through an available regression-test seam.

## Closed

### ✅ Pages Actions deployment conflicts with branch-based publishing

- **Severity:** High (deployment)
- **Status:** Fixed in the repository; the external Pages source remains configured as `main` / `docs`.
- **Actual behavior:** The Actions deployment failed during site configuration with `Create Pages site failed: Resource not accessible by integration` (workflow run [36922128936](https://github.com/HELIX-Origin/Magick-Studio/actions/runs/36922128936)).
- **Cause:** The repository's Pages source is the `docs/` folder on `main`, but the checked-in workflow attempted to provision and deploy a separate Actions-based Pages site.
- **Resolution:** Removed the Actions deployment workflow. GitHub Pages now publishes directly from the configured `main` / `docs` source.

## Filing a bug

Record reproduction steps, expected and actual behavior, environment, evidence, severity, and status. If a report cannot yet be reproduced, keep it in `TODO.md` as an investigation rather than presenting it as a confirmed defect.
