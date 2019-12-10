---
section: Query Optimizations
title: Order of a SQL Query
meta_title: Learn the Order of a SQL Query
description: Learn the order of the SQL query to understand where you can optimize
  a query. Learn to prioritize FROM, JOIN, and WHERE.
number: 2
authors:
- _people/rohan-joseph.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: /assets/images/book-covers/sql-optimization.png
is_featured: false
img_border_on_default: false
is_under_construction: false

---
The way to make a query run faster is to reduce the number of calculations that the software must perform. To do this, you'll need some understanding of how SQL executes a query.

Let's take a look at a sample SQL query :

    SELECT DISTINCT column, AGGREGATE(column)
    FROM table1
    JOIN table2
    ON table1.column = table2.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count;

Each part of the query is executed sequentially, so it's important to understand the order of execution :

1. **FROM and JOIN:** The FROM clause, and subsequent JOINs are first executed to determine the total working set of data that is being queried
2. **WHERE:** Once we have the total working set of data, the WHERE constraints are applied to the individual rows, and rows that do not satisfy the constraint are discarded.
3. **GROUP BY:** The remaining rows after the WHERE constraints are applied are then grouped based on common values in the column specified in the GROUP BY clause.
4. **HAVING:** If the query has a GROUP BY clause, then the constraints in the HAVING clause are applied to the grouped rows, and the grouped rows that don't satisfy the constraint are discarded.
5. **SELECT:** Any expressions in the SELECT part of the query are finally computed.
6. **DISTINCT:** Of the remaining rows, rows with duplicate values in the column marked as DISTINCT will be discarded.
7. **ORDER BY:** If an order is specified by the ORDER BY clause, the rows are then sorted by the specified data in either ascending or descending order.
8. **LIMIT:** Finally, the rows that fall outside the range specified by the LIMIT are discarded, leaving the final set of rows to be returned from the query.

Now that we understand the basic structure and order of a SQL query, we can take a look at the tips to optimize them for faster processing in the next chapter.

## Resources

1. [https://sqlbolt.com/lesson/select_queries_order_of_execution](https://sqlbolt.com/lesson/select_queries_order_of_execution "https://sqlbolt.com/lesson/select_queries_order_of_execution")
2. [https://www.sisense.com/blog/8-ways-fine-tune-sql-queries-production-databases/](https://www.sisense.com/blog/8-ways-fine-tune-sql-queries-production-databases/ "https://www.sisense.com/blog/8-ways-fine-tune-sql-queries-production-databases/")
