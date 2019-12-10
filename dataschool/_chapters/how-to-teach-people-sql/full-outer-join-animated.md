---
title: Full Outer Join - Animated
meta_title: Full Outer Join - Animated with Gifs
description: Visualize how SQL is joining two tables using a Full Outer JOIN. See
  animated visualizations of the data being FULL OUTER joined in SQL. Learn more.
section: JOINs
number: 70
authors:
- _people/matt.md
reviewers:
- _people/tim.md
feedback_doc_url: https://docs.google.com/document/d/1xA160gXkrjyrlrygTqNAVnUYaEA3-oMFPTmxgvyuZxY/edit?usp=sharing
image: "/assets/images/how-to-teach-people-sql/fullOuter/fullOuter_1.gif"
is_featured: false
img_border_on_default: false
is_under_construction: false

---
This is the third most common type of [JOIN in SQL](https://dataschool.com/how-to-teach-people-sql/sql-join-types-explained-visually/). FULL OUTER refers to the first table, or the table you will be joining to. So in this case it would be the facebook table since it comes before linkedin table in the query.

```sql
SELECT *
FROM facebook
FULL OUTER JOIN linkedin
ON facebook.name = linkedin.name
```

This query finds matches and adds them to a newly created table in the same way as a LEFT join.

![gif showing part one of a full outer join: the left join](/assets/images/how-to-teach-people-sql/fullOuter/fullOuter_1.gif)

However after completing the LEFT join of the data then there is essentially RIGHT join performed. However since all the cases where there is a match has been made, SQL only checks to see if each value is present in the joined table. If it is not in the joined table, SQL will add this row to the new table and put in nulls for the columns from the other table.

![gif showing subsequent adding of values that were not copied from the table](/assets/images/how-to-teach-people-sql/fullOuter/fullOuter_2.gif)

Why use a FULL OUTER JOIN vs LEFT JOIN or RIGHT JOIN vs an INNER JOIN? To help understand, Let’s think about the different questions they are asking.

* **FULL OUTER join:** How many friends and connections do my Facebook friends or LinkedIn connections have?
* **LEFT join:** How many friends and connections do my Facebook friends have? (Regardless of if they are on LinkedIn)
* **RIGHT join:** How many friends and connections do my LinkedIn connections have? (Regardless of if they are on facebook)
* **INNER join:** How many friends and connections do my friends who are on both on Facebook and LinkedIn have?
