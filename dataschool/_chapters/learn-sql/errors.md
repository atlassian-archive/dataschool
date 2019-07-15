---
title: Help with Common PostgreSQL Errors
short: Errors
description: When working with SQL you’re going to run into a lot of errors. This
  is a guide to help you with common PostgreSQL database errors.
authors:
- _people/dave.md
meta_title: Common PostgreSQL Errors
is_hidden: true
image: /assets/images/book-covers/learn-sql.png
---
When working with SQL you're going to run into a lot of errors.  Don't stress out about them.  They can look intimidating and seem like you broke something you didn't.  SQL is just very picky and if everything isn't spelled correctly, things are in the wrong order, or you're missing a quotation mark it's going to come back to you with an error.

You simply need to find mistake and fix it!  The error responses are usually fairly helpful, but can sometimes use a bit more description.  Here we're going to show many of the common errors you'll run across and have some practice fixing them.

## ERROR: column does not exist

Sometimes you select a column that doesn't exist in the database. Often this just means you've got a typo somewhere.  The error message should help lead you to where that may be, and will sometimes even give you a helpful HINT!

Can you fix the misspelling in our query to collect two artist *names*?

<sqlbox
  initial="SELECT naXme FROM artists LIMIT 2;"
  answer="SELECT name FROM artists LIMIT 2;"
  autorun="true"
>
</sqlbox>


## ERROR: unterminated quoted identifier

It's common to forget to close all of your parenthesis and quotations.  If that happens you'll see an error that tells you where the string started.  Can you fix the following query by adding the closing quotation?

<sqlbox
  initial="SELECT 'hello world;"
  answer="SELECT 'hello world';"
  autorun="true"
>
</sqlbox>


## ERROR: using the wrong quotations

Strings in SQL use single quotes `'` and column names and aliases need to be wrapped in double quotes `"`.  If you get them mixed up you'll get the following errors.  To fix, just change to the correct quotes!


Columns and Aliases must use double quotes:
<sqlbox
  initial="SELECT name AS 'Artist' FROM artists LIMIT 2;"
  answer='SELECT name AS "Artist" FROM artists LIMIT 2;'
  autorun="true"
>
</sqlbox>

and strings must use single quotes

<sqlbox
  initial='SELECT "I can fix errors";'
  answer="SELECT 'I can fix errors';"
  autorun="true"
  correct_message="Yes you can!"
>
</sqlbox>


## ERROR: syntax error

If you use a command that {{ page.database }} doesn't recognize it will call a syntax error, and inform you of where it found it.  This syntax error is due to a typo:

<sqlbox
  initial="GELECT * FROM artists LIMIT 5;"
  answer="SELECT * FROM artists LIMIT 5;"
  autorun="true"
>
</sqlbox>


## ERROR: must appear in the GROUP BY clause or be used in an aggregate function

If you're doing a GROUP BY, all columns that aren't specified as a GROUP after the GROUP BY must have an [aggregation function](../aggregate/) applied to them.  This is discussed in greater detail in our [GROUP BY tutorial](../group-by/).

The following query has no aggregation on unit_price.  Alter it by applying the SUM aggregation function to the *unit_price*.  It will now the cost of all *tracks* by *genre_id*.  

<sqlbox
  initial="SELECT genre_id, unit_price FROM tracks GROUP BY genre_id;"
  answer="SELECT genre_id, SUM(unit_price) FROM tracks GROUP BY genre_id;"
  autorun="true"
>
</sqlbox>