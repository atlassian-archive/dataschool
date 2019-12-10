---
title: Browsing the SCHEMA
short: SCHEMA
meta_title: Browse the SCHEMA in a Database
description: SCHEMA is the collection of tables and relationships in your database.
  In this interactive SQL tutorial, learn how to browse a SCHEMA with PostgreSQL.
number: 55
section: Basic SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
is_featured: false
image: "/assets/images/learn-sql/basic/schema-browsing/schema-browsing.png"
topics:
- _chapters/dictionary/sql.md
is_under_construction: false

---
The word _SCHEMA_ is used to describe a collection of tables and their relationships in your database.  A database instance may have several different schemas.  When you're working with a set of data, it's useful to be able to browse that schema to get a sense for what data is available to you.

You can browse a schema visually using popular database interfaces like [PGAdmin](#schemas-in-pgadmin), [Postico](https://eggerapps.at/postico/) and [Chartio](#schemas-in-chartio), or in a text-based manner by using SQL itself.

Typically using a visual tool is much easier, but it's totally up to you.  Here we're going to quickly cover both, but if you already have a handle on one of the visual editors and are comfortable with finding out what schema is available feel free to skip this part and move on to the [Basic SQL Practice Grounds](../basic-practice/).

## Visual Schema Browsing

If you're using a good visual interface to {{ page.database }}, browsing the schema can be really easy.  Below we also show you how to [browse the schema in SQL](#schema-browsing-using-sql), but unless you just can't use one of these tools I highly suggest you browse the schema visually.  It's just easier.

### Schemas in PGAdmin

Once connected to a database, you can expand the trees in the left sidebar in PGAdmin to find the database, schema, tables and columns available:

![PGAdmin Schema Browsing](/assets/images/learn-sql/basic/schema-browsing/pg-admin-schema-1.png)

The "Properties" tab in the right top of the interface will display all of the extra properties that the _information_schema_ holds on the table or column including default values, data type, and more.

![PGAdmin Column View](/assets/images/learn-sql/basic/schema-browsing/pg-admin-schema-2.png)

### Schemas in Chartio

Chartio's schema viewer simply lists the tables in the Schema tab of any data source connection.

![Chartio Schema Editor](/assets/images/learn-sql/basic/schema-browsing/chartio-schema-editor.png)

Each table can be expanded to show the columns underneath.  In Chartio you can actually change the name/alias, define relationships and create custom tables and columns.  This isn't mapped back to database, but used only for the Chartio Visual Data Explorer.

Clicking on _"Visualize"_ from the data source Schema page will also create a nice visualization of all of the tables, with their columns listed.  In this view, relationships that are defined are also drawn as connections from one table to another.

## Schema Browsing using SQL

Using psql or any other SQL interface you can browse your schema information.  PostgreSQL is really clever in that all of the schema information is simply stored in a few tables that you can query like any other table.  The information is all in a schema called _information_schema_.  The table holding all the information on what tables are available is called _tables_.  Let's take a look at what's available there:

<sqlbox
initial="SELECT * FROM information_schema.tables;"

> </sqlbox>

The above will get all the tables from all schemas.  If we want to look at only the tables in our chinook dataset we can query for only things in the `public` schema.  The `public` schema FYI is the default.  We do this by just adding a condition on the _table_schema_ column.

<sqlbox
initial="SELECT * FROM information_schema.tables WHERE table_schema = 'public';"
answer="SELECT * FROM information_schema.tables WHERE table_schema = 'information_schema';"

> </sqlbox>

You'll notice the _artists_, _albums_ and _tracks_ tables we've been playing with so far in our tutorial, but look at all those others we've been holding out on! There's also _actors_, _employees_, _genres_, etc. We'll dig into looking at the columns in those tables next, but first take a moment to change the query above to look at what tables are available in PostgreSQL's _information_schema_ schema.

You'll see that one of the tables available in the _information_schema_ is _columns_, and as you might guess, like _tables_ held the info on what tables are available _columns_ holds the info on the columns.

Let's take a look at the columns in the _tracks_ table with the condition `table_name = 'tracks'`.

<sqlbox
initial="SELECT * FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'tracks';"

> </sqlbox>

As shown {{ page.database }} stores all kinds of information about each column including the _data_type_, _character_maximum_length_, various precision options and an optional default value.

### Sampling a Few Rows

Another great (and probably easier) way of checking out what columns and data is available in a table is to simply grab a few rows of it.  Don't grab all the data, it may be a really big table and we don't need it all!  Let's take a look at what's available in the _playlists_ table with a limited SELECT *.

<sqlbox
initial="SELECT * FROM playlists LIMIT 5;"

> </sqlbox>

And of course if you want to see how much data there is in there you can run other diagnostic queries like a COUNT(*).

### psql Schema Shortcuts

If you're using psql as your connection to your database there are a number of helpful schema browsing shortcuts.  The following are to me the most useful for schema browsing and, if interested, you can find the [full list of psql commands here](https://www.postgresql.org/docs/9.3/static/app-psql.html).

| Shortcut | Description |
| --- | --- |
| \\d | list of all tables |
| \\d+ | list of all relations |
| \\d \[table name\] | list of the columns, indexes and relations for the \[table name\] |
| \\dn | list of all schemas (namespaces) |
| \\l | list of all databases |
| \\z | list tables with access privileges |

Also if you want to refer to visual representation of the schema we have provided it here:

![](/assets/images/Chinook ERD.png)
