---
section: Stage 4 - Mart
title: Data Mart Implementation
meta_title: How to build a Data Mart
description: Learn the best practices for building a Data Mart
number: 41
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1snJqfEy3W6t50kmdO5wht-uHILmz3t9-0flYcgeu1sc/edit?usp=sharing
image: "/assets/images/DataMartImplementation.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 3
faqs:
- answer: |-
    1. views
    2. use the data warehouse
    3. no star schema
    4. segment tables
    5. access update
  question: What are the five steps to create data marts?

---
As companies grow, the amount of data and the number of sources they have will also increase. This leads to your Data Warehouse having numerous schemas that can become difficult to navigate. Moving from a Data Warehouse to Data Marts reduces the scope of access and makes it easier for users to find the data they need. Data Marts can be created in five steps.

## 1. Views

Marts should be created with Views, not by creating new tables.

For most companies there is no need to materialize views as the performance should not be that different. However if you are running into performance issues it can be worth trying materialized views.

## 2. Use the Data Warehouse

Any large cleaning should be avoided at this stage. You should be selecting the relevant views and filtering out unnecessary columns from the Data Warehouse to build out each Data Mart.

    CREATE VIEW 
    SELECT * 
    FROM DataWarehouse.View

Most if not all of the cleaning should have occurred when going from the Lake to the Warehouse, if there is a cleanliness issue address it with modeling in the Warehouse stage.

If you do want to do some additional modeling to create aggregations for performance reasons that is fine, and if you want to combine data to make it easier to analyze we recommend using the wide table approach versus implementing something more complex like star schema.

## 3. No Star Schema

The performance [benefits of star schema no longer exist](https://fivetran.com/blog/obt-star-schema). It is a lot of work to implement. While some people argue it is easier to query after being set up this way, modern BI tools such as Chartio have created interfaces to the data which solve problems such as complex joins.

## 4. Segment tables

Determine how you are going to split the data into different Data Marts. Common ways include:

* Department
* Product Line
* Use Case
* Region
* Security considerations

Create a matrix that contains the table names and the segments you are splitting up the data by to determine which group has access to what. Then you can create the relevant views for each Data Mart.

## 5. Access Update

Prior to implementing Data Marts, you likely had provided all of these groups access to the Data Warehouse. You should remove everyone’s Data Warehouse access by default and grant them access to the mart or marts they belong to.

A few people might need to retain access to both. Let them ask so that you know who has access to what. These people may still want to query the Data Warehouse when they want to analyze data that would span multiple marts.

## Summary

* Use Views
* Don’t deviate that much from the Data Warehouse Views
* Do not use a Star Schema
* Segment your marts
* Update access to be at the mart level instead of warehouse