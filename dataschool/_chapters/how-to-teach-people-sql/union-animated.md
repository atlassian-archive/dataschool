---
section: book
title: Union - Animated
number: 80
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/12dp24i8H3q4v_IbGIbJKF-yZirvhtHmEQ6AvC9K91gw/edit?usp=sharing
image: ''
summary: ''
is_featured: false
img_border_on_default: false
published: true

---
Union All

This is the fourth most common type of JOIN in SQL. Union does not attach the data from two tables to a single row. Union stacks two data sets on top of each other into a single table.

```sql
SELECT *
FROM facebook
UNION ALL
SELECT *
FROM linkedin
```

There are a few considerations you must make before performing a UNION. The number and order of columns and for both tables must be the same. The data types of the columns that are being combined must have the same data type. You can specify which column(s) you want to union, and in this example we will select only the Name column from both tables which are both text and so they can be unioned.

```sql
SELECT Name
FROM facebook
UNION ALL
SELECT Name
FROM linkedin
```

![](/assets/images/how-to-teach-people-sql/union/union_1.jpeg)

However if the columns selected do not have the same data type such as trying to Union the Name column of the facebook table and the # of connections column from the linkedin table.

```sql
SELECT Name
FROM facebook
UNION ALL
SELECT # of connections
FROM linkedin
```

This will trigger an error.

We would also get this error even if we have both columns selected from the tables but in different order

```sql
SELECT Name, # of friends
FROM facebook
UNION ALL
SELECT # of connections, Name
FROM linkedin
```

However if we put the columns we are selecting in order, then it will run the same as our first example query since this is the order the columns are in in their respective tables.

```sql
SELECT Name, # of friends
FROM facebook
UNION ALL
SELECT Name, # of connections
FROM linkedin
```

![](/assets/images/how-to-teach-people-sql/union/union_2.gif)

Why use a UNION vs a LEFT JOIN, RIGHT JOIN, INNER JOIN, FULL OUTER JOIN? To help understand, Let’s think about the different questions they are asking.

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
