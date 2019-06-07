---
section: book
title: How SQL Aggregations Work
number: 120
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1sLpiaEW0K1azJLyFp6Va0UJFR3jU3YljuMcg2TUpoDY/edit?usp=sharing
image: ''
<<<<<<< HEAD
summary: ''
is_featured: false
img_border_on_default: false
published: true
---

SQL COUNT is the most common type of Aggregation in SQL, it counts the number of rows in a column or table. COUNT(\*) tells SQL to count the number of rows of the whole table. COUNT(some column) tells SQL to count the number of non-null rows in that column.

```sql
SELECT COUNT(*)
FROM facebook
```

![SQL COUNT Aggregation Visualization](/assets/images/how-to-teach-people-sql/aggregations/aggregations_1.gif)

SQL goes through all the rows of the table and creates a table with total count of rows.

![Example of a SQL COUNT Query](/assets/images/how-to-teach-people-sql/aggregations/aggregations_2.png)

With more complex data, SQL can answer more complex questions such as how many rows are there per state.

![Example Table](/assets/images/how-to-teach-people-sql/aggregations/aggregations_3.png)

The COUNT aggregation can answer this, but SQL needs to be told what to group by in the query. SQL also needs the column it is grouping by in the SELECT statement so that the final table can show the data in its proper groups.

```sql
SELECT State, COUNT(*)
FROM facebook
GROUP BY State
```

![A More Specific SQL COUNT Query](/assets/images/how-to-teach-people-sql/aggregations/aggregations_4.gif)
=======
description: ''
is_featured: false
img_border_on_default: false
writers:
  writers: []
published: false

---
SQL COUNT is the most common type of Aggregation in SQL, it counts the number of rows in a column or table. COUNT(*) tells SQL to count the number of rows of the whole table. COUNT(some column) tells SQL to count the number of non-null rows in that column.

SELECT COUNT(*)

FROM facebook

![SQL COUNT Aggregation Visualization](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9563da0c011ef87a8d2b5a_wKQYOGxwkdkMdDOvRZAtqNOsSSUgMsLTxS2xQg7KaUB2z7Y0nPuMwDvNZMAFDmFX4kDuQlFsF-2_ONpkMqzMGD_Tc76OONH0RnPhy-0dTL2KIABsnYVr0_8hMAcZzufdTQJEY7s7.gif)

SQL goes through all the rows of the table and creates a table with total count of rows.

![Example of a SQL COUNT Query](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9563da96e83c1435eea143_oF6kNEXs3x3kmTI7se6_myhLnpQ3SFeWX35GXFMsAla5CAKti-VzmRHW8qICvQuaZwHEVx3LAlpqv0dh-csQO4Fs9r02LaQ7hKv0_O17kJI301fCmoY6jFbbvwT70skNciQmNDsi.png)

With more complex data, SQL can answer more complex questions such as how many rows are there per state.

![Example Table](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9563da4cfd2a6d3f3a4f8e_WoAWi0-rP8o0PIX7TS8J_JdaIx1NnHhBDpdTYOSxiks6C8reDKsHvqpXA3zX09BSh9goetaD_bWRzirRDTuULk2aV4l8jAfkpR6EJgE607TZxE8ja-jZVV7CRXJfHH8vZkkcTxUd.png)

The COUNT aggregation can answer this, but SQL needs to be told what to group by in the query. SQL also needs the column it is grouping by in the SELECT statement so that the final table can show the data in its proper groups.

SELECT State, COUNT(*)

FROM facebook

GROUP BY State

![A More Specific SQL COUNT Query](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9563da4cfd2afb843a4f8f_Th-g3AXPHqy6fO6pNFd5O9wvfz0_GVc6m-ha_coSxxDQL-rtVCmDfhoKWs0h1tdFVMgQkbGFFMATaEnnXcIn_tKzU64XOdBnkAXbjO-nVk5zmLa6NRo5NbYSaLCxQbmW3truPguL.gif)
>>>>>>> a18a24052dc16bf0960eed73d3f0948bc555bada

First SQL will group together data by the column or columns listed in the group by statement in this case state. Then SQL will perform the same COUNT operation as before but check which group to assign the count to.

The data and question can be even more complicated, in this example there is a city column in the table as well. The question could be how many rows are there for each State and City.

![Example Table Including City](/assets/images/how-to-teach-people-sql/aggregations/aggregations_5.png)

The COUNT aggregation will get us our answer as long as it is grouped by state and city. Remember SQL needs what we are grouping by in the SELECT statement as well so that these groups will show in the final table.

```sql
SELECT State, City, COUNT(*)
FROM facebook
GROUP BY State, City
```

![SQL COUNT Query Visualization by State and City](/assets/images/how-to-teach-people-sql/aggregations/aggregations_6.gif)

## **SUM and AVERAGE Aggregation**

After COUNT, for all other types of aggregation will need you to define the column you are aggregating.

Wrong:

SELECT SUM(*)

FROM facebook

Right:

SELECT SUM(# of friends)

FROM facebook

How would it SUM all the columns in the facebook table? The name column has text and cannot summed. Also there are multiple columns so we cannot SUM the row as a whole like the way we could COUNT the row as a whole. SQL needs to know which column the aggregation should be on, in this case the only numeric column is # of friends.

![SQL SUM Query](/assets/images/how-to-teach-people-sql/aggregations/aggregations_7.gif)

The Average aggregation operates similarly to SUM. The data will be more complex for this example.

```sql
SELECT State, AVG(# of friends)
From facebook
Group by State
```

![](/assets/images/how-to-teach-people-sql/aggregations/aggregations_8.gif)

To get an average SQL needs the sum of each group and then divide it by the count of rows in each group.

## **NULLs**

There are a few scenarios to be aware of when aggregating data that may make you misinterpret the results of your query.

Some cells will not have a value in it. This type of cell is considered null. Null is different than 0 or space “ ”.

_\[Null\]_

0

The COUNT(*) aggregation will count all rows including Null values. However the COUNT(some column) will count all rows without Null values. Since other aggregations require you specify a column they will exclude Nulls in their calculations.

COUNT(*) counts Nulls

![SQL COUNT Query With NULL Values](/assets/images/how-to-teach-people-sql/aggregations/aggregations_9.gif)

‍

COUNT(# of friends) does not count Nulls

![SQL COUNT Query with NULL Values](/assets/images/how-to-teach-people-sql/aggregations/aggregations_10.gif)
