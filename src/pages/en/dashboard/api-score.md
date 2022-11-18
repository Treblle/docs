---
title: API Score
description: Treblle measures the quality of APIs to try to make sure that the API follows a standard set of best practices.
layout: ../../../layouts/MainLayout.astro
---

Treblle measures the quality of APIs to make sure that the API follows a standard set of best practices.

Treblle measures API Scores across 3 categories

* [Performance](#performance)
* [Security](#security)
* [Quality](#quality)


> To access the API score for a project, click on the **API Score** tab of that project.

## Performance

### Content encoding

Using content encoding on your API can reduce the payload size of your responses by 70 to 95 percent.

That means you save money on bandwidth and given you're returning a much more compressed and optimized payload it also means things load much faster for your end use.

The implementation is dead simple. Return a [Content-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) header with the value of gzip (the most common and widespread compression algorithm) and you’re done!

### HTTP2/3 support

HTTP/2 comes with many performance originated features that enable your server to serve faster API responses.

Things like Multiplexing, Server push, Header compression and others.

HTTP/3 is even faster and more powerful mainly because it’s using a new networking protocol called QUIC versus the good old TCP.

You should upgrade your HTTP version to the latest one available or use cloud providers like Cloudflare or many of the API gateway that support the newest version of HTTP out of the box.

### Average response size

Average response size represents the amount of data you return on your API endpoints. As you might imagine the less data you return the faster your API is.

You should aim to keep your response below 100KB if possible.

The fastest way to optimize your response sizes is to use pagination when returning large quantities of data, to optimize your response objects so they contain only the data that is need, and to use compression whenever possible.

### Average load time

The load time of your API is the most important performance metric on your API.

It directly impacts the end user and the slower your API is the poorer the experience for the end user. In most cases the number one cause of longer load times are database related problems and optimizations.

So make sure you are optimizing your queries and returning only the data you need. You should aim to have an average load time below **150ms** for a good experience and even lower for an amazing experience.

## Security

### HTTPs support

HTTPs uses an encryption protocol called TLS to encrypt communication between your end-users and your API.

This means that simply by using HTTPs you are adding an additional layer of security to your API that protects your users and their data. HTTPs is the de-facto standard and you should definitely be using HTTPs.

You can get an SSL certificate for free by using any of the major cloud providers or services like Cloudflare and Let’s encrypt.

### Authentication

Authentication is the simplest and most important thing you should do on your API.

It allows you to secure your API, know who is accessing it and when and more importantly easily revoke access to anyone who is behaving as a bad actor.

There are many different types of authentication on your API but the simplest and most common one is called: Bearer Authentication.

To use Bearer authentication you should send a header of `Authorization` with the value of Bearer followed by a unique key that is used to identify a user.

## Quality

### JSON response

Properly labeling your API is quite important because it instructs clients who are reading data from your API how to behave.

When using JSON based REST APIs you should always return the proper headers to make sure that your content is always returned and requested in JSON format.

To do that simply return a header of `Content-Type` with the value of `application/json`.

### Version support

Versioning your API allows you to make changes to your endpoints, responses, objects and structure without impacting current clients and users.

The sooner you start using versioning on your API the less problems you’ll have in the future.

The simplest way of versioning is to use URL based versioning which implies you will have URLs like `domain/api/v1/auth/login` or `domain/api/v2/auth/login`. You can easily differentiate between different versions of your API and use any of them at the same time.

### Error ratio

One of the most important things on your API is to not have errors and problems on your API.

Not only does it degrade the user experience but also requires entire teams of developers to try to understand what is going on, who needs to fix the problem and deploy the changes to your API.

Treblle tracks code-based errors and alerts your team when they happen - so the only thing you need to do is make sure you fix them.
