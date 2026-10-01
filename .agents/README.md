# Magick Studio agent ecosystem

This directory contains the project-specific source of truth for coding-agent roles and reusable guidance.

## Structure

- `ROLES.md` — routing index for roles and workflows.
- `agents/magick-studio/AGENT.md` — primary coordinator and delegation guide.
- `agents/magick-studio/subagents/` — focused application, ImageMagick workflow, quality, and website roles.
- `skills/` — task procedures that can be applied across roles.
- `rules/` — repository-wide constraints and quality expectations.
- `templates/` — reusable triage, implementation-plan, and review checklists.

OpenCode discovers native project agents under [`.opencode/agents/`](../.opencode/agents/); these profiles point to the corresponding canonical role here. `AGENTS.md` is always-loaded policy; `ROLES.md` maps intent to role; rules define standing constraints; skills define repeatable workflows.

## Selecting guidance

1. Start with `/AGENTS.md` and follow its MANDATORY requirements.
2. Select the role in [`ROLES.md`](ROLES.md); use the coordinator for broad or cross-cutting tasks.
3. Load only triggered rules and the relevant workflow skill.
4. Use templates where they fit the task; they are prompts, not a substitute for repository evidence.
5. Keep role contracts and routing synchronized when roles are added or renamed.
