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
summary: ''
is_featured: false
writers:
  writers: []
published: false

---

![](https://lh5.googleusercontent.com/PUuoxj5zQ8sFlU4mFL1dwuVxFCoLw2OSP1HIjp3LpiqxM978gzy_qjYWQ1oEOKF6nVksqVTJOckQDQhK62azgWgrsU4LaPz_q0aIqKDJHZ7FF7Bn7_R7DgLMJSDWLYPa09PO1edx =624x217)

In a dashboard design project, multiple people are involved in making it a success. Key stakeholders need to be defined from the start to facilitate optimal collaboration and communication during the appropriate steps of the process. There are 4 key stakeholders with corresponding responsibilities in a typical dashboard project.

These roles may be fulfilled by the same person but typically they are not.

## Key Stakeholders

1. Designer

![](https://lh3.googleusercontent.com/Fa5qiSyQF6nU8p967d2JqV2mP5tqiZBcchHrwXF6164GJVSEuvXXrRC_KVh_QhH2BGVuE0h5iDL5c-skOYLIS-MC9w07bejQyKbYVmcyif09RhjomTeo3toe-Xh7_yLA72IWFuVO =624x93)

This is the person that is responsible for creating the dashboard, and managing the project. As you are the one reading this book this is likely you. Since you will be involved in all steps you should be in charge of coordinating all efforts of the project.

Author responsibilities:

* Define the stakeholders
* Metric calculation
* SQL queries
* Chart determination
* Dashboard build
* Point Person approval

### 2. Audience

![](https://lh4.googleusercontent.com/s9fA3MLsvUCZ3HJ6-JyevGj_wCn_v4mIzpcafCIMYeA80A0cPPfyb3lUvhlkwYoS_CNGt47mxRjgSE2Sj2eovJVRgT3UAc2PbeYwwQG-CNIFOGeZipgF8wbDZs5ZNSkA3eS7ua9k =624x93)

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

![](https://lh5.googleusercontent.com/og0j0gUz_8Q9NdrcVox-d_0gY2kGBcYH35cJffOTZd5zluiA-tJV0ZLTUPhzsaz5qoUtqBMLOevquM2eOtC0yOLTHFLfQOI3JIrNFHK7UkxvTwR2XPgcIeCBU5Tt-cXzhc325CDH =624x93)

The Point Person is the one that is requesting the dashboard. This is the person who has the business need for creating the dashboard, such as wanting to understand the marketing funnel or how users are engaging with the product over time. They should be involved in all of the decision points since they have the most context to ensure the dashboard is useful.

Point Person’s responsibilities:

* Provide the decisions this dashboard will inform
* Identify the key metrics
* Identify the audience of this dashboard
* Provide approval on the dashboard design

### 4. Data Gatekeeper

![](https://lh6.googleusercontent.com/F-fAVrZV_flmXlvHcx9Kpp5KQu6vPcpYdxS_ewMUAJDGHOJeKjrTmY8EipclJ53JVWTMq3vklCLOowRwN39Avr0BgnJpECBgLpArukQdPFLQmkiFBeP--DpgNhgjruke8XPNgv3i =624x93)

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