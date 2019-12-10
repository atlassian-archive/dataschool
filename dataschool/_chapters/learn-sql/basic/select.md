---
title: SELECT
short: SELECT
meta_title: SQL - SELECT
description: Learn the SELECT SQL statement with your PostgreSQL database in this
  interactive SQL data tutorial. The SELECT statement is a basic SQL command to access
  data.
number: 20
section: Basic SQL
image: "/assets/images/book-covers/learn-sql.png"
authors:
- _people/dave.md
reviewers:
- _people/matt.md
is_featured: false
topics:
- _chapters/dictionary/sql.md
is_under_construction: false

---
Alright, let's get down to some SQL!!  The first command we're going to learn is SELECT as it's the first instruction you need for any SQL statement that's fetching data. There are other starting commands like INSERT and CREATE, but most interactions with databases are SELECTing data.

Let's start with the most simple query and just select a value back.  The SQL Box is there for you to try running your SQL in.  You can put any SQL you want in there, and don't be afraid as you're not going to break anything.  Try whatever you'd like.  Experimentation is the best way to learn! Here's an example query we'll start with:

```sql
SELECT 42;
```

 So first, try typing this statement in the SQLBox below and hit "Run SQL" to return the number 42.

<sqlbox
     answer="SELECT 42;"
     correct_message="Notice your query result(s) show in a table beneath the query."
></sqlbox>

Awesome, you just returned a number.  There are other things you can fetch besides numbers like "strings" of characters.  Try running this one or choosing your own string to return.

```sql
SELECT 'hello world!'
```
or
```sql
SELECT 'We are just getting started.';
```

<sqlbox
></sqlbox>

Note that each query needs to end in a semi-colon.  That's just how the database knows that you're done giving it instructions.  The SQL Box isn't picky about it so you can get away without using it, but other tools you use may be a bit more strict.

## Math

While we're playing with numbers we can point out that SQL can also instruct a database to do some math on a result.  Try out some queries like these:

```sql
SELECT 2 + 3;
```

```sql
SELECT 5 * 12;
```

```sql
SELECT 164 / 8;
```

<sqlbox
></sqlbox>

It can also concatenate strings

<sqlbox
     initial="SELECT 'Dave' || ' is a fantastic SQL instructor';"
     answer="SELECT 'Dave' || ' is a fantastic SQL instructor';"
     correct_message="Awww shucks."
></sqlbox>

And we'll get more into [DATE and TIME queries](../dates/) later but here's a quick example of selecting a date, which besides numbers and strings is another common data type category in PostgreSQL.

<sqlbox
  initial="SELECT DATE '{{ "now" | date: "%b %d, %Y" }}';"
></sqlbox>


Here we just SELECTed data that we typed in ourselves.  Obviously SQL would be quite useless if that's all it did, but next we'll cover how you can choose where to SELECT data FROM!
