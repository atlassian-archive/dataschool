---
section: Data Warehouse
title: Why Build a Data Warehouse
meta_title: Learn why you should build a Data Warehouse
description: Data inside of Data Lakes is challenging to work with, because it is
  messy and not optimized for ad hoc querying. Data in a Data Warehouse is clean,
  simple, and easy to use.
number: 30
authors:
- _people/tracy-chow.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/DataWarehouse Cleaning.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
A data warehouse is a database setup for analytical ad hoc querying.

## Five reasons to build a Data Warehouse

* **Easier** to understand and query - simplified single model

No more duplicate tables, confusing column names, or mysterious values

* **Faster** to work with for the data team

Less time is needed to clean and transform data to perform analysis

* **Approachable** to work with for Business Users

Complex joins have been reduced and the correct column to us is obvious

* **Trusted**, consistent source of answers

Everyone generates insights from the same data, no more two different answers to the same question

* **Maintainable** with less time and effort

After adopting naming conventions and a style guide you can maintain as you add data

* **Separated** from transactional data schema

Queries don’t affect app performance, and aren’t affected by rapid changes in the data

This section of the Data Governance book will explain why you should create a data warehouse, and how to implement it so that you get all the benefits it can deliver your business. Before we dive in deep let’s look at the data issues you are facing with a data lake.

## The Problem with Data Lakes

Typically organizations reach roadblocks in making sense of the data in their data lake. When the amount of data in your data lake reaches a level of complexity with irrelevant, unstructured data, it will be too confusing and messy for non-data analysts to use. Data is inconsistent and unstructured, so it can be error prone with users using the wrong columns or calculating metrics incorrectly.

When organizations have an initiative to empower users outside of the data science or engineering team to leverage data, they will move to a data warehouse.

What differentiates a data warehouse from a data lake or other source is that the data warehouse will provide a cleaner view of the data, it’s easier for users to query. Imagine all of your inventory is finally under one roof but its in a big pile, unsorted, some of it is rotten. You may know where everything is in the pile but if you want to work with others you must organize it. You need to put inventory on shelves in an order that makes sense to have a proper warehouse.

Take an example of a database tracking a product’s users and usage data. The raw data may be difficult to understand for the average user because of things such as bad naming conventions, complex data types, data inconsistencies, irrelevant data and highly normalized tables.

Example Data Lake Schema:

![](https://lh3.googleusercontent.com/dSlp2nvWeDCB8TiBYfOBvcvxsh7SK4cNmbU2111hAM8THCM14iN5SD-HQyL1Wb8562UJzAr0vIAg4BTUm3lpfkZ4x1R9c7CpNlMoB0xCKZ5XphQVsW2TyTEr2om54PudMtfJjiXa =624x500)

It was designed as a transactional schema not for analysis. Without a tool such as Chartio, navigating this schema for analysis would be incredibly challenging. However with Chartio you only need to focus on cleaning up tables to get much more value out of your data. Focus on making data lake tables easy to understand.

Example Data Lake table:

![](https://lh4.googleusercontent.com/DxbuacizkJerC9KSygs-RlZIedFYGw6MGRXklCraPWhTurNDTUicKqL6yysfb1zjd3-LB7ppOI-Rqi6yEWe4RjyLiHMCOrh2yeAyas-HS4JO9LtQCEE1qqjG778kvZNEYL8e-LfJ =624x297)

We can see multiple columns with issues that would be difficult for an analyst to understand or make use of. Lets see how this table could be reconfigured to become useful for analytics.

## How Data Warehouses are different than Data Lakes

Use modeling to create a clean version of the schema where all of the above inconsistency and points of confusion are addressed. This will be your company’s Data Warehouse. It will enable more users to understand and use the data. You can remove a few irrelevant tables for analysis but most of the focus should be on cleaning up columns.

Lets take the table above and apply some simple transformations to it.

![](https://lh4.googleusercontent.com/L5ZeLRir-Vszw38RGUBQdv-NzWrzI1GwUoMm9SDiLYDqVc5J-PRsFrE8K7PckCNL8tKD0vKWzeKU-6t7IZ-wsYtrkpwP0M9jOwS25h4vIhaApm6cU2zS33ageX4AiJIu3lF_JJhn =624x316)

We can see how dropping columns, adding columns, filtering rows and clarifying columns make the data much more straightforward to use and interpret. Now, people without experience with the data have a much easier time coming up to speed and will make less mistakes. Lets look at the final table without all the editing markup.

![](https://lh4.googleusercontent.com/h8_sEMJquYANolG0y01wpW5PPg7ysdqhfDm9HCNUPQbwUJgR1UtU4FvPFzHi5Lm5jQFZvUXD6xGxJAgNzGJVl3QVwjK5SRuDp9MB3Y_uQg_NFHcxXVu5PHnPPpf36MCMndefJkfV =624x267)

This is the promise of a Data Ware, clear tables that can be used by anyone without having to dramatically alter the schema.

## Summary

Data Warehouses makes your data:

* Easier to understand and query - simplified single model
* Faster to work with for the data team
* Approachable to work with for Business Users
* Trusted, consistent source of answers
* Easier and less timely to maintain

Data Lake data is pile of products in your building

Data Warehouse is those products sorted, shelved, and tagged.