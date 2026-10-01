# Change scope

**Status:** MANDATORY
**Triggers:** every implementation or documentation change
**Enforced by:** review

## Must

- Implement the requested behavior with the smallest complete, reviewable change.
- Inspect the owning code and its callers before editing; follow existing boundaries unless they obstruct the requested behavior.
- Do not reformat unrelated code, change vendored dependencies, or remove tests to get a green check.
- Ask before making a product or compatibility decision that is not specified by the request.
- Update documentation only where it directly describes the changed behavior.
