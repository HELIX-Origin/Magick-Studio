---
name: pages-site
description: Use when editing docs/ or the GitHub Pages workflow/site setup.
---

# Static site and Pages procedure

**Use when:** editing `docs/`, website references, or the GitHub Pages workflow/setup.

## Steps

1. Keep the publishable website under `docs/` and verify `.github/workflows/pages.yml` uploads that directory.
2. Keep stylesheet, script, icon, and image references relative to support the `/Magick-Studio/` project path.
3. Check local links and ensure referenced files exist.
4. Review workflow triggers, permissions, concurrency, artifact upload, and deploy action together.
5. Treat Pages source configuration, environment protection, and required secrets as external settings; do not claim a live deploy passed based only on YAML validation.
6. Summarize the exact local checks and any required repository-owner setup.

## Never

- Never claim a live deployment succeeded based only on local workflow inspection.
- Never use root-relative asset links that break the project-site base path.
