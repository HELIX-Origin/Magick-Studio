# GitHub Copilot instructions — Magick Studio

This file is auto-loaded by GitHub Copilot. [`AGENTS.md`](../AGENTS.md) is the full repository authority; this is its short form for Copilot sessions.

## Project

Magick Studio is a Python 3.10+ desktop GUI built with CustomTkinter. App code is under `MagickStudio/`; the static website is under `docs/`.

## Hard rules

1. Follow the scope, safety, and role-routing requirements in `AGENTS.md`; use `.agents/ROLES.md` to find focused project guidance.
2. Keep ImageMagick process calls shell-free (`shell=False`); preserve argument boundaries, validate paths, and surface diagnostics.
3. Preserve cross-platform UI behavior and relative website asset paths for the `/Magick-Studio/` Pages path.
4. Do not modify vendored libraries to implement app features. Do not add dependencies, tests, or tooling unless the task requires them.
5. Treat other repositories as read-only reference material unless the user explicitly authorizes changes in them.
6. Run relevant existing checks and report only checks actually run, with remaining runtime or setup gaps.

## Layout

```text
AGENTS.md                  always-loaded authority and verification guidance
.agents/ROLES.md           task-to-role routing
.agents/                   specialist roles, rules, skills, and templates
.opencode/                 OpenCode configuration and native role profiles
MagickStudio/              Python/CustomTkinter application
docs/                      static GitHub Pages site
BUGS.md / TODO.md          defect and task ledgers
ROADMAP.md                 proposed project direction
```
