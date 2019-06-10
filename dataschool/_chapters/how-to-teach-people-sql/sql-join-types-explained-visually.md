---
section: book
title: SQL Join Types Explained Visually
meta_title:
description: Data within a database exists across multiple tables, JOINs allow you to combine datasets into new tables for analysis.
number: 40
authors:
- author: _people/tim.md
reviewers:
feedback_doc_url: https://docs.google.com/document/d/10bjLM1eP66fzkVjqiqNzfl0DAev1wqB1W-jbyRddiWg/edit?usp=sharing
image: /assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_7.png
is_featured: true
img_border_on_default: false
published: true

---
Merging two data sets using SQL or SQL tools can be accomplished through JOINS. A JOIN is a SQL instruction in the FROM clause of your query that is used to identify the tables you are querying and how they should be combined.

## Primary and Foreign Keys

Typically in a [relational database](https://en.wikipedia.org/wiki/Relational_database), data is organized into various tables made of attributes (columns) and [records](https://en.wikipedia.org/wiki/Relational_database) (rows). In each table there exist a column that is the _primary key_ which is a column where each entry uniquely represents a single row in that table. This is usually the ID (short for identifier) column. A column in a table that establishes an association with another table’s primary key via shared values is called a _foreign key_. Foreign keys are also typically titled IDs but prepended with the name of the referenced table.

This concept is applied when combining two or more tables together using a JOIN. In the example below, we have two tables: User Table (Table 1) and Event Table (Table 2). We want to join the two tables together to get user data alongside their events data. A real-life example of this would be if you had data from a CRM tool like Salesforce containing users who are paid customers (Table 1) and an events analytics tool like Mixpanel that tracks all the users that have performed an action in your product (Table 2).

![Example tables to JOIN](/assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_1.png)

Notice that between the two tables there is a common column (dimension) highlighted in green, User ID. In the User Table, the ID column is the user ID and it’s the primary key for that table whereas, in the Event Table, the User_ID column is the foreign key since that column refers to the ID column in the Users table. We can use this relationship to join the two tables together to get the user and events information in one table.

## Meet the joins

There are three common ways you can join any two or more tables together we’ll talk about first: _Outer Join_, _Inner Join_, and _Left Join_. Using the example _User_ and _Event_ tables above, let’s look at some examples of joins…

### Outer Join

Let’s say you want to have a table that contains all your user and event table data together.

You would use an **Outer Join** to join the tables together. An outer join combines the columns from all tables on one or more common dimension when possible, and includes all data from all tables.

![Outer JOIN](/assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_2.png)

For a more detailed look at the [Outer Join click here.](https://dataschool.com/learn/common-sql-join-types-full-outer-join)

### Inner Join

What if you want to have a table that contains only users that have done an action?

You would use an **Inner Join** to join the tables together. An inner join combines the columns on a common dimension (the first N columns) when possible, and only includes data for the columns that share the same values in the common N column(s). In the example, the User ID would be the common dimension used for the inner join.

![Inner JOIN](/assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_3.png)

For a more detailed look at the [Inner Join click here.](https://dataschool.com/learn/common-sql-join-types-inner-join)

### Left Join

Now, what if you want to have a table that contains all the users’ data and only actions that those users have done? Actions performed by other users not in the users table should not be included?

You would use a **Left Join** to join the tables together. A left join combines the columns on a common dimension (the first N columns) when possible, returning all rows from the first table with the matching rows in the consecutive tables. The result is NULL in the consecutive tables when there is no match. In this case, we would make the User Table the first (left table) to use for the left join.

![Left JOIN](/assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_4.png)

For a more Detailed look at the [Left Join click here.](https://dataschool.com/learn/common-sql-join-types-left-right-join)

### Union and Cross Join

In addition to these common join types, there are some methods which will result in additional rows in your output table as well as more columns. Two of these join types are called _Union_ and _Cross Join_. These join types probably wouldn’t be as appropriate for our example tables above, but for the sake of this article we can still use them to see how these joins function. A **Union Join** will stack tables on top of each other resulting in new rows.

![UNION](/assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_5.png)

For a more detailed look at the [Union Join click here.](https://dataschool.com/learn/common-sql-join-types-union)

A good use case for this would be if you’re looking to combine two tables by appending them rather than joining them. A **Cross Join** would result in a table with all possible combinations of your tables’ rows together. This can result in enormous tables and should be used with caution.

![Cross JOIN](/assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_6.png)

For a more detailed look at the [Cross Join click here.](https://dataschool.com/learn/common-sql-join-types-cross-join)

Cross Joins will likely only be used when your tables contain single values that you want to join together without a common dimension.

## Summary cheat sheet

![SQL JOINs](/assets/images/how-to-teach-people-sql/sqlJoins/sqlJoins_7.png)
