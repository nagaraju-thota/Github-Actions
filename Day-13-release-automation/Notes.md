### `notes.md`

```markdown
# Day 13 – Release Automation Notes

## 1. Git Tags

Git tags are used to mark specific points in the Git repository.

Example:

```bash
git tag v1.0.0

Push the tag:

git push origin v1.0.0
2. Semantic Versioning

Semantic Versioning follows:

MAJOR.MINOR.PATCH

Example:

v1.2.3
MAJOR

Breaking changes.

v1.0.0 → v2.0.0
MINOR

New features that do not break existing functionality.

v1.0.0 → v1.1.0
PATCH

Bug fixes.

v1.0.0 → v1.0.1
3. GitHub Releases

GitHub Releases allow us to publish a specific version of an application.

A release can contain:

Version number
Release notes
Changelog
Build artifacts

Example:

Release v1.0.0
4. Release Notes

Release notes describe the changes included in a particular version.

Example:

Release v1.1.0

Changes:
- Added user authentication
- Added health check API
- Fixed application startup issue