---
section: Data Warehouse
title: Single Source of Truth Architecture
meta_title: Data Warehouse Single Source of Truth
description: Learn why you should build a Single Source of Truth in your Data Warehouse.
  Overcome common obstacles and empower your colleagues
number: 31
authors:
- _people/tim.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1OTMitbsvp76MoOw6whTNpUDBc9_u6eXHFLtfJ6yZFbA/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 9

---
When multiple people ask the same question and use data to get answers that aren’t the same, it creates doubt in all of the data in your organization. This is demoralizing for everyone and time consuming to figure out who if either was actually right. Unfortunately, this is typical when data has not been cleaned up into a Single Source of Truth.

People get inconsistent results because:

* Data sources change
* Schemas are overly complex
* Table and column names are confusing
* Undefined Metrics in the data

## What is a SSoT Architecture?

A Single Source of Truth is a database where the data is accurate and is used by everyone in a company when querying for data.

**_The promise of a Single Source of Truth is accuracy across your organization._**

This is an obvious thing that a company want but a lot of companies struggle to ever deliver this. Creating a Single Source of Truth requires data engineering effort. Let’s explore the problems that SSoT solves, where it often goes wrong, and best practices:

## Data Sources

Companies buy and use services and tools that generate data to conduct their business. The set of services and tools providing data (data sources) changes as companies grow or use cases shift. Before you have built a single source of truth, your company will likely have data sources that overlap in terms of what they track. You will also have data from data sources in your data lake that the company don’t use anymore, but the data is still needed for certain analyses.

Imagine you were tracking sign-ups via Hubspot and then after a year started using Salesforce to track sign-ups. The Salesforce data will be empty before the date you started using it and the google analytics data might not be as well maintained going forward. To an analyst, when they go to query for sign ups it will be unclear which data source they should use.

### Consolidate Data Sources

When your company has used multiple tools to track the same type of data, if you can, migrate the data from the previous tools into the latest tool. If this is not an option, use the data warehouse to create a table which unions the data from both sources so that the historical record is not lost and to have one place to go to for the relevant metrics. This will require some renaming and cleaning to accomplish.

![](https://lh5.googleusercontent.com/QeJLs7zZHh01xpwnfDoY_fh-0tx25R3oMCpLDpn7znIUNuP9V-y7ncl6TP42dztFq4813d8G-dpsb7ZY2-slncBSwNsmn3wdqCHAilMy01vaxdaWSRuw_R4O7_pBCBkRrt4WVsdp =502x406)

In addition, if you want to maintain access to old/unused data sources from your Data Lake in your Data Warehouse, you can label data sources as deprecated or approved to help guide people during their analysis.

![](https://lh3.googleusercontent.com/qmlE0lA9TL7LyBpOfAq3DNjB1yBggNEWF4QmDnKgVLzf-8_A6dgoNyo3xlnlob0_Q2hDVKbHoXWqTKgLf2t_ZCpjsmpQQnrzIoPRN6C97cE4P3RWwWmKesJeBndVOX41OzcB4U5c =624x340)

## Simplify Schema

In a Data Lake the schema reflects in app logic and follows best practices such a 3rd normal form so that updating values will not produce errors. This type of schema can be difficult to navigate and many tables will never be used in an analysis. In the past books recommended using dimensional modeling to reduce the schema complexity to make it easier to query and more performant. Due to advances in BI tools such as Chartio and Data Warehouse technologies dimensional modeling is no longer worth the effort.

### Simple Schema

We create a single source of truth by creating views on top of the existing schema. There is no need to move away from 3rd normal form. The main thing we want to do to simplify the schema is to not include tables in the new views that only contain app specific logic and are not useful for analysis. However if you do want to make it even easier to work with a specific set of data you can create a wide table (view) that does all the joins. This can sit alongside the cleaned up normalized version of the data warehouse.

## Simplify Tables and Columns

Table and column names are typically created by engineers to be used by the application the data is from. Table names, column names, and even a columns whole purpose for being in the table can be confusing to whoever did not write the code. This makes it challenging for business users to analyze the data without consulting with the engineer.

### Naming convention and style guide

When going through and recreating the schema with views of the relevant tables you should also clean up what is in each table. Do not include irrelevant columns and rename any columns that are confusing. Create and follow naming conventions to help people analyze data consistently because it clarifies what every column is and how it can be used.

Here are some naming conventions we follow at Chartio:

![](https://lh5.googleusercontent.com/E_l0K01z4nrIz7Pf00zFHcirNqLkxi4I2Kj2TaEKZAqHN4LxVWpdZ8kww8IfWC0Cv8ECPYNSRCaJ-wXXsoPMfKagM05de2xyWDXAiQsHPZ1Kav2FtFr7PBWvJgMkeL02rAzJRahN =624x357)

Publish this style guide and distribute it among all of your employees, adoption of known terms becomes easier and easier.

## Metrics

There are a lot of different ways to measure how a business is performing. Some are fairly well known such as Monthly Active Users or Number of Trials started. In most businesses getting an accurate count on a metric is difficult because you need to filter out irrelevant data:

* Test accounts
* Internal Company emails
* Non product-related page visits
* Users that are no longer employed by a client company

Not filtering out the right data will affect your analysis negatively. If presented to others and they have a conflicting analysis it will cause everyone to lose trust in the data.

Another more subtle problem with metrics are their abbreviations. If Monthly Active Users is abbreviated as MAU in the database, it may be misinterpreted in someone else's analysis. Do not assume everyone understands the abbreviation for the metrics you are reporting.

### Create Standard Metrics

To define the calculation of a metric, create a Dashboard with this metric in it and provide text on the dashboard to explain how it was calculated and what has been filtered out. Make this easily searchable!

![](https://lh6.googleusercontent.com/VOMVWgVUqeFi8fa6VxPOa7Z_qEAEqUg2-IChyiIO0CoD0JUXbB1GDZVn-Pci2TUs4yIzMs5Va2Zft2Byv93YTka8C-Q7GASiE8aX-U29cKdYR84X6q6Hqtoc8Q68V611HEom092y =624x375)

Another approach is to pre-calculate the metric in a view that is part of the Single Source of Truth database. We recommend doing this through a SQL based modeling tool such as dbt or Dataform. Defining the metric in the database will remove most, if not all, of the confusion.

To eliminate any remaining confusion on using the metric in your analysis, many SQL based modeling tools can add a data dictionary to the data model. This allows the author of the data model to write out comments on why it was calculated that way and why certain data was filtered out.

Putting the metric in the database through modeling allows you to control changes in the data and the definitions systematically. You still will need to communicate out to users of that table of the changes but it will be documented for them if they check on their own.

## Summary

* Create a Single Source of Truth and give employees access to it and only it
* Make your data intuitive through naming conventions and style guides.
* Simplify Schema by excluding app specific logic tables
* Simplify table and column names by getting column and table names out of the language of technical jargon and define them by their spoken language titles.
* Centralize the control of the metric calculations through SQL based modeling so those metrics are accurate.

References:

* Getdbt.com