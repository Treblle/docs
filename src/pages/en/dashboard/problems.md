---
title: Problems
description: Problems are code base errors captured by the Treblle SDK. When Treblle captures an error we will show it in the problems tab of a project
layout: ../../../layouts/MainLayout.astro
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/tqjh7a_CsSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Problems are code base errors captured by the Treblle SDK. When Treblle captures an error we will show it in the problems tab of a project

Treblle captures both codebase errors and non-codebase errors for example, Treblle can check misspelling that might cause problems in your API [documentations](/en/dashboard/api-documentation).

When Treblle notice something that is not normal for like you were having an average load time of **50ms** and after a while you start getting a load time of **500ms**, Treblle will create a new problem in the problems tab to let you know of this change.

You can see at a glance the following information about a problem:

- The HTTP method of the problem (if applicable)
- The problem [severity](/en/dashboard/problems#problem-severity) level
- The number of occurrences of that problem in your project
- The status of the problem - closed or open

## Problem severity

A problem in Treblle can have one of the following severity:

- Low
- Medium
- High

## Close a problem

If you want to close a problem in the **Problems** tab, click on the dropdown menu in the top-right corner of the problem and click on **Mark as closed**. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.

## Filters

You can filter the endpoints in the **Problems** tab of a project by clicking on the **Filter** button to access the filters drawer for endpoints.

In the filters drawer, you filter endpoints by:

- Is resolved: either, yes or no
- HTTP method
- Group
- [Endpoint](/en/dashboard/endpoints)
- Severity

Click on the **Filter** button to apply the filters you selected.
