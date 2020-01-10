---
section: Extras
title: Conditional Logic
meta_title: Conditional Logic in Postgres SQL Queries
description: Learn how to use CASE WHEN, IIF, and UNION with WHERE to apply conditional
  logic within a Postgres SQL query
authors:
- _people/josiah-faas.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1y05KFLiboLpAwiE2g0RdVNwr7rFxVpdytw1wMtSU7bY/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 4
faqs: []

---
Postgres allows you to use conditional logic in your SQL queries. When the goal is simply to filter down results, using a WHERE clause is usually the best method.

(For an overview of WHERE clauses please reference this article: [https://dataschool.com/learn-sql/where/](https://dataschool.com/learn-sql/where/ "https://dataschool.com/learn-sql/where/") )

Conditional logic in SQL helps you to perform many different tasks:

* To perform grouping (as shown in the examples below).
* To deploy different mathematical operations depending on the value(s)
* To perform boolean operations against your data.
* To designate results based on specified text criteria.
* To achieve a similar outcome as using WHERE, but with more clear and/or concise code.
* To use conditional logic without the filtering effect of WHERE, thus retaining all the records.

Here are three different methods which can be used to execute conditional logic on your data.

## **CASE statement conditional logic:**

Let’s say that we had the following data and wanted to group the results into regions based on their location. We could utilize a CASE statement to achieve this.

| --- | --- | --- |
| name | numfriends | location |
| Matt | 300 | San Francisco |
| Lisa | 500 | Los Angeles |
| Jeff | 600 | Chicago |
| Sarah | 400 | New York |

```sql
SELECT name,
	numfriends,
	CASE
		WHEN location = 'San Francisco' THEN 'West'
		WHEN location = 'Los Angeles' THEN 'West'
		WHEN location = 'New York' THEN 'East'
		ELSE 'Other'
	END AS Region
FROM facebook;
```

The result would look like this and provide us the Regional grouping we desired.

| --- | --- | --- | --- |
| name | numfriends | location | region |
| Matt | 300 | San Francisco | West |
| Lisa | 500 | Los Angeles | West |
| Jeff | 600 | Chicago | Other |
| Sarah | 400 | New York | East |

## **IIF Conditional Logic:**

Let’s now say that we wanted to group again but this time based on the number of friends. We could use IIF to group based on the quantities.

```sql
SELECT name,
	numfriends,
	location,
	IIF (numfriends >=500, 'Larger', 'Smaller') AS Size
FROM facebook;
```

Here are the results:

| --- | --- | --- | --- |
| name | numfriends | location | size |
| Matt | 300 | San Francisco | Smaller |
| Lisa | 500 | Los Angeles | Larger |
| Jeff | 600 | Chicago | Larger |
| Sarah | 400 | New York | Smaller |

Notice that in both of these past 2 examples, we are not merely filtering down the data, but rather returning all the data with new conditional information implemented on it.

## **UNION and WHERE Conditional Logic:**

Finally, there may be situations in which it may be expedient to use more than 1 SELECT statement, each with WHERE clauses, and then UNION the results together. If we wanted to return all records with a location of either San Francisco or Los Angeles, it could be done like this:

```sql
SELECT name,
	numfriends,
	location,
FROM facebook
WHERE location = 'San Francisco'
UNION
	SELECT name,
		numfriends,
		location,
	FROM facebook
	WHERE location = 'Los Angeles';
```

The result would be:

| --- | --- | --- |
| name | numfriends | location |
| Matt | 300 | San Francisco |
| Lisa | 500 | Los Angeles |

Given this simplicity of the sample data, in this case, perhaps it would make more sense to have just used a single SELECT statement with a single WHERE clause containing an OR condition. However, the UNION approach is good to know and to keep in mind. There may be times when addressing more complex situations that it may be applicable as a better approach.