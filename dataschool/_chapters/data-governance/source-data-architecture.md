---
section: Stage 1 - Source
title: Source Data Connections
meta_title: Setup Source Data Architecture
description: Learn how to configure your database to analyze source data effectively.
number: 12
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1e56U8T6CPP_XMar4oubX5GaZD7rhLUy2w5PgvB2xllY/edit?usp=sharing
image: "/assets/images/ReadOnlyUserPermissions (1).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 3

---
When a business is getting started with data, people are analyzing it in live systems. While this is ok for tools like Salesforce or Google Analytics, we need to take separate precautions for data in a database.

## Database Connections

To use any source data in a database you'll want to create:

1. Read-only Access Users (be careful)
2. Read-only Replica

### Read-Only User

Create and use a read-only user account to analyze data on your production database. This will prevent users from accidentally making any updates to the data during your analysis, granted this is unlikely but is still a good precaution. It also makes it possible to grant other people access for analysis purposes and guard against their errors.

![Permission Settings for Source Data](/assets/images/ReadOnlyUserPermissions.png "Read Only User Permission")

This functionality exists across database providers. However this will effect your app's performance so it is best to separate your analytics from your application.

### Read-Only Replica

To query the data without impacting the performance of your application, create a read-only replica of the production database. This creates a copy of your data in a new database which can be queried without concern.

![Source Database, Read Only Replica](/assets/images/ReadOnlyReplicaDatabase.png "Read Only Replica Database")

While creating a [read-only replica](https://aws.amazon.com/rds/details/read-replicas/) is easy if you're using cloud providers with hosted databases like RDS, it can be hard on other platforms.

These databases may double the cost of your database spend, but they remove the risk of an analytic query affecting your application.

## Summary

Even small teams should set up permissions to analyze data:

1. Create Read-Only Users for analyzing data in a database (be careful of impacting the apps performance)
2. Create a Read-Only Replica database to perform analytical queries while removing the performance impacts to the production database. 