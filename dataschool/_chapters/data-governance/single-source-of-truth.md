---
section: Stage 3 - Warehouse
title: Data Warehouse Architecture
short: Warehouse Architecture
meta_title: Data Warehouse Architecture Principles
description: Learn why you should build a Single Source of Truth in your Data Warehouse.
  Overcome common obstacles and empower your colleagues
number: 31
authors:
- _people/tim.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1Go51VP5jIxwsHGpVqy4OCUBCCPcdfWblTZcJ0haDvig/edit?usp=sharing
image: "/assets/images/ConsolidateDataSource.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 9

---
When multiple people ask the same question using the same data and get varying answers, it creates doubt in all of the data in your organization. Additionally, it is demoralizing for everyone and time-consuming to figure out the right answer. Unfortunately, this is typical when data has not been cleaned up into a Single Source of Truth.

People get inconsistent results because:

* Data sources change
* Schemas are overly complex
* Table and column names are confusing
* Undefined Metrics in the data

## What is a Data Warehouse Architecture?

A Data Warehouse is a database where the data is accurate and is used by everyone in a company when querying data.

**_The promise of a Single Source of Truth, therefore is accuracy across your organization._**

This is an obvious thing that any company wants, yet a lot of companies struggle to deliver. Creating a Single Source of Truth requires data engineering effort. Let’s explore the problems that a Single Source of Truth solves, issues to watch out for and best practices.

## Data Sources

Before you even build a Single Source of Truth, your company will likely have data sources that overlap in terms of what they track. You will also have data from data sources in your Data Lake that is dormant, but is still needed for certain analyses.

Imagine you were tracking sign-ups via Hubspot and after a year you decided to switch to Salesforce. That means that prior to your switch, the Salesforce data will be empty. Moreover, the google analytics data might not be as well synchronized between your Hubspot data and your Salesforce data. To an analyst, when they go to query for sign-ups it will be unclear which data source they should use.

#### Consolidate Data Sources

When your company has used multiple tools to track the same type of data, if you can, migrate the data from the previous tools into the latest tool. If this is not an option, use the data warehouse to create a table which UNIONs the data from both sources so that the historical record is not lost and to have one place to go to for the relevant metrics. This will require some renaming and cleaning to accomplish.

![Consolidate Salesforce and Hubspot data](/assets/images/ConsolidateDataSource-1.png "Consolidate Data Sources")

In addition, if you want to maintain access to old/unused data sources from your Data Lake in your Data Warehouse, you can label data sources as deprecated or approved to help guide people during their analysis.

![Naming Convention Deprecation](/assets/images/DepracateDataSources.png "Deprecate Data Sources")

## Simplify Schema

In a Data Lake the schema reflects in transactional logic of an application and follows best practices such as a 3rd normal form so that updating values will not produce errors. But this type of schema can be difficult to navigate and many tables will never be used in an analysis. In the past, books recommended using dimensional modeling to reduce the schema complexity and make it easier to run queries and enhance performance. Today, due to advances in BI tools such as Chartio and Data Warehouse technologies, dimensional modeling is no longer worth the effort.

#### Simple Schema

We create a Single Source of Truth by creating views on top of the existing schema. There is no need to move away from 3rd normal form. The main thing we want to do to simplify the schema is to not include tables in the new views that only contain app specific logic and are not useful for analysis. However, if you do want to make it even easier to work with a specific set of data you can create a wide table (view) that does all the joins. This can sit alongside the cleaned up normalized version of the Data Warehouse.

## Simplify Tables and Columns

Table and column names are typically created by engineers to be used by the application the data is from. Table names, column names, and even a columns whole purpose for being in the table can be confusing to whoever did not write the code. This makes it challenging for business users to analyze the data without consulting with the engineer. We can review the table in Why Build a Data Warehouse:

![](/assets/images/SimplifyTables.png)

* Having multiple Id columns can be confusing.
* Nulls can produce [unexpected results during aggregations](https://dataschool.com/how-to-teach-people-sql/how-sql-aggregations-work/).
* Inconsistent naming reduces confidence that the data is correct, and makes it hard to aggregate and group the data.
* Column names and values that are not descriptive will require the analyst to ask an engineer what they mean.
* Most analysts are not able to use regex to parse out valuable information from JSON data.
* Deprecated data flags are often missed by analyst so this will make their aggregations incorrect.

To address these issues we need to keep the analyst/business user in mind and make all of the fields easy for them to interpret. The first step is to develop guidelines for how you want to clear up the data

### Naming convention and style guide

When going through and recreating the schema with views of the relevant tables you should also clean up what is in each table. Do not include irrelevant columns and rename any columns that are confusing. Naming conventions helps people analyze data consistently because it clarifies what every column is and how it can be used.

#### Simplify

It's quite common for raw data to be extremely complex. Data was typically meant to be consumed by applications and not directly by business users. By taking some time to simplify data, we can greatly improve business user success when querying.

![Simplify style guide](/assets/images/Screen Shot 2019-08-27 at 10.56.25 AM.png "Simplify Data")

#### Cleaning

Data is messy and requires some cleaning to ensure accurate results. Cleaning prevents common problems that might cause a query to produce incorrect results.

![Cleaning data style guide](/assets/images/Screen Shot 2019-08-27 at 10.56.34 AM.png "Clean Data")

#### Naming Conventions

Initially there will be a variety of naming conventions used for tables, columns, and values. Creating a standard for all of these makes it easier for others to find and understand the data they are looking for.

![Naming Conventions Style Guide](/assets/images/Screen Shot 2019-08-27 at 10.56.42 AM.png "Name Conventions")

Publish a style guide and distribute it among all of your employees, adoption of known terms becomes easier and easier.

## Metrics

There are a lot of different ways to measure how a business is performing. Some are fairly well known such as Monthly Active Users or Number of Trials started. In most businesses getting an accurate count on a metric is difficult because you need to filter out irrelevant data:

* Test accounts
* Internal Company emails
* Non product-related page visits
* Users that are no longer employed by a client company

Not filtering out the right data will negatively affect your analysis. If presented to others and they have a conflicting analysis it will cause everyone to lose trust in the data.

Another more subtle problem with metrics are their abbreviations. If Monthly Active Users is abbreviated as MAU in the database, it may be misinterpreted in someone else's analysis. Do not assume everyone understands the abbreviation for the metrics you are reporting.

### Create a Standard Metrics Dashboard

To define the calculation of a metric, create a Dashboard with this metric in it and provide text on the dashboard to explain how it was calculated and what has been filtered out. Make this easily searchable!

![Standard metric dashboard](/assets/images/StandardMetricsDashboard.png "Standard metrics")

Another approach is to pre-calculate the metric in a view that is part of the Single Source of Truth database. We recommend doing this through a SQL based modeling tool such as dbt or Dataform. Defining the metric in the database will remove most, if not all, of the confusion.

To eliminate any remaining confusion on using the metric in your analysis, many SQL based modeling tools can add a data dictionary to the data model. This allows the author of the data model to write out comments on why it was calculated that way and why certain data was filtered out.

Putting the metric in the database through modeling allows you to control changes in the data and the definitions systematically. You still will need to communicate out to users of that table of the changes but it will be documented for them if they check on their own.

## Summary

* Create a Single Source of Truth and give employees access to it and only it
* Make your data intuitive through naming conventions and style guides.
* Simplify Schema by excluding app specific logic tables
* Simplify table and column names by getting column and table names out of the language of technical jargon and define them by their spoken language titles.
* Centralize the control of the metric calculations through SQL based modeling so those metrics are accurate.

References.

* Getdbt.com