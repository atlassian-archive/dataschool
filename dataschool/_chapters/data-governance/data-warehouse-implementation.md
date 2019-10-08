---
section: Data Warehouse
title: Data Warehouse Implementation
meta_title: How to Create a Data Warehouse
description: Learn how to setup a Data Warehouse. Model and transform data to make
  it easy to analyze.
number: 34
authors:
- _people/tim.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/Salesforce Cleanup.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
Now that we've established what type of changes we want to make and decided on what engine to use for our Data Warehouse, let's go through the process of getting data from the Lake into the Warehouse. While this sounds complicated it is only comprised of using SQL to create Views.

## Why SQL

We recommend using SQL to perform all transformations. It is the standard language for relational database management systems (which is what a Data Warehouse should be) and that is the environment you are probably using for your Data Lake. Working in a SQL based model is ideal because a variety of tools and platforms already exist to write and execute queries. Also, data engineers, analysts, and some business users already understand how to use it.

## Why Views

Views allow us to quickly reformat what the data looks like for people querying without needing to build a new Data Warehouse or incurring costs from storing any additional data. Unless you are dealing with massive amounts of data there are not significant performance gains in creating new tables or materializing the views.

### Use a Modeling tool: dbt

Instead of writing the views directly on the database (which is an option) we recommend using dbt for creating your SQL views. dbt provides many features to help you keep a clean Data Warehouse such as version control, logging, and much more.

## Data Lake to Data Warehouse View Examples

Here is an example of applying a transformation to move from Data Lake to Data Warehouse. First, we build a query to combine a couple of salesforce objects into a single table. For example, using information about an individual and their role within a client company can give you more insight into how you may want to interact with that person.

So, getting information on that person’s role into the same table as his/her contact along with some basic demographic information, will save the end user some time in querying the Data Warehouse.

That query might look like this:

![](https://lh4.googleusercontent.com/vrmJIEUSMBZ2dVagpzfY4v-Diq3PpAXtaWILkFq_nkBFKYWdniYKx2cE719wmUi_R1vxcae0uaYd68Rm-42549m4Y-uji4Di_Oyr-7Bh51sqRMTgR-z84kUAKV-zegJE9YBHCGT8)

We are choosing a subset of the total possible columns and rolling/denormalizing the table a bit to make it easier for others to query. To make this code into SQL that builds our Data Warehouse, we need to add CREATE VIEW. So the query would actually be:

```sql
CREATE VIEW salesforce_user AS
SELECT
	u.id
	,u.name
	,u.email
	,u.department
	,u.phone
	,u.phone
	,u.created_date
	,u.is_active
	,u.last_modified_date
	,ur.name as role_name
	,ur.rollup_description as role_rollup
FROM
	salesforce.user as u left join
	salesforce.user_role as ur on u.user_role_id = ur.id;
```

If we go back to the example first introduced in the [Why Build a Data Warehouse](https://dataschool.com/data-governance/why-build-a-data-warehouse/) article we can walk through all of the transformations described in one SQL query. So let’s look at that messy table with all of the hard to understand/query fields.

![](https://lh3.googleusercontent.com/Zw69zpYEdxtew4Jo8SPm7BuYtUa4vOCXK6otFT-QYOKhreNAYYfRHc_qC07kysGpxCb6mJ4uD8lqWXrOonp61V73ki7HJQLR5IctR2NQedLtXg-au052ZoyYoBxZtXpxWf2l17-n)

We then want to make all of the following changes to that data:

![](https://lh5.googleusercontent.com/hakg1_x4UQrluGSL4M2gzCwH3bb_LGsGv9Amf-7W87AhkH2nIYkM-StIPmiuOmCtsWUJwyLq7em3Bwol4_iNa5veUP5hH0u6wziQ8xmmBX9C41OgRpfUMPqPtDZmLzpLRscz4w9Y)

We can create this as a series of SQL statements in a dbt file of common table expressions with a final CREATE VIEW query at the bottom:

```sql
-- drop unused column External_id
WITH t1 AS (
	SELECT Id, Name, Display Name, Email, Location, Type, Info, Status
	FROM dl_table
),

-- Add consistent column Email
t2 AS (
	SELECT Id, Name, Display Name, Email, Location, Type, Info, Status, is_deleted
	FROM t1
	JOIN dl_email
	ON t1.Id = dl_email.Id
),

--Standardize Location column
t3 AS (
	SELECT Id, Name, Display Name, Email,
	CASE WHEN Location = "US" THEN "USA"
		WHEN Location = "Texas" THEN "USA"
		WHEN Location = "Sao Paulo" THEN "Brazil"
		ELSE Location
		END AS "Location", 
        Type, Info, Status, is_deleted
	FROM t2
)

--Make column names and values descriptive for Type
t4 as (
	SELECT Id, Name, Display Name, Email, Location,
	CASE WHEN Type = "1" THEN "Can view"
		WHEN Type = "2" THEN "Can edit"
		WHEN Type = "3" THEN "Can admin"
		END AS "Access Level", 
        Info, Status, is_deleted
FROM t3
)

--Parse relevant fields, drop original column for Info
t5 as (
	SELECT Id, Name, Display Name, Email, Location, Access Level,
		CASE WHEN Info = "%active" THEN "active"
			WHEN Info = "%inactive" THEN "inactive"
			END AS "Status", 
		is_deleted
FROM t4
)

-- filter row that was deprecated from is_deleted, and drop column
t6 as (
	SELECT Id, Name, Display Name, Email, Location, Access Level, Status
	FROM t5
	WHERE is_deleted != True
)

-- create view for Data Warehouse
CREATE VIEW dw_table AS
	SELECT *
	FROM t6
```

For a given table we suggest managing all transformations step by step in common table expressions with notes describing what is happening at each step.

We now have a clean view of the original data

![](https://lh5.googleusercontent.com/CaWn4e5HYzbUpSUSD33Sf0xUoUGfVT8TT-z-4VNED6ubfbHyKXMwhx5DSnHyjTmwfRVtMMuN-mVOZbGC3SKRQktX_vfZYBt_SK36_Y5q8wOpnwNA8StGWqI3YeadPUF1TRKZph7s)

A Data Warehouse may still have a few issues in the data but the vast majority should be handled with obvious work arounds.

## Summary

* Create Views for your Data Warehouse
* Lightly clean and denormalize your data so that it is easier to query
* Use a modeling tool such as dbt to manage these transformations