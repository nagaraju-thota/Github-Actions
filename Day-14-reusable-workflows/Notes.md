# Day 14 - Reusable Workflows

## Topics

- workflow_call
- Reusable Workflows
- Inputs
- Outputs
- Composite Actions

## workflow_call

`workflow_call` allows one GitHub Actions workflow to be called from another workflow.

## Inputs

Inputs are values passed from the calling workflow to the reusable workflow.

Example:

```yaml
with:
  node-version: "18"