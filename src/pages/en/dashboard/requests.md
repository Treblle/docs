---
title: Requests
description: Requests are calls to your API endpoints. In Treblle you can find requests made to your API in the Requests tab of your project's dashboard
layout: ../../../layouts/MainLayout.astro
---

Requests are calls to your API [endpoints](/en/dashboard/endpoints).

In your [project's](/en/dashboard/projects) dashboard, you can see all requests in the **Requests** tab

At a glance, each requests on your Treblle dashboard shows the following information:

* The HTTP method of the request
* The status code returned for the request
* The [endpoint](/en/dashboard/endpoints) that was requested
* When the request was made
* The device the request was made from
* The location the request was made from
* If the request was authenticated
* Whether the request returned JSON or not
* If the response to the request was fast or not
* The response size
* The load time of the request
* If the request had problems or not

> You can click on the request endpoint to see more detailed information about a request

## Share request
You can share a request by clicking on the dropdown menu on the top-right corner of a request and then click on **Share**. You will get a modal with a share URL for the request you can copy. Click on the **Copy share URL** on modal to copy the URL.

### Expiration date
When sharing a request you can chose an expiration date for the URL you shared. You can chose for the URL to expire in:

* 1 hour from now
* 1 day from now
* I week from now
* 1 month from now

> The default expiration date for shared request URLs is 1 hour from now

## More like this
If you want to see more requests like a request, you can click on the dropdown on the top-right corner and click on **More like this**

## Comments
On a request detail page, click on the floating plus button at the bottom right of the page and click on comment, a comment drawer will appear with a text box for you to comment on a

## Download request
You can download a JSON file of a request by clicking on the dropdown menu on the top-right corner of a request and then click on **Download**.

## Filters
You can filter the endpoints in the **Requests** tab of a project by clicking on the **Filter** button to access the filters drawer for endpoints.

In the filters drawer, you filter endpoints by:

* Status: either, with problems, or without problems
* HTTP method
* Response code
* [Endpoint](/en/dashboard/endpoints)
* Device
* Location
* Request parameters
* [Comments](/en/dashboard/requests#comments)
* App version
* Timeframe

Click on the **Filter** button to apply the filters you selected.

## Delete request
> When you delete a request we'll remove any references to it right away but we'll also show a list of all deleted requests including who deleted it and when just to be 100% transparent.

You can delete a request by clicking on the dropdown menu on the top-right corner of a request and then click on **Delete**. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.
