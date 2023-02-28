---
title: Endpoints
description: Endpoints are used to represent a part of your API that can be accessed
layout: ../../../layouts/MainLayout.astro
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Iu9FNsDC-vY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Your API endpoints are the URIs that exposes a particular part of your API for communications via [requests](/en/dashboard/requests).

Once you have integrated your API with Treblle and your API start receiving requests, Treblle will automatically identify the endpoints in your API and aggregate them for you in the **Endpoints** tab of your project dashboard.

For each endpoint in the **Endpoints** tab of a project dashboard, you see at a glance the follwoing information:

- The HTTP verb of the endpoint e.g GET, POST, etc
- The last time a request was made to the endpoint
- The total number of requests the endpoint has received
- The average load time of the endpoint
- The number of problems the endpoint has
- The number of requests the endpoint is receiving per minute
- The [endpoint group](/en/dasboard/endpoints#endpoint-groups) the endpoint belongs to
- A graph showing the requests the endpoint has received for the day

## View requests

You can view the requests made to a particular endpoint in the **Endpoints** tab by clicking on the **View requests** link on the endpoint. Alternatively you can click on the dropdown menu on the top-right corner of an endpoint and click on **View requests**

> You can view the API documentation for your project by clicking on the **Docs** link in a project's dashboard

## Add to docs

You can choose to add an endpoint to the auto-generated API docs by clicking on the dropdown menu on the top-right corner of an endpoint and then clicking **Add to docs**. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.

> When you add an endpoint to your docs, the endpoint and its documentation will become visible to anyone reading the API documentation for a project.

## Remove from docs

Once an endpoint is already in your project's API documentations, you can remove an it from the API documentation by clicking on the dropdown menu on the top-right corner of the endpoint and click on **Remove from docs**. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.

> Once you remove an endpoint from the API documentation of your project, it will no longer be visible to anyone reading the API documentation for that project

## Mute an endpoint

> In Treblle, when you mute an endpoint, requests made to that endpoint will no longer be visible anywhere on your Treblle project. Also, you will not get alerts when something goes wrong with the muted endpoint.

To mute an endpoint, click on the dropdown menu on the top-right corner of the endpoint and click on the **Mute** button. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.

## Unmute an endpoint

> In Treblle, when you unmute a muted endpoint, you will be able to see all the requests from that endpoint again and get alerts when something goes wrong on any of them.

To unmute a muted endpoint, click on the dropdown menu on the top-right corner of the endpoint and click on the **Unmute** button. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.

## Add alias to an endpoint

You can give a particular endpoint an alias - which is another name you can use when filtering for that endpoint

## Endpoint groups

Treblle automatically groups your endpoints. For example if you have two endpoints `/users/:id` and `/users/verify`, Treblle will group then under the `users` endpoint group. This makes it easy to [filter](/en/dashboard/endpoints#filters) for endpoints by groups.

## Edit endpoint group

If you want to change the group an endpoint was automatically placed in by Treblle, you can click on the endpoint dropdown on the top-right corner of the endpoint and click on **Edit group**. You will be presented with a modal with a box to select a new group to place the endpoint. Click on **Save changes** when you are done.

Alternatively in the same modal you can create a new endpoint group by clicking on the **Create new group** button, you will then be presented with a text box to enter the new group name. Click on **Save changes** when you are done.

## Delete endpoint

> When you delete an endpoint in your Treblle project dashboard, Treblle will dissasociate any requests that belongs to that endpoint and the endpoint will also be removed from the API documentation of your project

To delete an endpoint, click on the endpoint dropdown on the top-right corner of the endpoint and click on **Delete**. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.

## Filters

You can filter the endpoints in the **Endpoints** tab of a project by clicking on the **Filter** button to access the filters drawer for endpoints.

In the filters drawer, you filter endpoints by:

- Has problems? - for endpoints having problems or not
- HTTP method
- [Endpoint group](/en/dashboard/endpoints#endpoint-groups)
- [Muted](/en/dashboard/endpoints#mute-an-endpoint) - for endpoints muted or not
- Included in docs - for endpoints included in the API documentation or not
- Sort by - You can also sort endpoints by Name, number or requests, load time, or RPM(Requests per minute)

Click on the **Filter** button to apply the filters you selected.

## Export filtered endpoints

Once you've filtered your endpoints, you can export the filtered endpoints to CSV by clicking on the **Export results to CSV** button on the bottom of the filters drawer.
