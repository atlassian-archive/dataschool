---
section: Stage 2 - Lake
title: Why Build a Data Lake
meta_title: Top 3 reasons to build a Data Lake
description: Learn why you should build a data lake to improve analytics at your company.
number: 4
authors:
- _people/tim.md
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1ufvuBfjmJXJ2FMTbH-NFF8M6Aa5pI7lhRT948BJD0CA/edit?usp=sharing
image: "/assets/images/DataLake (1).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
## What is a Data Lake?

A Data Lake is a storage repository of multiple sources of raw data in a single location. In the cloud these are typically stored in cloud c-store data warehouses or in S3 buckets, the data can be in a variety of formats and can be structured, semi-structured, unstructured, or even binary.

![Building a Data Lake](http://img.chartio.com/a52373642904/Image%202019-10-20%20at%205.31.17%20PM.png)

The term Data Lake, after oil lakes (pre-refinery oil), was created to contrast the term Data Mart which described orderly, siloed, and refined data. Having all the data in one place made it easier to work with large data sets and to start getting out insights earlier in the data modeling process.

### This stage is right for you if

 - You need unique or combined charts/dashboards for cloud application sources like SalesForce
 - Your charts and dashboards will be created by a core set of people who will all be able to learn the in's and outs of the structure of the messy data
 - You're intimidated by data modeling (but just don't be - that's why we have this book)
 - You cannot spare the time for even light data modeling and are okay for now with the technical debt you're taking on
 - You have large sets of data and need more performant queries

### You've outgrown this stage if

 - More than a few people are going to be working with this dataset
 - You want a clean source of truth of your company
 - You don't like fighting integrity issues
 - You need to separate the structure of the data from the always changing transactional sources.
 - You Don't like Repeating Yourself (DRY)

![Move data from Sources to Lake](/assets/images/DataLake (1)-1.png "Data Lake")

## Top 4 reasons to build a Data Lake

### 1) Unifying

As your data needs expands it becomes harder and hard to work with data kept in multiple different silo's.  It may make sense from a product perspective for your traffic data to be in Google Analytics, your sales records to be in SalesForce and your trial engagement data to be in some database, but when you need to analyze your funnel and attribution models you need them all together.  

In the source stage we discussed blending options, but because blends load all pre-join results into the BI product these are extremely limited in how much data can be joined and are not a scalable solution.   

In a Data Lake, all data can be combined so it can be analyzed together. This makes finding insights easier and provides more depth for exploring the data.

### 2) Full query access

The applications your business uses likely only offer transactional API access to the data.  They're not designed for reporting, so unless the data is exported and put into a format you can easily query, you end up being very limited in what you can pull.  These API's if used directly for reporting, can also become prohibitively expensive.  

If you extract that API data with an [ELT product](/data-governance/elt-vs-etl/) and load it into a Data Lake, you'll have all the power and flexibility of SQL or whatever BI product you use - and the cost won't go up considerably with each chart.

![Combine Salesforce, Zendesk, and Hubspot in a Dashboard](/assets/images/AppDataCombinedDashboard.png "Combined App Dashboard")

<!--- TODO: Matt could you have a version of this where it's actually put into a DB and then there's a SQL command being run on it? This version of the image could maybe be used to talk about Blending in the sources section? --->

### 3) Performance

Source data might be from the actual production database which could affect the performance of the application that it is powering. Queries that demand a lot of data such as aggregations are not optimally run on transactional databases.

![Analytical Dashboards are faster for Dashboards](/assets/images/TransactionalVsAnalyticalDatabase.png "Transactional vs Analytical Database")

Data Lakes are built to handle these types of ad hoc analytical queries independently of the production environment. You can scale up resources on a Data Lake to be able to query data even faster.

### 4) Progress

Getting the data in one spot, is just a necessary step for progressing to the other stages.  It makes working with data so much easier that many BI products require this stage - as they will only connect to a single warehouse source.  

On top of this Lake you will eventually be able to do proper modeling in the Warehouse stage, cleaning the data so more people can use it, less errors happen, you repeat yourself less, and many more benefits.  


## Example Data Lake

### Multiple Schemas

![](/assets/images/MultipleSchemasDataSource.png)

We can see a variety of data sources and schemas we can query from.

### Query Across Schemas

![Join data from multiple sources](/assets/images/QueryMultipleSchemas.png "Query Across Schemas")

Combining datasets can be tricky. Having a flexible BI tool such as Chartio allows you to navigate this with relative ease.
