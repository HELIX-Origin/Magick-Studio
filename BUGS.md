# 🐛 BUGS

> [!IMPORTANT]
> All known bugs are listed here. Keep in mind, that if a bug is missing, it may not have been discovered or reported yet.
>
> The repository maintainers (and contributors) actively search for new bugs and update this document accordingly. In some cases, a bug will be spotted and fixed without this page being immediately updated. This page is primarily a living index and may not always reflect the most current state of the codebase.
>
> AI agents are strongly advised to update this page first and push it to the remote before working on any new bug fixes or features. This way the remote repository always has the most up-to-date list of known issues.

## 📖 Legend

### 🚦 Status

- ⚠️ **open** — reproducible, needs fixing *(Detailed lists with possible fixes encouraged. Attempt to include steps to reproduce, expected behavior, and actual behavior. An estimate of how long it might take to fix is also helpful.)*
- 🚧 **investigating** — repro/root-cause in progress *(List of issues currently being worked on. Used for tracking active work. must reference an existing bug from the open section.)*
- 🚫 **wontfix** — accepted limitations *(features that can't be fixed at this time without significant changes or trade-offs)*
- ✅ **resolved** — verified and fixed *(moved to closed with the corresponding release version or commit)*

### 🚨 Severity

- 🔴 **Critical**: *Bugs that cause crashes or major functionality loss.*
- 🟠 **High**: *Bugs that significantly impact usability but do not crash the app.*
- 🟡 **Medium**: *Bugs that affect certain features or have minor usability issues.*
- 🟢 **Low**: *Minor bugs or visual glitches that do not significantly impact the user experience.*

## 🚫 Known quirks & external limitations (wontfix bucket)

- **Raw Command Passthrough:** The raw-command tab is designed to give direct access to ImageMagick CLI switches and flags. Advanced syntax and unusual flag combinations are passed directly to ImageMagick rather than being restricted by rigid UI schema validation.

## 💡 Explicitly not bugs

- ImageMagick is an external system requirement and must be installed on PATH; lack of ImageMagick binary on an end-user machine is an environmental prerequisite, not an internal application defect.

## ⚠️ Open

### Image operations fail before ImageMagick starts

- **Severity**: 🔴 Critical (all image workflows)
- **Status**: ⚠️ open
- **Affected areas**: `MagickStudio/core.py:20-47`; all cogs that call `CoreEngine.invoke_magick()`.
- **Reproduction**: With `magick` available on PATH, invoke any image action. Argument construction calls `subprocess.split(argument_string)` at line 31, but `subprocess` has no `split` attribute (`python -c "import subprocess; print(hasattr(subprocess, 'split'))"` prints `False`). The exception is logged at lines 46-47; no process starts.
- **Expected behavior**: Parse the input into arguments, launch ImageMagick without a shell, and report the result.
- **Next steps**: Replace the nonexistent parser with a deliberate, cross-platform argument strategy; preserve filenames as single arguments. Verify representative operations, malformed input, and failure logging through the existing engine interface.

### Browsing an image fails to populate its output path

- **Severity**: 🟠 High (geometry and effects)
- **Status**: ⚠️ open
- **Affected areas**: `MagickStudio/tabs/geometry.py:41-45`, `MagickStudio/tabs/effects.py:40-44`.
- **Reproduction**: Select any file in either tab's Browse dialog. Both callbacks concatenate `os.path.splitext(file)` (a tuple) with a string suffix; Python raises `TypeError` after the input field is populated.
- **Expected behavior**: The suggested output is a sibling path with the intended `_mod.jpg` or `_fx.png` suffix.
- **Next steps**: Form the suggestion from the filename stem, and check both dialogs with filenames containing spaces and multiple dots.

### Manually entered batch directories are discarded

- **Severity**: 🟠 High (batch setup)
- **Status**: ⚠️ open
- **Affected areas**: `MagickStudio/tabs/batch_cogs/paths.py:12-34`, `MagickStudio/tabs/batch.py:39-46`.
- **Reproduction**: Type source and destination directories into the path entries, then switch to the pipeline view. Only the directory picker writes `batch_state`; switching views destroys the entries, so `PipelineCog.fire_batch()` sees empty paths and refuses to run (`MagickStudio/tabs/batch_cogs/pipeline.py:40-46`).
- **Expected behavior**: Typed and picker-selected paths persist across views.
- **Next steps**: Synchronize both entries before the paths view is destroyed; verify typed, picker-selected, canceled, and edited paths.

### View switching discards unsaved operation settings

- **Severity**: 🟡 Medium (lost form state)
- **Status**: ⚠️ open
- **Affected areas**: `MagickStudio/tabs/geometry.py:34-39`, `MagickStudio/tabs/effects.py:33-38`, `MagickStudio/tabs/batch.py:39-46`, `MagickStudio/tabs/batch_cogs/pipeline.py:13-38`.
- **Reproduction**: Type an input/output path or change a setting in Geometry or Effects, switch to another category, then return. The controller destroys the previous widgets and creates new blank fields/default cog values. Likewise, edit the batch filter, arguments, or extension and switch to the paths view without running: `PipelineCog.sync_state()` is called only by `fire_batch()`, so returning restores the old settings.
- **Expected behavior**: Switching between views preserves in-progress paths and configuration until the user changes or resets them.
- **Next steps**: Decide which values are shared between cogs and persist them before view destruction; verify switching away and back without running an operation.

### Batch processing can pass directories as input files

- **Severity**: 🟡 Medium (incorrect batch selection)
- **Status**: ⚠️ open
- **Affected areas**: `MagickStudio/tabs/batch_cogs/pipeline.py:48-61`.
- **Reproduction**: Put a directory named `sample.png` inside the source folder and leave the default `.png` filter. `os.listdir()` and `endswith()` include it in `files`, and the loop sends its path to ImageMagick.
- **Expected behavior**: Only regular files matching the selected filter are submitted.
- **Next steps**: Filter entries by file type and define the behavior for empty or malformed extension filters; check a mixed directory and an empty match set.

### Linux launch instructions reference a missing script

- **Severity**: 🟡 Medium (Linux startup)
- **Status**: ⚠️ open
- **Affected areas**: `MagickStudio/MagickStudio.desktop:6`; former README/site Linux launch instructions.
- **Reproduction**: The desktop entry executes `launch.sh`, but `MagickStudio/launch.sh` is absent. Following the former `chmod +x launch.sh` instruction fails for the same reason.
- **Expected behavior**: A documented Linux launcher and desktop shortcut both start the app from a reliable working directory.
- **Next steps**: Add and validate a Linux launcher or update the desktop entry to run the app directly; test from a different working directory and keep installation guidance synchronized.

### Synchronous ImageMagick operations can freeze the UI

- **Severity**: 🟠 High (usability)
- **Status**: ⚠️ open
- **Affected areas**: `MagickStudio/core.py`, calling cogs, and `MagickStudio/tabs/batch_cogs/pipeline.py`.
- **Actual behavior**: The UI callback waits for ImageMagick to exit; batch processing waits for each file before starting the next.
- **Expected behavior**: The UI remains responsive and reports progress, completion, and failures while work runs.
- **Evidence**: `CoreEngine.invoke_magick()` starts a child process and synchronously calls `communicate()` (`MagickStudio/core.py:20-35`). `PipelineCog.fire_batch()` calls it in a loop (`MagickStudio/tabs/batch_cogs/pipeline.py:57-62`).
- **Next steps**: Reproduce with a deliberately long-running operation; design UI-thread-safe progress, cancellation, and partial-failure reporting, then validate through an available regression-test seam.

## 🚧 Investigating

- **Output collisions / overwrite policy:** `MagickStudio/tabs/batch_cogs/pipeline.py:57-61` derives outputs from stems and extensions without checking for existing targets or duplicate stems. Determine how ImageMagick handles existing outputs in supported configurations and reproduce collisions (including differently suffixed inputs) before declaring data loss; specify an explicit policy and regression checks.
- **Argument/path boundaries and validation:** Cogs build command strings from entry values before `CoreEngine.invoke_magick()` parses them (`MagickStudio/tabs/geometry_cogs/resize.py`, `MagickStudio/tabs/raw_cogs/terminal.py`, `MagickStudio/core.py:20-47`). Test spaces, Unicode, quotes, empty fields, and malformed raw arguments on supported platforms after the parser blocker is resolved. The raw-command field is intentionally powerful; do not classify all raw input as a defect.
- **Launcher and icon working directories:** `MagickStudio/main.py:39-59` looks for `assets` relative to the process working directory, and `MagickStudio/launch.vbs:3` does not change directories. Test launch from outside the application directory on each supported platform before asserting which assets or imports fail.

## ✅ Closed

### Pages Actions deployment conflicts with branch-based publishing

- **Severity**: 🟠 High (deployment)
- **Status**: ✅ resolved (Fixed in repository)
- **Actual behavior**: The Actions deployment failed during site configuration with `Create Pages site failed: Resource not accessible by integration` (workflow run [36922128936](https://github.com/HELIX-Origin/Magick-Studio/actions/runs/36922128936)).
- **Cause**: The repository's Pages source is the `docs/` folder on `main`, but the checked-in workflow attempted to provision and deploy a separate Actions-based Pages site.
- **Resolution**: Removed the Actions deployment workflow. GitHub Pages now publishes directly from the configured `main` / `docs` source.
