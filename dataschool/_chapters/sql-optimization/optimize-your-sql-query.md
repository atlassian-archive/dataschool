---
title: Optimize your SQL Query
meta_title: Optimize your SQL Query
section: Query Optimizations
number: 3
authors:
- _people/rohan-joseph.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1nxcE_KYu7WiNerM2dyYE7Q0uiUMCebdHjoV12KtrRB4/edit?usp=sharing
image: "/assets/images/book-covers/sql-optimization.png"
description: Learn quick tips for how to optimize your SQL queries
is_featured: false
img_border_on_default: false
is_under_construction: false

---
## 8 tips for faster querying

1. **Define SELECT fields instead of SELECT * :** If a table has many fields and rows, selecting all the columns (by using SELECT *) over-utilizes the database resources in querying a lot of unnecessary data. Defining fields in the SELECT statement will point the database to querying only the required data to solve the business problem.
2. **Avoid SELECT DISTINCT if possible:** SELECT DISTINCT works by grouping all fields in the query to create distinct results. To accomplish this goal however, a large amount of processing power is required.
3. **Use WHERE instead of HAVING to define Filters:** As per the SQL order of operations, HAVING statements are calculated after WHERE statements. If we need to filter a query based on conditions, a WHERE statement is more efficient.
4. **Use WILDCARDS at the end of the phrase:** When a leading wildcard is used, especially in combination with an ending wildcard, the database is tasked with searching all records for a match anywhere within the selected field.  
   Consider this query to pull cities beginning with 'Char':

   ```sql
   SELECT City FROM Customers  
   WHERE City LIKE '%Char%'  
   A more efficient query would be:  
   SELECT City FROM Customers  
   WHERE City LIKE 'Char%'
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

When querying a production database, optimization is key. An inefficient query may pose a burden on the production database's resources, and cause slow performance or loss of service for other users if the query contains errors.

When optimizing your database server, you need to tune the performance of individual queries. This is even more important than tuning other aspects of your server installation that affect performance, such as hardware and software configurations. Even if your database server runs on the most powerful hardware available, its performance can be negatively affected by a handful of misbehaving queries.

## Resources

1. [https://sqlbolt.com/lesson/select_queries_order_of_execution](https://sqlbolt.com/lesson/select_queries_order_of_execution "https://sqlbolt.com/lesson/select_queries_order_of_execution")
2. [https://www.sisense.com/blog/8-ways-fine-tune-sql-queries-production-databases/](https://www.sisense.com/blog/8-ways-fine-tune-sql-queries-production-databases/)
