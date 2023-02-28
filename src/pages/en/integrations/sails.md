---
title: Treblle for Sails
description: Integrating Treblle in Sails
layout: ../../../layouts/MainLayout.astro
---

To integrate Treblle with [Sails](https://sailsjs.com), we provide an official SDK for Sails - [`treblle-sails`](https://github.com/Treblle/treblle-sails).

## Installation

```sh
npm i @treblle/sails --save
```

## Setting up credentials

Treblle needs you to specify your project Id and API key. `@treblle/sails` makes this easy to do by expecting you to set it up in `config/local.js` as:

```js
// config/local.js
treblle: {
  apiKey: '<YOUR_TREBLLE_API_KEY>',
  projectId: '<YOUR_TREBLLE_PROJECT_ID>'
}
```

`@treblle/sails` will also check your environment for the following environment variables:

- `TREBLLE_API_KEY`
- `TREBLLE_PROJECT_ID`

## Config options

`@treblle/sails` also checks `config/treblle.js` for config options like `apiKey`, `projectId`, etc. So you can create a `config/treblle.js` file in your project to look like this:

```js
// config/treblle.js
module.exports.treblle = {
  apiKey: '<YOUR_TREBLLE_API_KEY>',
  projectId: '<YOUR_TREBLLE_PROJECT_ID>',
  additionalFieldsToMask: ['key1', 'key2'], // optional
  routesToMonitor: [], // optional
}
```

### routesToMonitor

One config worthy of note is the `routesToMonitor` array. By default, the `routesToMonitor` array has the following routes:

```js
{
  routesToMonitor: [
    'GET r|^((?![^?]*\\/[^?\\/]+\\.[^?\\/]+(\\?.*)?).)*$|',
    // (^^Leave out assets)
    'POST /*',
    'PATCH /*',
    'PUT /*',
    'DELETE /*',
  ]
}
```

The above tell the `@treblle/sails` SDK to monitor all routes except asset routes(asset routes include routes to images, CSS stylesheets, etc)

You can override the `routesToMonitor` array by passing the routes you want to monitor in `config/treblle.js`.

For example if you want to monitor only `/api/*` routes, you can pass the config like so:

```js
// config/treblle.js
module.exports.treblle = {
  routesToMonitor: ['/api/*'], // monitor routes that starts with /api
}
```
