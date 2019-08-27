---
section: Data Warehouse
title: Data Warehouse Architecture
meta_title: Data Warehouse Architecture Principles
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

## What is a Data Warehouse Architecture?

A Data Warehouse is a database where the data is accurate and is used by everyone in a company when querying for data.

**_The promise of a Single Source of Truth is accuracy across your organization._**

This is an obvious thing that a company want but a lot of companies struggle to ever deliver this. Creating a Single Source of Truth requires data engineering effort. Let’s explore the problems that SSoT solves, where it often goes wrong, and best practices:

## Data Sources

Before you have built a single source of truth, your company will likely have data sources that overlap in terms of what they track. You will also have data from data sources in your data lake that the company don’t use anymore, but the data is still needed for certain analyses.

Imagine you were tracking sign-ups via Hubspot and then after a year started using Salesforce to track sign-ups. The Salesforce data will be empty before the date you started using it and the google analytics data might not be as well maintained going forward. To an analyst, when they go to query for sign ups it will be unclear which data source they should use.

#### Consolidate Data Sources

When your company has used multiple tools to track the same type of data, if you can, migrate the data from the previous tools into the latest tool. If this is not an option, use the data warehouse to create a table which unions the data from both sources so that the historical record is not lost and to have one place to go to for the relevant metrics. This will require some renaming and cleaning to accomplish.

