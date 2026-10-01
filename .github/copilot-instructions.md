# GitHub Copilot instructions

Read the repository [agent guide](../AGENTS.md) before making changes. Use the focused roles and shared rules in [`.agents/`](../.agents/README.md) when applicable.

- Make focused, reviewable changes that fit the existing Python/CustomTkinter architecture.
- Keep ImageMagick process calls shell-free (`shell=False`); validate paths and arguments, and surface diagnostics to the user.
- Preserve cross-platform behavior and relative asset paths in the `docs/` Pages site.
- Do not change vendored dependencies or add dependencies, tests, or tooling unless the task requires it.
- Validate with the checks documented in `AGENTS.md`; distinguish checks actually run from checks that are unavailable.
