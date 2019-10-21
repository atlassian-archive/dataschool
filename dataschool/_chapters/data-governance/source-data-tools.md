---
section: Stage 1 - Source
title: Starting with Source Data
meta_title: Best Tools to Analyze Source Data
description: Learn how to analyze data from applications, production databases, and
  financial records.
number: 1
authors:
- _people/tim.md
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1RudG3G8RGKgqayeY9R89EcYi1Sob3LclEcGwfBywVlA/edit?usp=sharing
image: "/assets/images/StartingWithSourceData.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 4

---
Businesses generate tons of data. Product information, customer information, app performance, marketing expenditures etc. You need to start organizing and analyzing data in order to run your business effectively. At the beginning of a business or while a business remains small it is sufficient to work with data from production databases, product APIs, and financials all in different applications.

## Tools to Analyze Source Data

Data will live in many different places but the methods to analyze them boil down to:

* In App
* Excel
* IDE
* Cloud Dashboarding tool
* Self-Service BI product

### In app

Many modern SaaS applications come built with the same set of fixed dashboards and visualizations to showcase the data they are capturing. These charts are highly tuned to specific use cases and can be quite informative. In addition there are usually support people from that company who can help you understand them better or figure out issues in the data if you are having a problem.

![Two examples in app dashboards](/assets/images/InAppDashboards-2.png "In App Dashboards")

### Excel

Most applications allow you to export your data into csv files. You can take this data and open it in Excel to analyze it. While this is an effective way to expand the questions you can ask of the data it is fairly manual and will need to be updated with new data often.

### IDE

For data sources such as your production database you can query it directly from the command line but this can get messy and hard to keep track of queries and results. We suggest setting up an IDE such as PG admin to better handle querying data within a Schema.

![IDE Example, explore schema](/assets/images/IDEexample (1).png "IDE Example")

### Cloud Dashboarding tool

Tools like Gecko Board or Grow allow you to bring in data via APIs to visualize data in simple ways. This allows you to combine data from multiple places into a single dashboard with simple visualizations to be viewed.

![Cloud Dashboarding Tool](/assets/images/CloudDashboardingTool.png "Cloud Dashboard")

### Self-Service BI

Ultimately the best option to analyze source data is to use a flexible self-service BI tool such as Chartio. Tools like Chartio allow you to pull data in large amounts from applications and your database. You can then combine them in queries, analyze the data in multiple ways, and produce custom visualizations. It also allows for the queries to be automatically updated so that the information shown on dashboards is up to date.

![Chartio Dashboard Self Service BI](/assets/images/ChartioDashboardExample.png "Chartio Dashboard")

This section will cover different ways to optimize your usage of source data and how you can prepare to transition to creating a Data Lake to unify your analytics.