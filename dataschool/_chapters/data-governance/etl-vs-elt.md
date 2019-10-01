---
section: Data Lake
title: ETL vs ELT
meta_title: Use ELT for Data Lakes
description: Learn why you should use an ELT over a ETL process for your Data Lake
number: 7
authors: []
reviewers:
- _people/dave.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1OTGslZaat0-XI74tzWy6kVDyZ21-4kUVzRLqYH-1nQ4/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 7
published: false

---
By definition, a Data Lake is a system or repository of data stored in its natural/raw format \[[1](https://en.wikipedia.org/wiki/Data_lake)\]. There are a number of reasons that Data Lakes make sense in today’s tech landscape. Even small at early stage companies can experience the variety of data that can be generated. Data that is coming from sales, marketing and production systems, all these even if the volume is not big are coming from many different systems and generated much faster than can be consumed by the company.

So, a Data Lake allows a company to store effectively both in technical and financial terms their data, in their original most raw format until it can be decided how to proceed with their consumption.

Let’s consider a typical scenario of data generation inside a company.

1. We have all the data that our product is generating. These might be stored into noSQL databases like MongoDB or in a relational database like PostgreSQL.
2. We have data that is generated from all the external SaaS apps the company is using and each one of them contains both behavioral and operational data. E.g. SalesForce, Marketo and Zendesk.
3. Data that is coming from our infrastructure, e.g. Logs from our web servers that might even contain important data about our visitors behavior.

On this typical scenario we can add even more exotic data sources that are becoming more and more common, like Edge collected IoT data and data sets acquired for training ML models.

It’s quite obvious that we have to deal with data that are coming in different forms, for example, how do we work with time series data compared to transactional date? Or, how do we combine them together?

Different serializations, like CSV, JSON, Binary, Avro, Parquet etc.

Different complexities, Salesforce has a couple hundred tables available while Mixpanel is exposing events that can be completely customized by the user.

Different volumes, compare the volume of logs to the data coming from Zendesk, hopefully you don’t have more tickets to handle that Apache HTTP logs entries.

Different velocities, data on salesforce does not change as often as a clickstream of events coming from a popular B2C product using Mixpanel to track everything.

Data Lakes, allow us to handle all the above by using in most cases the most versatile of the storage methods that we have, which is the file system. The most common implementation of data lakes happens on distributed file systems like S3 \[[2](https://docs.aws.amazon.com/whitepapers/latest/building-data-lakes/amazon-s3-data-lake-storage-platform.html)\] and Azure Data Lake Storage \[[3](https://azure.microsoft.com/en-us/services/storage/data-lake-storage/)\], where high throughput, fault tolerance and high scalability is guaranteed.

But a data lake does not have to happen only on a file system. Although a distributed file system is probably the most versatile of the possible solutions to use, depending on your use case you can even build a data lake on your Data Warehouse directly. Especially if all the data that you are going to work with are structured data and the data variability is pretty low.

At the end, as in everything in engineering, you have to judge well your current needs and not over engineer a solution. You can always start small and simple and move forward to more scalable solutions as your needs grow.

## E-T-L vs E-L-T Data Lakes

No matter how your data lake is going to be implemented, you will need to move data into it. So the first question is always how to get the data into the lake and what paradigm to use.

Based on the definition of data lakes where we want as complete as possible data on its rawest possible form, ELT seems to make more sense as a choice.

1. We care more about Extracting and Loading the data on the Lake.
2. In any case the data on a lake will go through heavy transformations during their lifecycle, so need for complex logic before the data is loaded.
3. We can end up with a much simpler architecture which means less problems and less maintenance.
4. Data lineage become easier to track as complex transformations are not happening prior to loading the data into the lake.

Regardless of the above, transforming the data before loading the data into the lake might still be necessary but it’s probably much much simpler in terms of expressivity. Some reasons that transformation is needed:

1. Select the data that really matters. For example, not everything on SalesForce needs to synced.
2. Privacy reasons, for example, filter out columns that contain PII data.
3. Instead of filtering, you might want to hash PII data so they can be used for your analytics.

The above transformation cases can be included even in ELT solutions and are offered by most of the commercially available ELT vendors.

After the data has been loaded into your data lake, you can transform your data and you have a number of options there. Two of them, using Amazon technologies, listed below as an example:

1. In the case of S3 as a data lake. You can use Amazon Spectrum \[[4](https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html)\] to transform your data from S3 and load it into Amazon Redshift using SQL queries.
2. In the case where you use Redshift both as a data warehouse and a lake, you can use a technology like dbt\[[5](https://getdbt.com/)\] to transform your data and expose it inside Redshift as views.

Keep in mind that in the case where a filesystem is used as a Data Lake, you can use the same ELT platform to extract data from it and load it into your Data Warehouse.

## How to E-L-T to a Data Lake

There are many options if you want to move your data into a Data Lake, regardless of the source it comes from.

1. Use an ELT vendor like Fivetran\[[6](https://fivetran.com/)\], Stitch Data\[[7](https://stitchdata.com)\] and Blendo\[[8](https://www.blendo.co)\]
2. Still want to ETL? You can use something like Xplenty \[[9](https://www.xplenty.com/)\] or Amazon Glue \[[10](https://aws.amazon.com/glue/)\]
3. DIY. If you go this direction, please use at least a framework like Apache AirFlow \[[1](https://airflow.apache.org/)\]. The last thing you want is a mess of scripts and cron jobs deployed everywhere around.

The DIY should probably be avoided, you will dedicate precious engineering resources to something that can be done at a fraction of the cost and time using a cloud solution for ELT. Your data engineers can work on more important data projects related to your overall data infrastructure and product.

If you decide to do it on your own then you should invest in creating the right infrastructure for extracting, loading and transforming your data. ETL/ELT always seems something simple at the beginning but it gets very complicated fast as you progress and you try to ensure the quality of the data and the ELT processes that you run.

All ELT providers mentioned above, offer a simple experience for extracting and loading your data into your data lake. The process usually involves the setup of a pipeline where credentials are given for both the destination and the datasource and some configuration where light transformation is performed, e.g. selecting what tables and fields to sync, hiding some values for privacy reasons etc. This process can be performed with minimal engineering effort in most cases.

When we are moving data into a Data Lake, we have a couple of different strategies on both how we extract data from the sources and how we load the data into the Lake.

### Extract

First about the extraction. We can do a complete extraction of every data available, everytime we run a sync. This is a complete dump of your data. It’s the easiest way to do it but it has two disadvantages. The first is that you end up with a lot of duplicate data and the second is that you remove complexity from extraction but you increase the complexity of the next steps in your analytics stack. Somehow at some point you will have to figure out what data you need, when you do full dumps, it will require more complex logic to do it and more processing.

All the cloud ELT vendors allow incremental extractions from your sources.

\[Incremental vs dump graphic\]

### Load

Then about how to load your data on a Lake. Even if capture changes on your data source, you need to decide how these changes will be reflected on your destination. If you are using a database system as a data lake, then you can update the data with the pushed changes. This will end up having a close replica of the data from the source system to your Data Lake and it optimizes storage.

The other way is to save the changes without updating the records. This is pretty much the only way you can do it if you use file systems if you don’t want to add a lot of complexity on your data lake but on a database it’s not the default behavior. The benefit of doing this is that you have a track of all the changes that happened on your data, something that it might be important for some tasks.

\[updating records vs saving changes graphic\]

# Conclusion

Handling the data a company generates is not an easy task. The paradigm of combining a Data Lake with a Data Warehouse and platforms like Cloud based ELT platforms, can provide a great combination of flexibility and easiness while keeping costs low.

You can use an ELT vendor to move your data into your data lake and even out of it and into your data warehouse, without having to worry about the complexities of building and maintaining an ELT/ETL infrastructure. At the same time you can exploit the flexibility the Data Lake architecture provides and optimize your Data Warehouse and data analytics tasks while focusing on what really matters, which how to understand your data and extract value out of it.