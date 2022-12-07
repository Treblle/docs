---
title: Flows
description: A flow is a series of API requests it takes to achieve a particular task.
layout: ../../../layouts/MainLayout.astro
---

> Watch this <a target="_blank" href="youtube.com/watch?v=Iizl4eFTWms">screencast</a> for an overview of Flows.

A series of API calls is called a Flow in Treblle.

Flows lets you group API [requests](/en/dashboard/requests) that together are used to achieve a particular task like registering a user.

Let's take registering a user for example.

Perhaps to register a user, your flow might include requests to do the following:

* Verify username
* Send email verification
* Verify email

With flows, Treblle makes it easy to communicate these series of API calls to someone that wants to integrate with your API as they can see which requests they have to make for each step, what data to be sent and what to expect back.

> To access your flows for a project, click on the Flows tab of that project.

## Create a new flow
To create a flow, click on the dropdown menu on a request and then click on the **Add to flow** button.

If this is your first time trying to add a request to a flow, you will be presented with a form that will prompt you to give the flow a **name** and **description**.

> If you already have flows in your project dashboard, you can click on the **Create a new flow** button to create a new flow.

Once you are done, click on the **Create flow and add request** button to both create a flow and the request to that flow.

## Add requests to a flow
If you already have one or more flows in a project, you can click on the top-right menu of a request and then click on the **Add to flow** button which will open a modal for you to select the flow you want to add the request to.

## View Requests
To view the requests in a flow, click on the flow's name in the **Flows** tab. You can also click on the drop-down menu to the right of a flow and click on the **View requests** link

## Share a flow
You can share a flow by clicking on the flow menu on the top right corner of a flow and then click on the **Share** button, a modal will pop up presenting you with a shareable link.

## Edit a flow
To edit a flow click on the flow menu on the top right corner of the flow and the click on **Edit**, a modal will pop up presenting you with a form to edit the flow's name and description. Click on **Save changes** when you are done to apply the changes you've made.

## Delete a flow
To delete a flow click on the flow menu on the top-right corner of the flow and click on the **Delete** button. You will be presented with a confirmation modal. Click on **Confirm** on that modal to delete the flow.
