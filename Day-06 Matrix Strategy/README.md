
---

# 12. `README.md`

Your README can contain:

```markdown
# Day 6 – Matrix Strategy

## Objective

Learn how to use GitHub Actions Matrix Strategy to run the same workflow
across multiple operating systems and Node.js versions.

## Environments Tested

### Operating Systems

- Ubuntu
- Windows
- macOS

### Node.js Versions

- Node 18
- Node 20
- Node 22

## Matrix Combinations

The workflow automatically creates 9 jobs:

| Operating System | Node 18 | Node 20 | Node 22 |
|------------------|---------|---------|---------|
| Ubuntu           | ✓       | ✓       | ✓       |
| Windows          | ✓       | ✓       | ✓       |
| macOS            | ✓       | ✓       | ✓       |

## Topics Covered

- Matrix builds
- Multiple operating systems
- Multiple Node.js versions
- Fail-fast strategy
- Environment testing
- Dynamic job generation

## Workflow

The workflow:

1. Checks out the repository.
2. Sets up the selected Node.js version.
3. Installs dependencies.
4. Runs tests.
5. Displays Node.js and npm versions.

## Result

A single matrix configuration generates 9 independent jobs.