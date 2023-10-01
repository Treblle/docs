---
title: SDK development
description: Learn how to build a Treblle SDK for your language or framework.
layout: ../../layouts/MainLayout.astro
---

Treblle SDKs are at the heart of how Treblle works. They act as gateways through which you access the entire features of your Treblle dashboard.

## How Treblle SDK works

In most languages and frameworks, a Treblle SDK is essentially a middleware that sends the needed request and response data to your Treblle dashboard.

You can check out [`this`](https://github.com/Treblle/treblle-utils/blob/develop/treblle-payload-schema.json) JSON schema for the shape of the data to send to Treblle.

## Creating an SDK

### Request/Response data

To create an SDK for your framework or language, you need to make sure you can get access to the request and response data. Most often the way to do this would be via a middleware but this might not hold true for your particular use case.

### Data masking

Once you'd made sure you can get the request and response data, you'd also need to implement a masking algorithm.

If the SDK you are creating is written in JavaScript/TypeScript then you can use the masking algorithm provided in [`treblle-utils`](https://github.com/treblle/treblle-utils)

See more on the [Masked fields](/en/security/masked-fields) section of this docs.

### Send payload to Treblle

The last piece of logic your SDK needs to do is send the payload to Treblle. This is done via a POST request to one of the following endpoints.

- https://rocknrolla.treblle.com
- https://punisher.treblle.com
- https://sicario.treblle.com

You can randomly pick one of the mentioned endpoints to send the payload to. Here is an implementation in JavaScript which randomly picks an endpoint to send the payload to. This act as a sort of ad hoc load balancing strategy implemented within the SDK itself.

```js
function getTreblleEndpoint() {
  const treblleBaseUrls = [
    'https://rocknrolla.treblle.com',
    'https://punisher.treblle.com',
    'https://sicario.treblle.com',
  ]
  const randomUrlIndex = Math.floor(Math.random() * treblleBaseUrls.length)

  return treblleBaseUrls[randomUrlIndex]
}
```

### Configuration

Your Treblle SDK should provide a way for its user to specify the Treblle Project ID, Treblle API Key and additional fields to mask.
