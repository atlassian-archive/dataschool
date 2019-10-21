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
image: "/assets/images/SnippetDictionaryCover (2).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
If you do get to the stage where you are utilizing a SQL based BI tool to blend and analyze your data, you should be aware of some helpful best practices. At this stage, with few people exploring the data, it is not recommended to spend a lot of time doing modeling or clean up. However, the following agile best practices will prove helpful.

## Keep a complexity wiki page

Instead, keep a document or wiki page with warnings about known complexities in the data so that you and others training up can reference and share some knowledge.  Some example things to keep track of are:

* Descriptions of poorly named columns and tables
* Columns with nulls or largely useless data
* Business logic
* Complex or confusing join paths
* Old or Unused columns and tables

<!--- TODO: It would be great to link to an example/template of this doc --->

## Snippet Dictionary

Another useful document to keep is a dictionary of base queries or snippets for common metrics.  When working with data that hasn't been modeled yet, you end up having to repeat a lot of the same filters over and over again.  It's helpful to be able to grab those easily when needed, rather than re-create them each time.  

![Snippet Dashboard and Snippet Query file](/assets/images/SnippetDictionary.png "Snippet Dictionary")

These can be stored on a wiki, .sql file, or even as a dashboard of these queries saved as charts.  With the right BI product, the dashboard method is ideal, as these snippets are rendered as starter charts that can be easily duplicated and adjusted.  

Along with the snippets, it is a best practice to add comments describing how the metric was calculated. These snippets and comments will be a starting basis for data models at Warehouse stage of data sophistication.

## BI Layer Meta Modeling

Agile BI products will allow you to do some light modeling of the data at the BI layer.  In Chartio for instance there is a Schema Editor, that enables you to quickly rename fields, hide columns, specify join paths, and create custom columns or tables. Time here can be well spent, but if you're doing too much of it, consider moving all the way forward to the [Warehouse stage](/data-governance/why-build-a-data-warehouse/) where your efforts will be more universally applied.   

![Meta modeling in BI product](/assets/images/BILayerMetaModeling.png "BI Layer Modeling")

If you're using Tableau, they have a feature called Data Interpreter that will do this as well.  

<!--- TODO: Matt, maybe explain a bit more on Tableau? --->

## Visual, Drag and Drop Exploration

In addition to SQL access some BI products with drag and drop data explorers such as Tableau Desktop or Chartio's Visual SQL will handle writing the SQL for you.  Generally exploring data visually is much faster and intuitive than writing raw SQL.  Visual interfaces will handle changing data format strings, join paths, new groupings, unique dialects, etc. automatically - saving you a lot of googling and debugging.

![Chartio Visual SQL](/assets/images/Screen Shot 2019-09-30 at 9.44.02 PM.png)

Especially at this source stage, you may be dealing with sources in multiple SQL dialects, and a few different API's.  Remembering the syntaxes of all of these is just not realistic and a visual interface that performs similarly on top of all of them.  Having the SQL written or you is a huge asset.  

These interfaces will be even more useful on top of cleaned/modeled data in the warehouse and mart stage where you'll enable more people in your company to explore data and answer questions themselves.

<!--- TODO: Matt, maybe explain a bit more on Tableau? --->

## Double Check Results

Whenever you are producing visualizations unexpected or null values can make your analysis incorrect. Always do a quick review of the raw data by sorting each field to see if you need to remove, ignore, or update nulls/outliers so that your analysis is correct.

![Check your Query Results](/assets/images/DoubleCheckQueryData.png "Double Check Data")

Read this post on [Finding Outliers with SQL](https://dataschool.com/how-to-teach-people-sql/how-to-find-outliers-with-sql/)

## Keep short Dashboards

We've noticed that people have a tendency to keep adding more and more charts to existing dashboards.  We get it, when you're finding one insight at a time, it never feels like the right time to make a totally new dashboard.  The result however is that you end up with really long disorganized dashboards - that run queries for each chart each time.  

![Keep shorter dashboards](https://chartio.com/images/blog/best-practice:-keep-shorter-dashboards/image-asset.jpeg)

With a long dashboard, simply checking in on your dashboard to get the latest on one or two of your key charts is going to kick off hundreds of queries.  We've written more on the best practices of [keeping short dashboards here](https://chartio.com/blog/best-practice-keep-shorter-dashboards/), but in short, it's best to organize them in smaller groups and create quick links between them.

![Organized, short dashboards](https://chartio.com/images/blog/best-practice:-keep-shorter-dashboards/best-practice:-keep-shorter-dashboards-0.png)


## Design before building

Another common pitfall is starting a dashboard by exploring data first.  When you do this you end up with a collection of what you thought were interesting facts while exploring, but that are in daily monitoring probably quite useless.   We've written a whole other book on this pitfall entitled [How to Design a Dashboard](/how-to-design-a-dashboard/).

[![How to Design a Dashboard](https://dataschool.com/assets/images/book-covers/how-to-design-a-dashboard.png)](/how-to-design-a-dashboard/)

In short - when creating key dashboards that you'll be continually monitoring spend some time in pen and paper first, outlining exactly what you want to see and how.  It will save you a lot of time and result in a considerably more useful dashboard.

## Summary

Analyzing source data can be tricky since it has not been cleaned or modeled however these best practices make it easy

* Keep a short regularly updated snippet dictionary
* Use BI products to overcome data issues such as weird field names and complex joins
* Double check the data before visualization
* Keep shorter Dashboards
* Design dashboards in pen and paper first
* Keep an eye on query performance if you are hitting the production database

Lastly, you should start exploring tools to pipe in multiple sources of data that are not handled by your SQL based BI tool to build your Data Lake.
