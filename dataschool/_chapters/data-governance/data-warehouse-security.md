---
section: Stage 3 - Warehouse
title: Data Warehouse Security
short: Warehouse Security
meta_title: Data Warehouse Security Best Practices
description: Learn how to secure sensitive data on your database and BI platform.
number: 32
authors:
- _people/aaron-aihini.md
reviewers:
- _people/dave.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1XKPWw5xgZeFPSSu_RbdIQ3yQJM4wEm_xJnkMOEoiZ1k/edit?usp=sharing
image: "/assets/images/DataWarehouseSecurity.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
At the warehouse stage, more groups than just the centralized data team will commonly have access. You must use data governance to safeguard certain pieces of sensitive information from being accessed by the wrong people in your organization. Many security regulations mandating data access rules have been passed, such as GDPR, and many companies have industry standard compliance rules that they adhere to as well, like SOC and HIPAA.

Whether it is personally identifiable information (PII) or financial information, sensitive data is much more prevalent throughout a product’s journey and your Data Warehouse than one might think. Preventing the exposure of such information is key and can be approached in a variety of ways.

Every company stores information that cannot be exposed to everyone who works in the company. When moving from a Data Lake to a Data Warehouse more people will gain access to data. You need to ensure that sensitive information is aligned to what is being stored, how it's restricted in the Data Warehouse, and how it can be accessed via your BI tools.

There are multiple ways this can be handled and multiple questions to be answered:

* Where is sensitive data (PII and financial) currently handled?
* Will this sensitive data still be present in the Data Warehouse and then cleaned up?
* How will this information be removed or restricted from the exposed datasets - scripts on the way to the warehouse, data marts created from the warehouse?

These questions need to be answered before you connect these sources to your BI tool.

Within large companies, often times all internal data is considered confidential. Even internally, departments are on a need-to-know basis regarding data in other departments. Issues arise when a company connects its Data Warehouse to its BI platform or grants query access across different departments in general. This leads to sensitive data potentially being exposed to unauthorized users.

## How to secure sensitive data on the database

![](/assets/images/DataWarehouseSecurity-1.png)

The most direct way to limit access to the proper people is to enforce rules on the database level. This can be done through creating slave read-only replicas, creating custom user groups, and encrypting sensitive data.

### Slave Read-Only

Set up your warehouse to be read-only by default. This prevents any dangerous SQL write statements from being executed on your data.

### Custom User Groups

Regardless of whether you create the slave read-only warehouse, create a new user group that has read access only. You can choose to exclude access to specific tables or columns of data from that new user group. In addition, you can restrict access to row-specific data. Row-level permissioning allows you to give full access to tables containing sensitive information but restricts which rows and values the person querying can see. Depending on the underlying database, configuring row-level permissions differs slightly.

A great example of when to use row-level permissioning is adhering to HIPAA compliance when accessing a hospital’s dataset. Each doctor within this hospital has access to their own patients’ records for analysis and review. However, we want to prevent every doctor from having access to every patient’s medical records. Implementing access controls at the row level by account/patient ownership (whether that is patient id, patient name, etc.) will prevent doctors from having the chance to access a patient’s personal information they don’t need. You can apply this example to other groups as well: sales teams, customer tracking, employee records, etc.

### Encrypt Columns

If you need to group or aggregate by sensitive data you can create encrypted versions of the data. Then users can create summary tables where sensitive metrics, like financial data, can be aggregated to a level that is appropriate for different departments to see and analyze. The level of security you implement will limit what type of analysis can be performed on the data, but does ensure that the sensitive data is protected.

## How to secure sensitive data in a BI tool

Now that we have secured the underlying database, we need to ensure that there are no loopholes in the BI tool. Even setting up the right permissions on the database does not ensure sensitive data won’t be inappropriately shared through a dashboard or report. This type of issue can be difficult to prevent, so the common strategy is to set policies with users of the BI tool and regularly audit who is accessing and viewing what data.

### Consistent account audit/clean up

Projects change, roles change, and use cases change. Any of these changes can impact employee permissions. Outdated permissions can lead to compliance and privacy issues. Periodically reviewing and updating permissions is a best practice to protect sensitive data.

During an audit you should check all the previous questions we talked about:

* Who has access to which data sources?
* Who has access to sensitive row-level information?
* Who is on the admin team or has admin access?
* Who has access to or is viewing dashboards and reports containing sensitive data?

BI tools offer answers to these questions through varying levels of usage information in-app for the admins to monitor and review. If you do not have all of the pieces of information necessary, talk to the support team at the BI tool you're using. They can help pull the necessary information so you can make informed decisions on the security of your account. Feel free to push the boundaries and you may be surprised at what information is available when you ask.

## Summary

Create sensible limits on the database by removing edit access and filtering what data users have access to through custom user groups, and finally encrypting sensitive data. Regardless of the precautions you take you should still perform regular audits to verify who has access to what and where sensitive data is being exposed.