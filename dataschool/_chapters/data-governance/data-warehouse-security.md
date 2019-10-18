---
section: 'Stage 3: Warehouse'
title: Data Warehouse Security
meta_title: Data Warehouse Security Best Practices
description: Learn how to secure sensitive data on your database and BI platform.
number: 32
authors:
- _people/aaron-aihini.md
reviewers:
- _people/dave.md
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/Frame-4.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
At the warehouse stage, there are commonly more groups than just a centralized data team with access. You must use data governance to safeguard certain pieces of sensitive information from being accessed by the wrong people in your organization. Many regulations have been passed such as GDPR that you must comply with and many companies have industry standard compliance rules as well such as SOC and HIPAA that they have to adhere to.

Whether it is personally identifiable information (PII) or financial information, sensitive data is much more prevalent throughout a product’s journey and your Data Warehouse than one might think. Preventing the exposure of such information is key and can be approached in a variety of ways.

Every company stores information that cannot be exposed to everyone who works in the company. When moving from a Data Lake to a Data Warehouse more people will gain access to data. You need to ensure that sensitive information is aligned to what is being stored and how it is restricted in the Data Warehouse and can be accessed via your BI tools.

There are multiple ways this can be handled and multiple questions to be answered:

* Where is sensitive data (PII and financial) currently handled?
* Will this sensitive data still be present in the Data Warehouse and then cleaned up?
* How will this information be removed or restricted from the exposed datasets - scripts on the way to the warehouse, data marts created off of the warehouse?

These questions need to be answered before you connect these sources to your BI platform.

Within large companies, often times everything is confidential and departments are on a need-to-know basis about data in different departments. Issues arise when a company connects its Data Warehouse to its BI platform or grants query access across different departments in general. This leads to sensitive data potentially being exposed to unauthorized users.

## How to secure sensitive data on the database

![](/assets/images/Frame-2.png)

The most direct way to limit access to the proper people is to enforce rules on the database level. This can be done through creating slave read only replicas or creating custom users so that the only data people have access to is already cleaned or you can set row level permissioning to keep it extra secure.

### Slave Read Only

Setup your warehouse that will be queried by everyone to be read only by default. This prevents any dangerous SQL queries from being executed on your data.

### Custom Users

Regardless of whether you create the slave read only warehouse, create a new user group that has read access only. You can choose to exclude access to specific tables or columns of data from that new user group. In addition, you can restrict access to row specific data. Row level permissioning allows you to give full access to tables containing sensitive information but restricts which rows and values the person querying can see. Depending on the underlying database, it will be slightly different to set row level permissioning.

A great example for when row level permissioning is needed is for HIPAA compliance when accessing a hospital’s dataset. Each doctor within this hospital has access to their own patients’ records for analysis and review. What happens when every doctor has access to every patient’s medical records? Implementing access controls at the row level based on account/patient ownership, whether that is patient id, patient name, etc. will prevent doctors from having the chance to access a patient’s personal information they don’t need. You can apply this example to other scenarios such as sales teams, customer tracking, etc.

### Encrypt Columns

If you need to group or aggregate by sensitive data you can create encrypted versions of the data. Then users can create summary tables where things like financial data can be aggregated to a level that is appropriate for different departments to see and analyze. These type of decisions will limit what type of analysis can be performed on the data but does ensure that the sensitive data is protected.

## How to secure sensitive data on a BI platform

Now that we have secured the underlying database, we need to ensure that there are no loopholes in the BI Platform. Even setting up the right permissions on the database does not ensure sensitive data won’t be inappropriately shared through a dashboard or report. This type of issue can be hard to prevent so the common strategy is to regularly audit who is accessing and viewing what data.

### Consistent account audit/clean up

Projects change, roles change, and use cases change which all impact employee permissions. Outdated permissions can lead to compliance and privacy issues. Periodically reviewing and updating permissions is a best practice to protect sensitive data.

During an audit you should check all the previous questions we talked about:

* Who has access to which data sources?
* Who has access to sensitive row level information?
* Who is on the admin team or has admin access?
* Who has access or viewing dashboards and reports containing sensitive data?

BI Tools offer varying levels of usage information in-app for the admin to monitor and review in an audit to answer these questions. If you do not have all of the pieces of information necessary, ask your account rep for the BI tool you are using. They can help pull the necessary information so you can make informed decisions on the security of your account. Feel free to push the boundaries and you will be surprised what information is available when you ask for it.