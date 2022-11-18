---
title: Masked fields
description: Treblle allows you to mask senstive data before it even leaves your server
layout: ../../../layouts/MainLayout.astro
---

Masking fields ensure certain sensitive data are removed before being sent to Treblle.

To make sure masking is done before **any data** leaves your server we built it into all our SDKs.

This means data masking is super fast and happens on a programming level before the API request is sent to Treblle. You can customize exactly which fields are masked when you're integrating the SDK.

Once you define a field you want to mask, our SDKs will try to find all instances of that field and replace the content with a bunch stars (****).

We'll look for the field name inside request and response headers as well as request and response data. Masking works across arrays of any depth, objects and keys.

When we're masking data we'll always replace the value of field with the exact number of star characters.

For example, if you're masking the `password` field and the user types in the password of `"12345678"`, we'll replace that with exactly 8 **star(*) characters**. This way you'll know exactly how many characters the user has entered.


## Masking Authorization header
One more special scenario is masking a field with the name of Authorization. In the API world, the Authorization parameter is usually found in request headers.

It contains information about the type of authorization you're using as well as the API key issued to your user.

An example would be: `"Bearer lsGPLl4k6Vc4J0VhnFaMBqetNtn1ofsB"` . When you specify you want to mask the authorization field we will only mask the API key value so in this case it would look something like this: `"Bearer ********************************"`. This way you'll still know what type of authentication the user has specified as well as how long the key was.

## Fields masked by default
To get you started with some super sensitive data, by default all Treblle SDKs will mask the following fields:

* password
* pwd
* secret
* password_confirmation
* passwordConfirmation
* cc
* card_number
* cardNumber
* ccv
* ssn
* credit_score
* creditScore
* api_key

## Custom masked fields
On top of the fields that get masked by default, all Treblle SDKs gives you the ability to define your own custom list of fields to be masked when integrating them in your programming language or framework.

For more information on how to do that for your programming language or framework specifically, please take a look at the documentation for that SDK in the **integrations** section of the docs.
