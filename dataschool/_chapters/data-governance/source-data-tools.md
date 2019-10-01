---
section: book
title: Source Data Tools
meta_title: Best Tools to Analyze Source Data
description: Learn how to analyze data from applications, production databases, and
  financial records.
number: 
authors:
- _people/tim.md
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1RudG3G8RGKgqayeY9R89EcYi1Sob3LclEcGwfBywVlA/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 4
published: false

---
Businesses generate tons of data. Product information, customer information, app performance, marketing expenditures etc. You need to start organizing and analyzing data in order to run your business effectively. At the beginning of a business or while a business remains small it is sufficient to work with data from production databases, product apis, and financials all in different applications.

## Tools to Analyze Source Data

Data will live in many different places but the methods to analyze them boil down to:

* In App
* Excel
* IDE
* Cloud Dashboarding tool
* Self Serve BI product

### In app

Many modern SaaS applications come built with the same set of fixed dashboards and visualizations to showcase the data they are capturing. These charts are highly tuned to specific use cases and can be quite informative. In addition there are usually support people from that company who can help you understand them better or figure out issues in the data if you are having a problem.  
  
![](https://lh3.googleusercontent.com/cYUkMXdYfWNl55hNUblnfTpB0R99NZM3Han7GDQrJupixsPglDS21yDAyzqgghuIbsUReKmSNAsPybGaOj8FQ3EK8NwotL6E42e7rGHUlipNk7ymhB3o9BPoUvoyIr9BHWxeclv8 =262x247)![](https://lh3.googleusercontent.com/jdWIl5TToEGuIn7ZCAy1p7_NVjTaadtYMPXSCobsalTknnVjJEdUjuQdWFLKVcKDkfgxTIa4WCqO-Ukj9TkxccUvZ3UksU1TvyTikK-VnE3VtGljrBuW0XOLpbVx_35LbaDjoLS8 =322x244)

### Excel

Most applications allow you to export your data into csv files. You can take this data and open it in Excel to analyze it. While this is an effective way to expand the questions you can ask of the data it is fairly manual and will need to be updated with new data often.

### IDE

For data sources such as your production database you can query it directly from the command line but this can get messy and hard to keep track of queries and results. We suggest setting up an IDE such as PG admin to better handle querying data within a Schema.

![](https://lh5.googleusercontent.com/M0Sv1u4JugdXuJ8kF0eIz9UOXvodNuIFZtSZQhj-d3zpY89llsjSO9gP7hYxtY0JgC60_VTBlmKHfA-RujYO4eigRywC_-PgqeOo2lsSbKKPakX6L-ua2KWL4vZQTidE-J3ZsI8f =624x356)

### Cloud Dashboarding tool

Tools like Gecko Board or Grow allow you to bring in data via api’s to visualize data in simple ways. This allows you to combine data from multiple places into a single dashboard with simple visualizations to be viewed.

![](https://lh5.googleusercontent.com/iYU4tKzB-RWRr5cHTIyQl0aBYcp26XQdfpTUOCiidFTP4_RSkWE6xB9J3pivIUCAzEW43xVVSqzCXQuSnpzF_vsXag_Q56m7GlzuF8DJDaWOBT-M_klyCujTVRhbgl6q_RVXVBEg =624x363)

### Self Serve BI

Ultimately the best option to analyze source data is to use a flexible self serve BI tool such as Chartio. Tools like Chartio allow you to pull data in large amounts of data from applications and your database. You can then combine them in queries, analyze the data in multiple ways, and produce custom visualizations. It also allows for the queries to be automatically updated so that the information shown on dashboards is up to date.

![](https://lh3.googleusercontent.com/tVP2nWD1EG5z4PYR2DfkazTXQtXGC3vGlmunB7aPE28bAWge0w5xRm4YL8hseiPLi_tc0kFJhQv863muCvjUguyffoClHes2nw0aMHtYSkjR2iuv8I0NmEod2Syc6-kbCoRQtP5Y =400x359)

This section will cover different ways to optimize your usage of source data and how you can prepare to transition to creating a data lake to unify your analytics.