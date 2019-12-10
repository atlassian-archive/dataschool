---
title: Cross Join - Animated
meta_title: Cross Join - Animated with Gifs
description: Visualize how SQL is joining two tables using a Cross Join. See animated
  visualizations of the data being CROSS JOINed in SQL. Learn more.
section: JOINs
number: 90
authors:
- _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1v19iRnc-juTr-4N11iw-vm3GyD_izU-QU3qJUV71G9Q/edit?usp=sharing
image: "/assets/images/how-to-teach-people-sql/crossJoin/crossJoin_1.gif"
is_featured: false
img_border_on_default: false
is_under_construction: false
writers:
  writers: []

---
This is the fifth most common type of JOIN in SQL. Cross join does not look for matches between any values in the two data sets. Instead for each row in first table every row of second table will be attached to it and added to the final table one by one.

```sql
SELECT *
FROM facebook
CROSS JOIN linkedin
```

![gif showing how cross joins work on tables](/assets/images/how-to-teach-people-sql/crossJoin/crossJoin_1.gif)

Why use a CROSS JOIN vs a UNION, LEFT JOIN, RIGHT JOIN, INNER JOIN, FULL OUTER JOIN? To help understand, Let's think about the different questions they are asking.


* **CROSS JOIN:** How many combinations of friends and connections do I have?
* **UNION:** How many friends do my Facebook friends have and how many connections do my LinkedIn connections have?
* **LEFT join:** How many friends and connections do my Facebook friends have? (Regardless of if they are on LinkedIn)
* **RIGHT join:** How many friends and connections do my LinkedIn connections have? (Regardless of if they are on facebook)
* **INNER join:** How many friends and connections do my friends who are on both on Facebook and LinkedIn have?
* **FULL OUTER join:** How many friends and connections do my Facebook friends or LinkedIn connections have?
