---
section: Stage 3 - Warehouse
title: Defining a Data Governor
short: The Data Governor
meta_title: Learn what a Data Governor is and isnt
description: Data Governors maintain the database so that is remains valuable to an
  organization. This involves security, education, and modeling.
number: 34
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1d87KH-6e5Py5Nsou1RVX_8i452NWtKGupULtY0fzyBA/edit?usp=sharing
image: "/assets/images/DataGovernerCover.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 6

---
As more people depend on data in their daily workflow, organizations are pressured to think critically about the quality of data being provided. Having a small team field all data questions will not scale, so companies must move from a centralized data organization to a decentralized one.

## Why you need a Data Governor

According to [Gartner](https://www.gartner.com/webinar/1884416), Data Governance is an effective program to manage and control the ever-growing amount of data in order to improve business outcomes. It helps ensure that the quality of data is high and compliance standards are adhered to. This does not happen with process alone; you need a Data Governor to drive and maintain Data Governance principles.

If your organization has built a Data Warehouse and has any of the following data services or restrictions, we strongly recommend appointing at least one Data Governor:

* Self-service dashboards
* Operates in an industry with regulations and compliance procedures
* Has large data sources spanning different departments
* Strives for operational intelligence

Without oversight, employees will misinterpret data, sensitive data may be shared inappropriately, employees will lack access to necessary data, and employees' analysis will often be incorrect. A Data Governor will maintain and improve the quality of data and ensure your company is compliant with any regulations. It is a vital role to have for any informed company.

## Data Governors for Data Governance

With the exploding volume of data within companies, it has become extremely difficult for a small technical team to govern an entire organization's data. As this trend continues, these Data Scientists and Analysts should transition themselves from their traditional reporting responsibilities to those of Data Governors.

In a traditional reporting role, their day was filled with answering questions for various business groups around their needed metrics. The shift to Data Governors finds them instead creating cleaned, documented data products for those end business groups to explore themselves.

This is called Democratized Data Governance, where the technical team (traditionally data gatekeepers) handles the technical aspects of governance and share the responsibilities of analytics with the end business groups.

### The Roles of the Data Governor

As the Data Governor, everything addressed in all the chapters of this book is your responsibility. This is your manual. Your role changes at each stage of sophistication. You bravely lead your company from struggling to get value out of its data to producing accurate insights consistently. Let's step through each of the roles you will play.

#### 1. Data Cleanup and Maintenance

The majority of the technical work of data governance is around collecting, cleaning, and maintaining various data sets. This is a many-part activity that's broken out here in subtypes.

##### Data Piping (ETL) and Warehousing

Data is going to exist in many different places inside of your organization. A big part of your job may consist of bringing those disparate sets of data together, where people can query across various sources. These combined places are data warehouses such as Google BigQuery or Amazon Redshift, and there are various Extract, Transform and Load (ETL) tools out there such as [Stitch](https://www.stitchdata.com/) and [Fivetran](https://fivetran.com/).

##### Schema Cleanup/Modeling

For most companies the team collecting the data is also the team reporting on the data. The people on the team know all the ins and outs of the data. They can, for the most part,  remember where the data they needed was and what tricky conditionals they'd have to put in each query (for example, not to count deleted or expired accounts).

But when organizations grow and their need to have access grows as well, the people exploring aren’t always the ones that put the data there. So, you have to clean up that data with the non-technical data explorer in mind.

Some BI products have ways to do this internally, but often it's best and more reusable to do this on the database level. Just create new schemas in your database with a file full of your chosen views for that consumer. This is both a usability best practice and a security best practice.

##### Process and Auditing

Manually created data, such as that coming from your CRM, has a large margin for error. Also, how this data is recorded in CRMs is often determined by business users, not by data teams, so governance and data integrity can be less than ideal. For example, there may be two places sales reps need to manually enter the date of a call, or cancellation tracking may change when a new cancellation policy is put in place. Whenever there’s manually entered data, there will likely be discrepancies.

The way of handling this is to audit the data, ensure that it's being recorded properly for the needed reports, and identify and develop missing processes with the managers of the relevant teams.

##### Documentation

Again, the people exploring the data are no longer the people who put it there in the first place. Ideally you’ve now created clean, curated, and simple models for specific teams. Even so, you’ll still find a lot of benefit in documenting each table and column.

This can be done with a Wiki or leaving [comments](https://www.postgresql.org/docs/9.1/static/sql-comment.html) inside the database schema.

#### 2. Permissions and Organization

Data security is obviously incredibly important. But besides that, permissions can be leveraged for proper organization. Data projects can get messy fast. Not everyone needs access to absolutely everything, especially if there is a clear process for requesting whatever additional information is needed.

Organizations today often strive to be highly transparent, but when over-transparency leads to confusion, it's time to make the tradeoff for curating your team's data experience.

#### 3. Integrity Handling

It happens all the time: two people exploring data end up with two different values for the same metric. This can be one of the must frustrating moments for anyone working with data and can lead to some serious mistrust in the integrity of the data.

There's no way of stopping this, but it can be minimized. If the data is kept clean and well documented this problem should come up much less often. The best way to deal with it is to educate everyone on the fact that the problem does happen and they should expect and embrace it. Just as every product has bugs, every dataset does as well. When these inconsistencies are discovered, you have an opportunity to fix/solve/clarify them as soon as possible. One method of clarification is to build standardized metrics in your Data Warehouse model and point people to them when these discrepancies arise.

Ensure there’s a clear process for people to [resolve these integrity issues](https://blog.chartio.com/posts/the-boy-scout-rule-for-data?__hstc=113363352.6920fcda53fdf2ee28039771c1e0c8c6.1550863621442.1569617804976.1569624716821.265&__hssc=113363352.9.1569624716821&__hsfp=863061177). Be available to them and helpful when it’s reported. Maintaining a dataset is like maintaining a garden. There will always be weeds growing and more to do. It will never be perfect, but it can be beautiful.

#### 4. Tool Selection

The Data Governor has to make decisions on what best fits your organization's needs. Be mindful of tools that have high learning curves or have proprietary languages that lock you into a tool. Consider all the pieces of your [data analytics stack](https://dataschool.com/data-governance/evaluating-data-stack-technologies/) and make sure tools you are selecting work well together.

#### 5. Education/Enablement

No matter how well you’ve done your data cleaning, documentation and tool selection, you’re still going to have to educate your organization on how to use the data to get accurate and actionable insights.

Here are the things you must educate your organization on:

1. What’s available in the models
2. How to use the BI tool
3. Your process for prioritizing data requests, data sharing, and access
4. [Data Basics in databases, tables, data structures and SQL](https://dataschool.com/how-to-teach-people-sql/)
5. Quality versus Vanity Metrics
6. [Chart best practices](https://dataschool.com/how-to-design-a-dashboard/what-makes-a-great-dashboard-aces/)