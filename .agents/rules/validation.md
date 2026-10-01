# Validation and reporting

- Use existing repository validation only. Current CI installs `MagickStudio/requirements.txt` and syntax-compiles the entry point, core, and top-level tab modules.
- Compile changed Python files in addition to the existing CI list; do not imply `py_compile` proves runtime behavior.
- There is no dedicated automated test suite or configured linter today. Do not add a tool solely for an incidental task.
- For docs/config/workflow edits, check syntax, references, paths, and workflow semantics directly.
- Report commands run, outcomes, and unavailable runtime checks without overstating coverage.
