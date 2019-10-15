---
section: Data Lake
title: Data Lake Architecture
meta_title: Modern Data Lake Architecture Best Practices
description: Learn to unify data sources and work with multiple schemas
number: 5
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1bmzawGH7hVTGSBx5hlgY0jfX05MEYoDLC4pqqD4yR-A/edit?usp=sharing
image: "/assets/images/multisource dashboard.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
Before we start piping various data sources into a Data Lake we need to understand what the is and how it should be designed. The goal of a Data Lake is to make all of your data available to be queried in one place. This allows for easier access, more security, and makes analysis less complicated.

## How to get data in one place (the lake)

Most apps businesses use to run their day-to-day operations produce data. This data could be useful for improving operations, customer support, and many other parts of your business. Unfortunately, in order to analyze this data in the different places where it is housed, you are limited to using pre-designed dashboards, which means that you have limited analysis capabilities.

The biggest drawback with this siloed data, is that you cannot compare data from Salesforce with data from another app or service like ZenDesk or Hubspot. Comparing this data together can give you much more powerful insights into customer lifecycle or behavior. Using a Data Lake to host all that data in one place is the first step in creating yourself a data infrastructure that is complete.

Luckily most SaaS products provide a way to export the data in files or through an API.

![](https://lh6.googleusercontent.com/EUv8wR8EVLp0Kggw1zY-Ci1EW23V8ibl8Hhllblfo16kyMhvIhsO37NO4Aynop4r0HACsk0LuuiZCLLuahPkkA4eMX3oyG4gk-2Va_vJy2wtkHd6ILo30wQZHyuMMucUFACHHOal )

Getting your raw data from these apps into an unstructured repository of raw data, or a Data Lake requires Extraction and Loading (E and L of ETL/ELT Processes). In the past these had to be custom scripts but now there are easy-to-use tools like Stitch, Blendo, and Fivetran that can be used to extract your data from different sources and load it into a Data Lake in SQL format. These applications come pre loaded with integrations for most of the common applications your business might use.

![](https://lh6.googleusercontent.com/Smv_Jd_N7cdYmQWyNFLwWvzHvmL0KQjKQUbWvTrRIfzqVAMiJETrPrIFkawaO2MACqNuLoAWeOaR3CL126GC9AjMvqZwceggWECxAfpqAIW40IiEO_3gr8ErxWQ68fR0QXsLDx33)

Some recommend cleansing, sanitizing, or even aggregating your data at this stage however we think it is important to separate that step since there are many business considerations to be made. For now, just bring the data into one place, and if easy, convert the non SQL-based data into SQL. Later in the [Data Governance book](https://dataschool.com/data-governance/), it covers [cleaning data](https://dataschool.com/data-governance/data-warehouse-implementation/) at the next level of sophistication, the Data Warehouse.

## Multiple Schemas

When the data is piped into the Data Lake it will exist in separate schemas on your database. While this may seem like the data is still siloed it is not if you are using the right type of BI tool. Tools such as Chartio allow you to combine data from multiple sources to find insights. This will save you enormous amounts of modeling time. Separate schemas are ok!

![](https://lh4.googleusercontent.com/9GJBs6EPMTmaV7dEW8kMCVYy1fu2B89xDpQZ5YjIkQcjnU9QOyI77nFwI_oRRIE5BveHhGe4P98iIJ_m7C5KLW0g3vF6VI7fBse36fljPLKtGxRJiiTsLW2-yxjC61aTSEtLO0rt)

In addition to combining data within a query to produce an insight you can also create separate charts per schema and “combine” them by placing them in a single dashboard. Having a dashboard with charts from different apps can give you a powerful way to find insights.

![](https://lh3.googleusercontent.com/ybnO4tjHmgDrUd_oeMgbE5u8c32MRd-cXorxTtN26MvuevB2GHIR-PZ0VGw2ByciKmGeIIM5cVRr8FFSyOzc3PMgcqxV6dzLTdFnu6FWpGFEm4uULg0-9xvTDmbBj33ySzaIf8rI)