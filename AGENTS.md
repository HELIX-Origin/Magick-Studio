# Agent guide — Magick Studio

This file is the always-loaded authority for coding agents. Read it before changing files, then use [`.agents/ROLES.md`](.agents/ROLES.md) to select a role and the routing table below to load only relevant rules and skills. OpenCode profiles live in [`.opencode/agents/`](.opencode/agents/).

## Project at a glance

Magick Studio is a Python 3.10+ desktop GUI built with CustomTkinter. The application lives in `MagickStudio/`: `main.py` creates the window and tabs, `core.py` wraps ImageMagick invocation and diagnostics, each module in `tabs/` owns a top-level tab, and its matching `*_cogs/` directory contains focused views. The static project site is in `docs/`.

## MANDATORY — applies to every role

- **Scope:** Change only this repository and only files needed for the request. Reference repositories and their files are read-only unless the user explicitly authorizes work in them.
- **Truthfulness:** Inspect current source before asserting project behavior. Distinguish reproduced defects from hypotheses; never claim a check passed unless it ran and its output was reviewed.
- **Process safety:** ImageMagick calls must remain shell-free (`shell=False`). Never transform user input into a shell command; prefer argument lists, validate paths/arguments, and report failures through `CoreEngine`.
- **Architecture:** Do not edit vendored libraries under `MagickStudio/vendor/` for application features. Keep UI changes cross-platform and aligned with the existing tab/cog structure.
- **Scope discipline:** Prefer the smallest complete change, preserve behavior unless requested otherwise, and do not add dependencies, tests, or tooling unless required by the task.
- **Repository hygiene:** Do not commit generated image outputs, local environments, secrets, or unrelated formatting changes.
- **Website paths:** Keep website asset links relative so the project site works below `/Magick-Studio/`.

## Role routing

| Intent or surface | Role | Read next |
| --- | --- | --- |
| Coordinate a multi-area request or choose a specialist | `magick-studio` | `.agents/agents/magick-studio/AGENT.md` |
| Python UI, tabs, cogs, or app structure | `python-application` | `.agents/agents/magick-studio/subagents/python-application/AGENT.md`, `.agents/skills/python-gui/SKILL.md` |
| ImageMagick arguments, metadata, files, or batch operations | `image-workflows` | `.agents/agents/magick-studio/subagents/image-workflows/AGENT.md`, `.agents/skills/imagemagick-workflow/SKILL.md`, `.agents/rules/process-safety.md` |
| Independent correctness/regression review | `quality-review` | `.agents/agents/magick-studio/subagents/quality-review/AGENT.md` |
| `docs/`, website links, or Pages deployment | `site-maintainer` | `.agents/agents/magick-studio/subagents/site-maintainer/AGENT.md`, `.agents/skills/pages-site/SKILL.md`, `.agents/rules/site-and-docs.md` |
| Bug report, failure, or ambiguous behavior | `issue-triage` workflow | `.agents/skills/issue-triage/SKILL.md`, `.agents/templates/bug-triage.md` |
| Any other code change | `magick-studio` coordinator | `.agents/skills/python-gui/SKILL.md` or relevant rule |

Every role follows these mandatory requirements. A role can add constraints but cannot relax them.

## Verification matrix

Use existing repository checks; there is no dedicated test suite or linter configured.

| Change touched | Verify |
| --- | --- |
| Application Python | From `MagickStudio/`, run the CI `python -m py_compile main.py core.py tabs/geometry.py tabs/effects.py tabs/raw.py tabs/batch.py tabs/documentation.py` and compile every additional changed Python file |
| Agent docs/config | Parse JSON/JSONC where applicable; verify documented paths, role routing, and profile references |
| Website or Pages workflow | Verify affected local links/assets and workflow syntax/paths; live deployment requires GitHub Pages settings and cannot be inferred from local validation |
| Any change | Run `git diff --check`, inspect the final diff, and report checks actually run and any unavailable manual/runtime verification |

## Tracking documents

- `BUGS.md` is for confirmed, reproducible defects; label unresolved reports as hypotheses until verified.
- `TODO.md` contains actionable improvement candidates; `ROADMAP.md` describes proposed sequencing, not committed dates.
- Keep these ledgers accurate when a task directly changes the defect, backlog, or project direction. Never present an aspiration as shipped behavior.
