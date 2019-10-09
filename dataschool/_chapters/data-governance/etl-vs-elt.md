---
section: Data Lake
title: ETL vs ELT
meta_title: Use ELT for Data Lakes
description: Learn why you should use an ELT over a ETL process for your Data Lake
number: 7
authors:
- _people/dave.md
reviewers:
- _people/dave.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1OTGslZaat0-XI74tzWy6kVDyZ21-4kUVzRLqYH-1nQ4/edit?usp=sharing
image: "/assets/images/data lake.png"
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

* **Column Selection:** Select the data that really matters. For example, not everything on Salesforce needs to synced.
* **Privacy reasons:** for example, filtering out columns that contain PII (personally identifiable information). Instead of filtering, you might want to hash PII data so they can be used for your analytics.

The above transformation cases can be included in the ELT paradigm and are offered by most commercially available ELT vendors.

## Transforming for Analytics

While we do not recommend much transformation occuring at the Data Lake stage, there are a few scenarios where light changes are useful.

### Using a file system

In the case of S3 as a data lake, you can use Amazon Spectrum \[[4](https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html)\] to transform your data from S3 and load it into Amazon Redshift using SQL queries. You will then be able to run analytical queries in your BI tool.

![](https://lh4.googleusercontent.com/f7KfBJoglxNjJu_1FiuZ4jfW9ooQEAqP05ZanTvm8KRHkNjSL1324KTO87v2ukfRK-tvD7y63rYwdSUo2iA4-gFCiG4BHsdB1G1LWDXx93STa8iu5PgTZUpseStZB2LVbwWP18Cl)

### Difficult data

In the case where you use a data warehouse database such as Redshift for your data lake, you can use a technology like dbt\[[5](https://getdbt.com/)\] to transform your data to make it more easily queried by your BI tool.

![](https://lh4.googleusercontent.com/lN8Ds8IuGx4LwhtEsoGohpMYvcmUb13Moid_ZYACKsP91EW7ilSVUPSKIAK1b-2qHvqjse-dIYCIm0JoEO-lgE11oPSMv_XL-7kyoOWEy-ab3m3Lde7aWq7Bqifm3OBFKzdWCCIF)

Keep in mind that you can use these same transformation tools to extract data from the Data Lake and load it into your Data Warehouse.

# How to ELT to a Data Lake

There are many options if you want to move your data into a Data Lake, regardless of the source it comes from.

1. Use an ELT vendor like Fivetran\[[6](https://fivetran.com/)\], Stitch Data\[[7](https://stitchdata.com)\] or Blendo\[[8](https://www.blendo.co)\]
2. If you want to perform ETL, you can use something like Xplenty \[[9](https://www.xplenty.com/)\] or Amazon Glue \[[10](https://aws.amazon.com/glue/)\]
3. DIY. If you go this direction, please use at least a framework like Apache AirFlow \[[1](https://airflow.apache.org/)\]. The last thing you want is a mess of scripts and cron jobs deployed haphazardly.

### Don’t do DIY

The DIY should be avoided, you will dedicate precious engineering resources to something that can be done at a fraction of the cost and time using a cloud solution for ELT. Your data engineers can work on more important data projects related to your overall data infrastructure and product.

### Use an ELT Vendor

All ELT providers mentioned above offer a simple experience for extracting and loading your data into your data lake. The process usually involves the setup of a pipeline where credentials are given for both the destination and the data source and some configuration where light transformation is performed, e.g. selecting what tables and fields to sync, hiding some values for privacy reasons, etc. This process can be performed with minimal engineering effort in most cases.

## Extract and Load Options

When we move data into a Data Lake, we have a couple of different strategies on both how we extract data from the sources and how we load the data into the Lake.

### Extraction

Extraction is the phase of pulling data from a data source, through APIs or SQL. We can do a complete extraction of all data available, or we can do an incremental extraction every time we run a sync. A complete extraction will extract all the data from the data source. An incremental extraction will only extract updated records from the data source.

#### Complete Extraction

A complete extraction is the easiest way since no configuration is required but it has two big disadvantages.

1. You end up with a lot of duplicate data in your data lake
2. You increase the complexity of the next steps in your analytics stack

You will have to figure out what data you actually need in the data lake, so it will require more complex logic to do it and more processing.

#### Incremental Extraction

The preferred alternative is to do incremental extractions. This is more challenging since you need to check for new or updated rows and account for changing schemas. However, it is typically preferred because much less data being processed and fewer updates will need to be made in the data lake. All the cloud ELT vendors support incremental extractions from your sources.

The main downside to incremental extraction is deletions in a data source. It's not easy to detect and implement deletions in the general case. ELT providers do not guarantee consistency under deletions in most cases, in some cases it can be done or it is implemented by the source, e.g. data is never deleted but flagged as `is_deleted` instead.

A complete dump would guarantee that you have always an exact replica of the source state. Keep in mind that in analytics this is not important in the general case, but keeping the deleted records might also be something that is required.

### Load

However you extract data from your data sources, you need to decide how these changes will be reflected on your destination. You can push changes through to existing data in the data lake or you can store this new data separate from existing data.

#### Push Changes

If you are using a database system as a data lake, then you can update the data with the pushed changes. This will end up having a close replica of the data from the source system to your Data Lake and it optimizes storage.

#### Store Separate

The other way is to save the changes without updating the records. This is pretty much the only way you can do it if you use a file system and don’t want to add a lot of complexity on your data lake. The benefit of doing this is that you have a history of all the changes that happened on your data.