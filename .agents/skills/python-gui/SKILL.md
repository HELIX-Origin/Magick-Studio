---
name: python-gui
description: Use when changing the Python desktop application, CustomTkinter UI, tabs, or cogs.
---

# Python GUI change procedure

1. Identify the owning tab, its controller, and the relevant sibling cogs.
2. Trace how the selected view receives its parent, shared engine, and any persistent state.
3. Keep UI work in the owning module and preserve the existing controller/cog separation.
4. Check callback behavior, empty input, cancellation, errors, and cross-platform path handling.
5. Avoid long-running work on Tk's event thread; use a deliberate thread-safe UI update design if asynchronous execution is in scope.
6. Compile changed files and the source modules listed by the existing CI workflow.
7. State which behavior was syntax-checked versus exercised at runtime.
