---
section: Extras
title: Meta commands in PSQL
meta_title: Using meta commands in psql
description: This article talks about what meta commands are and provides a list of
  some common examples.
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1BjqcXywBqyZln6LuCvbO8ulCOy7FzDSMJxHYM2ZXstI/edit?usp=sharing
image: /assets/images/book-covers/learn-sql.png
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time:

---
Meta commands are a feature that psql has which allows the user to do powerful operations without querying a database. There are lots of metacommands. Here is a list of some of the more common meta commands along with a very brief description:

* [\c [database name]](https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/) - connect to a specified database
* `\l` - list all databases
* `\d` - display tables, views, and sequences
  * `\dt` - display just tables
  * `\dv` - display views
  * `\dm` - display materialized views
  * `\di` - display indexes
  * `\dn` - display schemas
  * `\dT` - display data types
  * Etc.
* `\sv` [view name] - show a views definition
* `\x` - toggle expanded display. Useful for tables with a lot of columns being accessed
  * Can be toggled on/off or set to auto
* `\set` - list all internal variables
  * `\set` [Name] [Value] - set new internal variable
* `\unset` [Name] - delete internal variable
* `\cd` - change the directory that psql is working in
* `\!` [Command] - execute shell command
  * Ex. `\! ls` or `\! pwd`
* `\timing` - toggles timing on queries
* `\echo` [message] - print the message to the console
* [\copy](https://dataschool.com/learn-sql/export-to-csv-from-psql/) - copies to a file
* `\i [filename]` - execute commands from a file
* [\o [file]](https://dataschool.com/learn-sql/outputting-query-results-to-files-with-o/) - writes output to file instead of console
* `\q` - exits psql

## Advanced Meta Command Techniques

### Multiple Meta Commands

Multiple meta commands can be used in one line. For example you could use `\dt\di` to list all tables and then list all indexes with additional technical information on the indexes.

![results of running \dt\di](/assets/images/learn-sql/extras/metaComms/metaComms_0.png)

### Extra Details

Adding `+` to the end of the meta command that lists items will provide a small amount of extra technical information. This will work on any `\d` commands as well as some others.

![results of running \dt\di+](/assets/images/learn-sql/extras/metaComms/metaComms_1.png)

### Common Error

Meta commands are delimited by a new line as opposed to a `;`. This means that you would never see a meta command look like this: `\x;` The semicolon at the end is unnecessary and will throw an error:

![results of running \x;](/assets/images/learn-sql/extras/metaComms/metaComms_2.png)

### More Meta Commands

There are quite a few more meta commands that were not listed as they were for relatively niche usages and not as commonly used. For a full list of meta commands use `\?`. This will bring up the meta command help page with a full list of every meta command and a brief description of its functionality.

![results of running \?](/assets/images/learn-sql/extras/metaComms/metaComms_3.png)

This image shows the first commands from `\?` There are 102 commands in total.

## Summary

* Meta commands are useful commands that can be run from a psql client.
* All metacommands begin with `\`
* Adding `+` will provide extra detail on certain metacommands
* For a full list of meta commands use `\?` in psql
* Do not end meta commands with `;`
