---
title: How SQL Subqueries Work
meta_title: How SQL Subqueries Work
section: book
number: 130
authors:
- _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1kPX4BXKYuxouonyUpYlCItWCLrtH86mfV2YHj1u0ovw/edit?usp=sharing
image: "/assets/images/how-to-teach-people-sql/subqueries/subqueries_2.png"
description: Visualize how subqueries work in SQL by seeing the intermediate table
  that is created during the process.
is_featured: false
img_border_on_default: false

---
A SQL subquery can look complicated:

```sql
SELECT *
FROM (SELECT State, SUM (# of friends)
FROM facebook
GROUP BY state);
```

The core concept to grasp is that the subquery (the part highlighted in blue inside the parentheses) is a separate SQL query that produces a table that is then used in the main query.

Let’s break the example above up and do the subquery first by itself.

Subquery:

```sql
SELECT State, SUM (# of friends)
FROM facebook
GROUP BY state;
```

![SQL Subquery Animation](/assets/images/how-to-teach-people-sql/subqueries/subqueries_1.gif)

This subquery produces a table:

![Result of SQL Subquery](/assets/images/how-to-teach-people-sql/subqueries/subqueries_2.png)

This table from the subquery can then be used by the main query.

Main query:

```sql
SELECT *
FROM (subquery table)
```

![Main Query](/assets/images/how-to-teach-people-sql/subqueries/subqueries_3.png)

Now while this was a somewhat pointless subquery example since you could have just run the subquery to get the same result, it illustrates the point the the outer query is pulling from the created table of the subquery. In this case it is selecting everything from the subquery.

![Full SQL Subquery Animation](/assets/images/how-to-teach-people-sql/subqueries/subqueries_4.gif)

## Subquery placement

Subqueries are most commonly in the FROM statement as a table to query from. However a subquery can also be placed in the WHERE or HAVING statement. When using it in the WHERE or HAVING statement, the subquery has to produce a single value table if you are using comparison operators such as =, <, <=, >, >=, !=.

Single value subquery table:

```sql
SELECT *
FROM facebook
WHERE # of friends = (SELECT MAX(# of connections)
FROM linkedin)
```

![](/assets/images/how-to-teach-people-sql/subqueries/subqueries_5.gif)

Multi-value subquery tables will result in an error since it would try to compare a single field to every row in a column or every cell within table at once.
```sql
SELECT *
FROM facebook
WHERE # of friends = (SELECT # of connections
FROM linkedin)
```

![Full SQL Subquery Animation in WHERE Statement](/assets/images/how-to-teach-people-sql/subqueries/subqueries_6.gif)

Multi-value subquery tables can be used with logical operators such as IN which compares a single field to every row in a column or table.

```sql
SELECT *
FROM facebook
WHERE # of friends IN (SELECT # of connections
FROM linkedin)
```

![SQL Subquery with Logical Operators Animation](/assets/images/how-to-teach-people-sql/subqueries/subqueries_7.gif)

## Common table expression

Subqueries can also be written in a WITH statement instead of in the main query. You write WITH and then what you want to name the resulting table from the subquery and then in parentheses write the subquery. Then you can write a query that uses that subquery by referring to the name given to it. When written in this way they are referred to as a common table expression (CTE). Look at the original example and re-written version using a WITH statement below.

Subquery in the Query:

```sql
SELECT *
FROM (SELECT State, SUM (# of friends)
FROM facebook
GROUP BY state)
```

Subquery in a WITH statement:

```sql
WITH subQ AS (
SELECT State, SUM (# of friends)
FROM facebook
GROUP BY state)
SELECT *
FROM subQ
```

Writing it this way can help make it more clear that you are first creating a table and then referencing it in the outer query.

![SQL Subquery Example with CTE ](/assets/images/how-to-teach-people-sql/subqueries/subqueries_8.gif)