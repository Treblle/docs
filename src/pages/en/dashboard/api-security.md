---
title: API security
description: Treblle automatically performs over 13 different API-specific security audits on every requests to your API
layout: ../../../layouts/MainLayout.astro
---

Treblle automatically scans every [requests](/en/dashboard/requests) to your APIs for the most common security threats and gives each request a [threat level](#threat-levels) if one or more security threat is found on the request.

## Threat levels

When a request is sent to your API, Treblle assigns one of the following threat levels to that request if it has a known security threat:

- [Low](#low)
- [Medium](#medium)
- [High](#high)

> Requests that do not have any known security threats will not get a threat level.

## Low

A request will have the threat level of **Low** if Treblle detects one or more of the following security threats:

### IDs vs UUIDs

Using UUIDs (Universally Unique Identifiers) instead of IDs on an API provides several benefits. UUIDs are globally unique and enhance security by preventing ID guessing or enumeration attacks, as the identifiers are not sequential or predictable.

By examining the request URL, Treblle can automatically detect whether or not you're using IDs on your endpoints.

### Rate limiting

Rate limiting is crucial for API security as it helps prevent abusive or malicious behavior by limiting the number of requests a client can make within a specified time frame.

It mitigates the risk of unauthorized access, DDoS attacks, and resource exhaustion, ensuring fair and controlled usage of API resources while maintaining system stability and security.

Treblle looks for the `x-ratelimit-*` header in the response payload to see if you correctly use rate limiting.

### Content Labeling

The Content-Type header ensures that the API data is correctly interpreted and processed. The API can validate and sanitize the incoming data by specifying the content type, **guarding against cross-site scripting** (XSS) or content spoofing attacks.

It also helps prevent unintended data processing errors and promotes interoperability between different systems consuming the API.

Treblle checks to see if the `Content-Type` header exists and if its value is set to `application/json`.

### MIME Sniffing

The `X-Content-Type-Options` plays a vital role in protecting the API from MIME sniffing attacks. By setting the value of this header to `nosniff` it instructs the browser to strictly adhere to the declared `Content-Type` and prevents it from attempting to sniff or interpret the response data based on its content.

Treblle checks to see if the `X-Content-Type-Options` header exists and if its value is set to `nosniff`

### Force Secure Connection

The HTTP Strict-Transport-Security (HSTS) header is crucial for enhancing API security by **enforcing secure communication over HTTPS**.

When a server includes the HSTS header in its response, it instructs the client's browser to always connect to the API using HTTPS, even if the user enters an HTTP URL.

This prevents potential downgrade attacks and ensures that all communication remains encrypted, reducing the risk of eavesdropping, tampering, and man-in-the-middle attacks.

Treblle looks for the `strict-transport-security` header in your API responses.

### Embedding Prevention

The `X-Frame-Options` header plays a significant role in API security by **mitigating clickjacking attacks**. Setting this header's value to `deny` or `sameorigin` restricts how the API can be embedded within a web page using frames or iframes.

This prevents attackers from tricking users into interacting with the API through maliciously crafted pages, protecting against cross-site scripting (XSS) and other attacks that exploit the user's session or perform unauthorized actions on their behalf.

Treblle checks to see if the `X-Frame-Options` header exists and its value is set to `deny`.

### Security Policies

The `Content-Security-Policy` (CSP) allows developers to **control and limit** the types of content that can be loaded and executed on a web page.

By specifying a policy, such as restricting the allowed sources of scripts, stylesheets, or other resources, CSP helps **prevent various types of attacks**, including cross-site scripting (XSS) and data injection attacks.

Treblle checks to see if the response headers for your requests have a `Content-Security-Policy` header defined.

### Content Type Specification

The `Accept` header helps establish a **secure and reliable communication channel** between the client and the API.

The `Accept` header ensures that the API provides data in a format that the client expects. This helps prevent potential vulnerabilities or errors caused by mismatched data formats and contributes to the overall security and stability of the API ecosystem.

Treblle checks the headers of your request to see if the `Accept` header exists and its value is set to `application/json`.

### Method Limiting

The `Allow` header informs the client about the HTTP methods that are allowed by the API endpoint. By specifying the allowed methods, the `Allow` header helps **prevent unauthorized or malicious access attempts** to the API.

It ensures that clients interact with the API using only the designated and intended methods, reducing the risk of unauthorized actions and enforcing proper access controls.

Treblle checks the headers of your responses to see if the `Allow` header exists.

## Medium

A request will have the threat level of **Medium** if Treblle detects one or more of the following security threats:

### Authorization

API Authorization is crucial for ensuring secure access and protecting sensitive data.

It helps control and verify the identity and permissions of individuals or systems accessing an API, preventing unauthorized access and safeguarding against potential breaches or misuse of data.

Treblle can automatically detect all forms of authorization on every API request and check to make sure it's being used properly.

## High

A request will have the threat level of **High** if Treblle detects one or more of the following security threats:

### SQL Injection

SQL injection is a vulnerability that occurs when an attacker **manipulates the input parameters** of an API to inject malicious SQL statements.

It allows the attacker to **execute unauthorized database queries** and potentially gain access to sensitive data or modify the database. To prevent SQL injection, sanitizing and validating user input is crucial.

Treblle analyzes the payload sent with every API request and detects the most common SQL injection patterns.

### IP Reputation

IP Reputation check **evaluates the trustworthiness and reputation of an IP address** based on its historical behavior and associations. It helps identify potential threats, such as spam or malicious activity, by assessing the IP's track record and reputation within the online community.

Treblle uses it's **own network as well as 3rd party** services to check the reputation of your users IP addresses.

### Secure Connection

Using HTTPS on an API is **essential for maintaining data confidentiality and integrity** during transmission.

It encrypts the communication between clients and the API, preventing eavesdropping and tampering by malicious actors, thereby enhancing security and protecting sensitive information.

Treblle **automatically detects** whether or not the requests your users are making are using HTTPs instead of HTTP.
