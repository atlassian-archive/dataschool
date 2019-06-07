---
section: book
title: Cross Join - Animated
number: 90
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1v19iRnc-juTr-4N11iw-vm3GyD_izU-QU3qJUV71G9Q/edit?usp=sharing
image: ''
summary: ''
is_featured: false
img_border_on_default: false
writers:
  writers: []
published: false

---
This is the fifth most common type of JOIN in SQL. Cross join does not look for matches between any values in the two data sets. Instead for each row in first table every row of second table will be attached to it and added to the final table one by one.

SELECT *

FROM facebook

CROSS JOIN linkedin

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9560c896e83cbf3eee126d_vZdxYS7yZUulvIbi55KIHxK_w9_pYqzuPA7dpPN6g4ZOJcvfTUmXUBguh_hrlPKJ487geNYrTD5ayVkHQYVFfswd-e3nxPjfOtcawpoeCfVZL8aOtynDtlFmKJ9yd3vxaLBREbX-.gif)

Why use a CROSS JOIN vs a UNION, LEFT JOIN, RIGHT JOIN, INNER JOIN, FULL OUTER JOIN? To help understand, Let’s think about the different questions they are asking.

INNER join

* How many friends and connections do my friends who are on both on Facebook and LinkedIn have?

LEFT join

* How many friends and connections do my Facebook friends have? (Regardless of if they are on LinkedIn)

RIGHT join

* How many friends and connections do my LinkedIn connections have? (Regardless of if they are on facebook)

FULL OUTER join

* How many friends and connections do my Facebook friends or LinkedIn connections have?

UNION

* How many friends do my Facebook friends have and how many connections do my LinkedIn connections have?

CROSS JOIN

* How many combinations of friends and connections do I have?