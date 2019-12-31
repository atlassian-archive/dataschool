---
section: Stage 2 - Lake
title: Extract and Load a Lake
short: Extract and Load
meta_title: How to Extract and Load data into a Data Lake
description: Learn how to extract and load data sources like SalesForce, Hubspot,
  Marketo, etc into a single source.
number: 23.5
authors:
- _people/kostas-pardalis.md
reviewers:
- _people/dave.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1OTGslZaat0-XI74tzWy6kVDyZ21-4kUVzRLqYH-1nQ4/edit?usp=sharing
image: "/assets/images/ETLvsELTCover (1).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 7

---
To get data into your Data Lake you will first need to **Extract** the data from the source through SQL or some API, and then **Load** it into the lake.  This process is called Extract and Load - or "EL" for short.

<!--- TODO: Matt - Could use a nice diagram here of the source to lake image with Extract and Load visuals drawn in --->

There are a number of great modern EL vendors (sometimes called ELT vendors) such as [Fivetran](https://fivetran.com/), [Stitch Data](https://stitchdata.com) or [Blendo](https://www.blendo.co).

<!--- TODO: Matt - would be great to put the company logos here --->

These EL providers built detailed Extract scripts for the most popular API's and offer a simple experience for extracting and loading your data into your data lake. The process usually involves the setup of a pipeline where credentials are given for both the destination and the data source and some configuration where light transformation is performed, e.g. selecting what tables and fields to sync, hiding some values for privacy reasons, etc.

The setup can be performed with minimal engineering effort in most cases.

## Extract Options

Extraction is the phase of pulling data from a data source, through APIs or SQL. We can do a complete extraction of all data available, or we can do an incremental extraction every time we run a sync. A complete extraction will extract all the data from the data source. An incremental extraction will only extract updated records from the data source.

### Complete Extraction

A complete extraction is the easiest way since no configuration is required but it has two big disadvantages.

1. You end up with a lot of duplicate data in your data lake
2. You increase the complexity of the next steps in your analytics stack

You will have to figure out what data you actually need in the data lake, so it will require more complex logic to do it and more processing.

### Incremental Extraction

The preferred alternative is to do incremental extractions. This is more challenging since you need to check for new or updated rows and account for changing schemas. However, it is typically preferred because much less data being processed and fewer updates will need to be made in the data lake. All cloud ELT vendors support incremental extractions from your sources.

The main downside to incremental extraction is deletions in a data source. It's not easy to detect and implement deletions in the general case. ELT providers do not guarantee consistency under deletions in most cases, in some cases it can be done or it is implemented by the source, e.g. data is never deleted but flagged as `is_deleted` instead.

A complete dump would guarantee that you have always an exact replica of the source state. Keep in mind that in analytics this is not important in the general case, but keeping the deleted records might also be something that is required.

## Load Options

However you extract data from your data sources, you need to decide how these changes will be reflected on your destination. You can push changes through to existing data in the data lake or you can store this new data separate from existing data.

### Push Changes

If you are using a database system as a data lake, then you can update the data with the pushed changes. This will end up having a close replica of the data from the source system to your Data Lake and it optimizes storage.

### Store Separate

The other way is to save the changes without updating the records. This is pretty much the only way you can do it if you use a file system and don’t want to add a lot of complexity on your data lake. The benefit of doing this is that you have a history of all the changes that happened on your data.

## Multiple schemas

Most EL vendors will insert each source into the lake as a new schema or folder if you're on a file system.  This is ideal as your data will still be organized by source and there is no chance of commonly named tables overwriting each other.

It will mean that when querying across these schemas you'll need to remember to specify the schema names in addition to the table names.

```sql
SELECT * 
FROM "salesforce"."_user" AS "SFuser" 
JOIN "zendesk"."user" AS "ZDuser" 
	ON "SFuser"."email" == "ZDuser"."email"
```

<!--- TODO: Can we draw the source and lake image with some slices (schemas) of the new sources stored inside the lake -->

## Other Extract and Load routes

### Traditional ETL

For the reasons we've outlined [here we recommend ELT over ETL](/data-governance/etl-vs-elt/).  But if you still want to do things the traditional way, with Transformations happening before things are loaded into the Lake you can use products like  [Xplenty](https://www.xplenty.com/) or [Amazon Glue](https://aws.amazon.com/glue/).

<!-- TODO: add xplenty and glue logos here -->

If you do this, you're essentially doing the Lake and Warehouse stages all in one jump and skipping the Lake piece of the recommended stack.  That might sound like a great thing, but it's important to note that it won't save you any money or time - in fact it will likely cost more.

### DIY

If you value your time, money, sanity and data integrity don't DIY your own EL scripts.  If you DIY you will dedicate precious engineering resources to something that can be done at a fraction of the cost and time using a cloud solution. Your data engineers can work on more important data projects related to your overall data infrastructure and product.

Sometimes, you may need to create custom code for a source that's not widely supported.  If you do need to, please at least use a framework like [Apache AirFlow](https://airflow.apache.org/). The last thing you want is a mess of scripts and cron jobs deployed haphazardly.