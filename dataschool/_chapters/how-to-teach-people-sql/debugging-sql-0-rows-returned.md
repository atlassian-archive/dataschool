---
title: 'Debugging SQL: 0 Rows Returned'
meta_title: 
section: book
number: 110
authors:
- _people/matt.md
reviewers: 
feedback_doc_url: https://docs.google.com/document/d/1G55ZE0TMKLPoTd8TWh-t-3BoFDd9HADBjbzVoWHYHMA/edit?usp=sharing
image: "/assets/images/how-to-teach-people-sql/debugging-0-rows/noRows_1.gif"
description: Learn the most common reasons you will get 0 rows returned from your
  SQL query.
is_featured: false
img_border_on_default: false

---
Getting an error in SQL can be frustrating. However getting no errors and no data returned by your query can be even more frustrating. In this tutorial we will explore the most common reasons your query will return 0 rows of data.

## JOINing on the wrong column

The most common issue is JOINing on the wrong column. In the example below it is JOINing on the name column in both tables, however in the pets table the column that would have corresponded to the facebook friend table would have been owner.

![](/assets/images/how-to-teach-people-sql/debugging-0-rows/noRows_1.gif)

Sometimes you have picked the right column but there are no matches in the corresponding data. In this example the names of the owner have been changed to show this scenario.

![](/assets/images/how-to-teach-people-sql/debugging-0-rows/noRows_2.gif)

Another thing to watch out for which will return an error is if the datatype of the columns being joined do not match. Sometimes columns with numbers in it are saved as text. You will have to CAST that column as a numeric data type such as INT or FLOAT. You could also convert the numeric column to a text data type such as VARCHAR.

It is a best practice to inspect the tables you will be joining independently to try and find these issues. Do a SELECT * from each of the tables (with a LIMIT 10) to review the data and data types in the columns you are trying to JOIN on.

## Over Filtering

The second most common issue that produces 0 rows returned is that the query is filtering out too much data in the WHERE or HAVING statement.

![](/assets/images/how-to-teach-people-sql/debugging-0-rows/noRows_3.gif)

To see if the WHERE or HAVING clause is too restrictive simply remove it from the query to see if any rows are returned. If rows are returned the problem is likely in your WHERE or HAVING clause.

## How to debug an SQL query

Whenever you get a result you do not expect in SQL take a second and break down the query into smaller bits. Remove or comment clauses out one by one to find where the query stopped making sense. To comment out a part of you SQL query review the documentation for the syntax. In PostgreSQL all you do is add two dashes — in front of a line of SQL

```sql
SELECT *
FROM facebook
WHERE # of Friends > 1000
```

This concept of breaking queries into small pieces also works when you are initially creating the query. Start with a query that only contains SELECT, FROM, and LIMIT. Then layer on each additional SQL clause 1 at a time and run it to see if there are any issues. While this practice is slow you are much less likely to run into an issue in your query that you don’t know the cause of.

## Summary

* Check if you are joining on the wrong column
* Check if you are over filtering the data
* Use a double dash -- to comment out parts of the query to see what part is causing the issue