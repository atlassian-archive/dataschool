---
title: "WHERE"
short: WHERE
description: "Learn how to use the SQL WHERE command in PostgreSQL. In this interactive SQL tutorial, learn the syntax of the WHERE command and best practices on using it for data analysis and exploration against your PostgreSQL database."
number: 60
section: mid-level
authors:
- author: _people/dave.md
reviewers:
- reviewer: _people/matt.md
image: ''
is_featured: false
---
[LIMITing queries](../limit/) is one way to filter down result sets, but we can get a lot more specific with the WHERE clause.  The WHERE command is followed by the conditions you'd like to filter by.

```sql
SELECT * FROM artists WHERE [Filter Conditions];
```

## Conditions

Conditions are simply statements that are either true or false.  The database takes these statements and evaluates them across all the rows as it scans through your tables and only returns the results that are true.

Let’s say for instance that we’d like to see the name of the artist who’s id is 85.  The condition would be `id = 85`.  Try the condition by running the following query:

<sqlbox
  initial="SELECT * FROM artists WHERE id = 85;"
></sqlbox>

The query instructed the database to scan the artists table and fetch all the rows where the condition (`id = 85`) was true.  As you can see, the only artist with id 85 is Frank Sinatra.

Or if we wanted to lookup all the information on 'Santana' the condition would be `name = 'Santana'`

```sql
SELECT * FROM artists WHERE name = 'Santana';
```

Try getting the information on 'Kiss':

<sqlbox
  answer="SELECT * FROM artists WHERE name = 'Kiss';"
  hint="It's just like the Santana example above but with 'Kiss' instead"
  show_incorrect="true"
  correct_message="Rock and Roll All Nite!"
></sqlbox>

And another quiz: return the *id* from one of my favorite ablums in High School, 'American Idiot'.

<sqlbox
  answer="SELECT id FROM albums WHERE title = 'American Idiot';"
  hint="Query the albums table where title is 'American Idiot'"
  correct_message="Well done.  This was a great album."
></sqlbox>

## Multiple matches

In the above examples we were querying on unique fields so we were only getting one answer in response.  That's not always the case however.  In the *tracks* table many different tracks belong to the same album, and you can see that in the tracks database there is an *album_id* column.  For example if we want to get all of the tracks belonging to an album, who's *id* is 89 we could run:

<sqlbox
  initial="SELECT * FROM tracks WHERE album_id = 89;"  
></sqlbox>

89 just happens to be the same *album_id* as "American Idiot" had.  We've just pulled all the *tracks* from the album American Idiot!  We'll get more into how we can [JOIN this data](https://chartio.com/learn/sql/joins/) based on the common key of *album_id* in a later section.

## AND - Requiring Multiple Conditions

In SQL you can filter by any number of conditions.  You can add additional conditions by using the AND operator between each new condition.  Let's take the query we wrote above and say we only want the tracks from album 89 (American Idiot) AND were also composed only by Green Day themselves.

<sqlbox
  initial="SELECT * FROM tracks WHERE album_id = 89 AND composer = 'Green Day';"
  answer="SELECT * FROM tracks WHERE album_id = 89 AND composer = 'Green Day' AND milliseconds > 200000;"
  hint="AND milliseconds > 200000"
  correct_message = "You're no idiot!"
></sqlbox>

See if you can modify the query above to also filter on tracks that are longer than 200000 milliseconds.

## OR - Requiring Any Condition

You can also use OR to define multiple WHERE conditions when you care whether not both but at least one of the conditions is true.  For example, the following query returns tracks that are composed by either Green Day OR AC/DC.

<sqlbox
  initial="SELECT * FROM tracks WHERE composer='Green Day' OR composer='AC\/DC';"
></sqlbox>

## NOT

You can invert a condition by simply putting the *NOT* operator infront of it.  For example, the following queries for everything that is NOT composed by Green Day.

<sqlbox
  initial="SELECT * FROM tracks WHERE NOT composer='Green Day';"
></sqlbox>


## Ordering and Parenthesis

You can use any number of OR and AND commands in conjunction to describe your conditions.  Just like in math class, SQL has an order of operations.  An AND is essentially a logic multiplication], and an OR is a logic addition, so ANDed conditions are preformed first, and then the ORs.  

Also like math, you can use parenthesis to specify the order of operations.  As a best practice it's good to use parenthesis wherever it seems like the logic and order might not be too clear.  To explore let's attempt to pull all the *tracks* composed Green Day AND any track by AC/DC that is over 240,000 milliseconds.

<sqlbox
  initial="SELECT * FROM tracks WHERE composer = 'Green Day' OR (composer = 'AC/DC' AND milliseconds > 240000);"
></sqlbox>

Notice the use of parenthesis making it clear that we only wanted the longer AC/DC songs.  You can see that the Green Day songs under 240,000 milliseconds are still listed.  If we change the parenthesis however, the logic applies the millisecond condition to all Green Day songs as well.

<sqlbox
  initial="SELECT * FROM tracks WHERE (composer = 'Green Day' OR composer = 'AC/DC') AND milliseconds > 240000;"
></sqlbox>

 Test your skills out and see if you can query for all *tracks* with price greater than a dollar and a genre (*genre_id*) of either 22 or 19;


<sqlbox
  answer="SELECT * FROM tracks WHERE unit_price > 1 AND (genre_id = 22 OR genre_id = 19);"
  hint="unit_price > 1 AND (genre_id = 22 OR genre_id = 19)"
></sqlbox>

There are a lot more Operators than just the equal sign that enable us do some really complex things.  We'll dive into those [operators next](../operators/).
