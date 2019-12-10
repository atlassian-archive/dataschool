---
title: LIMIT and OFFSET
short: LIMIT
meta_title: SQL - LIMIT and OFFSET
description: Learn how to LIMIT the number of results that are returned you can simply
  use the LIMIT SQL command at the end of the query to specify. You can use the LIMIT
  command on your PostgreSQL database. Read the tutorial to learn more.
number: 50
section: Basic SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
is_featured: false
image: "/assets/images/book-covers/learn-sql.png"
topics:
- _chapters/dictionary/sql.md
is_under_construction: false

---
If want to LIMIT the number of results that are returned you can simply use the LIMIT command with a number of rows to LIMIT by.

```sql
SELECT * FROM artists LIMIT [Number to Limit By];
```

For example

```sql
SELECT * FROM artists LIMIT 3;
```

This ensures only the first 3 results are returned. Besides returning less results, LIMITing queries can greatly reduce the time they take to run and make your database administrator a lot less angry with you.  

Give it a try by fetching yourself the first _6_ rows of the _artists_ table:

<sqlbox initial="SELECT * FROM artists LIMIT 6;"

answer='SELECT * FROM artists LIMIT 6'
correct_message="Great. Now you can query much less data."

> </sqlbox>

## OFFSET

You can also specify an OFFSET from where to start returning data.

```sql
SELECT * FROM artists LIMIT 5 OFFSET [Number of rows to skip];
```

Say you want to get 5 artists, but not the first five. You want to get rows 3 through 8.  You'll want to add an OFFSET of 2 to skip the first two rows:

```sql
SELECT * FROM artists LIMIT 5 OFFSET 2;
```

Here's a challenge for you.  Write a query to fetch the Artists in rows 10 through 20:

<sqlbox
answer='SELECT * FROM artists LIMIT 11 OFFSET 9;'
correct_message="Well done.  You're getting the hang of this!"
hint="You want to skip the first 9 and then only return 11 (10 through 20) results."
show_incorrect="true"

> </sqlbox>
