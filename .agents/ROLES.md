# Magick Studio role index

`AGENTS.md` is the always-loaded authority. This file routes the task to the role that owns the work; role instructions may add constraints but never relax `AGENTS.md`.

## Pick by intent

| Intent | Primary | Then |
| --- | --- | --- |
| Implementing a Python/CustomTkinter change | `magick-studio` | `python-application` |
| Changing image operations, file handling, or batch processing | `magick-studio` | `image-workflows` |
| Reviewing a change without editing | `magick-studio` | `quality-review` |
| Maintaining the static site or deployment | `magick-studio` | `site-maintainer` |
| Diagnosing a bug or failed workflow | `magick-studio` | `.agents/skills/issue-triage/SKILL.md` |
| Planning a broad or cross-cutting task | `magick-studio` | Relevant specialist(s), then `quality-review` |

## Tree

```text
.agents/
  ROLES.md
  agents/magick-studio/
    AGENT.md
    subagents/
      python-application/AGENT.md
      image-workflows/AGENT.md
      quality-review/AGENT.md
      site-maintainer/AGENT.md
  rules/
  skills/
  templates/
.opencode/
  agents/                 Native OpenCode profiles for the same role IDs
  opencode.jsonc
  dcp.jsonc
```

## Role contract

Every role document uses the same ordered contract: **Owns**, **Reads**, **Does**, **Never**, **Hands off to**. `Owns` names a code or documentation surface; `Reads` lists existing project files; `Does` is actionable; `Never` defines boundaries; and `Hands off to` names the next role or condition.

When adding or renaming a role, update this index, its OpenCode profile, the primary coordinator's delegation map, and the `AGENTS.md` routing table in the same change. Keep detailed procedures in rules or skills rather than duplicating them in role descriptions.
