---
section: book
title: Full Outer Join - Animated
number: 70
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1xA160gXkrjyrlrygTqNAVnUYaEA3-oMFPTmxgvyuZxY/edit?usp=sharing
image: ''
description: ''
is_featured: false
img_border_on_default: false
writers:
  writers: []
published: false

---
**Full Outer Join**

This is the third most common type of JOIN in SQL. FULL OUTER refers to the first table, or the table you will be joining to. So in this case it would be the facebook table since it comes before linkedin table in the query.

SELECT *

FROM facebook

FULL OUTER JOIN linkedin

ON facebook.name = linkedin.name

This query finds matches and adds them to a newly created table in the same way as a [LEFT join](https://dataschool.com/learn/common-sql-join-types-left-right-join).

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c95603396e83c575bede4f9_OTOjEPCaoFC82Fc_H888LgNPttE-dYYHW5YkiudFaCE-p-klgRtPBzpQszcl_LKX1Couy9dqLz8yszXGwTQ6iQqbdiYnP34BYe2QALYB9p8zdgIAsaIuojyvnRrdzjsTn3BFJap8.gif)

However after completing the LEFT join of the data then there is essentially RIGHT join performed. However since all the cases where there is a match has been made, SQL only checks to see if each value is present in the joined table. If it is not in the joined table, SQL will add this row to the new table and put in nulls for the columns from the other table.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c95603225962dfc433d8f86_pFScvh3Edj2jRvURh_hC2zyb-EJyntqmieT4pm43mu6iwTjP5HD0o5Cn8bRTg_yREOJVGiiVr_8Eadzg00rwt06oAQlBqfRHQ_cSwEOa22Z6KYgGe60AHYjpWDp07-j0LCtAnQVC.gif)

Why use a FULL OUTER JOIN vs LEFT JOIN or RIGHT JOIN vs an INNER JOIN? To help understand, Let’s think about the different questions they are asking.

INNER join

* How many friends and connections do my friends who are on both on Facebook and LinkedIn have?

LEFT join

* How many friends and connections do my Facebook friends have? (Regardless of if they are on LinkedIn)

RIGHT join

* How many friends and connections do my LinkedIn connections have? (Regardless of if they are on facebook)

FULL OUTER join

* How many friends and connections do my Facebook friends or LinkedIn connections have?