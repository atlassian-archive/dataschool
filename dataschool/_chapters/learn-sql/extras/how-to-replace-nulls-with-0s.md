---
section: Extras
title: How to Replace Nulls with 0s in SQL
meta_title: How to Use Update in SQL to replace Nulls
description: This article talks about how to use the UPDATE statement to clean data.
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/11TBqvGWfMYDVjak_DDfyGRrd7Y5cpUzR6ICxlC5EVNc/edit?usp=sharing
image: "/assets/images/book-covers/learn-sql.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time:
is_community_story: false
story_intro_blurb: ''

---
```sql
UPDATE [table]
SET [column]=0
WHERE [column] IS NULL;
```

Null Values can be replaced in SQL by using UPDATE, SET, and WHERE to search a column in a table for nulls and replace them. In the example above it replaces them with 0.

Cleaning data is important for analytics because messy data can lead to incorrect analysis. Null values can be a common form of messy data. In aggregation functions they are ignored from the calculation so you need to make sure this is the behavior you are expecting, otherwise you need to replace null values with relevant values.

## Video
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/3PF8mWmOlYI?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How to use the UPDATE command?

The UPDATE command is a DML command as opposed to a DDL (Data Definition Language), DCL (Data Control Language), or TCL (Transaction Control Language) command. This means that it is used for modifying preexisting data. Other DML commands include: SELECT, INSERT, DELETE, etc.

UPDATE takes a table and uses the SET keyword to control what row to change and what value to set it to. The WHERE keyword checks a condition and, if true, the SET portion is run and that row is set to the new value. If false, it is not set to the new value.

Update can be used for a lot of different problems. For example:

To add 1 to every value in a column you can run:

```sql
UPDATE [table]
SET [column]=[column]+1;
```

Takes the values in a column and adds 1 to them.

To set every value to a random integer on the interval \[1,10\]:

```sql
UPDATE [table]
SET [column]=1+random()*9::int;
```

Generates a random double precision (float8) type number from \[0,1), multiplies it by 9, and adds 1 to that value and casts it to an integer type for each row.

To set values to 0 for even 1 for odd:

```sql
UPDATE [table]
SET [column]=MOD([column],2);
```

Uses MOD to set the column values to the remainder of the column values divided by 2.

## Summary

* To replace Nulls with 0s use the UPDATE command.
* Can use filters to only edit certain rows within a column
* Update can also be used for other problems like:
  * Generating random data
  * Adding one to every row in a column (or where a condition is true)
  * Setting Values based on if a column is even or odd
  * Etc.
