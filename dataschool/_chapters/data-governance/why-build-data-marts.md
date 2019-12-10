---
section: Stage 4 - Mart
title: Why Build Data Marts
short: Why build marts
meta_title: Top 5 Reasons to build a Data Mart
description: Learn the best reasons to build a data mart on top of your data warehouse
number: 40
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1OwP9iL0s75cLiY64JguE6uhC25XCDqh11WNyIVO5hZU/edit?usp=sharing
image: "/assets/images/DataMart (1).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5
faqs:
- question: How are data marts different from data warehouses?
  answer: |-
    Use modeling to create separate schemas where the tables are provided to the appropriate team or individual. These will be your company’s Data Marts.

    The table structures should be the same, as the data should have been cleaned at the Data Warehouse stage. Data Marts are not very different from your Data Warehouse since the heavy lifting was already done. Data Marts make it easier for people within departments to navigate the schema and provide extra insight of the data for that department.
- question: Why should I build a data mart?
  answer: |-
    1. Relevance to use cases. Limiting the schema to the tables that you need allow you to parse the schema easily.
    2. Accessible to a variety of people and teams. Data marts allow you to expose more people to data without overwhelming them.
    3. Customized architecture for different use cases. Aggregations, metric calculations, and PII can all be handled individually for teams.
    4. Maintainable with less time and effort. Having the data monitored by team leads makes it easier to identify data issues.
    5. Separated levels of data access. Easily protect sensitive data by limiting what teams can see in their data marts.
- question: What is a data mart?
  answer: A Data Mart is a filtered (and sometimes aggregated) subsection of a Data
    Warehouse to make it easier for a particular group to query data. It provides
    a smaller schema with only the relevant tables for the group.

---
## What is a Data Mart?

A Data Mart is a filtered (and sometimes aggregated) subsection of a Data Warehouse to make it easier for a particular group to query data. It provides a smaller schema with only the relevant tables for the group.

### This stage is right for you if:

* You want to get democratized and enable others in your company to explore and understand data themselves
* You're prepared to teach and enable business users in your company - hopefully using the many resources of [The Data School](https://dataschool.com/)
* You have projects that require different formats of the source of truth for easier use
* Having truly informed employees is important to your company's competitive success

### You've outgrown this stage if:

* You can't really! You can make any number of marts, and even put leveling in your marts if you'd like. Implementing this stage will result in a complete, well architected and governed stack that will continually evolve and support your informed competitive company.

## Five reasons to build a Data Mart

1. **Relevance** to use cases. Limiting the schema to the tables that you need allow you to parse the schema easily.
2. **Accessible** to a variety of people and teams. Data marts allow you to expose more people to data without overwhelming them.
3. **Customized** architecture for different use cases. Aggregations, metric calculations, and PII can all be handled individually for teams.
4. **Maintainable** with less time and effort. Having the data monitored by team leads makes it easier to identify data issues.
5. **Separated** levels of data access. Easily protect sensitive data by limiting what teams can see in their data marts.

This section of the Data Governance book will explain why you should create data marts, and how to implement them so that you get all the benefits they can deliver your business. Before we dive in further let’s look at the data issues you are facing with a Data Warehouse.

## The Problem with Data Warehouses

As an organization scales the amount of data it is tracking, the number of people who want to access it scale too. This results in more people with less context about a large portion of the schema.

We want to go from a complex schema:

![Large complicated schema example](/assets/images/ComplexSchema.png "Complex Schema")

To a siloed schema, where each department has the data they need:

![Sectioning off a complex Schema with Marts](/assets/images/ComplexSchemaDataMart.png "Complex Schema with Marts")

So while going from Lake to Warehouse was mostly about cleaning up tables, going from Warehouse to Marts is about cleaning up schemas. Different departments need different parts of the Data Warehouse schema.

![Show permissions break down for data marts](/assets/images/DataMartGrid.png "Data Mart Grid")

## How Data Marts are different from Data Warehouses

Use modeling to create separate schemas where the tables are provided to the appropriate team or individual. These will be your company’s Data Marts.

The table structures should be the same, as the data should have been cleaned at the Data Warehouse stage. Data Marts are not very different from your Data Warehouse since the heavy lifting was already done. Data Marts make it easier for people within departments to navigate the schema and provide extra insight of the data for that department.

## Summary

Data Marts make your data:

* **Relevant** to your job and use cases
* **Accessible** to a variety of people and teams
* **Customized** architecture for different use cases
* **Maintainable** with team leads
* **Separated** to protect sensitive information

A Data Lake is a pile of products in your building.

A Data Warehouse is those products sorted, shelved, and tagged.

A Data Mart is those products shipped out to relevant stores for sale.