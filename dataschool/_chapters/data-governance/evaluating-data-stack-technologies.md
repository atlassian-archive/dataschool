---
section: Extras
title: Evaluating Data Stack Technologies
short: Evaluating Stack Tech
meta_title: Evaluate Data Tools for your Data Stack
description: Learn the various functions a Data Stack needs to perform in order to
  select the correct data tools to take raw data and turn it into insight.
number: 1000
authors:
- _people/brian-kinney.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/Data Stack Capabilities.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
## What is a Data Stack?

In software development, a Stack is a combination of technologies that together solve a problem. Rarely does one technology solve it on its own. Stacks are usually given names relevant to the problem that they solve. For example, a Web Stack is the set of technologies that host an application that can be accessed via a website. We need to know about the front end technologies used and the back end. We could say “our Web Stack is Cassandra, Django, React” which gives them a high-level overview.

We can apply the Stack concept to describe solutions in domains other than web development. Here we will describe the Data Stack, which takes data from a raw form to an insight.

## The Data Analytics Problem

Every software tool spins off data: your application, Google Analytics, Salesforce, and so on. In order to use this data to find insights you need a Data Stack that performs the following functions:

1. Ingestion - Accept new data
2. Storage - Store and retain data
3. Conversion - Prepare data for future use
4. Recall - Enable basic access to data
5. Computation - Calculate metrics from pre-processed data
6. Presentation - Format results into tools that improve human understanding

Normally the elements of a Data Stack are composed to perform these functions in this order, with raw data flowing into the ingestion point and becoming more and more refined until it finally is prepared enough for people to understand. We will use a visual to show how different BI tools map to these functions and what level of capabilities they have for that function. Here is an example graph:

