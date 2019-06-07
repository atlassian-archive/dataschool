---
title: Identifying Key Roles
section: book
number: 50
authors:
- author: _people/matt.md
reviewers:
- reviewer: _people/dave.md
image: ''
meta_title: ''
description: ''
is_featured: false
writers:
  writers: []
published: true
img_border_on_default: false
feedback_doc_url: https://docs.google.com/document/d/1JK4JtcC-qqVX-vt4Xe8S5i0f5cspvrBeEuW6Ej8ucYc/edit?usp=sharing
---

![](/assets/images/how-to-design-a-dashboard/identifying_key_roles/groupPic.png)

In a dashboard design project, multiple people are involved in making it a success. Key stakeholders need to be defined from the start to facilitate optimal collaboration and communication during the appropriate steps of the process. There are 4 key stakeholders with corresponding responsibilities in a typical dashboard project.

These roles may be fulfilled by the same person but typically they are not.

## Key Stakeholders

1. Designer

![](/assets/images/how-to-design-a-dashboard/identifying_key_roles/allHighlighted.png)

This is the person that is responsible for creating the dashboard, and managing the project. As you are the one reading this book this is likely you. Since you will be involved in all steps you should be in charge of coordinating all efforts of the project.

Author responsibilities:

* Define the stakeholders
* Metric calculation
* SQL queries
* Chart determination
* Dashboard build
* Point Person approval

### 2. Audience

![](/assets/images/how-to-design-a-dashboard/identifying_key_roles/deployHighlighted.png)

This stakeholder group is the most passive in the creation of the dashboard, but the most active once the dashboard is finalized.

Audience Responsibilities:

* Provide feedback on whether or not the dashboard is useful

There are no direct responsibilities for this role during the design and build phase, however, all design decisions should take into account how the consumer will interact with the dashboard. Pretty much every decision that is made in this project should be made with the Consumer in mind. Their product or business knowledge, business role, and any cultural or other sensitivities NEED to be considered when completing almost every step of the dashboard project.

Questions to keep in mind about Consumers:

* What devices will they use to view this dashboard?
* How much context is needed for each metric?
* How often will they be referring to this dashboard?

These questions will help guide your design decisions so that the dashboard is most effective for the consumers.

However there is one audience member who is very involved in the process, we will call this individual the Point Person.

### 3. Point Person

![](/assets/images/how-to-design-a-dashboard/identifying_key_roles/notBuild.png)

The Point Person is the one that is requesting the dashboard. This is the person who has the business need for creating the dashboard, such as wanting to understand the marketing funnel or how users are engaging with the product over time. They should be involved in all of the decision points since they have the most context to ensure the dashboard is useful.

Point Person’s responsibilities:

* Provide the decisions this dashboard will inform
* Identify the key metrics
* Identify the audience of this dashboard
* Provide approval on the dashboard design

### 4. Data Gatekeeper

![](/assets/images/how-to-design-a-dashboard/identifying_key_roles/buildHighlighted.png)

This is a member of the data team that understands the data source, schema, and any other library that will be used to create the metrics. This may also be you or perhaps not.

Data Gatekeeper’s main responsibilities include:

* Setting up permissions and access to the data
* Helping others understand the data source schema
* Helping with SQL queries

Figuring out which columns to use in a visualization and in a dashboard can be challenging since many databases are not well documented and the data is not modeled appropriately. Data Gatekeepers can make this much easier since they are familiar with the schema and can grant you permission to tables that you may not have access to. They may also write the SQL queries themselves or help you optimize queries that you have written.

## Summary

* Creating a great dashboard is a team effort, and all roles are vital in its completion.
* Designers coordinate the project and create the dashboard
* Consumers are the audience, and the design should meet their needs
* Point People define the central decisions that a dashboard needs to support
* Data Gatekeepers help find the relevant data in the database
