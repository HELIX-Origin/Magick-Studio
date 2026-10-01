# Roadmap

This roadmap describes proposed sequencing, not committed release dates. Reorder it as user needs and maintenance capacity change.

## 1. Reliability foundation

- Keep the desktop responsive during long-running ImageMagick and batch operations; provide safe progress, cancellation, and clear partial-failure reporting.
- Introduce testable seams around command construction, filesystem behavior, and process results, then add focused automated tests.
- Expand CI validation to application-owned cogs and verify supported Python/platform behavior.

## 2. Workflow polish

- Improve batch workflows with clear output/overwrite behavior and actionable per-file diagnostics.
- Review input validation, accessibility, keyboard navigation, and consistent error presentation.
- Keep documentation and examples aligned with actual ImageMagick behavior and application requirements.

## 3. Distribution and maintenance

- Define cross-platform packaging and release artifacts.
- Document supported dependency and ImageMagick version ranges.
- Maintain the static project site and simplify repeatable repository releases.

## Current baseline

- The application is a CustomTkinter desktop GUI with five tabs and focused cog views.
- CI installs the declared Python requirements and syntax-compiles selected top-level modules; there is no dedicated test suite or packaging workflow yet.
