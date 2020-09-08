---
title: Operators
short: Operators
meta_title: SQL - Operators
description: Learn about Operators in SQL and how to use them in Postgres. Operators
  are used to specify conditions in a SQL statement.
number: 65
section: Mid-Level SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
image: "/assets/images/book-covers/learn-sql.png"
is_featured: false
is_under_construction: false

---
So far we've only made conditions using the equal (`=`) or greater than (`>`) operators. There are many more at our disposal.  They are fairly self-explanatory and just need some practice to get down.  Here's the table describing the most commonly used operators:

| Operator | Description |
| --- | --- |
| = | equal |
| < | less than |
| > | greater than |
| <= | less than or equal |
| >= | greater than or equal |
| != | not equal |
| <> | not equal (yup, there are two ways) |

Take a few moments to get familiar with these operators by filtering out some tracks data.  Here's a query to get started with:

<sqlbox
initial="SELECT * FROM tracks WHERE unit_price <= .99 AND milliseconds > 250000;"

> </sqlbox>

## String operators and Patterns

When you want to match an exact string (like `composer = 'Green Day'`) you can simply use the equal (`=`) operator.  But that condition only does an exact match and therefore only matches songs that were exclusively written by Green Day.

If we want to find all the tracks that were composed by Green Day (either alone, or in conjunction with other artists) we need to be able to match rows where the composer isn't equal to 'Green Day' but contain 'Green Day' somewhere in them.

To condition match part of a string, or identify strings following a pattern we can use either of these string pattern matching operators.

| Operator | Description |
| --- | --- |
| LIKE | a string matches a pattern |
| ILIKE | case insensitive version of LIKE |
| SIMILAR TO | a string matches a regex pattern |

They take a bit more explanation than the simple comparators above.

### LIKE

Like is the easy/lightweight way to match a string to a pattern. A pattern is a string that can use some special symbols that represent wildcard characters.  Besides regular characters, the two wildcard symbols LIKE can use are

| Symbol | Description |
| --- | --- |
| _ | matches any single character |
| % | matches any number of characters |

To make a pattern that will match 'Green Day' inside of any string we put `%` symbols on either side, meaning any number of characters can be before or after Green Day.  So with this pattern as our condition, on running the following query the database will scan for matches in each row and return those that are true.

<sqlbox
initial = "SELECT * FROM tracks WHERE composer LIKE '%Green Day%';"

> </sqlbox>

Test your skill: can you create a query to return all of the _artists_ with 'Black' in their _name_?

<sqlbox
answer = "SELECT * FROM artists WHERE name LIKE '%Black%';"
hint = "name LIKE '%Black%'"

> </sqlbox>

### ILIKE

If you want your pattern to not care about whether characters are upper or lower case you can use ILIKE.  The I stands for "case (I)nsensitive".  So if we wanted to find all composers that had the word "day" in it regardless of case, we could use:

<sqlbox
initial = "SELECT * FROM tracks WHERE composer ILIKE '%day%';"

> </sqlbox>

Note that in the above query if we switched ILIKE to LIKE we wouldn't match any Green Day tracks because Day is capitalized.

### LIKE and ILIKE Examples

Here are a few more examples of what patterns will and won't match.

```sql
'Little Richard' LIKE '%Richard'        true
'Little Richard' LIKE '_______Richard'  true
'Little Richard' LIKE '______Richard'   false
'Little Richard' LIKE '%richard'        false
'Little Richard' ILIKE '%richARD'       true
'Little Richard' LIKE '_ittle %'        true
```

You can play around with patterns yourself by switching the LIKE statements out here

<sqlbox
initial="SELECT true WHERE 'Little Richard' LIKE '%Richard';"

> </sqlbox>

### SIMILAR TO

SIMILAR is the more advanced way to match a string to a pattern, using a standard pattern format called regular expressions (regexp).  These can get really advanced (too advanced for this tutorial) so we won't go over it in detail.  If you'd like to dig in further however we have our Full Regular {{ page.database }} Expressions page [here](https://dataschool.com/how-to-teach-people-sql/how-regex-works-in-sql/).

For a quick example of SIMILAR TO, here is a querying with a regex to match all tracks composed by either AC/DC or Green Day.

<sqlbox
initial="SELECT * FROM tracks WHERE composer SIMILAR TO '%(AC/DC|Green Day)%';"

> </sqlbox>

# Dealing with NULLs

Empty cells in a database are called NULL.  They're somewhat of a special value and are dealt with a bit differently.  You can't use the `=` or `!=` operators, instead you use the `IS` operator as shown.

```sql
IS NULL      -- matches NULL values
IS NOT NULL  -- matches all non NULL values
```

The following query will fetch all _tracks_ where the _composer_ IS NOT NULL.  Try running it, and also change it up to return only the rows that do have a NULL _composer_.

<sqlbox
initial="SELECT * FROM tracks WHERE composer IS NOT NULL;"
answer="SELECT * FROM tracks WHERE composer IS NULL;"
hint="composer IS NULL"

> </sqlbox>

## Progress Checkin!

The above describes the main toolset of operators you'll need, but if you're interested in learning more checkout the [full list of {{ page.database }} operators](https://www.postgresql.org/docs/9.0/static/functions.html).

You've learned a huge chunk of SQL so far, keep it up!  Are you seeing how SQL is almost english like, or at least like an advanced Google search?  I hope it's starting to make sense and is getting less intimidating.  A few more concepts and a bit of practice and you'll be quite fluent in no time!