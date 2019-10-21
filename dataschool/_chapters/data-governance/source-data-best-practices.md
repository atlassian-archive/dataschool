---
section: Stage 1 - Source
title: Source Data Best Practices
meta_title: Learn Source Data Best Practices
description: Learn how to manage queries, model in a BI tool, and use drag and drop
  query interfaces.
number: 3
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1skdYsoMVrof7aEo5VsqhpFtC7SwnJC9foTA-2peSx4o/edit?usp=sharing
image: "/assets/images/SnippetDictionaryCover.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
Now that you have setup a read only replica of your database and are using a SQL based BI tool to blend and analyze your data, the next step is maintaining it. At this stage it is not recommended to do a lot of modeling or clean up. However, do provide warnings about known issues in the data so that others who want to explore the data can do so accurately.

These issues should be addressed in a regularly updated wiki or within your BI tool:

* Engineering named fields
* New Columns with nulls
* Business logic
* Complex Join paths
* Old or Unused Columns and fields

## Snippet Dictionary

Keep a dashboard or file of saved queries to be re-used and built on:

![Snippet Dashboard and Snippet Query file](/assets/images/SnippetDictionary.png "Snippet Dictionary")

You can also add text to describe how some metric was calculated to explain business logic to viewers. This is not only simple, but it is also much better than people always asking you how to write a query. This will also be the basis for data models at later stages of data sophistication.

## BI Layer Meta Modeling

Some BI tools allow you to do some internal renaming. While this is most common in renaming a field so that it is more readable within a chart, some let you rename it so that others can query the data by its new name. Definitely rename fields so that they are more understandable within visualizations and dashboards. Asking people to interpret complex names will not work.

![Meta modeling in BI product](/assets/images/BILayerMetaModeling.png "BI Layer Modeling")

## Drag and Drop

Some BI products with drag and drop data explorers handle complex join paths with ease. For instance, if you use Chartio’s visual SQL interface it joins the data automatically.

![BI product that empowers drag and drop](/assets/images/DragDropQuery.png "Drag and Drop Query")

This might be preferable for people to use when querying their data instead of needing to remember how to join many tables for their analytical queries.

## Double Check Data

Whenever you are producing visualizations unexpected or null values can make your analysis incorrect. Always do a quick review of the raw data by sorting each field to see if you need to remove, ignore, or update nulls/outliers so that your analysis is correct.

![Check your Query Results](/assets/images/DoubleCheckQueryData.png "Double Check Data")

Read this post on [Finding Outliers with SQL](https://dataschool.com/how-to-teach-people-sql/how-to-find-outliers-with-sql/)

## No Read Replica

If you did not implement a read replica of your database then you or your engineering team needs to keep a close eye on how queries are impacting the production database’s performance using a monitoring application.

## Summary

Analyzing source data can be tricky since it has not been cleaned or modeled however these best practices make it easy

* Keep a short regularly updated snippet dictionary
* Use BI products to overcome data issues such as weird field names and complex joins
* Double check the data before visualization
* Keep an eye on query performance if you are hitting the production database

Lastly, you should start exploring tools to pipe in multiple sources of data that are not handled by your SQL based BI tool to build your Data Lake.