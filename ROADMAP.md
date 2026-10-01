# Roadmap

> Product direction and proposed milestones for Magick Studio. `TODO.md` tracks actionable tasks; `BUGS.md` records confirmed defects. Sequence is provisional and has no release dates.

## 🔭 Vision

A practical cross-platform desktop workspace for common ImageMagick operations, with clear diagnostics and safe, repeatable single-image and batch workflows.

## 🧭 Product principles

1. **Accessible workflows:** Expose useful ImageMagick operations through focused desktop views while retaining an advanced raw-command path.
2. **Safe execution:** Keep process invocation shell-free, preserve argument/path boundaries, and explain failures.
3. **Cross-platform behavior:** Preserve Windows, macOS, and Linux usability and native path behavior.
4. **Maintainable structure:** Keep top-level tabs and focused cogs separate; avoid unrelated changes to vendored libraries.

## 🚫 Non-goals

- Replacing ImageMagick or duplicating its full command-line surface in a graphical editor.
- Turning the static `docs/` site into a hosted version of the desktop application.
- Committing to release dates or packaging targets before the corresponding build and distribution workflows exist.

## 🗺️ Proposed milestones

| # | Milestone | Status | Scope |
| --- | --- | --- | --- |
| M1 | Reliability foundation | ⬜ Proposed | Keep the UI responsive during long ImageMagick/batch work; add progress, cancellation, and actionable partial-failure reporting; establish focused test seams. |
| M2 | Workflow polish | ⬜ Proposed | Clarify batch output/overwrite behavior, improve validation/accessibility, and keep user guidance aligned with actual app behavior. |
| M3 | Distribution and maintenance | ⬜ Proposed | Document supported dependency/tool versions and assess repeatable cross-platform packaging and release workflows. |

## 🎯 Current focus: M1 — Reliability foundation

The actionable checklist is maintained in `TODO.md`. The synchronous process wait is documented as open in `BUGS.md`; runtime reproduction and design scope remain to be completed.

## 📍 Current baseline

- Python 3.10+ and CustomTkinter desktop app with five top-level tabs and focused cog views.
- `CoreEngine` invokes ImageMagick and writes diagnostics; its current process wait is synchronous.
- CI installs `MagickStudio/requirements.txt` and syntax-compiles selected entry/core/top-level tab modules.
- No dedicated test suite, linter, or application packaging workflow is currently configured.

## 🔁 Recurring expectations

- Preserve shell-free process execution, cross-platform paths, and clear diagnostic output.
- Keep site asset paths relative under `/Magick-Studio/`.
- Use only configured repository checks and report actual results; see `AGENTS.md`.
