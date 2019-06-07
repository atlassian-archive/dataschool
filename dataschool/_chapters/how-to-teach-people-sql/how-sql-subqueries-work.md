---
section: book
title: How SQL Subqueries Work
number: 130
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1kPX4BXKYuxouonyUpYlCItWCLrtH86mfV2YHj1u0ovw/edit?usp=sharing
image: ''
summary: ''
is_featured: false
img_border_on_default: false
writers:
  writers: []
published: false

---
A SQL subquery can look complicated:

| --- |
| SELECT * |
| FROM (SELECT State, SUM (# of friends) |
| FROM facebook |
| GROUP BY state) |

The core concept to grasp is that the subquery (the part highlighted in blue inside the parentheses) is a separate SQL query that produces a table that is then used in the main query.

Let’s break the example above up and do the subquery first by itself.

Subquery:

| --- |
| SELECT State, SUM (# of friends) |
| FROM facebook |
| GROUP BY state |

![SQL Subquery Animation](https://assets.website-files.com/5c197923e5851742d9bc835d/5c95647196e83ca6bbeec3e8_Gfb6UxlJtLvTxjG6EhXweJGe85Jb8ytqFwa6w_6sgy8SBOK_f-682FHKHaxpXlsvYXBKi1ocvLLsgRbL__QT9ZhFF4TD_NlQqb6Ml2Z0SzN9aq-q5-9ILBGd8Q9vQ8DxddSF6qrn.gif)

This subquery produces a table:

![Result of SQL Subquery](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9564713a3564c7905ac42d_Z0P522tVJireax1cHYRw9ERKptxGMlSdJNtdvcpDJ8c1UosqjK15TfUv90Byq_nFizT9USo6aFlVJyUhcZ6wVCOfO-RjQsZSe-rMY1x4dW34s3O0eHUJW_-j6iz7NzPqt3LAl3OO.png)

This table from the subquery can then be used by the main query.

Main query:

| --- |
| SELECT * |
| FROM (subquery table) |

![Main Query](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9563da4476fb5ed34887b2_21-NGat8OO_7__fkccSnoM1c-16ULgDL354Ggca6cRbkNhEYde81_SGvSO6ECisRTGzK0U0biZBbk8uQXjv7AIQaglBWJsiHyNTB7e40wcCjma1mOf7p2nsBQl6qluisrjLWnwcI.png)

Now while this was a somewhat pointless subquery example since you could have just run the subquery to get the same result, it illustrates the point the the outer query is pulling from the created table of the subquery. In this case it is selecting everything from the subquery.

![Full SQL Subquery Animation](https://assets.website-files.com/5c197923e5851742d9bc835d/5c956472855a5131d24ab7e7_LlZ9Kemn8ejZ9oS13A20JSJHAwQPMGaPPUNha_80svCDsRv8rE7ZiB4oQjW7wF6xqEQlQY-blMqbSoiw-ktRzSQXeCJV-9xB0GdXbBBUVvN8WO-GYd34u7o1A0J46GiB_MarSQ1o.gif)

## **Subquery placement**

Subqueries are most commonly in the FROM statement as a table to query from. However a subquery can also be placed in the WHERE or HAVING statement. When using it in the WHERE or HAVING statement, the subquery has to produce a single value table if you are using comparison operators such as =, <, <=, >, >=, !=.

Single value subquery table:

| --- |
| SELECT * |
| FROM facebook |
| WHERE # of friends = (SELECT MAX(# of connections) |
| FROM linkedin) |

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9564724476fb789948a14a_JCNDN8JR7jL6zkbod5WQZeHPz_Z45CNnQ9ANDq8buzhoa2NZNtLJ4XaTpDTRhoikU3As8ci8KYkl-ORlsoxRMgJXbF1LhBD-WjPxMUWETzkXNJbScBSCOwBppN6JjFTbrqHmcde0.gif)

Multi-value subquery tables will result in an error since it would try to compare a single field to every row in a column or every cell within table at once.

| --- |
| SELECT * |
| FROM facebook |
| WHERE # of friends = (SELECT # of connections |
| FROM linkedin) |

![Full SQL Subquery Animation in WHERE Statement](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9564724cfd2a5f483a6fb9__oygOLV43NTbwEMxa17ksu8NLOq7MsCKM8sqBeGyVI48yyqakJCxaFR1EwLjnkHXzJVCHVk4e90vR_-EHDc1nYqNom8QW5ms3TqcOSRHCe9R0oeD36TCVw0LW6qajfinD5xgW-RU.gif)

Multi-value subquery tables can be used with logical operators such as IN which compares a single field to every row in a column or table.

| --- |
| SELECT * |
| FROM facebook |
| WHERE # of friends IN (SELECT # of connections |
| FROM linkedin) |

![SQL Subquery with Logical Operators Animation](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9564723a3564360d5ac42e_48cBeWcCBRS9eyS_U6mHvHtL18__vstG86SvQVU3d7BJ2mqbCHYvKlA7LZBTxbMOdTNx0YA2o9BYOIrKEp2k4jbDd--iysDCblIabJKfq3xTMwFVqP4-JBWnv_FhF0hnijXGFhab.gif)

## **Common table expression**

Subqueries can also be written in a WITH statement instead of in the main query. You write WITH and then what you want to name the resulting table from the subquery and then in parentheses write the subquery. Then you can write a query that uses that subquery by referring to the name given to it. When written in this way they are referred to as a common table expression (CTE). Look at the original example and re-written version using a WITH statement below.

Subquery in the Query:

| --- |
| SELECT * |
| FROM (SELECT State, SUM (# of friends) |
| FROM facebook |
| GROUP BY state) |

Subquery in a WITH statement:

| --- |
| WITH subQ AS ( |
| SELECT State, SUM (# of friends) |
| FROM facebook |
| GROUP BY state |
| ) |
|  |
| SELECT * |
| FROM subQ |

Writing it this way can help make it more clear that you are first creating a table and then referencing it in the outer query.

![SQL Subquery Example with CTE ](https://assets.website-files.com/5c197923e5851742d9bc835d/5c956472b9d9615ab57eaecf_proDgRAvON6TBGqqgoMMiMfHfudjQtWPIAjJQ0N2cCNjmsQ7E47Z6P-fLLeXvESOaGzyoqoBZBDUIgMf1vI4NIbw1Gy-G9XmNIQOZqCzgrk9Iqcbl9T8z_zFaVLRNaU0MvwZ_dOC.gif)