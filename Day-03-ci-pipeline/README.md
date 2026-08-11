# 📅 Day 3 – CI Pipeline for Node.js

## 🎯 Goal

Create a production-ready Continuous Integration (CI) pipeline using GitHub Actions.

The pipeline automatically:

- Checks out the source code
- Sets up Node.js
- Caches npm dependencies
- Installs dependencies
- Runs linting
- Runs unit tests
- Builds the application
- Uploads the build output as an artifact

---

## 📚 Topics Covered

- GitHub Actions
- Checkout
- Node.js setup
- npm dependency installation
- npm caching
- ESLint
- Jest unit testing
- Application build
- GitHub Actions artifacts
- Artifact retention

---

## 🛠 Hands-on

The CI pipeline follows this process:

```text
Checkout
    ↓
Setup Node.js
    ↓
Cache npm modules
    ↓
Install dependencies
    ↓
Lint
    ↓
Test
    ↓
Build
    ↓
Upload Artifact