![](https://lh5.googleusercontent.com/QeJLs7zZHh01xpwnfDoY_fh-0tx25R3oMCpLDpn7znIUNuP9V-y7ncl6TP42dztFq4813d8G-dpsb7ZY2-slncBSwNsmn3wdqCHAilMy01vaxdaWSRuw_R4O7_pBCBkRrt4WVsdp)

In addition, if you want to maintain access to old/unused data sources from your Data Lake in your Data Warehouse, you can label data sources as deprecated or approved to help guide people during their analysis.

![](https://lh3.googleusercontent.com/qmlE0lA9TL7LyBpOfAq3DNjB1yBggNEWF4QmDnKgVLzf-8_A6dgoNyo3xlnlob0_Q2hDVKbHoXWqTKgLf2t_ZCpjsmpQQnrzIoPRN6C97cE4P3RWwWmKesJeBndVOX41OzcB4U5c)

## Simplify Schema

In a Data Lake the schema reflects in transactional logic of an application and follows best practices such a 3rd normal form so that updating values will not produce errors. This type of schema can be difficult to navigate and many tables will never be used in an analysis. In the past books recommended using dimensional modeling to reduce the schema complexity to make it easier to query and more performant. Due to advances in BI tools such as Chartio and Data Warehouse technologies dimensional modeling is no longer worth the effort.

#### Simple Schema

We create a single source of truth by creating views on top of the existing schema. There is no need to move away from 3rd normal form. The main thing we want to do to simplify the schema is to not include tables in the new views that only contain app specific logic and are not useful for analysis. However if you do want to make it even easier to work with a specific set of data you can create a wide table (view) that does all the joins. This can sit alongside the cleaned up normalized version of the data warehouse.

## Simplify Tables and Columns

Table and column names are typically created by engineers to be used by the application the data is from. Table names, column names, and even a columns whole purpose for being in the table can be confusing to whoever did not write the code. This makes it challenging for business users to analyze the data without consulting with the engineer. We can review the table in Why Build a Data Warehouse:

![](https://lh4.googleusercontent.com/orujeq0VhTYWnajkOgRA9FbWHGhyEZRrJPZfF-bUZx_KlwNLQY2Z9G3cOW07hpu0JvqMLf_1Boq5ysGmzwSin7LQS5WhUAcb638oNbLm9hz8vaU_qtts4NJd7TwW1cBiunB9N7Ux)

* Having multiple Id columns can be confusing
* Nulls can produce [unexpected results during aggregations](https://dataschool.com/how-to-teach-people-sql/how-sql-aggregations-work/)
* Inconsistent naming reduces confidence that the data is correct, and makes it hard to aggregate and group by
* Column names and values that aren’t descriptive will require the analyst to ask an engineer what it means
* Most analysts are not able to use regex to parse out valuable information from JSON data
* Deprecated data flags are often missed by analyst so this will make their aggregations incorrect

To address these issues we need to keep the analyst/business user in mind and make all of the fields easy for them to interpret. The first step is to develop guidelines for how you want to clear up the data

### Naming convention and style guide

When going through and recreating the schema with views of the relevant tables you should also clean up what is in each table. Do not include irrelevant columns and rename any columns that are confusing. Naming conventions help people analyze data consistently because it clarifies what every column is and how it can be used.

#### Simplify

It's quite common for raw data to be extremely complex. Data was typically meant to be consumed by applications and not directly by business users. By taking some time to simplify data, we can greatly improve business user success when querying.

| --- | --- |
| Best Practice | Reason |
| Only include fields with obvious analytical purpose | It's best to start modeling with only the most relevant columns, excluding any columns that has no immediate or obvious analytical purpose. |
| Extract relevant data from complex data types | Application data sources may contain JSON, arrays, hstore and other complex data types. These are typically hard to query from business intelligence tooling and should have relevant data extracted into new columns.Example:Suppose a table books contains an id column and the following JSON column.{ title: "Moby Dick", author: "Herman Melville", genres: \["novel", "fiction"\]}The resulting modeled books table would contain an id, title, and author columns. Genres could be modeled as an independent table, reduced to a single genre based on custom rules, or some other method. |
| Change flags and crypto abbreviations to meaningful values | It's common for application databases to have flags or cryptic abbreviations in columns that work well for the application and terrible for a business user. It's important to transform these values into easy, human readable values. Some examples:Boolean values 0 and 1 should be transformed to relevant strings, such as true and false or on and off.Flag values should be transformed into relevant strings. If a column billing_status has three numeric values (i.e. 0, 1, 2) that represent some status, they should be transformed into a relevant business concept such as Active, Not Active, Delinquent.Cryptic values should also be transformed into easy to understand business concepts. |
| De-normalize where possible | Applications typically have highly normalized tables to prevent duplicates, reduce space, and make modification easier. This typically makes it harder for business users to browser the schema however because the complexity of the joins may be hard to follow. Build wider tables where appropriate, collapsing common concepts into a single table. Some examples could be:Combine the sources, sources_redshift, sources_postgres, and sources_myself tables into a single sources table with the lowest common denominator of values that make sense for a business user.Combine the users and addresses tables into a single users table since addresses are meaningless on their own.This simplification requires trial and error and you may not always get it right. |

#### Cleaning

Data is messy and requires some cleaning to ensure accurate results. Cleaning prevents common problems that might cause a query to produce incorrect results.

| --- | --- |
| Best Practice | Reason |
| Attempt to eliminate NULLs | NULL values have unexpected consequences in SQL (is "string" <> NULL?). It's best to remove all nulls with values. Some examples:Change all NULL values in the first_name column to the string Blank.Change all NULL values in the last_login_type column to the string Never Logged In for customers that have never logged in. |
| Fix common data inconsistencies | Bad data always makes its way into raw data sources. Whether it is misspellings or just junk data, it is important to clean up the data as much as possible. Some examples:State names that have a mix of abbreviations, full names, and junk data should be transformed into a single, consistent format such as the full state name.Phone numbers might be garbage text entered by users to avoid getting phone calls. |
| Follow Naming Conventions | Schemas, tables, and columns should all be named in accordance with naming conventions listed below. At a minimum, names should be human readable and be representative of the data type and values stored. |
| Remove irrelevant data | Rows that are irrelevant for various reasons should be removed entirely from the data set. Some examples could be:Employee testingFraud or spamInactiveObviously, if analysis is being done on fraud or spam, that data should not be removed but in most causes, if a row would always be excluded from a query, go ahead and remove it in modeling. |
| Change Data Types | Modeling is a great time to change data types to more appropriate types. Unix timestamps could be converted from int columns to datetime for example. |

#### Naming Conventions

Data is messy and requires some cleaning to ensure accurate results. Cleaning prevents common problems that might cause a query to produce incorrect results.

| --- | --- |
| Best Practice | Reason |
| Plural Table Names | A table of Leads should be titled "Leads" not Lead. When there are more than two words on the last needs to be pluralized: opportunity_histories |
| id as primary key | A simple numeric primary key labeled id should be standard for all tables. |
| foreign keys follow <tablename>_<id> | ForeignKeys should follow this format to make it very clear on where the table is linking to. If there are two foreign keys to the same table you can preopend a name to them following the format <uniquename>_<tablename>_<id>. An accounts table linking to a users table with both a billing contact and a main owner would look like this:Accounts owner_user_id billing_contact_user_id |
| Start columns with a _ if they are needed but should be hidden for Visual mode. | If there are columns you need in the model for joining or other purposes but don’t want visible by default in visual mode you can prefix them. They will otherwise be treated just as any other column. Let’s say you didn’t think the foreign keys in the accounts table above needed to be shown in Visual mode. You can simply prefix them as shown below. The relationships will still be detected. It’s a best practice not to show the foreign keys visually.Accounts id name _owner_user_id _billing_contact_user_idThis should not be used for columns you're on the fence about needing. Those just shouldn't be included. These are for columns that are needed for querying purposes but have no use in a Visual setting - primarily foreign keys. |
| Lower case, underscored naming | Our data model needs to be easily editable in SQL mode so we should follow conventions that make editing raw SQL easier. Therefore, we should attempt to have column names like id, first_name, last_name, and last_login_type instead of more human readable forms in the model. Chartio will handle that conversion. |

Publish this style guide and distribute it among all of your employees, adoption of known terms becomes easier and easier.

## Metrics

There are a lot of different ways to measure how a business is performing. Some are fairly well known such as Monthly Active Users or Number of Trials started. In most businesses getting an accurate count on a metric is difficult because you need to filter out irrelevant data:

* Test accounts
* Internal Company emails
* Non product-related page visits
* Users that are no longer employed by a client company

Not filtering out the right data will affect your analysis negatively. If presented to others and they have a conflicting analysis it will cause everyone to lose trust in the data.

Another more subtle problem with metrics are their abbreviations. If Monthly Active Users is abbreviated as MAU in the database, it may be misinterpreted in someone else's analysis. Do not assume everyone understands the abbreviation for the metrics you are reporting.

### Create a Standard Metrics Dashboard

To define the calculation of a metric, create a Dashboard with this metric in it and provide text on the dashboard to explain how it was calculated and what has been filtered out. Make this easily searchable!

![](https://lh3.googleusercontent.com/6d-LTl0TZQciojSmsNUcjCnurkl92dLqXbCe7FW2RsRCi9uOdJXRZg8sZQXsY9jsa7UmX4WJJTFiV7Tl0pGMtGBYUOmV2tm_keUvBLqx64jNFBkQotzi4QBuFy44E-Phgo3T0kfw)

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