# GitHub Actions Secrets & Variables

## What are Secrets?

Secrets are encrypted values stored securely inside GitHub.

Examples:

- Docker Hub Password
- AWS Access Key
- Kubernetes Config
- API Tokens

Secrets cannot be printed directly.

---

## Types of Secrets

### Repository Secrets

Accessible only inside one repository.

Example:

```
DOCKER_USERNAME
DOCKER_PASSWORD
```

### Organization Secrets

Shared across multiple repositories.

Useful for companies.

### Environment Secrets

Specific to an environment like

- Development
- Staging
- Production

---

## Variables

Variables store non-sensitive data.

Examples

```
NODE_VERSION=20
REGISTRY=docker.io
IMAGE_NAME=my-app
```

Variables can be printed.

---

## Masking Sensitive Values

GitHub automatically masks secrets.

Example output

```
Password: ***
```

instead of

```
Password: mypassword123
```