![](https://lh5.googleusercontent.com/ac1ih-u0yL-gwHYNVNXPMGrGfGzVonaPPptyICwqnsEcwoWS48QYbwQ0_zsWP6iXctI9GmKOjRXoiliX5DfAH9tdiPvr9BCvAoCxMlVUdwmeaT6xA4CWvjA_TtMM-tlWJ77u0b7Q)

## Fitting Technologies Into the Data Stack

### Microsoft Excel

Technologies such as Microsoft Excel could be your entire Data Stack. It has the functionality to do each step.

It can ingest a csv, store an xlsx file, convert the data to be more usable, recall the data so it can be used, compute aggregations on the data, and visually present the information in a chart. Let’s take a look at how well it performs each part of the Data Stack:

![](https://lh5.googleusercontent.com/a0uMQ9bWJcHH3veQyFjeUyh4SNOnB-kDIOOqAk-xCJRyJWbdKfOhwnrfjhKg1Z5S08IJDHmmYgfDVNBfAqp56XOmkMch9YuP1Zf3q9IaNaF7w2mZ1j5Qm0A1ZRUkd2PgBkB_1PFZ)

Let’s examine why we rated **ingest** low and **present** high.

#### Ingest

* Capacity - Being a desktop application, Excel cannot handle significant volumes of data. It is limited by the computer it is installed on and Excel itself has a maximum row count of 1 million. When tasked with processing a low volume of data Excel can do quite well and is frequently used for analytics.
* Data Formats - Excel can easily work with excel files and comma or tab separated files, but it does not work well with JSON, XML, or many other file types.

#### Presentation

* Data Visualization - When it comes to presentation, Excel has most data visualization types. It also can be used to present interactive calculations and tables of data for people to consume. Excel’s scale limitations are not an issue for this phase alone because visualizations are not built directly from large data sets: a chart that includes thousands of data points will likely be unreadable.

### Postgres

![](https://lh5.googleusercontent.com/HP5QDG8TWs3PcKchKWavBEM1Hp1SfZlnstckOHkm1EbehI0YXwCe1fBFzTXukWctIDZqXqqfGtO7mq8iXHQNFnYJkDgwewKT7WZXiuPBoACJBN61avRRfDITL1tEmRHIOLHht-mw)

Why does Postgres do a better job at **Store** and **Compute**?

#### Store

* Postgres can easily store a volume of data that exceed Excel’s capacity
* Data stored in Postgres is generally easier to backup

#### Compute

* It is easier and cheaper to dedicate more powerful hardware to Postgres than to distribute more powerful desktop or laptop computers to staff that use Excel
* Postgres is better at handling relational logic, which can be a significant component of preparing data sets for presentation materials

At this point many readers might be thinking that Excel has advantages in Compute that I have glossed over to make my point. This is true, and the suitability of technology to perform each of these workloads cannot be reduced to a single number. The capabilities of each technology have been oversimplified so that it is easier to make simple illustrations that help to explain how different technologies complement one another.

### Chartio

![](https://lh6.googleusercontent.com/o3LhH7_Y81sezc_3VZ486SApchqzoqcBXwrp5zXdZGLYllXypiza5c4d2MaW_BJabrXlf68-Irq2CyyZq71u9R-HapLetp0GpnhUrsq7EmPp1xAMgu-TGes71Ofu0tEzaJPcCAad)

From the above we see that Postgres does not have any ability to **Present** data. A tool like Chartio can help with this:

#### Compute

* Chartio supports an interface for interacting with data stored in databases like Postgres that is easier to work with than what those databases support by themselves
* Chartio can perform a range of calculations on query results at a small scale, but most of the computational load has to be handled by a database

#### Present

* Chartio has many features related to producing and sharing meaningful and interactive data visualizations

The combination of collection of meaningful data sets from a database and production of good visualizations from these data sets makes Chartio an excellent complement to most databases.

## Meeting Your Requirements

Suppose that a mobile game developer wants to track user behavior within the context of the mobile app. This might require tracking dozens of distinct events per session that might represent actions like completing a level, viewing a screen, or clicking on a banner ad. If this game attracts thousands of users per day, the volume of raw activity data will exceed Excel’s capability in short order. A detailed analysis of the requirements might produce a rough profile such as this:

![](https://lh3.googleusercontent.com/EgMIRT3ptYVrbtdeTYATypEXHJGTBnt-zTev0Ao7fBWIgf954QZTcMhTdRPoY2vcSPiaSZKlJVvuriWLBSsoTiyurt9p_ZMcQ8t7cJc9yig-ukCxDYCaL6D3n_FTXePfc8Vfd7PJ)

Where the need in excess of Excel’s capabilities is largely due to raw data volume. Naturally this suggests that a solution that can handle a greater volume of data would be appropriate. A simple combination of Postgres and Chartio might have combined capabilities that look roughly like this:

![](https://lh3.googleusercontent.com/b2o00YDFgMsSC5EL10GsSBX51o3lH7iwx3OOBvbhXNBEJlX3jfpHWc5RBwH6CuwVyZNuBUQH14-wruWHieYb3Yn8Y8J1cfSYkKo1SaRrQKAE3CRLgnBLIdAK-X9r1y3bX1zKA-FS)

## Growing with the Business

As a business or product grows it is natural for demands on the Data Stack to change. One way to accommodate changing requirements is to make the Stack more capable in key areas by adding or replacing technologies in the Stack. In the next chapters of this book, we will explore the evolution of a Data Stack in more detail. We will explore which technologies enhance each other and which are incompatible.

There are some key factors to keep in mind when building your Stack in a growing organization:

1. Use technologies that are easily configurable to work with a range of complementary technology. Otherwise there may be few choices for critical parts of your Stack.
2. Having one component cover a wide range of functions potentially complicates upgrading it and may make it more likely that it has to be replaced.

## Communication is the Goal

More powerful Data Stacks tend to be more complicated, and this complication naturally makes it harder to understand things well enough to know how to contribute or how to evaluate risk. With a written out Data Stack, it is easier to explain how the various technologies work in concert to accomplish the end goal.

This model presents a fairly simplified view of the journey of data from raw feeds to presentation. It allows more people in the organization to understand the problems and solutions of data analytics from a high level.