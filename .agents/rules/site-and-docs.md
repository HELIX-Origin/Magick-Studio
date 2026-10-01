# Website and project documentation

**Status:** MANDATORY
**Triggers:** changing `docs/**`, project-site links, `README.md`, `BUGS.md`, `TODO.md`, or `ROADMAP.md`
**Enforced by:** review

## Must

- The static website is published from `docs/` at the project path `/Magick-Studio/`.
- Use relative asset references (`./assets/...`) so CSS, JavaScript, and images resolve on GitHub Pages.
- Keep the Pages workflow's artifact path aligned with the website source directory.
- Do not assert that Pages is enabled or deployed based only on repository files; configuration, secrets, and environment approvals are managed in GitHub.
- Keep issue records evidence-based: confirmed reproducible defects belong in `BUGS.md`; enhancements and unverified concerns belong in `TODO.md`.
