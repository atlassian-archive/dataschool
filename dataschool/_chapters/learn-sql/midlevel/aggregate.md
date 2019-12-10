---
title: Aggregate Functions
short: Aggregate
meta_title: SQL - Aggregate Functions
description: Learn about the COUNT function in SQL. The COUNT command is used to returns
  the count of how many rows there are. This interactive SQL tutorial will teach you
  how to COUNT.
number: 70
section: Mid-Level SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
image: "/assets/images/book-covers/learn-sql.png"
is_featured: false
is_under_construction: false

---
Fetching the raw data is nice and all, but now we're going to start actually doing some aggregations and transformations to it!  The first and probably most commonly used aggregation function we are going to learn is COUNT.  The COUNT function takes whatever you give it and returns the count of how many there are.  

The following SQL will count how many albums are in our database. Put another way, we're going to query for a count of the number of rows are in the *ablums* table.  Play around yourself and find how many are in the *artists* and *tracks* tables as well.

<sqlbox
  initial='SELECT COUNT(*) FROM albums;'
  answer='SELECT COUNT(*) FROM tracks;'
  correct_message='Great.  Notice that there are more tracks than there are albums and artists.  That makes sense.'
  hint="get a count of the tracks table instead of albums"
></sqlbox>

## COUNT of specific columns

As the COUNT goes over the data results it only increments its tally if the data is not NULL (NULL means empty in SQL jargon).  Doing a `COUNT(*)` will always return the full count of the number of rows that exist in the table as the splat (`*`) represents each column and there's no way that all the columns in the row would be NULL.  If you specify a specific column however, you're returning the COUNT of the number of rows where that column is not NULL.  So doing a count of the composer column:

<sqlbox
 initial="SELECT COUNT(composer) FROM tracks;"
 autorun="true"
 ></sqlbox>

 Will be less than the COUNT(*)

<sqlbox
  initial="SELECT COUNT(*) FROM tracks;"
  autorun="true"
></sqlbox>

because the composer column has some NULL values (aka. it's empty sometimes).

### COUNT DISTINCT

A commonly used clause with the count function is DISTINCT.  The DISTINCT clause changes the count to only tally the number of unique values in the data.  Above we fetched how many *tracks* had composers listed.  If we actually wanted to see how many unique composers were in our *tracks* table we could use the COUNT with the DISTINCT clause as shown here:

<sqlbox
 initial='SELECT COUNT(DISTINCT composer) FROM tracks;'
 autorun="true"
 answer ="SELECT COUNT(DISTINCT genre_id) FROM tracks;"
 correct_message="Yes!  Wow, there are a lot of musical genres."
 ></sqlbox>

 Can you modify the query above to find how many different *genre_id*s are the *tracks* table?

## Aliases

A quick aside here:  Notice that the column headers on the above datasets weren't all that clear.  SQL does a okay job of finding a name for what you're fetching but often, especially as we start making more complex functions, you'll want to use your own alias for the data.  You can do so with the AS key word following your selections:

<sqlbox
  initial='SELECT COUNT(*) AS "# of Tracks", COUNT(composer) AS "Non-Empty Composers", COUNT(*) - COUNT(composer) AS "Empty/Null Composers" FROM tracks;'
></sqlbox>

Be sure to use double quotes (") around your Aliases as double quotes are used for column titles.

## Functions

The following is a list of the most commonly used functions in SQL.  They work similar to COUNT but perform different calculations on the data.

| Function       | Description                                                   |
|----------------|---------------------------------------------------------------|
| MAX            | returns the largest (maximum) number in a sets                |
| MIN            | described                                                     |
| COUNT          | returns a count of the # of values in a set                   |
| COUNT DISTINCT | returns a count of the # of unique (distinct) values in a set |
| EVERY          | returns true if all data inside is true (same as bool_and)    |
| AVG            | returns the average (mean) of the set of numbers              |
| SUM            | returns the sum of all the values in the set                  |

The following example gives the range and average prices of the *tracks* using the *MIN*, *MAX* and *AVG* functions.

<sqlbox
  initial="SELECT MAX(unit_price), MIN(unit_price), AVG(unit_price) FROM tracks;"
  answer="SELECT SUM(unit_price) FROM tracks;"
  hint="Take the SUM of the unit_price.  Return just one column."
  correct_message="This makes Spotify seem like a bargain."
  autorun="true"
  ></sqlbox>

Can you modify the above query to return how much it would cost to buy one of every track in the database?

We only covered the most commonly used aggregation functions here.  If you'd like to see more checkout the full list of [{{ page.database }} Functions](https://www.postgresql.org/docs/9.0/static/functions.html)
