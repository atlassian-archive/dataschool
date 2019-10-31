---
section: Introduction
title: What Stage are You at?
meta_title: What Stage of Data Sophistication are You at?
description: Figure out what level of data sophistication your team is at.
number: 3
authors:
- _people/dave.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/WhichStage.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
Here is a quick guide to finding what stage your team is at. Use the links to jump to that section or view each stage in succession to learn about applying data governance practices at any level.

![Which Stage of Sophistication](/assets/images/WhichStage-1.png)

## [Stage 1 - Source](https://dataschool.com/data-governance/source-data-tools/)

### Right for you if:

* You have a small team with only a few people using data
* You have minimal data needs at the moment
* You only have data in a few small sources
* The only people who need to make new visuals are fairly technical

### You’ve outgrown if:

* You have data you need access to in multiple places/applications
* You need unique or combined charts/dashboards for cloud application sources like Salesforce
* More than just a few people need access to this data
* You’re struggling with performance issues
* You have a set of data that’s getting too big for a transactional database
* Non-technical users need to create their own charts

## [Stage 2 - Lake](https://dataschool.com/data-governance/why-build-a-data-lake/)

### Right for you if:

* You need unique or combined charts/dashboards for cloud application sources like Salesforce.
* Your charts and dashboards will be created by a core set of people who will all be able to learn the ins and outs of the structure of the messy data.
* You’re intimidated by data modeling (but just don’t be - that’s why we have this book).
* You cannot spare the time for even light data modeling and are okay, for now, with the technical debt you’re taking on.
* You have large sets of data and need more performant queries.

### You’ve outgrown if:

* More than a few people are going to be working with this dataset.
* You want a clean source of truth of your company.
* You don’t like fighting with integrity issues.
* You need to separate the structure of the data from the always changing transactional sources.
* You Don’t like Repeating Yourself (DRY)

## [Stage 3 - Warehouse](https://dataschool.com/data-governance/why-build-a-data-warehouse/)

### Right for you if:

* More than a few people are going to be working with this dataset
* You want a clean source of truth of your company
* You don’t like fighting integrity issues
* You need to separate the structure of the data from the always changing transactional sources.
* You Don’t like Repeating Yourself (DRY)

### You’ve outgrown if:

* You want to get democratized - and enable others in your company to explore and understand data themselves
* You’re prepared to teach and enable business users in your company - hopefully using the many resources of the Data School
* You have projects that require different formats of the source of truth for easier use
* Having truly informed employees is important to your company’s competitive success

## [Stage 4 - Mart](https://dataschool.com/data-governance/why-build-data-marts/)

### Right for you if:

* You want to get democratized and enable others in your company to explore and understand data themselves
* You’re prepared to teach and enable business users in your company - hopefully using the many resources of [The Data School](https://dataschool.com/)
* You have projects that require different formats of the source of truth for easier use
* Having truly informed employees is important to your company’s competitive success

### You’ve outgrown this stage if:

* You can’t really! You can make any number of marts, and even put leveling in your marts if you’d like. Implementing this stage will result in a complete, well architected and governed stack that will continually evolve and support your informed competitive company.