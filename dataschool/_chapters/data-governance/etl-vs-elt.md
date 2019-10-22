---
section: Extras
title: ETL vs ELT
meta_title: Use ELT for Data Lakes
description: Learn why you should use an ELT over a ETL process for your Data Lake
number: 1001
authors:
- _people/kostas-pardalis.md
reviewers:
- _people/dave.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1iT0RwsHsr2pz0FjNtZ13UaQUtjehejEunmAHLTwsQW8/edit?usp=sharing
image: "/assets/images/ETLvsELTCover (1).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 7

---
How should you get your various data sources into the data lake? Well there are two common paradigms for this.

1. **ETL** is the legacy way, where transformations of your data happen on the way to the lake.
2. **ELT** is the modern approach, where the transformation step is saved until _after_ the data is in the lake. The transformations really happen when moving from the Data Lake to the Data Warehouse.

ETL was developed when there were no data lakes; the staging area for the data that was being transformed acted as a virtual data lake. Now that storage and compute is relatively cheap, we can have an actual data lake and a virtual data warehouse built on top of it.

We recommend ELT because

1. We care more about Extracting and Loading the data into a common place at the Data Lake stage.
2. Data on a lake will go through heavy transformations during the next stage, so there is no need for complex logic before the data is loaded. The transformation step of ELT happens in the data warehouse.
3. We can end up with a much simpler architecture which means less problems and less maintenance.
4. Data lineage becomes easier to track as complex transformations are not happening prior to loading the data into the lake.

Light transformation of the data before loading the data into the lake might still be necessary:

* **Column Selection:** Select the data that really matters. For example, not everything in Salesforce needs to be synced.
* **Privacy reasons:** for example, filtering out columns that contain PII (personally identifiable information). Instead of filtering, you might want to hash PII data so they can be used for your analytics.

The above transformation cases can be included in the ELT paradigm and are offered by most commercially available ELT vendors.


<!--- TODO: Find a place for some of this it doesn't work too well here
## Transforming for Analytics

While we do not recommend much transformation occurring at the Data Lake stage, there are a few scenarios where light changes are useful.

### Using a file system

In the case of S3 as a data lake, you can use Amazon Spectrum \[[4](https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html)\] to transform your data from S3 and load it into Amazon Redshift using SQL queries. You will then be able to run analytical queries in your BI tool.

![Data Lake S3 ELT](/assets/images/S3ELT (1).png "S3 ELT")

### Difficult data

In the case where you use a data warehouse database such as Redshift for your data lake, you can use a technology like dbt\[[5](https://getdbt.com/)\] to transform your data to make it more easily queried by your BI tool.

![Redshift ELT DBT Chartio](/assets/images/ETLvsELT.png "Redshift ELT")

Keep in mind that you can use these same transformation tools to extract data from the Data Lake and load it into your Data Warehouse.

--->
