---
section: Extras
title: Exclude a Column
meta_title: Exclude a Column using SELECT *
description: Learn how to exclude a column in the SELECT statement of your query
number: 2000
authors:
- _people/josiah-faas.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
In some cases, you may have a table with many fields and desire to write a query that selects nearly all of them. In a situation like this, it would be nice to be able to write a query that combines a SELECT all with a shorter list of exclusions.

Unfortunately, since SQL is a declarative language, this cannot be done. When we use SQL, we must specify what we want, not what we do not want. The 2 best viable ways to approach this problem are as follows:

## **Omit Columns**

List out all columns in your query, omit the undesired fields by:

* Not including
* Deleting
* Commenting out

Not including columns or deleting columns you don’t want in your SELECT statement is straightforward. However if you would want to show that you are leaving out certain columns intentionally you can comment them out by using two dashes --

```sql
SELECT
	column1,
	--column2,
    column4
FROM
	table_name;
```

Here we deleted column3 and commented out column 2.

The SQL DESCRIBE statement is useful here to obtain the full list of the fields in a table, especially if there are a great number.

DESCRIBE _table_name_;

It will produce a table with all column names from the table being described and some other meta information.

![](/assets/images/Screen Shot 2019-10-22 at 2.04.38 PM.png)

## **Create View**

If you will often be querying a table and retrieving most of its columns, then it may make sense to create a view. The view would persist as a “virtual table,” against which SELECT * queries could be run.

Here is how it would look if we wanted to end up with all of the columns except _column2_:

```sql
CREATE VIEW view_name AS
SELECT
	column1,
	column3,
	column4
FROM table_name;
```

This view could then be queried using SELECT *

```sql
SELECT *
FROM view_name;
```

In theory this is a very good idea, however as the view definition becomes more extensive and/or complex, there could be a negative performance impact. Since the view is a “virtual table” the data does not reside within the view. Each time a query is made against the view, the view’s definition query against the original database tables must also run. The convenience gained by being able to SELECT * should be weighed against the time and resources needed to support the view.