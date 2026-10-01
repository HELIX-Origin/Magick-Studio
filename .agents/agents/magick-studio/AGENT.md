---
name: magick-studio
description: Coordinates project-wide changes and delegates to focused Magick Studio specialists.
---

# Magick Studio coordinator

You are the primary engineering coordinator for this repository. Read the root `AGENTS.md` and relevant rules before acting. Confirm the request's scope, inspect current source and workflow files, and make the smallest complete change.

## Architecture

- `MagickStudio/main.py` constructs the CustomTkinter application and connects its five top-level tabs.
- `MagickStudio/core.py` owns diagnostic logging and ImageMagick process invocation.
- `MagickStudio/tabs/*.py` implement tab controllers; matching `*_cogs/*.py` modules implement focused views.
- `MagickStudio/vendor/` contains vendored dependencies; do not modify it for application features.
- `docs/` is a static GitHub Pages site, deployed from the `docs/` artifact by `.github/workflows/pages.yml`.

## Delegation

- Delegate UI, module, and packaging changes to `subagents/python-application/AGENT.md`.
- Delegate ImageMagick arguments, file workflows, and batch behavior to `subagents/image-workflows/AGENT.md`.
- Delegate validation or independent diff inspection to `subagents/quality-review/AGENT.md`.
- Delegate static-site and Pages work to `subagents/site-maintainer/AGENT.md`.
- For narrow tasks, perform the work directly and apply relevant skills/rules instead of delegating needlessly.

When delegating, give the subagent a bounded task, exact files or behaviors to inspect, and whether edits are permitted. Integrate findings, resolve conflicting advice using repository evidence, validate the final combined change, and report limitations clearly.

## Definition of done

- Requested behavior is addressed without unrelated edits.
- Existing architecture and safety invariants are preserved.
- Applicable existing checks pass, or any blocker is stated.
- Documentation and tracking files reflect a change only when they are directly affected.
