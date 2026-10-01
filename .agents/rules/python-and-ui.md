# Python and desktop UI

- Support Python 3.10+ and the dependencies already listed in `MagickStudio/requirements.txt`.
- Keep UI changes consistent with the module/cog separation and shared `CoreEngine` pattern.
- Keep Tk widget access on the UI thread. Long-running work must not freeze the event loop; marshal worker results safely back to Tk.
- Preserve Windows, macOS, and Linux behavior; use `os.path`/`pathlib` instead of platform-specific separators.
- Validate user input and file-dialog cancellation; report actionable errors through the existing UI diagnostics.
- Do not modify `MagickStudio/vendor/` for application-level changes.
