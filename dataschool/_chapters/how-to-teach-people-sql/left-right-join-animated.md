---
section: book
title: Left & Right Join - Animated
number: 60
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1RxUrKPBICpGUO2wchwGIME7Qw3dWsUYQ1JCq8jhmcLk/edit?usp=sharing
image: ''
summary: ''
is_featured: false
img_border_on_default: false
writers:
  writers: []
published: false

---
**Left Join**

This is the second most common type of JOIN in SQL. Left refers to the first table, or the table you will be joining to. So in this case it would be the facebook table since it comes before linkedin table in the query.

SELECT *

FROM facebook

LEFT JOIN linkedin

ON facebook.name = linkedin.name

This query finds matches and adds them to a newly created table in the same way as an [INNER JOIN](https://dataschool.com/learn/common-sql-join-types-inner-join).

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955fc425962d9af93d3ca7_6haM1cBRIyw_wgWvHfYaP7bF7k4HCTX38xDoo7uHvQiLoybp0AmyOjYP-k5ulpleXHVW6zEKjH2ldRt7qfedlCp8r8fiKRTSeiMX2z2KbLI3CyNPrqQDtE0USngpxTPZY0BNjMBA.gif)

However there is a large difference in how SQL treats the LEFT table (first table; in this case the facebook table). For any rows in the first (or LEFT) table that did not have a match, it will still add this row to the new table and put in nulls for the columns from the other table.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955fc5b9d961e7047d3e52_Np3ReD8ESqFE0wH8vyCPEkSwk57KdPaRsAFOHQM-N6KBhJTpsbsYgPHl1GdfiSn67XlbKNsquZhVlsT5dckcthul0mo63TaZAO01FCtiEgHAX1ZvSdnA7BcZxrAIcTMzhgoZiBBm.gif)

## **Right Join**

This is one of the rarest types of JOIN in SQL. The reason for this is that any RIGHT JOIN can be re-written as a LEFT JOIN, which is more conventional. Right refers to the second table, or the table you will be joining in. So in this case it would be the linkedin table since it comes after facebook table in the query.

SELECT *

FROM facebook

RIGHT JOIN linkedin

ON facebook.name = linkedin.name

So this could be re-written as a LEFT JOIN and produce the same results:

SELECT *

FROM facebook

LEFT JOIN linkedin

ON facebook.name = linkedin.name

However let’s look at the process of a RIGHT JOIN in order to see how it works. It changes which table SQL evaluates from.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955fc59bdc0516bebdc777_JzHfSbgoXrkgMzSKX8nQCZ81sUetPnvbR-CJ6Jrb5FuymS8vS_tvkyqmUF2iI8UhmmfXfArdu3cZ1fltaBcPs78l5lDpVsaEwHCSZu3_ExlhY8wdIEobU42Yf0XBMDsYJlqAiRd6.gif)

Here we can RIGHT JOIN similar to the LEFT JOIN bring in rows from the RIGHT (or second) table that did not have any matches and add nulls for the columns in the first table.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955fc596e83c73b4ed9c0d_1lFkpvdtCeyxGIdWSWqcq_HpWBRBa98lxcTLvCcjzsxgB_sPdish_AHgxdADlf4yVFIvsk4V-K082IPo9jXYgVt7egPQ7PHo689kSnNGV0q1l9Ke-5hwVGPrtq10J8_SYf4bF95b.gif)

Why use a LEFT JOIN or RIGHT JOIN vs an INNER JOIN? To help understand, Let’s think about the different questions they are asking.

INNER join

* How many friends and connections do my friends who are on both on Facebook and LinkedIn have?

LEFT join

* How many friends and connections do my Facebook friends have? (Regardless of if they are on LinkedIn)

RIGHT join

* How many friends and connections do my LinkedIn connections have? (Regardless of if they are on facebook)