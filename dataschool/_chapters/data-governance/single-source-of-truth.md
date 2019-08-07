---
section: book
title: Data Warehouse Single Source of Truth
meta_title: Data Warehouse Single Source of Truth
description: Learn why you should build a Single Source of Truth in your Data Warehouse.
  Overcome common obstacles and empower your colleagues
number: 31
authors:
- _people/tim.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1OTMitbsvp76MoOw6whTNpUDBc9_u6eXHFLtfJ6yZFbA/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 9

---
## What is the single source of truth?

A Single Source of Truth is a database where the data is accurate and is used by everyone in a company when querying for data.

**_The promise of a Single Source of Truth is access and accuracy._**

This is an obvious thing that a company would want in their data but a lot of companies struggle to ever deliver this. Creating a Single Source of Truth requires data engineering effort. Let’s talk through the problems that SSoT solves, where it often goes wrong, and best practices:

* Permission Issues
* Inconsistent Analysis

## Permission Issues

### Why Do Permission Issues Matter?

Analysts need a lot of different data. They might be investigating 3rd quarter growth, which would necessitate data on revenue, customer base, and employee statistics. This data will be spread out across different tables and schemas. If you do not get them enough access, these analysts will be emailing you asking for access constantly.

Giving too much access can also create problems. There are many rules and regulations about how companies should handle PII (Personally Identifiable Information), health records, or other types of sensitive information. Limiting who has access to schemas and tables with this type of information is prudent. For more information on data security check out [GDPR](https://eugdpr.org/) and [SOC](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html).

### Why Do Permission Issues Happen?

Permission issues happen because access is restricted at the source level and ineffective default permissions are given out to employees.

#### Source level access

Access is typically defined at the data source level. You work on the sales team, you have access to all the salesforce data. While this makes sense at first pass, it does not account for any cross-departmental analysis to be done or if there is sensitive data in there and some of it should be restricted. Access restrictions can be at many different points in the data stack. Each data source might have its own permission gate.
![Many access restrictions in the data stack](/assets/images/data-governance/singleSource/singleSource_0.png)
Restricting analytical teams to specific tables and structuring your data in that way will help smooth out the permission process because there will fewer elements in the data source that need to be cleaned and maintained on a regular base.

#### Default Permissions

The number of data sources will grow in your company over time. Maintaining the appropriate permissions for each source is challenging. Some companies have a default of giving access to everyone in the company or in the related department. Other companies default to not giving access until it is requested. Both of these defaults have downsides. Defaulting everyone on will end up violating sensitive information. Defaulting everyone off will slow down analysis and create a mountain of emails requesting access to different sources of data.

The goal is to ensure that everyone in your company has access to the data they need and not have access to sensitive data unless given permission. Consider how these default permissions settings effect new employees and employees who are leaving the company.

### How do companies solve permission issues?

Permission issues are solved by moving to a SSoT because it provides a single point to grant or remove access.
![Single access Restriction on the Single Source of Truth](/assets/images/data-governance/singleSource/singleSource_1.png)
What we mean here, is that you can remove almost all of the user accounts for the various data sources, cloud or otherwise, that your organization has signed up for. You will likely still be using those data sources, but will only need a few admin accounts in order to access the data for the ETL/ELT process to get them off of the cloud and into the Data Lake. At that point, you can begin the process of getting the data into the Data Warehouse that you are designing to best fit your org's data analysis needs.

Once you have moved into the Data Warehouse, you can then address access issues within a single data source. Here, you will be able to grant users access to certain tables, schemas, and views. These will be likely the only tables, schemas, and views that they will need access to for analytical and reporting purposes.

## Inconsistent Analysis

### Why does consistency matter?

When multiple people are asking questions using data getting answers that don’t line up create doubt in both people’s answers. This is demoralizing for both parties and time consuming to figure out who if either was right. When multiple people can ask the same questions and get the same answer it builds trust in the data and encourages more use of it.

### How does the data become inconsistent?

As more and more data is used to understand your businesses, some data sources will no longer accurately reflect what is going on and how you define your metrics will become more nuanced.

#### Data Sources

Companies add more services and tools that generate data as they grow. Before you have built a single source of truth your company will likely have data sources that overlap in terms of what they track and have data from old tools they don’t use anymore that is still needed for analysis. Imagine you were tracking sign ups via google analytics and then after a year started using hubspot to track sign ups. The hubspot data will be empty before the date you started it and the google analytics data might not be as well maintained going forward. To the analyst it will be unclear which data they should use.

#### Metric Definitions

There are a lot of different ways to measure a business. Some are fairly well known such as Monthly Active Users. In most businesses getting an accurate count is not straight forward. This is because you need to filter out the following:

* Test accounts
* Internal Company emails
* Non product-related page visits
* Users that are no longer employed by a client company

Not filtering out the right things can cause a difference in your results vs another analyst. If presented to other people in the business and then they hear the conflicting number it will cause them to lose trust in the output from the data team.

Another more subtle problem with metrics are their abbreviations. If Monthly Active Users is abbreviated as MAU in the database, it may be misinterpreted in someone else's analysis. They might think it stands for another metric they had used at a previous company.

### How do companies solve the inconsistency problem?

Creating a single source of truth removes peoples access from outdated sources so they will not be querying inferior data. When creating the Single Source of Truth using naming conventions and style guides are critical to helping multiple people come up with the same answer to the same question.

#### Consolidate Data Sources

When your company has used multiple tools to track the same type of data, if you can, migrate the data from the previous tools into the latest tool. If this is not an option use the data warehouse create a table which unions the data from both sources so that the historical record is not lost and to have one place to go to for the relevant metrics. This will require some renaming and cleaning to accomplish.
![Using multiple tools in conjunction](/assets/images/data-governance/singleSource/singleSource_2.png)
In addition, if you want to maintain access to old/unused data sources you can label data sources as deprecated or approved to help guide people during their analysis.
![Deprecated data source](/assets/images/data-governance/singleSource/singleSource_3.png)

#### Naming convention and style guide

Enforcing naming conventions and style guides helps people analyze data consistently because it clarifies what every column is and how it can be used. Here are some conventions we at Chartio follow:

| Best Practice | Reason |
| :--- | :--- |
| Plural Table Names | A table of Leads should be titled "Leads" not Lead.  When there are more than two words on the last needs to be pluralized: opportunity_histories |
| id as primary key | A simple numeric primary key labeled id should be standard for all tables. |
| foreign keys follow <tablename>_<id> | ForeignKeys should follow this format to make it very clear on where the table is linking to.  If there are two foreign keys to the same table you can preopend a name to them following the format <uniquename><tablename><id>. An accounts table linking to a users table with both a billing contact and a main owner would look like this:<br>Accounts<br><br>owner_user_id<br>billing_contact_user_id |
| Start columns with a _ if they are needed but should be hidden for Visual mode. | If there are columns you need in the model for joining or other purposes but don’t want visible by default in visual mode you can prefix them. They will otherwise be treated just as any other column.<br><br>Let’s say you didn’t think the foreign keys in the accounts table above needed to be shown in Visual mode. You can simply prefix them as shown below. The relationships will still be detected. It’s a best practice not to show the foreign keys visually.<br><br>Accounts<br> id<br> name<br> _owner_user_id<br> _billing_contact_user_id<br><br>This should not be used for columns you're on the fence about needing. Those just shouldn't be included. These are for columns that are needed for querying purposes but have no use in a Visual setting - primarily foreign keys. |
| Lower case, underscored naming | Our data model needs to be easily editable in SQL mode so we should follow conventions that make editing raw SQL easier. Therefore, we should attempt to have column names like id, first_name, last_name, and last_login_type instead of more human readable forms in the model. Chartio will handle that conversion. |
|  |  |

Publish this style guide and distribute it among all of your employees, adoption of known terms becomes easier and easier.

#### Create Standard Metrics

To define the calculation of a metric create a Dashboard with this metric in it and provide text on the dashboard to explain how it was calculated and what has been filtered out. Make this easily searchable!
![Formula's listed on the dashboard for clarity](/assets/images/data-governance/singleSource/singleSource_4.png)
Another approach is to create the metric inside the Single Source of Truth database. We recommend doing this through SQL based modeling using a tool such as dbt or Dataform. Defining the metric in the database will remove most, if not all, of the confusion.

To eliminate any remaining confusion on using the metric in your analysis, many SQL based modeling tools can add a data dictionary to the data model. This allows the author of the data model to write out the calculation and filtering as mentioned in the dashboard method.

Putting the metric in the database through modeling allows you to control changes in the data and the definitions systematically. You still will need to communicate out to users of that table of the changes but it will be documented for them if they check on their own.

## Summary

* Create a Single Source of Truth and give employees access to it and only it
* Make your data intuitive through naming conventions and style guides.
* Centralize the control of the metric calculations through SQL based modeling so those metrics are accurate.

References.

* [Getdbt.com](https://www.getdbt.com)