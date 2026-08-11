# Day 4 – Artifact Management

## 🎯 Goal

Learn how to store, share, download, and use build outputs using GitHub Actions artifacts.

---

## 📚 Topics

- Upload Artifact
- Download Artifact
- Artifact Retention
- Sharing artifacts between jobs
- Deploy using artifact

---

## 🛠️ Hands-on

This task demonstrates how a build output can be uploaded as a GitHub Actions artifact and then downloaded and used by another job.

### Workflow

```text
Checkout
   ↓
Create Build
   ↓
Upload Artifact
   ↓
Artifact Storage
   ↓
Download Artifact
   ↓
Verify Artifact
   ↓
Deploy