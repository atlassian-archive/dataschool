---
title: ORDER BY
short: ORDER BY
meta_title: SQL - ORDER BY
description: Learn how to use the SQL ORDER BY command in PostgreSQL. The ORDER BY
  command is used to sort your result data in ascending or descending order. Follow
  the interactive SQL tutorial to use cases and best practices for the ORDER BY command.
number: 40
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
By default results are returned in the order that they're stored in the database.  But sometimes you'll want to sort them differently.  You can do that with the "ORDER BY" command at the end of your queries as shown in the expanded version of our SQL template here

```sql
SELECT [stuff you want to select] FROM [the table that it is in] ORDER BY [column you want to order by];
```

For example, the following query shows all the tracks ordered by the *album_id*.  Try sorting it by other columns.   Can you modify it to be sorted by their *name*?

<sqlbox
  initial='SELECT * FROM tracks ORDER BY album_id;'
  answer='SELECT * FROM tracks ORDER BY name;'
  correct_message='Correct!  You can see that non-characters like quotes and numbers are considered to be before the letter A.  Also note, no good songs start with a symbol or a number.  Keep that in mind for your music career.'
></sqlbox>

You can list multiple things to ORDER BY, which is useful in the case where there are a lot of duplicate rows.  In tracks for instance we can order all of the data by the *composer* and then by how long the song is (*milliseconds*) by listing both of those sorting columns.  

<sqlbox
  initial='SELECT * FROM tracks ORDER BY composer, milliseconds;'
  answer='SELECT * FROM tracks ORDER BY milliseconds, composer;'
  correct_message="Notice that the data is sorted by milliseconds first as it's now listed first."
></sqlbox>

Try reversing the order of the colums above (`ORDER BY milliseconds, composer`) and you'll see what happens with the reverse prioritization of first sorting by milliseconds.

## ASCending and DESCending Order Direction

By default things are sorted by ascending order.  You can choose to reverse that order by specifying DESC, for descending.  Similarly if you'd like to specify that you want ASCending you use ASC.

<sqlbox
 initial='SELECT * FROM tracks ORDER BY name DESC;'
></sqlbox>

To test your skills, try getting all the *tracks* in order of most expensive to least expensive:

<sqlbox
 answer='SELECT * FROM tracks ORDER BY unit_price DESC;'
 correct_answer='Correct!  This table explains why I use spotify.'
></sqlbox>
