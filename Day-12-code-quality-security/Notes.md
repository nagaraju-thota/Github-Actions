
---

# 6. `Notes.md`

```markdown
# Day 12 - Code Quality & Security Scanning

## Objective

Improve application code quality and security before deployment.

## Topics

### 1. CodeQL

CodeQL is a security analysis tool from GitHub.

It analyzes source code and identifies potential security vulnerabilities.

### 2. Trivy

Trivy is a vulnerability scanner.

It can scan:

- Docker images
- Filesystems
- Dependencies

In this task, Trivy scans the Docker image.

### 3. Dependency Scanning

Dependency scanning checks third-party packages for known vulnerabilities.

For Node.js:

```bash
npm audit