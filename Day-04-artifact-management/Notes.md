# Day 4 – Artifact Management Notes

## Goal

Learn how to store, transfer, and use build outputs with GitHub Actions artifacts.

---

## 1. What is an Artifact?

An artifact is a file or collection of files produced during a GitHub Actions workflow.

Examples:

- Build files
- Compiled application files
- Test reports
- Coverage reports
- Deployment packages
- ZIP files

Artifacts can be stored by GitHub and downloaded later.

---

## 2. Upload Artifact

GitHub Actions provides the `actions/upload-artifact` action to upload files.

Example:

```yaml
- name: Upload build artifact
  uses: actions/upload-artifact@v4
  with:
    name: build-artifact
    path: build/

In this example:

name defines the artifact name.
path defines which files should be uploaded.
3. Download Artifact

The actions/download-artifact action downloads an artifact.

Example:

- name: Download build artifact
  uses: actions/download-artifact@v4
  with:
    name: build-artifact
    path: deploy/

The downloaded files are placed inside the deploy/ directory.

4. Artifact Retention

Artifacts can be configured with a retention period.

Example:

retention-days: 5

This means GitHub will retain the artifact for 5 days.

Example:

- name: Upload build artifact
  uses: actions/upload-artifact@v4
  with:
    name: build-artifact
    path: build/
    retention-days: 5
5. Sharing Artifacts Between Jobs

Different GitHub Actions jobs can run on different runners.

Files created in one job are not automatically available in another job.

Artifacts can be used to transfer files between jobs.

Example:

Build Job
    ↓
Create build files
    ↓
Upload Artifact
    ↓
GitHub Artifact Storage
    ↓
Download Artifact
    ↓
Deploy Job
6. Job Dependency

The needs keyword is used to make the deploy job wait for the build job.

Example:

deploy:
  needs: build

This means the deploy job starts only after the build job completes successfully.