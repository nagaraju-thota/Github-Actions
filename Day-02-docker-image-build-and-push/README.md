# 📅 Day-02 Docker Image Build & Push

## 🎯 Objective

Learn how to automate Docker image creation using GitHub Actions and publish images to Docker Hub and GitHub Container Registry (GHCR).

## Topics

- Docker Buildx Action
- Docker Login Action
- Docker Metadata Action
- Multi-stage Docker Build
- Docker Image Tags
- Git SHA Versioning
- Docker Hub
- GitHub Container Registry

## Project Structure

```text
examples/
├── app.js
├── package.json
├── Dockerfile
└── docker-build-and-push.yml
```

## Workflow

```text
Checkout Repository
        ↓
Setup Docker Buildx
        ↓
Login to Docker Hub
        ↓
Login to GHCR
        ↓
Generate Metadata
        ↓
Build Docker Image
        ↓
Push to Docker Hub
        ↓
Push to GHCR
```

## Outcome

- Automated Docker image builds
- Published images to Docker Hub
- Published images to GitHub Container Registry
- Tagged images using `latest` and Git SHA
- Learned multi-stage Docker builds