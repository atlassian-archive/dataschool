---
section: Stage 2 - Lake
title: Data Lake Security
meta_title: Setup Security on a Data Lake
description: Learn best practices for ensuring data security on a Data Lake database.
number: 24
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1no0HYQHZamAPfScdyF3zozPcukMu5EIQYjPa30LMTK0/edit?usp=sharing
image: "/assets/images/DataLakeSecurity (1)-1.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
Prior to having a Data Lake, all analysis had to be done by working with data in many different places. These tools required individual logins which are hard to track and maintain the appropriate levels of access.

Data Lakes provide a way to centralize access to data and make it simpler to manage permissions.

Data coming in to the Data Lake is likely not cleaned yet so there may still be sensitive information coming through. Don’t [Extract or Load](https://dataschool.com/data-governance/etl-vs-elt/) sensitive data/columns, this is configurable within the ELT tools. Also be wary of who you grant access to the Data Lake since it gives much more access to all of the data than giving access to a particular source.

## Access in central place

Remove access from individual tools, move all access to Data Lake. This will cut down on tickets requesting access and mishaps where people retain access to information they shouldn’t have.

![Move Security from Sources to Lake](/assets/images/DataLakeSecurity (1).png "Data Lake Security")

## Permission tiers

Now that you can easily grant anyone access to data, you will have more people using that data. While this is advantageous for analysis and exploration you do need to be mindful of what schemas and tables they can see.

Start out by creating two users groups on the Data Lake as follows:

1. For admin and engineers (Full Access)
2. For analysts and business users (Relevant Access)

You can prevent the second group from accessing sensitive data in the Data Lake by limiting that group's permissions to only relevant schemas or tables.

![Set Permissions Tiers by Group](/assets/images/PermissionTiers (1).png "Permission Tiers")

In general set broad controls so it is easy to manage. As you grow in sophistication and turn your Data Lake into a Data Warehouse and Data Mart you can create more refined permissions settings.