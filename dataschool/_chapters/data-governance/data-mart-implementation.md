---
section: Data Mart
title: Data Mart Implementation
meta_title: How to build a Data Mart
description: Learn the best practices for building a Data Mart
number: 21
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1pdv66jBqwtCPAK_h7Q7h2Z5YKtPg-c9HU1_2yxn_txg/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 3
published: false

---
As companies grow the amount of data and the number of sources will increase. This leads to your data warehouse having numerous schemas that can become difficult to navigate. Moving from a Data Warehouse to Data Marts reduces the scope of access to make it easier for users to find the data they need. We can create Marts in 5 steps.

## 1 Views

Marts should be created with Views, not by creating new tables.

For most companies there is no need to materialize views as the performance should not be that different. However if you are running into performance issues this is worth testing out.

## 2 Use the Data Warehouse

You should avoid making any new views if possible. You should. The Data Mart is mostly a filtering of the views available in the Data Warehouse:

    CREATE VIEW 
    	SELECT * 
        FROM DataWarehouse.View

Most if not all of the cleaning should have occurred when going from the Lake to the Warehouse. The big difference here is which views you are pulling in from the warehouse.

If you do want to create aggregations for performance reasons that is fine, and if you want to combine data together we recommend using the wide table approach versus implementing something more complex like star schema.

## 3 No Star Schema

The performance [benefits of star schema no longer exist](https://fivetran.com/blog/obt-star-schema). It is a lot of work to implement. While some people argue it is easier to query after being set up this way modern BI tools such as Chartio have created interfaces to the data which solve problems such as complex joins.

## 4 Segment tables

Determine how you are going to split the data. Common ways include:

* Department
* Product Line
* Use Case
* Region
* Security considerations

Create a matrix that contains the table names and the segments you are splitting up the data by to determine which group has access to what. Then you can create the relevant views.

## 5 Access Update

Prior to implementing marts you likely had provided all of these groups access to the data warehouse. You should remove everyones data warehouse access by default and grant them access to the mart or marts they belong to. A few people might need to retain access to both, let them ask so that you know who has access to what. These people may still want to query the data warehouse when they want to analyze data that would span multiple marts.

## Summary

* Use Views
* Don’t deviate that much from the Data Warehouse Views
* Do not use Star Schema
* Segment your marts
* Update access to be at the mart level instead of warehouse