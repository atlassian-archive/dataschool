---
section: Databases
title: BigQuery Optimization
meta_title: Optimizations of BigQuery Databases
description: Learn how BigQuery optimizes your database through specific hardware
  optimization strategies.
number: 130
authors:
- _people/blake.md
reviewers:
- _people/matthew-layne.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1OV-Vkj9M700ZQQX_2fDrt5hXpSfoQDjBTKbfyFBHRS8/edit?usp=sharing
image: "/assets/images/sql-optimization/bigquery/bigQuery.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time: 

---
![BigQuery Logo](/assets/images/sql-optimization/bigquery/bigQuery.png)

[BigQuery](https://cloud.google.com/bigquery/?gclid=EAIaIQobChMI0eqlj_aT4wIVmonICh3t9QbPEAAYASABEgKjxPD_BwE&tab=tab2) is a fully managed cloud database hosted by Google. BigQuery is highly-scalable and elastic, allowing for high speed queries on large amounts of data. It handles optimizing your warehouse for you. Let’s explore how it does this.

BigQuery provides several key features:

* Elastic Structure
* Fully Managed
* Data Streaming
* BigQuery Add-on Services
* Flexible Pricing

## Elastic Structure

BigQuery is designed with performance and scalability in mind. BigQuery is split into two parts:

* the storage layer
* the compute layer

### Storage

The storage layer only handles, you guessed it, storage of data in the database. BigQuery will automatically partition the storage drives that your database requires and automatically organize your data as a column oriented database. BigQuery can host anywhere from a few GigaBytes of data to massive PetaByte databases.

### Compute

The compute layer is separate from the storage and is only used to perform queries on the database. This separation of storage and compute power allows databases to scale quickly without large amounts of hardware changes on Google’s side.

## Fully managed

BigQuery does not require you to choose what hardware your database will use or require you to configure the database’s settings. This allows for quick and easy set up of the database. Simply upload or route your database to BigQuery and begin querying your data. BigQuery fully manages the database with no requirements from the user, allowing the user to spend more time on their queries and less time keeping their databases up to speed.

## Data Streaming

One big advantage of using BigQuery is high speed data streaming. This high speed data streaming allows users to ingest 100,000 rows of data per second to any data table. This provides a huge benefit for power users who operate based on the live analysis that is coming in to their database.

## Services

BigQuery can be linked with several services:

* [BigQuery ML](https://cloud.google.com/bigquery-ml/docs/bigqueryml-intro)- Allows data scientists to create machine learning models using their databases to accomplish tasks like creating product recommendations and predictions.
* [BigQuery BI Engine](https://cloud.google.com/bi-engine/docs/getting-started-data-studio)- Create dashboards to analyze complex data and develop insight into business data.
* [BigQuery GIS](https://cloud.google.com/bigquery/docs/gis-intro)- Plot complex GIS data on a map to better understand the relationship between data and it’s real world application.

All of these features increase the productivity of those using BigQuery and add to the value of the service.

## Flexible Pricing

BigQuery is priced by data instead of by time used, meaning that BigQuery charges by the GigaByte stored and by the TeraByte queried. This should be taken into account when planning what type of database you want to implement. This payment system works best for databases that do not run queries often because they will not process as much data. The [specifics on BigQuery pricing can be found here](https://cloud.google.com/bigquery/pricing).

## Optimizations

There are no hardware or performance tuning options within BigQuery because BigQuery automatically configures all of that for its users. The only way to optimize your BigQuery database is to write SQL queries that perform most optimally, [more on that here from BigQuery](https://cloud.google.com/bigquery/docs/best-practices-performance-overview). You can read another article we wrote on [optimizing SQL queries here](https://dataschool.com/sql-optimization/optimize-your-sql-query/). You can also checkout this article on [analyzing your SQL queries here](https://dataschool.com/sql-optimization/optimization-using-explain/).

## Summary

* The two part structure of BigQuery allows for easy expansion and quick processing of any database
* Databases are fully managed and maintained by the BigQuery system and require no user input
* BigQuery’s data streaming allows for high speed data importing and live updates to data.
* BigQuery’s services add even more strength to the system and increase the ability of its users.
* BigQuery’s “pay as you use” system is perfect for databases that are not queried often

### References

[https://cloud.google.com/bigquery/?gclid=EAIaIQobChMI0eqlj_aT4wIVmonICh3t9QbPEAAYASABEgKjxPD_BwE&tab=tab2](https://cloud.google.com/bigquery/?gclid=EAIaIQobChMI0eqlj_aT4wIVmonICh3t9QbPEAAYASABEgKjxPD_BwE&tab=tab2 "https://cloud.google.com/bigquery/?gclid=EAIaIQobChMI0eqlj_aT4wIVmonICh3t9QbPEAAYASABEgKjxPD_BwE&tab=tab2")