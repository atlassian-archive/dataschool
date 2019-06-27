---
section: book
title: Views
meta_title: ''
description: ''
number: 
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
- _people/blake.md
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: true
published: false

---
## What is a view?

Views are a way to store a long query for easier access. When a view is created, it stores a query as a keyword, which can be used later instead of typing out the entire query. Long and complicated queries can be stored under a single name which allows them to be used easily.

For example, instead of typing:

\`\`\`sql

SELECT state, vehicletype, year, make, model, color FROM traffic WHERE state=’MD’;

\`\`\`

Every time that details about a vehicle are needed, you can create a view:

\`\`\`sql

CREATE VIEW vehicle_details AS SELECT state, vehicletype, year, make, model, color FROM traffic WHERE state=’MD’;

\`\`\`

Once a view is created, the details about the vehicle can be accessed through the view:

\`\`\`sql

SELECT * FROM vehicle_details;

\`\`\`

![](https://lh5.googleusercontent.com/NvH4bG9r1M-H5ZxI16H6kkEeYslmkIRVa9dhDWR00QkcvUk3NrAYJYqGfJ7V9XH4fMFTI9DY-ftxHOZi8dNYmGt395ZwO6y5wjNI_fCITCP3BBtFL7seCN8bBCe1yxYBEqL-x_-5 =706x267)

As we can see, the two queries return the same result. The only difference between the two queries is the length of the queries in terms of characters.

## Creating a view

Creating a view follows this form:

\`\`\`sql

CREATE VIEW \[view name\] AS \[SELECT statement / Query to store\] \[(optional) WHERE \[condition\]\];

\`\`\`

In the first example, a view was created on the details of a vehicle. For this view, the name vehicle_details was used and the query used to create the view was:

\`\`\`sql

SELECT state, vehicletype, year, make, model, color FROM traffic WHERE state=’MD’;

\`\`\`

The view will store the query above. This means that when the view is used, the query that is stored in the view will be accessed and run. In other words running a standard view is no different from running the query it was created on in terms of execution. The only difference is the length of the query that needs to be written by the user. As such, creating views is mainly for simplifying the writing of queries, not the running of queries.

They can also be used to allow users or groups access to only specific sections of a table or database without allowing access to the entire thing. Limiting columns in a view will produce some performance improvements on SELECT * queries since the amount of table being pulled is less. However this is not justification for creating views of every column combination so that SELECT * can always be used. In fact it is a better practice to discourage the use of SELECT * and have people query specifically for the columns they care about because then the least amount of data is being pulled on every query.

## Using Views

Views can be used in a variety of ways and with several optional parameters:

### TEMP/TEMPORARY

Adding TEMP or TEMPORARY to the creation of a view creates a view that is automatically dropped at the end of the user’s session.

Example: \`\`\`sql CREATE TEMP VIEW myView AS SELECT serial_id FROM traffic; \`\`\`

### WITH CHECK OPTION

Adding ‘WITH CHECK OPTION’ to the end of a CREATE VIEW statement ensures that, if the view is updated, the update does not conflict with the view. For example, if a column is created on a view where dlstate must be ‘MD’, then the user cannot INSERT a row into the view where the dlstate is ‘VA.’

It will return an error \`\`\`ERROR: new row violates check option for view \[name of view\]\`\`\`

Example: ![](https://lh5.googleusercontent.com/LaAXIfdvQBnqJ5l5iAqGSoP8-Ma5w0DFgOUClgG2gqWPAT4hyLFN-7pN3rDIbkqFS1Do80dov1AH7Y3rRg1xD32RXeGkj9MqvyFMh58jwvrocAE2FO8Wr7Wh6Mm7yXscPxw4YN43 =624x99)

### LOCAL and CASCADED

Adding LOCAL or CASCADED to CHECK OPTION will designate the scope for the CHECK OPTION. If LOCAL is added, the CHECK only applies to that specific view. CASCADED on the other hand, applies the CHECK to all views that the current view is dependant on.

Example: \`\`\`sql CREATE VIEW myView AS SELECT serial_id FROM traffic WITH LOCAL CHECK OPTION; \`\`\`

### VIEW definition

To see the definition (underlying query) of a view, you can use:

\`\`\`sql

\\d+ \[view name\]

\`\`\`![](https://lh4.googleusercontent.com/Ilp-4GIwdJ6N6G-okkB3qFAnekWyYxxWp-zG6nA4VC4DGgPqZ2IXtsxczrGiWegyvlNucUd3N5kZ98d-GiBWqbf2Kh4RYJkQI74tCNA9g_N7-pNDQ470uQvh--mnv8Ew_v4Q2o28 =653x236)

## Updating Views

Views can be updated by using the following syntax:

\`\`\`sql

UPDATE \[Name of View\]

SET \[Column Name\]=\[Value to set to\], \[Column Name\]=\[Value to set to\], etc

WHERE \[condition\];

\`\`\`

Views can only be updated if they follow these criteria:

* The view must not be created with an aggregate as a column
* The view must not contain: DISTINCT, GROUP BY, or HAVING in its definition
* The view must be on only one table
* If the view is built on another view, that view must the criteria above

## Materialized Views

Materialized views are similar to standard views, however they store the result of the query in a physical table taking up memory in your database. This means that a query run on a materialized view will be faster than standard view because the underlying query does not need to be rerun each time the view is called. The query is run on the new Materialized view:

![](https://lh3.googleusercontent.com/PMyC4TKKe-z30RcSWjOuFqHo2_giSlzwy4_ZC4F6QAPBXZi-DE-1f3uya9LZNRAAlZ0wI4bqY3OfEMra0hdBL70tDVJZ_NbtNquKngE_qboGZMfwwajMSP8kF-wmXl64XjVNHNV0 =811x220)

This query plan shows the materialized view being used as a table and being scanned. It also shows a significant difference in speed between the two methods.

Materialized views are generally most effective on computation-intensive views. Materializing a view has several benefits but also several drawbacks.

Pros:

* Faster - Aggregations and Joins are run beforehand
* Can be Indexed for even greater speed
* Does not update after each run: saves server’s time by preventing unnecessary refreshing

Cons:

* Takes more memory
* Does not update after each run: Must be refreshed so data may not be completely up to date
* Must be refreshed one of two ways:
  * Manually:
    * Completely Recalculate entire view (possibly expensive)
    * Supports all SQL
  * Incrementally:
    * Does not support some functions and outer joins
    * Only update specific rows
    * Note: Not all SQL types support this. (e.g. can be done in [Oracle](https://docs.oracle.com/database/121/DWHSG/refresh.htm) and [DBT](https://docs.getdbt.com/docs/configuring-incremental-models), but not PostgreSQL.)

To create a materialized view, add the MATERIALIZED keyword:

\`\`\`sql CREATE MATERIALIZED VIEW myView AS \[Query\]; \`\`\`

To refresh the view manually use the following command:

\`\`\`sql REFRESH MATERIALIZED VIEW \[view name\] \`\`\`

## Summary

* Standard Views
  * Store a query that can be referenced by the name of the view
  * Mostly for ease of use, but can also be used for security/permissions purposes
  * Has Options:
    * TEMP/TEMPORARY
    * WITH CHECK OPTION
    * CASCADED/LOCAL
* Materialized Views
  * Like standard views but store results in a table.
  * Can be indexed
  * Must be refreshed
    * Manual Full refresh: Refreshes all values
    * Incremental Refresh: Only refreshes modified values
  * Requires more memory

### References

[http://www.postgresqltutorial.com/postgresql-views-with-check-option/](http://www.postgresqltutorial.com/postgresql-views-with-check-option/ "http://www.postgresqltutorial.com/postgresql-views-with-check-option/")

[https://www.percona.com/blog/2011/03/23/using-flexviews-part-one-introduction-to-materialized-views/](https://www.percona.com/blog/2011/03/23/using-flexviews-part-one-introduction-to-materialized-views/ "https://www.percona.com/blog/2011/03/23/using-flexviews-part-one-introduction-to-materialized-views/")

[https://www.tutorialspoint.com/sql/sql-using-views.htm](https://www.tutorialspoint.com/sql/sql-using-views.htm "https://www.tutorialspoint.com/sql/sql-using-views.htm")

[https://www.postgresql.org/docs/9.2/sql-createview.html](https://www.postgresql.org/docs/9.2/sql-createview.html "https://www.postgresql.org/docs/9.2/sql-createview.html")