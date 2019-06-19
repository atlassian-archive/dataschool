---
title: Left & Right Join - Animated
meta_title:
description: Visualize how SQL is joining two tables using a Left JOIN and a Right
  JOIN
section: book
number: 60
authors:
- _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1RxUrKPBICpGUO2wchwGIME7Qw3dWsUYQ1JCq8jhmcLk/edit?usp=sharing
image:
is_featured: false
img_border_on_default: false

---
## Left Join

This is the second most common type of JOIN in SQL. Left refers to the first table, or the table you will be joining to. So in this case it would be the facebook table since it comes before linkedin table in the query.

```sql
SELECT *
FROM facebook
LEFT JOIN linkedin
ON facebook.name = linkedin.name
```

This query finds matches and adds them to a newly created table in the same way as an [INNER JOIN](https://dataschool.com/learn/common-sql-join-types-inner-join).

![](/assets/images/how-to-teach-people-sql/leftJoin/leftJoin_1.gif)

However there is a large difference in how SQL treats the LEFT table (first table; in this case the facebook table). For any rows in the first (or LEFT) table that did not have a match, it will still add this row to the new table and put in nulls for the columns from the other table.

![](/assets/images/how-to-teach-people-sql/leftJoin/leftJoin_2.gif))

## Right Join

This is one of the rarest types of JOIN in SQL. The reason for this is that any RIGHT JOIN can be re-written as a LEFT JOIN, which is more conventional. Right refers to the second table, or the table you will be joining in. So in this case it would be the linkedin table since it comes after facebook table in the query.

```sql
SELECT *
FROM facebook
RIGHT JOIN linkedin
ON facebook.name = linkedin.name
```

So this could be re-written as a LEFT JOIN and produce the same results:

```sql
SELECT *
FROM facebook
LEFT JOIN linkedin
ON facebook.name = linkedin.name
```

However let’s look at the process of a RIGHT JOIN in order to see how it works. It changes which table SQL evaluates from.

![](/assets/images/how-to-teach-people-sql/leftJoin/leftJoin_3.gif)

Here we can RIGHT JOIN similar to the LEFT JOIN bring in rows from the RIGHT (or second) table that did not have any matches and add nulls for the columns in the first table.

![](/assets/images/how-to-teach-people-sql/leftJoin/leftJoin_4.gif)

Why use a LEFT JOIN or RIGHT JOIN vs an INNER JOIN? To help understand, Let’s think about the different questions they are asking.


* **LEFT join:** How many friends and connections do my Facebook friends have? (Regardless of if they are on LinkedIn)
* **RIGHT join:** How many friends and connections do my LinkedIn connections have? (Regardless of if they are on facebook)
* **INNER join:** How many friends and connections do my friends who are on both on Facebook and LinkedIn have?
