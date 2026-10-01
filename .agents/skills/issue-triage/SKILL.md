---
name: issue-triage
description: Use when diagnosing a bug report, failed workflow, or ambiguous behavior request.
---

# Issue triage procedure

1. Restate the observed failure and expected behavior; gather exact reproduction details.
2. Inspect the relevant source, workflow, issue template, and recent run/log evidence before proposing a cause.
3. Separate confirmed defects from hypotheses and repository-configuration prerequisites.
4. Identify the smallest affected code path and consider user-visible, cross-platform, and failure behavior.
5. Record a confirmed reproducible defect in `BUGS.md`; put improvements or unverified ideas in `TODO.md`.
6. Link a fix to evidence and add a regression check using only existing project test facilities.
