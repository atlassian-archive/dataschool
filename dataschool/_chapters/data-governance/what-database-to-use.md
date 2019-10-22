---
section: Stage 2 - Lake
title: What Database to Use
short: Choosing a Warehouse
meta_title: How to choose a databse for your Data Lake
description: Learn the pros and cons of the modern database options like Snowflake,
  Redshift and BigQuery to build your Data Lake on.
number: 5
authors:
- _people/tracy-chow.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/SnowflakeCover.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
The biggest decision to make when moving from source data to a lake is what database you will use for the lake. Most people consider:

* Pricing
* Ecosystem
* Performance/Scale
* Maintenance

There are a variety of database pricing models for Data Lakes from being based on storage to being based on the amount of data queried. If your company is strictly using Amazon or Google as your software vendors, this can dictate your vendor choice as well.

The architecture of the Data Lake has implications on how it’ll help your operations scale. Differences in different lakes entail columnar vs. row-oriented storage, and having storage and compute together or separated. If there are requirements for ongoing maintenance of your Data Lake you will want to know that as well.

When selecting the right database for your organization, you may also consider whether you want an on-premise or cloud solution. More and more businesses are moving to cloud solutions to take advantage of the “as a service” model and save on hardware costs so we will focus on cloud databases in this section.

## Lake Engines

Here are the four main choices for a modern Data Lake on the cloud. Note - [all of these are similar and based on the c-store paper.](https://dataschool.com/data-modeling-101/row-vs-column-oriented-databases/)

### Amazon Redshift

![Logo for Amazon Redshift](/assets/images/AmazonRedshiftLogo.png "Amazon Redshift")

#### Pros

Redshift has the benefits of ease of use, speed, and cost. Being a part of AWS, there is full service integration for the wide range of AWS services such as S3 for storage and CloudWatch for infrastructure monitoring. Redshift is generally cheaper than Snowflake or BigQuery, with a couple pricing options such as paying hourly per node or paying by number of bytes scanned with Redshift Spectrum. And it’s simple to set up and scale by increasing storage and performance by adding nodes to your cluster.

Most popular, though losing ground. Very similar to Postgres.

#### Cons

Users can often run into concurrency issues with Redshift if it isn’t set up properly or if there are high volumes of queries from many people in an organization accessing the database. Ongoing maintenance may be required with Redshift to resize clusters, define sort keys, and vacuuming data. Like many AWS services there are many ways to customize your configuration with workload management, compression, and partitioning. But these advanced features are not very out of the box. So although it is powerful it may require a dedicated resource from your data engineering team.

### Google BigQuery

![Logo for Google BigQuery](/assets/images/GoogleBigQueryLogo.png "Google BigQuery")

#### Pros

BigQuery is not bound by cluster capacity of storage or compute resources, so it scales and performs very well with increasing demands for concurrency ie. more people/queries accessing the database. As a fully managed database, BigQuery handles vacuums and resizing on its own which can save time for your data engineers and makes it easy to use and maintain. For businesses using Google products, BigQuery integrates well with Google Drive and Google Analytics.

#### Cons

Cost is determined per query byte, making it difficult to budget or regulate if you have users running ad hoc queries against the Data Lake. To work around this, you can leverage BigQuery’s cost controls but it can still restrict the amount of analysis you can perform because it limits the queries you can run.

### Snowflake

![](/assets/images/SnowflakeLogo.png)

#### Pros

Like BigQuery, Snowflake has an architecture that separates the compute query engine from data storage. As a result, it is highly scalable at any amount of volume and concurrency. Pricing is based on the storage and compute used on a time-basis with their virtual databases instead of per bytes scanned. Tuning, indexes, and distribution keys aren’t required for queries to be optimized and performant. Because of these reasons, it can be said that Snowflake has many of the benefits of both Redshift and Big Query.

It is also very similar to Postgres.

#### Cons

Snowflake is a relatively new database in the market, so if you are familiar with SQL functions supported by databases like Redshift or Postgres you may find some inconsistencies in the SQL syntax. Snowflake also is more expensive

## Database Engines

### PostgreSQL

![Logo for PostgreSQL](/assets/images/PostgreSQLLogo.png "PostgreSQL")

#### Pros

Unlike the options above, PostgreSQL is an open source database that is free to download. It can easily be spun up on your local server or hosted on various cloud services such as AWS. Postgres also has an ANSI compliant SQL library and supports an extensive library of third-party and user-defined functions. It has very fast writes as it is a transactional DB. It also has fast reads below \~100M rows

#### Cons

Postgres is a straightforward, flexible solution that’s different from Snowflake, Redshift, and BigQuery because it is a row-oriented database more suited for processing transactional data over analytical queries. It’s a single database connection not architected for parallel processing, so it generally doesn’t perform as well if you have a data volume of over 1 TB. Consequently, Postgres is great as a database, but is not a a good choice for a Data Lake if you have a high volume of data (>1TB).

### Recommendation

Selecting a Data Lake can be dependent on a number of factors that should be considered before making the investment. If you prefer a cheap, straightforward Data Lake you may be tempted to go with PostgreSQL, however it will have trouble scaling as a Data Lake. Redshift is a good choice as a standard cloud Data Lake if you have the capacity for a dedicated DBA. BigQuery and Snowflake are both highly scalable solutions considering their architecture. However, if cost or concurrency limits will be an issue for you then Snowflake would be more suitable for your organization.

Remember all of the data lakes are built on the same c-store architecture so the differences will not be severe in performance. However we do recommend checking out [benchmarking on the different databases](https://fivetran.com/blog/warehouse-benchmark).

## Selecting an ETL/ELT Process

Once you have selected your Data Lake solution, you will need to decide how to set up your ETL or ELT to load data from your source data into your Data Lake and convert the raw data into something meaningful. ETL has been the traditional method for data lakes, however ELT has been growing in popularity due to its compatibility with cloud systems.

### View and dbt

![Logo for dbt](/assets/images/dbtLogo (1).png "dbt")

Doing an ETL/ELT in the same place, such as if you are using Redshift for both your database and data lake, simplifies your process and keeps your data stack lean. This is desirable because you will have less environments and tools to manage and your data will be housed in one location. You can just do it without having to extract and load. Transform only!

### Performance

In an ETL process the data is typically extracted and first put into a staging area, as opposed to an ELT approach which has all the raw data loaded in your system from the get go. In ELT, because the data is already loaded, users don’t need to wait for the entire process to finish before they can access the data.

In addition to the benefit of accessing the raw data faster, with the transformation performed at query runtime, a query can be run concurrently with other queries. With cloud systems that make it easy to scale storage and processing power, ELT also allows for greater flexibility and lower maintenance. Resources can be added as needed for intensive transformation tasks. And because the data is always available, the ETL process does not need to be modified to make changes to your lake.

### Access

Another thing to consider when choosing between ETL and ELT is seeing who should have access to the Data Lake. If there are non-technical users who will also be accessing the Data Lake, then having them exposed to raw data may not be ideal. In that scenario it would be preferable to have the data engineers or data team do the data manipulation in creating summary tables or materialized views.