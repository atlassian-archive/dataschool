---
title: Quick Introductory SQL Concepts
short: Introduction
meta_title: Learn Introductory SQL Concepts
description: Learn how to use SQL with your PostgreSQL database. In this interactive
  SQL data tutorial, get an introduction that is designed to get you querying your
  PostgreSQL database as quickly as possible. Learn SQL basics, tables and SQLbox.
number: 10
section: Basic SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
is_featured: true
image: "/assets/images/learn-sql/basic/introduction/sql-tutorial-excel-introduction.png"
topics:
- _chapters/dictionary/sql.md
is_under_construction: false

---
So you wanna learn SQL huh?  You've come to the right place.  This interactive SQL tutorial is designed to get you querying as quickly as possible.

I think it's best to just dive right in, but it's going to be incredibly beneficial to go over just a few quick concepts first (trust me, we get to running your first SQL on the very next page).

## SQL

SQL might seem intimidating but it's really fairly easy to understand.  SQL stands for Structured Query Language and simply put, it's a search language for you to instruct a database about what information you'd like retrieved from it.  

Just think of it as an advanced, really structured google search.  For example in Google you might ask something like

![Google Example Question](/assets/images/learn-sql/basic/introduction/obana-question.png)

And in SQL, if you had a database with that information in it, the equivalent question might be answered with something like

```sql
SELECT age FROM presidents WHERE name = 'Barack Obama';
```

Don't worry about understanding the above query yet, you'll get that in no time.

## Tables - for those familiar with Excel

Databases organize data in different **tables**.  I'm assuming that most people reading this are familiar with Excel or some other Spreadsheet software.  This makes it easier to explain what a table is as a Table is basically just a Spreadsheet of data.  It has columns with names of fields, and then rows holding the actual data.  

![figure 1](/assets/images/learn-sql/basic/introduction/sql-tutorial-excel-introduction.png)

In this tutorial we'll be using an example data set that has a bunch of information on *tracks*, *albums* and *artists* in a music collection.  Most databases architects will typically split those items into their own tables rather than group them all in one.  You'll learn all about linking them together when we get to the section on [Table Relationships and JOINs](../joins/).


<!-- [comment]: <> Note: Schema may just not be that important to talk about here yet...  Too slow of a start.
  ## Schema

This word gets used sometimes when writing SQL.  A Schema is quite simply a collection of tables.  A database can have multiple different schemas.  Most of the time in {{ page.database }} you'll deal with the default 'public' schema.

## Database

A database is the software that holds all of your schemas and tables, and that you run your SQL commands against.  There are a number of types of databases out there.  This tutorial is around {{ page.database }}, but we have identical tutorials for the other more popular database engines as well: PostgreSQL, MySQL, Redshift, BigQuery, Oracle, SQLServer, SQLlite
Each database engine has a slightly different Syntax of SQL.  They're all incredibly similar however, so learning the basics of one will translate quite well to the others.  If you're unsure on what syntax to start learning with you should either ask someone what database engines you use at work or start with PostgreSQL, as it's very popular. -->

## SQLBox (Interactive Query Editor)

For this tutorial we've built a tool for you to run SQL commands and see the results along with each lesson.  It's a big black box like this so that you can try out each lesson, and play with other things you're curious about along the way.  

Having SQLBox means that you don't have to spend a long time setting up your own environment just to get started.  Playing with SQL and data is the best way to learn it.  Try out running your first SQLBox queries by hitting "Run SQL" below.

<sqlbox
     answer="SELECT 'This guy Dave sure writes a great tutorial.';"
     initial="SELECT 'This guy Dave sure writes a great tutorial.';"
     correct_message="Dang right he does!"
></sqlbox>

After you run a query, a table with the results of your query will show up below it.  All of the queries you run on this tutorial are being executed against a real {{ page.database }}.

SQLBoxes that have a quiz to them will have a checkbox to their left.  Once the answer is correct, the checkbox will be checked!  Some of these will have a Hint you can view, and if you ever get really stuck feel free to [email us for some help](mailto:support+sqltutorial@chartio.com).

Let's get started with our [first tutorial on SELECTs](../select/).

<!-- description of chinook probably not needed ## Chinook

For most of the tutorial we're going to be using a database from a great project called Chinook Database.  Chinook is an open database example that has support for equivalent data across many different database engines, so it's easy to test your skills across various different databases. -->
