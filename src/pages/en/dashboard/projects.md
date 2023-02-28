---
title: Projects
description: In Treblle, a project is the starting point for your API management and monitoring.
layout: ../../../layouts/MainLayout.astro
---

The starting point of Treblle is a project so for every API you have, you create a project.

A project can be:

- a new API
- service in your microservice architecture,
- a new version of your API
- a new [environment](/en/dashboard/projects#environment) for your API

## Creating a project

<iframe width="560" height="315" src="https://www.youtube.com/embed/3pBIJhua7ac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

To create a project, <a href="https://app.treblle.com/login" target="_blank">log in</a> to Treblle and head over to your Treblle <a href="https://app.treblle.com">dashboard</a>, click on the <a href="https://app.treblle.com/projects/create" target="_blank">Create new project</a> link and you will be presented with a form in the next page to fill in required details for your new project.

To create a project the following details are needed.

### Name of the project

The name of your project should be memorable so you and your team can easily find it.

### Base URL

The base URL of your API e.g https://api.example.com.

### Your platform

Here you select the platform your API is built in e.g PHP, Laravel, Node, etc.

### Environment

In Treblle, you can have one of 4 environments

- **Production** - Your production API consumed by actual users.
- **Local** - Your local testing API mostly accessible over `localhost`
- **Staging** - Your API consumed my a set of your actual users or beta testers
- **Development** - A testing API by your development team.

> Treblle will only send you notifications by default when a project is in the production environment.

### Team members

Optionally you can provide a comma separated list of email addresses for your team members to be invited to your project. Invited members have access to see what's in the project they are invited to.

## Project dashboard

Once you successfully [create](/en/dashboard/projects#creating-a-project) a project, you get to see the integration instructions for your chosen platform.

## Project ID

Each project in Treblle has it's own unique ID so you can use them to separate data across your microservices, enviroments or APIs.

You also need the project ID for integrating with a Treblle SDK in your codebase.

Your project ID will be underneath your project's name in the project's dashbaord.

## Transfer project

If you no longer wnat to be the owner of a project, you can transfer the project to a team member by heading over to the settings tab in the project dashboard and clicking on the **Transfer project** button and following the instructions to transfer the project.

## Leave project

To leave a project, head over to the settings tab in the project dashboard and click the **I want to leave** button. A confirmation modal will appear for you to click on **Confirm** if you want to proceed.

## Delete project

> When you delete a project, Treblle can no longer retrieve your data.

To delelte a project, head over to the settings tab on the project's dashboard and at the bottom of the page, click on the **Delete project** button and then follow the prompts to finish the delete process.

## Filters

You can filter projects on your Treblle dashboard by clicking on the Filters button in your dashboard to access the Filters drawer

In the filters drawer, you filter projects by:

- SDK - projects that uses a particular Treblle SDK
- Ownership - Either, owned by me, or owned by others
- Environment - any, local, development, production, or staging
- Sort by - You can also sort projects by Name, number or requests, Treblle score, recently requests, number of problems

Click on the **Filter** button to apply the filters you selected.

## Export filtered projects

Once you've filtered your projects, you can export the filtered projects to CSV by clicking on the **Export results to CSV** button on the bottom of the filters drawer.
