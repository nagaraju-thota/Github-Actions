# Day 5 Notes – Multi-Job Workflows

## Jobs

A GitHub Actions workflow can contain multiple independent or dependent jobs.

## needs

The `needs` keyword creates a dependency between jobs.

Example:

```yaml
build:
  needs: test

This means the Build job starts only after the Test job succeeds.

Sequential Execution

The Day 5 workflow uses:

Test → Build → Docker → Deploy

Each job waits for the previous job.

Parallel Execution

Jobs without dependencies can run in parallel.

Example:

jobs:
  test:
    runs-on: ubuntu-latest

  security:
    runs-on: ubuntu-latest

Both jobs can run at the same time.

Job Dependencies

The workflow uses:

build:
  needs: test

docker:
  needs: build

deploy:
  needs: docker