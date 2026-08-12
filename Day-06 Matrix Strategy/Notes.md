# Day 6 – Matrix Strategy

## Goal

Run the same GitHub Actions workflow across multiple operating systems
and Node.js versions.

## Matrix Strategy

The workflow uses a matrix to test:

### Operating Systems

- Ubuntu
- Windows
- macOS

### Node.js Versions

- Node 18
- Node 20
- Node 22

This creates 9 combinations automatically.

## Matrix Configuration

```yaml
strategy:
  fail-fast: false
  matrix:
    os:
      - ubuntu-latest
      - windows-latest
      - macos-latest
    node-version:
      - 18
      - 20
      - 22