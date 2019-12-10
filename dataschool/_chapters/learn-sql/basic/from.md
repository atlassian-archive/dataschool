---
title: FROM
short: FROM
meta_title: SQL - FROM
description: This interactive SQL tutorial will explain the FROM command with syntax
  and use cases on how to interact with your data in the PostgreSQL database. Learn
  how to use the SQL FROM command by following the steps in this interactive tutorial.
number: 30
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
So now you know how to SELECT data but not yet how to choose where to get that data FROM.  Let's get into the real stuff and SELECT data FROM a specific table.  

In our example database we have a table called *albums*, which holds info on some music albums.  It has three columns, id, title, artist_id.  Here's what it looks like in Excel:

![album table for sql tutorial](/assets/images/learn-sql/basic/from/sql-tutorial-albumtable.png)

To get data that's in this table we need to specify what columns we want to SELECT and FROM where we want to select it.  So let's try to get a list of all the album titles we've got stored.  We can use the following template to do so:

```sql
SELECT [stuff you want to select] FROM [the table that it is in];
```
Let's start with a simple one and query for everything (all of it!) from the *albums* table.

<sqlbox

  initial='SELECT id, title, artist_id FROM albums;'
></sqlbox>

Look at all that data!  Notice at the bottom of the table we've paginated it for you so it doesn't take up the whole page.  All of the columns and rows in the table *albums* have been fetched.  You can see the table above looks similar to what the data looks like in the Excel image above.

But of course we don't have to query for all of the columns if we don't want. If we wanted to just get all the album *title*s and *id*s (we didn't care about *artist_id*s) we can query for just those columns.  

<sqlbox
  initial='SELECT title, id FROM albums;'
  answer='SELECT id, title FROM albums;'
  hint="SELECT id, title ..."
  correct_message="Correct!  Now you're ordering columns!"
></sqlbox>

Notice that the columns will come back in the order that you list them in.  Try reversing the column order in the above query by selecting *id* first and then *title*.

## \* Splat

Sometimes it's annoying to have to list out all the columns that you want to fetch.  If you simply want all the columns available SQL has the `*` shortcut.  The `*` is called a "splat" and is a handy, frequently used shortcut to get all columns.

<sqlbox
  initial='SELECT * FROM albums;'
></sqlbox>

There are a lot of other Tables in our example database like *artists* and *tracks*.  See if you can use the SELECT * FROM [tablename] structure to explore some of those tables.

<sqlbox
  answer='SELECT * FROM tracks;'
  correct_message="There are a lot more columns in the Track table!"
  hint="Try SELECT * FROM [tablename];"
></sqlbox>

Now it's getting interesting right?  Right now though we're getting a list of all the results in the table back.  We need to learn how to filter, group, manipulate and limit these results.
