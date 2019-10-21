---
section: Stage 2 - Lake
title: Why Build a Data Lake
meta_title: Top 3 reasons to build a Data Lake
description: Learn why you should build a data lake to improve analytics at your company.
number: 4
authors:
- _people/tim.md
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1ufvuBfjmJXJ2FMTbH-NFF8M6Aa5pI7lhRT948BJD0CA/edit?usp=sharing
image: "/assets/images/Data Lake.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
## What is a Data Lake?

A Data Lake is a storage repository of multiple sources of raw data in a single location. In the cloud these are typically stored in cloud c-store data warehouses or in S3 buckets, the data can be in a variety of formats and can be structured, semi-structured, unstructured, or even binary.

![Building a Data Lake](http://img.chartio.com/a52373642904/Image%202019-10-20%20at%205.31.17%20PM.png)

The term Data Lake, after oil lakes (pre-refinery oil), was created to contrast the term Data Mart which described orderly, siloed, and refined data. Having all the data in one place made it easier to work with large data sets and to start getting out insights earlier in the data modeling process.

### This stage is right for you if

 - You need unique or combined charts/dashboards for cloud application sources like SalesForce
 - Your charts and dashboards will be created by a core set of people who will all be able to learn the in's and outs of the structure of the messy data
 - You're intimidated by data modeling (but just don't be - that's why we have this book)
 - You cannot spare the time for even light data modeling and are okay for now with the technical debt you're taking on
 - You have large sets of data and need more performant queries

### You've outgrown this stage if

 - More than a few people are going to be working with this dataset
 - You want a clean source of truth of your company
 - You don't like fighting integrity issues
 - You need to separate the structure of the data from the always changing transactional sources.
 - You Don't like Repeating Yourself (DRY)

## Top 3 reasons to build a Data Lake

1. **Unified** - makes it easy to query and combine data from various sources to find valuable insights
2. **Performance** - after getting data out of their respective tools you can optimize storage, schema, and queries to get the data you need fast.
3. **Progress** - building towards a single source of truth

![](https://lh5.googleusercontent.com/Y9W1AOr29hn9WeBDFHAIPZZBdfZrO7yq6uvdpTE5ReRd4gQo_iPqy1AFqnfEM87Zqog3oZIITC1mQL32KwJYBPAh5TLSCT5XuUWMSoMbaTdGB5fLi9im9E9XldvKjvO2GE9-veSO)

### 1) Unified

It can be challenging to do complex analysis since you only have access to the data within a single source at a time. Without being able to combine sources it limits your ability to find insights. Many tools that generate data provide fairly basic reporting and analytics functionality further restricting the types of questions that can be asked and making it difficult to find insights.

![](https://lh5.googleusercontent.com/IFl5w3cTjoaoo-y-SSjfORC7_eSYarRtf1jVSiMuEDx0WteFndawE4wnaGNSLoM7FIzhm1T-jrOEd40vKxgO_2UhfqwR_ImRj9KYGWEHXvdYanztutwMOCcI4Qv6oPn31QbOiXAv)

In a Data Lake, all data can be combined so it can be analyzed together. This makes finding insights easier and provides more depth for exploring the data. Often-times to use BI tools it is necessary to get all the data together first.

### 2) Performance

Source data might be from the actual production database which could affect the performance of the application that it is powering. Queries that demand a lot of data such as aggregations are not optimally run on transactional databases.

![](https://lh3.googleusercontent.com/VGqHkCo7QOLEwh4OllUsgiS5F9U4vDglYn-uZLM_u0UCGNvWz7U6e55QSZftDW2OxW0L_CwvrNszzDQ6FPgOomoH4wWK57EcA0HNCxThBDceqztEDM4cK-UloxJKqDjVHnBNeeeH)

Data Lakes are built to handle these types of ad hoc analytical queries independently of the production environment. You can scale up resources on a Data Lake to be able to query data even faster.

### 3) Progress

Raw data comes in many formats that can be tricky to query. While your production database is likely in a SQL format, other tools will store data in more complex ways such as JSON.

JSON format:

```javascript
{
	"firstName": "John",
	"lastName": "Smith",
	"age": 27,
	"phoneNumbers": [
		{
			"type": "home",
			"number": "212 555-1234"
		},
		{
			"type": "office",
			"number": "212 555-1234"
		},
		{
			"type": "mobile",
			"number": "123 456-7890"
		}
	]
}
```

Normalized SQL format:

User

| --- | --- | --- | --- |
| id | firstName | lastName | age |
| 1 | John | Smith | 27 |

PhoneNumbers

| --- | --- | --- |
| User_id | type | phoneNumber |
| 1 | home | 212 555-1234 |
| 1 | office | 212 555-1234 |
| 1 | mobile | 123 456-7890 |

ELT tools move data into a lake and provide ways of getting your data into a SQL format so it can be queried easily. This is also a big step towards creating your single source of truth for your data

## Example Data Lake

### Multiple Schemas

![](https://lh3.googleusercontent.com/wNrelG2LDYcr-x4TxXi2ywcE84GgzkTOjLbE8APoOQqOb3jkzBN7RlRdjxvxpzMZtpqs4Hl4rn15b4c9aTwigrmbeJx2umKZFDEgaFY-vhvVFKGQpdBXh0zQ8U17nLTfx1kzEHKP)

We can see a variety of data sources and schemas we can query from.

### Query Across Schemas

![](https://lh6.googleusercontent.com/9y3tOyaQc-dQ27wOgbKJLj8MkXjIUaw8Lqf4-HE_HvxMIhxM0uKWqVmbIlsp-7ZADN0RKwzlsCV5UAOI3xD9vxLSC9ARiS1XBP_a8vcz4k9QV4A6nZ0-VlqaBpCcjLlQarYeTy_6)

Combining datasets can be tricky. Having a flexible BI tool such as Chartio allows you to navigate this with relative ease.
