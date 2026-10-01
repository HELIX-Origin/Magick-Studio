# Process and ImageMagick safety

- Invoke external programs without a shell (`shell=False`) and use argument lists where possible.
- Never interpolate user-controlled input into a shell command. Raw ImageMagick parameters are intentionally powerful but must remain arguments to the ImageMagick executable.
- Check executable availability and handle launch exceptions, stderr, and non-zero exit codes.
- Keep input and output paths distinct and correctly quoted/represented; consider spaces, Unicode, and platform-specific path semantics.
- For batch operations, make file selection, output naming, overwrite policy, and per-file failure behavior explicit.
