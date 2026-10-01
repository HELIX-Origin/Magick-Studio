# Agent guide

This file is the repository-wide entry point for coding agents. Read it before changing files, then consult the relevant rules and specialized agent under [`.agents/`](.agents/README.md). OpenCode profiles are available in [`.opencode/agents/`](.opencode/agents/).

## Project at a glance

Magick Studio is a Python 3.10+ desktop GUI built with CustomTkinter. The application lives in `MagickStudio/`: `main.py` creates the window and tabs, `core.py` wraps ImageMagick invocation and diagnostics, each module in `tabs/` owns a top-level tab, and its matching `*_cogs/` directory contains focused views. The static project site is in `docs/`.

## Working agreements

- Prefer the smallest complete change. Keep changes focused and preserve existing behavior unless the task requires changing it.
- Follow the closest applicable rule in [`.agents/rules/`](.agents/rules/). Ask for clarification rather than inventing product behavior or silently expanding scope.
- Do not edit vendored libraries under `MagickStudio/vendor/` to implement application features.
- Keep application UI changes cross-platform and aligned with the existing tab/cog structure.
- ImageMagick execution is a process boundary: preserve `shell=False`; never turn user text into a shell command. Prefer argument lists, validate inputs, and report failures through `CoreEngine`.
- Do not commit generated image outputs, local environments, secrets, or unrelated formatting changes.
- Keep website asset links relative so the project site continues working beneath `/Magick-Studio/`.

## Validate changes

Use only checks already present in the repository. The CI workflow installs `MagickStudio/requirements.txt` and runs `python -m py_compile` from `MagickStudio/` on the entry point, core, and top-level tab modules. Run that same command for application changes; compile additional changed Python files too. There is currently no dedicated test suite or linter configured. For workflow, docs, and agent-config changes, validate the affected syntax and paths directly.

Before reporting completion, summarize files changed, checks run and their results, and any remaining setup or manual verification.
