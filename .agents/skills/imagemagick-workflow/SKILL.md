---
name: imagemagick-workflow
description: Use when changing ImageMagick arguments, image operations, file handling, metadata, or batch execution.
---

# ImageMagick workflow procedure

1. Trace the action from its cog callback through `CoreEngine.invoke_magick`.
2. Preserve shell-free execution and ensure paths/arguments retain their intended boundaries.
3. Validate required values and handle canceled file/folder selection without starting a process.
4. For batch work, inspect filters, output suffixes, overwrite behavior, empty directories, and per-file errors.
5. Verify the expected ImageMagick command semantics using available project documentation or an installed executable; do not guess option ordering.
6. Check missing executable, non-zero exit, stderr, and UI responsiveness.
7. Report whether validation was static or used a real ImageMagick installation.
