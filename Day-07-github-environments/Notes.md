# Day 7 - GitHub Environments

## Topics

- GitHub Environments
- Dev environment
- Staging environment
- Production environment
- Environment protection rules
- Required reviewers
- Manual deployment approvals
- Job dependencies using `needs`

## Deployment Flow

Dev → Staging → Production

## Dev

The Dev environment is configured without approval.
Deployment happens automatically when the workflow starts.

## Staging

The Staging environment uses a required reviewer.
The workflow pauses until the deployment is approved.

## Production

The Production environment also uses a required reviewer.
Production deployment starts only after approval.

## Key Concepts

### Environment

An environment represents a deployment target such as:

- Development
- Staging
- Production

### Protection Rules

Protection rules control whether a deployment can proceed.

### Required Reviewers

Required reviewers allow authorized users to approve or reject deployments.

### needs

The `needs` keyword controls job execution order.

Example:

```yaml
staging:
  needs: dev