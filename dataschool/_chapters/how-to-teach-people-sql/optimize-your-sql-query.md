---
title: Optimize your SQL Query
meta_title:
section: book
number: 140
authors:
- author: _people/rohan-joseph.md
reviewers:
- reviewer: _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1nxcE_KYu7WiNerM2dyYE7Q0uiUMCebdHjoV12KtrRB4/edit?usp=sharing
image:
description: Learn quick tips for how to optimize your SQL queries
is_featured: false
img_border_on_default: false
published: true

---
## Order of a SQL query

This tutorial will provide some tips and tricks for anyone working with SQL databases who want to increase the efficiency of their queries. The way to make a query run faster is to reduce the number of calculations that the software must perform. To do this, first you’ll need some understanding of how SQL actually executes a query. Let’s take a look at a sample SQL query :

```sql
SELECT DISTINCT column, AGGREGATE(column)
FROM table1
JOIN table2
ON table1.column = table2.column
WHERE constraint_expression
GROUP BY column
HAVING constraint_expression
ORDER BY column ASC/DESC
LIMIT count;
```

Each part of the query is executed sequentially, so it’s important to understand the order of execution :

1. **FROM and JOIN:** The FROM clause, and subsequent JOINs are first executed to determine the total working set of data that is being queried
2. **WHERE:** Once we have the total working set of data, the WHERE constraints are applied to the individual rows, and rows that do not satisfy the constraint are discarded.
3. **GROUP BY:** The remaining rows after the WHERE constraints are applied are then grouped based on common values in the column specified in the GROUP BY clause.
4. **HAVING:** If the query has a GROUP BY clause, then the constraints in the HAVING clause are applied to the grouped rows, and the grouped rows that don’t satisfy the constraint are discarded.
5. **SELECT:** Any expressions in the SELECT part of the query are finally computed.
6. **DISTINCT:** Of the remaining rows, rows with duplicate values in the column marked as DISTINCT will be discarded.
7. **ORDER BY:** If an order is specified by the ORDER BY clause, the rows are then sorted by the specified data in either ascending or descending order.
8. **LIMIT:** Finally, the rows that fall outside the range specified by the LIMIT are discarded, leaving the final set of rows to be returned from the query.

Now that we understand the basic structure and order of a SQL query, we can take a look at the tips to optimize them for faster processing.

## 8 tips for faster querying

1. **Define SELECT fields instead of SELECT \* :** If a table has many fields and rows, selecting all the columns (by using SELECT \*) over-utilizes the database resources in querying a lot of unnecessary data. Defining fields in the SELECT statement will point the database to querying only the required data to solve the business problem.
2. **Avoid SELECT DISTINCT if possible:** SELECT DISTINCT works by grouping all fields in the query to create distinct results. To accomplish this goal however, a large amount of processing power is required.
3. **Use WHERE instead of HAVING to define Filters:** As per the SQL order of operations, HAVING statements are calculated after WHERE statements. If we need to filter a query based on conditions, a WHERE statement is more efficient.
4. **Use WILDCARDS at the end of the phrase:** When a leading wildcard is used, especially in combination with an ending wildcard, the database is tasked with searching all records for a match anywhere within the selected field.  
     Consider this query to pull cities beginning with ‘Char’:
     ```sql
     SELECT City FROM Customers  
     WHERE City LIKE ‘%Char%’  
     A more efficient query would be:  
     SELECT City FROM Customers  
     WHERE City LIKE ‘Char%’
     ```
5. **Use LIMIT to sample query results:** Before running a query for the first time, ensure the results will be desirable and meaningful by using a LIMIT statement.
6. **Run Queries During Off-Peak Times:** Heavier queries which take a lot of database load should run when concurrent users are at their lowest number, which is typically during the middle of the night.
7. **Replace SUBQUERIES with JOIN:** Although subqueries are useful, they often can be replaced by a join, which is definitely faster to execute. Consider the example below :  
    ```sql
    SELECT a.id,  
    (SELECT MAX(created)  
    FROM posts  
    WHERE author_id = a.id)  
    AS latest_post FROM authors a  
    To avoid the sub-query, it can be rewritten with a join as :  
    SELECT a.id, MAX(p.created) AS latest_post  
    FROM authors a  
    INNER JOIN posts p  
    ON (a.id = p.author_id)  
    GROUP BY a.id
    ```
8. **Index your tables properly:** Proper indexing can make a slow database perform better. Conversely, improper indexing can make a high-performing database run poorly. The difference depends on how you structure the indexes. You should create an index on a column in any of the following situations:
    * The column is queried frequently
    * Foreign key column(s) that reference other tables
    * A unique key exists on the column(s)

## Conclusion

When querying a production database, optimization is key. An inefficient query may pose a burden on the production database’s resources, and cause slow performance or loss of service for other users if the query contains errors.

When optimizing your database server, you need to tune the performance of individual queries. This is even more important than tuning other aspects of your server installation that affect performance, such as hardware and software configurations. Even if your database server runs on the most powerful hardware available, its performance can be negatively affected by a handful of misbehaving queries.

## Resources

1. [https://sqlbolt.com/lesson/select_queries_order_of_execution](https://sqlbolt.com/lesson/select_queries_order_of_execution "https://sqlbolt.com/lesson/select_queries_order_of_execution")
2. [https://www.sisense.com/blog/8-ways-fine-tune-sql-queries-production-databases/](https://sqlbolt.com/lesson/select_queries_order_of_execution "https://sqlbolt.com/lesson/select_queries_order_of_execution")
