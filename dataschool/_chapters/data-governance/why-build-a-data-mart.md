---
section: Data Mart
title: Why Build a Data Mart
meta_title: Top 5 Reasons to build a Data Mart
description: Learn the best reasons to build a data mart on top of your data warehouse
number: 40
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1WCqInQvsI3LSBJ3E8Af1Sfmsl2EK5DWlzQgSPeWVmDU/edit?usp=sharing
image: "/assets/images/Data Mart Schema.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
## What is a Data Mart?

A data mart is a filtered (and sometimes aggregated) subsection of a data warehouse to make it easier for a particular group to query data. It provides a smaller schema with only relevant tables to query.

## Five reasons to build a Data Mart

1. **Relevance** to use cases. Limiting the schema to the tables that you need allow you to parse the schema easily.
2. **Accessible** to a variety of people and teams. Data marts allow you to expose more people to data without overwhelming them.
3. **Customized** architecture for different use cases. Aggregations, metric calculations, and PII can all be handled individually for teams.
4. **Maintainable** with less time and effort. Having the data monitored by team leads makes it easier to identify data issues.
5. **Separated** levels of data access.
   Easily protect sensitive data by limiting what teams can see in their data marts.

This section of the Data Governance book will explain why you should create data marts, and how to implement them so that you get all the benefits it can deliver your business. Before we dive in deep let’s look at the data issues you are facing with a data warehouse.

## The Problem with Data Warehouses

As an organization scales the amount of data they are tracking and the number of people who want to access it scale too. This results in more people with less context about more and more of the schema.

We want to go from a complex schema:

![](https://lh4.googleusercontent.com/aCGL8MDXzwytGTb2ewvGgT5vVdpNjPXbvzY2GzUF8iBKz44hLIPNlMRoKQgMqkSPEgE5w8G173KYjd6w1n63-5T2YfwfMNzM_8aW8m7gvojVQqZnkG29YrgnlKes8XZyOdQ4y2Td)

To a siloed schema, where each department has the data they need:

![](https://lh5.googleusercontent.com/yoWAESu6C73f2sdpA4GzMU8zG0XNK0jTagC6Q7e-8yudgJgObcOIvjMPKWtJ8MlMNfhtUtELBAlE6HE0H7b3TZC8y40elE5shv0MGwJ5ldVY7fSZiBPDB-U-hSVi1x0L4cPMotpH)

So while going from Lake to Warehouse was mostly about cleaning up tables, going from warehouse to marts is about cleaning up schemas. Different departments need different parts of the data warehouse schema.

![](https://lh5.googleusercontent.com/IJ17R4l5ee_IzucFnpl34MYuHhFXoqI6yOtPsYxEGyvN4Rqt8M8GuQzo35kOc86FIfHEeYE42qORp-C6G19KuMquuqM6k0jybTjBKSyoCQnuk7kWJrJcNKWrEgjZ-6J5IwQ8yI7E)

## How Data Marts are different than Data Warehouses

Use modeling to create separate schemas where all of the tables are provided to the right team or individual. These will be your company’s Data Marts. Structure wise they should be the same, the data should have been cleaned at the data warehouse stage.

Data Marts are not very different than your data warehouse, the heavy lifting was already done. Data Marts make it a bit easier for people within departments to navigate the schema and provide extra oversight of the data for that department.

## Summary

Data Mart makes your data:

* **Relevance** to your job and use cases
* **Accessible** to a variety of people and teams
* **Customized** architecture for different use cases
* **Maintainable** with team leads
* **Separated** to protect sensitive information

Data Lake data is pile of products in your building

Data Warehouse is those products sorted, shelved, and tagged.

Data Mart is those products shipped out to relevant stores for sale