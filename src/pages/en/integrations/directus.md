---
title: Treblle for DirectUs
description: Integrating Treblle in Lumen
layout: ../../../layouts/MainLayout.astro
---

[Treblle](https://treblle.com/) integration for [Directus](https://directus.io/), integrated as an extension in a form of hook, using `middlewares.after` event.

## Install

```
npm install @treblle/directus-extension-treblle
```

# Configuration

Use environment variables for providing Treblle credentials and configuration. Directus already supports `.env` file, so it enough to just append your variables there.


## Treblle Configuration

```
# Required
TREBLLE_API_KEY=your_api_key
TREBLLE_PROJECT_ID=your_project_id

# Optional
# TREBLLE_SHOW_ERRORS=true
# TREBLLE_FIELDS_TO_MASK=["password"]
```
