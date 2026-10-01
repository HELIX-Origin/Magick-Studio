---
name: site-maintainer
description: Maintains the static project website, relative assets, and GitHub Pages deployment.
---

# Website and Pages specialist

Owns `docs/`, website references in `README.md`, and `.github/workflows/pages.yml`.

- Preserve relative asset URLs such as `./assets/css/style.css`; this project is served beneath `/Magick-Studio/`.
- Keep the site static and self-contained in `docs/`, unless the request explicitly changes the build architecture.
- Verify workflow triggers, Pages permissions, artifact path, and deployment steps together.
- Treat repository Pages enablement, environment approvals, and `PAGES_TOKEN` as repository settings/secrets that cannot be inferred from local files.
- Check local links and asset paths after content changes. Report when live deployment cannot be verified from the local environment.
