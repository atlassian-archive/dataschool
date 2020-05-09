---
section: Extras
title: Insert multiple rows
meta_title: Insert multiple rows in a single SQL query Postgres
description: Insert multiple rows into a table in a single SQL query using Postgres
number: 
authors:
- _people/josiah-faas.md
reviewers:
- _people/matt.md
feedback_doc_url: https://drive.google.com/file/d/1E3rXAyjc4MJBxR1T-T2mjK_wwf1Cpmfu/view?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 1
faqs: []

---
When you insert new records into a SQL table, typically this is done in a manner similar to what is shown below. For each new record you would have an INSERT statement, would specify the table, and then would list the new input values for that record.

```sql
INSERT INTO tablename VALUES ("value1","value2","value3",1234);
INSERT INTO tablename VALUES ("value1","value2","value3",1234);
INSERT INTO tablename VALUES ("value1","value2","value3",1234);
INSERT INTO tablename VALUES ("value1","value2","value3",1234);
```

However There may be times when you are inserting multiple/many rows of data and do not want to have to repeat the full `INSERT INTO` statement for each individual record. You can accomplish this by using slightly modified syntax.

First write a single INSERT statement and specify the field names, enclosed in parentheses, separated by commas.

Next write VALUES just once, then list the inputs for each record, enclosed in parentheses, delimited by commas.

```sql
INSERT INTO tablename
	(field1,field2,field3,field4)
VALUES 
	("value1","value2","value3",1234);
	("value1","value2","value3",1234);
	("value1","value2","value3",1234);
	("value1","value2","value3",1234);
```

This eliminates a lot of redundant typing, contains all the updates in a single query and can also allow for easier copy/paste of the new values into the SQL code.

**Note:** the VALUES clause takes a maximum of 1000 rows. If you plan to input more than 1000 records, you will need to break up your data and run INSERT INTO multiple times.