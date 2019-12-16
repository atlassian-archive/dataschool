---
section: Stage 2 - Lake
title: Why Build a Data Lake
meta_title: Top 3 reasons to build a Data Lake
description: Learn why you should build a data lake to improve analytics at your company.
number: 21
authors:
- _people/tim.md
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/156o09VDLYztmmVwOKXp7XrLnbycn-glQ-LGBLvmIGPc/edit?usp=sharing
image: "/assets/images/DataLake (1).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5
faqs:
- question: Why should I build a Data Lake?
  answer: |-
    1. It's unifying
    2. Full query access
    3. Performance
    4. Progress
- question: What is a Data Lake?
  answer: A Data Lake is a storage repository of multiple sources of raw data in a
    single location. In the cloud these are typically stored in cloud c-store data
    warehouses or in S3 buckets.  The data can be in a variety of formats and can
    be structured, semi-structured, unstructured, or even binary.

---
## What is a Data Lake?

A Data Lake is a storage repository of multiple sources of raw data in a single location. In the cloud these are typically stored in cloud c-store data warehouses or in S3 buckets.  The data can be in a variety of formats and can be structured, semi-structured, unstructured, or even binary.

![/assets/images/LakeConnection (1).png](https://app.forestry.io/sites/4as0wjl6ljzlda/body-media//assets/images/LakeConnection (1).png)

The term Data Lake, after oil lakes (pre-refinery oil), was created to contrast the term Data Mart which described orderly, siloed, and refined data. Having all the data in one place made it easier to work with large data sets and start gaining insights earlier in the data modeling process.

### This stage is right for you if:

* You need unique or combined charts/dashboards for cloud application sources like Salesforce.
* Your charts and dashboards will be created by a core set of people who will all be able to learn the ins and outs of the structure of the messy data.
* You're intimidated by data modeling (but just don't be - that's why we have this book).
* You cannot spare the time for even light data modeling and are okay, for now, with the technical debt you're taking on.
* You have large sets of data and need more performant queries.

### You've outgrown this stage if:

* More than a few people are going to be working with this dataset.
* You want a clean source of truth about your company.
* You don't like fighting with integrity issues.
* You need to separate the structure of the data from the always-changing transactional sources.
* You Don't like Repeating Yourself (DRY)

![Move data from Sources to Lake](https://app.forestry.io/sites/4as0wjl6ljzlda/body-media//assets/images/DataLake (1)-1.png "Data Lake")

## Top 4 reasons to build a Data Lake

### 1) It's unifying

As your data needs expand it becomes harder and harder to work with data kept in multiple different silos.  It may make sense from a product perspective for your traffic data to be in Google Analytics, your sales records to be in Salesforce and your trial engagement data to be in some database.  However, when you need to analyze your funnel and attribution models you need them all together.

In the source stage, we discussed blending options, but because blends load all pre-join results into the BI product these are extremely limited in how much data can be joined and are not a scalable solution.

In a Data Lake, all data can be combined so it can be analyzed together. This makes gaining insights easier and provides more depth for data exploration.

### 2) Full query access

The applications your business uses likely only offer transactional API access to the data.  They're not designed for reporting, so unless the data is exported and put into a format you can easily query, you will end up being very limited in what you can pull.  These APIs, if used directly for reporting, can also become prohibitively expensive.

If you extract that API data with an [ELT product](https://dataschool.com/data-governance/etl-vs-elt/) and load it into a Data Lake, you'll have all the power and flexibility of SQL or whatever BI product you use - and the cost won't go up considerably with each chart.

![Combine Salesforce, Zendesk, and Hubspot in a Dashboard](https://app.forestry.io/sites/4as0wjl6ljzlda/body-media//assets/images/AppDataCombinedDashboard.png "Combined App Dashboard")

<!--- TODO: Matt could you have a version of this where it's actually put into a DB and then there's a SQL command being run on it? This version of the image could maybe be used to talk about Blending in the sources section? --->

### 3) Performance

Source data might be from the actual production database which could affect the performance of the application that it is powering. Queries that demand a lot of data such as aggregations are not optimally run on transactional databases.

![Analytical Dashboards are faster for Dashboards](https://app.forestry.io/sites/4as0wjl6ljzlda/body-media//assets/images/TransactionalVsAnalyticalDatabase.png "Transactional vs Analytical Database")

Data Lakes are built to handle these types of ad hoc analytical queries independently of the production environment. You can scale up resources on a Data Lake to be able to query data even faster.

### 4) Progress

Getting the data in one spot is a necessary step for progressing to the other stages.  It makes working with data so much easier that many BI products require this stage - as they will only connect to a single warehouse source.

In the Warehouse stage, you'll be able to implement proper modeling on top of your Lake. Through modeling the data will be cleaner, which enables more people to use it, causes fewer errors, and creates less repetition of work.