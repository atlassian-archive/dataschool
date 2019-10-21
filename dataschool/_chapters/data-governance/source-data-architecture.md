---
section: Stage 1 - Source
title: Source Data Architecture
meta_title: Setup Source Data Architecture
description: Learn how to configure your data base and leverage flexible BI tools
  to analyze source data.
number: 2
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1-kn5Zp9--Pz53acBH1OC-CWn8Mx4Z3oppR-uN0ONprc/edit?usp=sharing
image: "/assets/images/ReadOnlyUserPermissions (1).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
When a business is getting started with data it is usually very messy. It is unorganized, often times has bugs in it, and to analyze it might slow down the performance of your application. Some aspects of the data are not worth manipulating at this stage but there are a few architectural and analysis considerations that can greatly improve your access to data.

## Source Data Architecture

Source data architecture is a set of data tools and configurations that allow you to work with data in its raw form from various sources. There are 3 parts of an effective analytics layer on source data.

1. Data Prep
2. Visualizing
3. Performance

### Data Prep

There are two main configuration options to work with your production database namely, creating a read only user or creating a read only replica.

#### Read Only User

If you are going to analyze data on your production server create and use a read only user account. This will prevent you from making any updates to the data during your analysis by accident. Granted this is unlikely but it is a good precaution to use. It also makes it possible to grant other people access for analysis purposes and guard against their errors.

![Permission Settings for Source Data](/assets/images/ReadOnlyUserPermissions.png "Read Only User Permission")

This functionality exists across database providers.

#### Read Only Replica

If you’re worried about read performance of your DB and want to query the data without impacting the performance of your application, create a read only replica of the production database. This also makes it possible for people not as familiar with the data to query it since there are little consequences of running an incorrect or large query.

![Source Database, Read Only Replica](/assets/images/ReadOnlyReplicaDatabase.png "Read Only Replica Database")

Creating a [read only replica in RDS](https://aws.amazon.com/rds/details/read-replicas/) is easy but can be hard on other platforms

These databases may double the cost of your database spend but removes the risk of an analytic query affecting your application.

### Visualizing

Now that we have safe access to the database we need to get the data out in ways that are useful for analysis.

#### SQL based BI product

Running one-off queries can be useful to understand what is going on in the data but needing to export data into another tool like Excel can be cumbersome especially if you are trying to have real time visibility. Using a SQL based BI product will allow you to create visualizations and dashboards that can be refreshed automatically. You won’t have to manually fetch your data. Additionally, some SQL based BI tools such as Chartio allow you to connect to data sources such as Google Analytics, that you might otherwise not be able to.

![Connect your BI tool to many Sources](/assets/images/DataSourceOptions.png "Data Source Options")

Being able to blend this data is a way to have the benefits of a Data Lake without architecting one. This will help you produce better insights.

To reiterate the benefits of a modern SQL based BI product are:

* Automating SQL
* Connecting to more sources
* Seeing it all together
* Sharing and collaboration is seamless

#### IDE (SQL) - same as command line

Another option is to use an IDE. While it does not provide as much functionality (not visualization or blending) it will allow you to save queries and analyses so that they can be rerun easier. Some common SQL IDEs are:

* DataGrip
* JetBrains
* Squirrel
* HeidiSQL
* SQL Workbench

![Use and IDE to Query your data](/assets/images/IDEexample2.png "IDE Example Query")

#### Excel

Finally you can copy data out into a csv and then analyze it within Excel. While this may be the most comfortable for new data users there are many drawbacks. The data is not live and updating a sheet with new data can get tricky. Excel can be good for one-off analyses but is not effective for ongoing monitoring or analysis of data.

### Performance

If you have successfully implemented a BI tool on top of your read only database you might run into some performance issues. To avoid these you should:

* **Keep dashboards short** - A dashboard that is above the fold allows you to take in and compare the data all at once. It also prevents too much data being pulled to refresh the dashboard quickly.
* **Write DRY SQL** - Create a view or custom snippet it you’re doing the same query a lot. This will save you time since you wont need to re-write it and it will help you update it if you need to make changes to that query.
* **Design First** - Anytime you are building a dashboard consider who will be viewing it and what decisions they will be making based on that information. Use design thinking when building a dashboard.

In addition to performance, there will likely be data integrity issues that will regularly pop up. We go into more detail about how to handle integrity issues in the [Data Warehouse Architecture](https://dataschool.com/data-governance/single-source-of-truth/) chapter of the book. These simple tips will help you and your company get more value out of the source data you are analyzing.

## Summary

Small teams should work directly with their data sources. The steps are quite simple:

1. Create a Read Only Replica or Read Only User for your database
2. Setup a SQL based BI tool
3. Keep dashboards and queries simple