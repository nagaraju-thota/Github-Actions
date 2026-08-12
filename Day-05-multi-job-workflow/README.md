# Day 5 – Multi-Job Workflows

## Goal

Learn how to create complex GitHub Actions pipelines using multiple jobs.

## Workflow

Test → Build → Docker → Deploy

## Jobs

### Job 1 – Test

- Checkout source code
- Setup Node.js
- Install dependencies
- Run tests

### Job 2 – Build

- Depends on Test
- Build the application
- Upload build artifact

### Job 3 – Docker

- Depends on Build
- Download build artifact
- Build Docker image
- Push Docker image to GHCR

### Job 4 – Deploy

- Depends on Docker
- Deploy the Docker image

## GitHub Actions Concepts

- Jobs
- needs
- Sequential execution
- Job dependencies
- Artifacts between jobs
- Docker image build and push
- GitHub Container Registry