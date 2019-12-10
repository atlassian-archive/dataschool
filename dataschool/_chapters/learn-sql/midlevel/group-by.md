---
title: GROUP BY
short: GROUP BY
meta_title: SQL - GROUP BY
description: The GROUP BY SQL statement is used to aggregate functions like COUNT,
  MAX, MIN, SUM and AVG. In this interactive SQL tutorial, learn to use the GROUP
  BY .
number: 80
section: Mid-Level SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
image: "/assets/images/book-covers/learn-sql.png"
is_featured: false
is_under_construction: false

---
So far our aggregation functions have run across all of the data, but it's often useful to split the aggregation into groups.

Let's say for example that we wanted to get not a count of all of the tracks, but how many tracks were in each genre.  One way of doing this would be to write a separate query for each genre like this:

```sql
SELECT COUNT(*) FROM tracks WHERE genre_id = 1;
SELECT COUNT(*) FROM tracks WHERE genre_id = 2;
SELECT COUNT(*) FROM tracks WHERE genre_id = 3;
.
.
.
SELECT COUNT(*) FROM tracks WHERE genre_id = n;
```

But we'd have to know what all the genre_id's were and use some other tool to combine all of the results back together.  Not ideal.

Luckily, we have the GROUP BY clause which makes this a whole lot simpler.  The GROUP BY clause tells the database how to group a result set, so we can more simply write the queries above as:

<sqlbox
  initial="SELECT genre_id, COUNT(*) FROM tracks GROUP BY genre_id;"
  autorun="true"
  ></sqlbox>

How cool is that?!  Can you get a count of all tracks by composer?

<sqlbox
  answer="SELECT composer, COUNT(*) FROM tracks GROUP BY composer;"
  hint="SELECT and GROUP BY the composer instead of genre_id"
  ></sqlbox>

It's useful here to order the results of this query by the count, so we can see which composers have produced the largest number of tracks (at least in our database).

<sqlbox
  initial='SELECT composer, COUNT(*) as "count" FROM tracks GROUP BY composer ORDER BY "count" DESC;'
  answer='SELECT composer, COUNT(*) as "count" FROM tracks WHERE composer IS NOT NULL GROUP BY composer ORDER BY "count" DESC;'
  hint="add IS NOT NULL"
  ></sqlbox>

  Above, the NULL composer is being counted as having the most tracks. That's just noise. Using what we just [learned abour NULL operators](/learn-sql/operators/), can you modify the query to filter out the NULL composers?

[comment]: <> I really don't have good example data for this... would be nice if they already knew joins or i had a denormalized table.

## Multiple GROUP BYs

You can group by more than one thing, and it simply creates a second set of groups inside the first set.  Try running the following example which groups first by genre and then by composer.  

<sqlbox
  initial="SELECT genre_id, media_type_id, COUNT(*) FROM tracks GROUP BY genre_id, media_type_id ORDER BY genre_id, media_type_id;"
></sqlbox>

The priority/order of the groups is the same as how you list them.  You can see that switching the order of genre_id and composer in the GROUP BY clause makes quite a different query:

<sqlbox
  initial="SELECT media_type_id, genre_id, COUNT(*) FROM tracks GROUP BY media_type_id, genre_id ORDER BY  media_type_id, genre_id;"
></sqlbox>

Notice that I also added ORDER BY clauses to make the output a little more clear.  ORDER BY's are quite useful and common when using GROUP BY.

## GROUP BY Rules

There are a few rules to follow when using GROUP BYs.  The largest is that all data that isn't listed as a parameter to GROUP BY needs an aggregation function applied to it.  Think of what the following query:

```sql
SELECT genre_id, unit_price FROM tracks GROUP BY genre_id;
```

It throws an error because the database doesn't know what to do about *unit_price*.  While there is only one genre_id per group, there are many unit_prices.  They all can't just be output as a value without some [aggregation function](/learn-sql/aggregate/).

Can you correct the above query to get the average *unit_price* by *genre_id*?

<sqlbox
  answer="SELECT genre_id, AVG(unit_price) FROM tracks GROUP BY genre_id;"
  hint="AVG(unit_price)"
></sqlbox>

### GROUP BY Errors

It's easy to forget this rule and if so you're going to see an error like the following

```sql
ERROR: column "tracks.composer" must appear in the GROUP BY clause or be used in an aggregate function LINE 1: SELECT genre_id, composer FROM tracks GROUP BY genre_id;
```

Just remember that that means you have to either add that column to the GROUP BY or apply an [aggregation function](/learn-sql/aggregate/) to it so the database knows what to do.

The following example will throw this error because the database doesn't know what to do with all of the unit prices.  Can you modify it to do return the average *unit_price* by *genre_id*?

<sqlbox
  initial="SELECT genre_id, unit_price FROM tracks GROUP BY genre_id;"
  answer="SELECT genre_id, AVG(unit_price) FROM tracks GROUP BY genre_id;"
  hint="AVG(unit_price)"
  ></sqlbox>
