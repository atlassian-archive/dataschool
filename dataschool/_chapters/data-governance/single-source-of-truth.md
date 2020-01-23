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
faqs: []

---
When multiple people ask the same question using the same data and get varying answers, it creates doubt in all of the data in your organization. Additionally, it's demoralizing for everyone and time-consuming to figure out the right answer. Unfortunately, this is typical when data has not been cleaned up into a Single Source of Truth.

People get inconsistent results because:

* Data sources change
* Schemas are overly complex
* Table and column names are confusing
* Metrics need to be derived from the data

## What is a Data Warehouse Architecture?

A Data Warehouse is a database where the data is accurate and is used by everyone in a company when querying data.

**_The promise of a Single Source of Truth is accuracy across your organization._**

This is an obvious thing that any company wants, yet a lot of companies struggle to deliver. Creating a Single Source of Truth requires data engineering effort. Let’s explore the problems that a Single Source of Truth solves, issues to watch out for, and best practices.

## Data Sources

Before you even build a Single Source of Truth, your company will likely have data sources that overlap in terms of what they track. You will also have data from dormant data sources in your [Data Lake](https://dataschool.com/data-governance/why-build-a-data-lake/) that is still needed for certain analyses.

Imagine you were tracking sign-ups via [Hubspot](https://www.hubspot.com/) and after a year you decided to switch to [Salesforce](https://www.salesforce.com/). That means that prior to your switch, the Salesforce data will be empty. Moreover, the [Google Analytics](https://developers.google.com/analytics) data might not be as well synchronized between your Hubspot data and your Salesforce data. When an analyst attempts to query for sign-ups, it will be unclear which data source they should use.

#### Consolidate Data Sources

When your company has used multiple tools to track the same type of data, if you can, migrate the data from the previous tools into the latest tool. If this is not an option, use the data warehouse to create a table which [UNIONs](https://dataschool.com/how-to-teach-people-sql/union-animated/) the data from both sources. This ensures the historical records are not lost and creates one location for relevant metrics. This will require some renaming and cleaning to accomplish.

![Consolidate Salesforce and Hubspot data](/assets/images/ConsolidateDataSource-1.png "Consolidate Data Sources")

In addition, if you want to maintain access to old/unused data sources from your Data Lake in your [Data Warehouse](https://dataschool.com/data-governance/why-build-a-data-warehouse/), you can label data sources as deprecated or approved to help guide people during their analysis.

![Naming Convention Deprecation](/assets/images/DepracateDataSources.png "Deprecate Data Sources")

## Simplify the Schema

In a Data Lake, the schema reflects in transactional logic of an application and follows best practices (such as a 3rd normal form) so that updating values will not produce errors. But this type of schema can be difficult to navigate and many tables will never be used in an analysis. In the past, books recommended using dimensional modeling to reduce the schema complexity, make it easier to run queries, and enhance performance. Today, due to advances in BI tools such as [Chartio](https://chartio.com/product/) and Data Warehouse technologies, dimensional modeling is no longer worth the effort.

#### Simple Schema

We create a Single Source of Truth by creating views on top of the existing schema. There is no need to move away from 3rd normal form. The main thing we want to do to simplify the schema is to exclude tables from the new views that only contain app specific logic and are not useful for analysis. If you want to make it even easier to work with a specific set of data, you can create a wide table (view) that does all the joins. This can sit alongside the cleaned up normalized version of the Data Warehouse.

## Simplify Tables and Columns

Table and column names are typically created by engineers to be used by the application the data comes from. Table names, column names, and even a column's purpose for being in the table can be confusing to others. This makes it challenging for business users to analyze the data without consulting the engineer. We can review the table we referenced in [Why Build a Data Warehouse](https://dataschool.com/data-governance/why-build-a-data-warehouse/ "Why Build a Data Warehouse"):

![](/assets/images/SimplifyTables.png)

* Having multiple Id columns can be confusing.
* Nulls can produce [unexpected results during aggregations](https://dataschool.com/how-to-teach-people-sql/how-sql-aggregations-work/).
* Inconsistent naming reduces confidence that the data is correct, and makes it hard to aggregate and group the data.
* Non-descriptive Column names and values will require the analyst to ask an engineer for clarification.
* Most analysts are not able to use regex to parse out valuable information from JSON data.
* Deprecated data flags are often missed by analysts, so this leaves room for error in aggregations.

To address these issues we need to keep the analyst/business user in mind and make all of the fields easy for them to interpret. The first step is to develop guidelines for how you want to clear up the data.

### Naming convention and style guide

When going through and recreating the schema with views of the relevant tables you should also clean up what's in each table. Exclude irrelevant columns and rename any columns that are confusing. Naming conventions help people analyze data consistently because they clarify what each column is and how it can be used.

#### Simplify

It's quite common for raw data to be extremely complex. Data was typically meant to be consumed by applications and not directly by business users. By taking some time to simplify data, we can greatly improve business user success when querying.

<table> <tr> <td style="min-width:225px;">Best Practice</td> <td>Reason</td> </tr> <tr style="font-family: Open Sans; font-weight: 200;"> <td>Only include fields with obvious analytical purpose</td> <td> It's best to start modeling with only the most relevant columns, excluding any columns that has no immediate or obvious analytical purpose. </td> </tr> <tr style="font-family: Open Sans; font-weight: 200;"> <td>Extract relevant data from complex data types</td> <td> Application data sources may contain JSON, arrays, hstore and other complex data types. These are typically hard to query from business intelligence tooling and should have relevant data extracted into new columns. <br> <br><u>Example:</u> <br>Supposed a table books contains an id column and the following JSON column. <p style="background-color: #002000; color: #F2F2F2;">  { <br>  title: "Moby Dick", <br>  author: "Herman Melville", <br>  genres: \["novel", "fiction"\]<br>  } </p> The resulting modeled books table would contain an id, title, and author columns. Genres could be modeled as an independent table, reduced to a single genre based on custom rules, or some other method. </td> </tr> <tr style="font-family: Open Sans; font-weight: 200;"> <td>Change flags and cryptic abbreviations to meaningful values</td> <td> It's common for application databases to have flags or cryptic abbreviations in columns that work well for the application and terrible for a business user. It's important to transform these values into easy, human readable values. Some examples: <ul> <br><li> Boolean values 0 and 1 should be transformed to relevant strings, such as true and false or on and off. </li> <br><li> Flag values should be transformed into relevant strings. If a column billing_status has three n_meric values (i.e. 0, 1, 2) that represent some status, they should be transformed into a relevant business concept such as Active, Not Active, Delinquent. </li> <br><li> Cryptic values should also be transformed into easy to understand business concepts. </li> </ul> </td> </tr> <tr style="font-family: Open Sans_; font-weight: 200;">
<td>De-normalize where possible</td>
<td>
Applications typically have highly normalized tables to prevent duplicates, reduce space, and make modification easier. This typically makes it harder for business users to browser the schema however because the complexity of the joins may be hard to follow. Build wider tables where appropriate, collapsing common concepts into a single table. Some examples could be:
<ul>
<br><li>
Combine the sources, sources_redshift, sources_postgres, and sources_myself tables into a single sources table with the lowest common denominator of values that make sense for a business user.
</li>
<br><li>
Combine the users and addresses tables into a single users table since addresses are meaningless on their own.
</li>
</ul>
This simplification requires trial and error and you may not always get it r_ight.
</td>
</tr>
_</table>

#### Cleaning

Data is messy and requires some cleaning to ensure accurate results. Cleaning prevents common problems that might cause a query to produce incorrect results.

<table>
<tr>
<td style="min-width:225px;">Best Practice</td>
<td>Reason</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Attempt to eliminate NULLs</td>
<td>
NULL values have unexpected consequences in SQL (is "string" <> NULL?). It's best to replace all nulls with values. Some examples:
<ul>
<br><li>Change all NULL values in the first_name column to the string Blank.</li>
<br><li>
Change all NULL values in the last_login_type column to the string Never Logged In for  customers that have never logged in.
</li>
</ul>
</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Fix common data inconsistencies</td>
<td>
Bad data always makes its way into raw data sources. Whether it is misspellings or just junk data, it is important to clean up the data as much as possible. Some examples:
<ul>
<br><li>
State names that have a mix of abbreviations, full names, and junk data should be transformed into a single, consistent format such as the full state name.
</li>
<br><li>
Phone numbers might be garbage text entered by users to avoid getting phone calls.
</li>
</ul>
</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Follow Naming Conventions</td>
<td>
Schemas, tables, and columns should all be named in accordance with naming conventions listed below. At a minimum, names should be human readable and be representative of the data type and values stored.
</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Remove irrelevant data</td>
<td>
Rows that are irrelevant for various reasons should be removed entirely from the data set. Some examples could be:
<ul>
<br><li>Employee testing</li>
<br><li>Fraud or spam</li>
<br><li>Inactive</li>
</ul>
Obviously, if analysis is being done on fraud or spam, that data should not be removed but in most causes, if a row would always be excluded from a query, go ahead and remove it in modeling.
</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Change Data Types</td>
<td>
Modeling is a great time to change data types to more appropriate types. Unix timestamps could be converted from int columns to datetime for example.
</td>
</tr>
</table>

#### Naming Conventions

Initially there will be a variety of naming conventions used for tables, columns, and values. Creating a standard for all of these makes it easier for others to find and understand the data they are looking for.

<table>
<tr>
<td style="min-width:225px;">Best Practice</td>
<td>Reason</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Plural Table Names</td>
<td>
A table of Leads should be titled "Leads" not Lead.  When there are more than two words on the last needs to be pluralized: opportunity_histories
</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>id as primary key</td>
<td>A simple numeric primary key labeled id should be standard for all tables.</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>foreign keys follow <br>\[tablename\]_\[id\] format</td>
<td>
ForeignKeys should follow this format to make it very clear on where the table is linking to. If there are two foreign keys to the same table you can preopend a name to them following the format: <br><br>\[uniquename\]_\[tablename\]_\[id\].<br><br>An accounts table linking to a users table with both a billing contact and a main owner would look like this:<br><br>Accounts<br><br>owner_user_id<br>billing_contact_user_id
</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Start columns with a _ if they are needed but should be hidden for Visual mode.</td>
<td>
If there are columns you need in the model for joining or other purposes but don’t want visible by default in visual mode you can prefix them.  They will otherwise be treated just as any other column.<br><br>Let’s say you didn’t think the foreign keys in the accounts table above needed to be shown in Visual mode.  You can simply prefix them as shown below. The relationships will still be detected. It’s a best practice not to show the foreign keys visually.<br><br>Accounts<br>id<br>name<br>_owner_user_id<br>_billing_contact_user_id<br><br>This should not be used for columns you're on the fence about needing.  Those just shouldn't be included.  These are for columns that are needed for querying purposes but have no use in a Visual setting - primarily foreign keys.
</td>
</tr>
<tr style="font-family: Open Sans; font-weight: 200;">
<td>Lower case, underscored naming</td>
<td>
Our data model needs to be easily editable in SQL mode so we should follow conventions that make editing raw SQL easier. Therefore, we should attempt to have column names like <i>id, first_name, last_name,</i> and <i>last_login_type</i> instead of more human readable forms in the model. Chartio will handle that conversion.
</td>
</tr>  
</table>

<br>Publish a style guide and distribute it among all of your employees to make adoption of known terms much easier.

## Metrics

There are a lot of different ways to measure how a business is performing. Some are fairly well known, such as Monthly Active Users or Number of Trials Started. In most businesses, getting an accurate count on a metric is difficult because you need to filter out irrelevant data:

* Test accounts
* Internal Company emails
* Non product-related page visits
* Users that are no longer employed by a client company

Not filtering out the right data will negatively affect your analysis. Presenting to others who have a conflicting analysis of their own will cause everyone to lose trust in the data.

Another more subtle problem with metrics is abbreviations. If Monthly Active Users is abbreviated as MAU in the database, it may be misinterpreted in someone else's analysis. Do not assume everyone understands the abbreviation for the metrics you are reporting.

### Create a Standard Metrics Dashboard

To define the calculation of a metric, create a Dashboard with this metric in it and provide text on the dashboard to explain how it was calculated and what has been filtered out. Make this easily searchable!

![Standard metric dashboard](/assets/images/StandardMetricsDashboard.png "Standard metrics")

Another approach is to pre-calculate the metric in a view in the Single Source of Truth database. We recommend doing this through a SQL-based modeling tool such as [dbt](https://www.getdbt.com/) or [Dataform](https://dataform.co/). Defining the metric in the database will remove most, if not all, of the confusion.

To eliminate any remaining confusion on using the metric in your analysis, many SQL-based modeling tools can add a data dictionary to the data model. This allows the author of the data model to write out comments on why it was calculated that way and why certain data was filtered out.

Storing the metric in the database through modeling allows you to control changes in the data and the definitions systematically. You will still need to communicate changes, but they will be documented if anyone needs to check on their own.

## Summary

* Create a Single Source of Truth and give employees access to it and only it
* Make your data intuitive through naming conventions and style guides
* Simplify the Schema by excluding app-specific logic tables
* Simplify table and column names: define them by their spoken language titles instead of technical jargon
* Centralize the control and accuracy of metric calculations through SQL-based modeling

References.

* [Getdbt.com](https://www.getdbt.com/)