# Magick Studio agent ecosystem

This directory contains the project-specific source of truth for coding-agent roles and reusable guidance.

## Structure

- `agents/magick-studio/AGENT.md` — primary coordinator and delegation guide.
- `agents/magick-studio/subagents/` — focused application, ImageMagick workflow, quality, and website roles.
- `skills/` — task procedures that can be applied across roles.
- `rules/` — repository-wide constraints and quality expectations.
- `templates/` — reusable triage, implementation-plan, and review checklists.

OpenCode discovers native project agents under [`.opencode/agents/`](../.opencode/agents/); these profiles direct the agent to the corresponding canonical role here. `AGENTS.md` is the concise repository-wide entry point. Keep role-specific procedures in one place and update both this index and the OpenCode profile only when adding or renaming roles.

## Selecting guidance

1. Start with `/AGENTS.md`.
2. Select the primary Magick Studio coordinator for multi-area tasks.
3. Use the relevant subagent for focused work; use the quality reviewer for an independent read-only review.
4. Apply the matching skill and rules; use templates when useful.
5. Verify current validation commands and product behavior in the repository rather than treating agent notes as a substitute for source code.
