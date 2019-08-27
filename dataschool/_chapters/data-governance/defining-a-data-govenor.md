---
section: Data Warehouse
title: Defining a Data Govenor
meta_title: Learn what a Data Governor is and isnt
description: Data Governors maintain the database so that is remains valuable to an
  organization. This involves security, education, and modeling.
number: 34
authors:
- _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1v-NJdR3zSyfn4tNtvoTLM_52SJbS2lVLudaSVxlRXdw/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 6

---
As more people depend on data in their daily workflow, organizations are pressured to think critically about the quality of data being provided. Having a small team field all data questions will not scale so companies must move from a centralized data organization to a decentralized one. 

## Why do you need a Data Governor

According to [Gartner](https://www.gartner.com/webinar/1884416), Data Governance is an effective program to manage and control the ever-growing amount of data in order to improve business outcomes. It helps ensure the quality of data is high and compliance standards are adhered to. This does not happen with process alone, you need a Data Governor to drive and maintain Data Governance principles.

If your organization has built a data warehouse and has any of the following data services or restrictions we strongly recommend appointing at least one Data Governor:

* Self-service dashboards
* Operate in an industry with regulations and compliance procedures
* Have large data sources spanning different departments
* Strive for operational intelligence

Without oversight, employees will misinterpret data, sensitive data may be shared inappropriately, employees will lack access to necessary data, and employee’s analysis will often be incorrect. A Data Governor will maintain and improve the quality of data and ensure your company is compliant with any regulations. It is a vital role to have to be an informed company.

## Data Governors for Data Governance

With the exploding volume of data within companies, it has become extremely difficult for a small technical team to govern an entire organization’s data. As this trend continues, these Data Scientists and Analysts should transition themselves from their traditional reporting responsibilities to those of Data Governors.

In a traditional reporting role, their day was filled with answering questions for various business groups around their needed metrics. The shift to Data Governors finds them instead creating cleaned, documented data products for those end business groups to explore themselves.

This is called Democratized Data Governance, where the technical team (traditionally data gatekeepers) handles the technical aspects of governance and share the responsibilities of analytics with the end business groups.

### The Roles of the Data Governor

Everything addressed in all the chapters of this book is your responsibility. This is your manual. Your role changes at each stage of sophistication. You bravely lead your company from struggling to get value out of their data to producing accurate insights consistently. Let's step through each of the roles you will play.

#### 1. Data Cleanup and Maintenance

The majority of the technical work of data governance is around collecting, cleaning and maintaining various data sets. This is a many-part activity and broken out here in subtypes.

##### Data Piping (ETL) and Warehousing

Data is going to exist in many different places inside of your organization. A big part of your job may consist of moving those disparate sets of data together, where people can query across various sources. These combined places are data warehouses such as Google BigQuery or Amazon Redshift, and there are various Extract, Transform and Load (ETL) tools out there such as [Stitch](https://www.stitchdata.com/) and [Fivetran](https://fivetran.com/).

##### Schema Cleanup/Modeling

For most companies the team collecting the data were the ones reporting on the data. These people knew all the ins and outs of the data and could, for the most part, always remember where the data they needed was and what tricky conditionals they’d have to put in each query to remember for example not to count deleted or expired accounts.

But when organizations grow and the need to have access grows, the people exploring aren’t always the ones that put the data there. So you have to clean up that data, and keep that non technical data explorer in mind. 

Some BI products have ways to do this internally, but often it’s best and more reusable to do this on the database level. Just create new schemas in your database with a file full of your chosen views for that consumer. This is both a usability best practice and a security best practice.

##### Process and Auditing

Manually entered data, such as that coming from your CRM, can be a messy and confusing thing. Sales Reps may enter their data wrong. There may be two places people need to manually enter the same data, or there may have never been a great consistent way of tracking cancellations. Whenever there’s manually entered data, there’s likely to be discrepancies.

The way of handling this is to audit the data, ensure that it’s being recorded properly for the needed reports, and identify and develop missing processes with the managers of the relevant teams.

##### Documentation

Again, the people exploring the data are no longer the people who put it there in the first place. Ideally you’ve created really clean, curated, simple models for specific teams now, but you’ll likely still find a lot of benefit in documenting each table and column.

This can be done with a Wiki or even by leaving [comments](https://www.postgresql.org/docs/9.1/static/sql-comment.html) inside the database schema.

#### **2. Permissions and Organization**

Data security is obviously incredibly important. But besides that, Permissions can be leveraged for proper organization. Data projects can get messy fast. Not everyone needs access to absolutely everything especially if there is a clear process for requesting what additional is needed.

Organizations today want to be incredibly transparent, a good thing of course, but there is a point where it goes past transparency and you’re just being lazy about curating your team’s data experience.

#### 3. Integrity Handling

It happens all the time, two people exploring the data end up with two different values for the same metric. This is one of the most disheartening events for anyone working with data and can lead to some serious mistrust in the integrity of the data.

There’s no way of stopping this, just minimizing it. If the data is kept clean and well documented these should hopefully rarely come up and when they do, be really simple to clear up.

The best way to deal with this is to educate everyone on the fact that they happen, accept and embrace them. Just as every product has bugs, every dataset does as well. So be excited that some inconsistency has been discovered and eagerly seek to fix/solve/clarify it as soon as possible.

Ensure there’s a clear process for people to r[esolve these integrity issues](https://blog.chartio.com/posts/the-boy-scout-rule-for-data). Be available to them and helpful when it’s reported. Be sure to thank them for reporting and be kind even when it was an error of theirs.

Maintaining a dataset is like maintaining a garden. There will always be weeds growing and more to do. It will never be perfect, but it can be beautiful.

#### 4. Tool Selection

The Data Governor has to make a calls on what your organization needs. Be mindful of tools that have high learning curves or have proprietary languages that lock you into a tool. Consider all the pieces of your [data analytics stack](https://dataschool.com/data-governance/evaluating-data-stack-technologies/) and make sure tools you are selecting work well together.

#### 5. Education/Enablement

No matter how well you’ve done your data cleaning, documentation and tool selection, you’re still going to have to educate your organization on how to use the data to get accurate and actionable insights.

Here are the things you must educate your organization on:

1. What’s in the models
2. How to use the tool
3. Your process for prioritizing data requests, process for data sharing and access
4. Data Basics in databases, tables, data structures and SQL
5. Quality versus Vanity Metrics
6. Chart best practices

Remember to organize and communicate how people should come to you with integrity issues, data needs, access, training, etc.