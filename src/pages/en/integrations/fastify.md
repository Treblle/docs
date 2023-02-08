---
title: Treblle for Fastify
description: Integrating Treblle in Fastify
layout: ../../../layouts/MainLayout.astro
---

To integrate Treblle with [Fastify](https://fastify.io), we provide an official SDK for Fastify - [`treblle-fastify`](https://github.com/Treblle/treblle-fastify).

## Installation

```sh
npm i @treblle/fastify --save
```

## Register treblle-fastify
`treblle-fastify` is a Fastify plugin, so you need to register it.

```js
const treblleFastify = require('@treblle/fastify')

fastify.register(treblleFastify)
```

Notice you are not providing your `apiKey` and `projectId`, this is because `treblle-fastify` will look for the following environment variables:

* `TREBLLE_API_KEY`
* `TREBLLE_PROJECT_ID`

And use them for the `apiKey` and `projectId` respectively. That said, we recommend you set these environment variables in your `.env` file or your production server environment.

## Config options
The `treblle-fastify` plugin can optionally take the following properties.

* [`apiKey`](/en/dashboard#accessing-your-api-key)
* [`projectId`](/en/dashboard/projects#project-id)
* `additionalFieldsToMask` - defaults to an empty array `[]`

For example you can setup the `treblle-fastify` plugin like so:

```js
const treblleFastify = require('@treblle/fastify')

fastiy.register(treblleFastify, {
  apiKey: process.env.TREBLLE_API_KEY,
  projectId: process.env.TREBLLE_PROJECT_ID,
  additionalFieldsToMask: ['licensee_key']
})
```
