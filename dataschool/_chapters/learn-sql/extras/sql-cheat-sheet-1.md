---
section: book
reading_time: 0
title: SQL Cheat Sheet
meta_title: ''
description: ''
authors: []
reviewers: []
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
faqs: []
published: false

---
1. Data Retrieval
2. Table Modification
3. Aggregate Functions
4. Joins
5. Database Object Creation & Modification


##Data Retrieval

###SELECT

A SELECT statement is used to retrieve data from a database. It is the starting point for all other work done in SQL. To use, write SELECT, then list the fields to be retrieved separated by commas. Next, specify where the data is to be retrieved from by using FROM and the table name.

SELECT field1, field2, field3 …

FROM tablename;

Alternately, if you wanted to select all the fields in a table, you can indicate this using the * character. It would look like this:

SELECT *

FROM tablename;

If we wish to modify the results returned, we have the following commands available for our use:

**DISTINCT**

DISTINCT is used with the SELECT statement to return only unique records across the fields selected. To do this with only 1 field and return the unique values in that field, it would look like this:

SELECT DISTINCT _field1_

FROM _tablename;_

When used with 2 or more fields, DISTINCT will return all the records that are unique combinations across the fields selected.

SELECT DISTINCT _field1, field2, field3_

FROM _tablename;_

For example, from the following table:

| --- | --- | --- |
| Color | Quantity | Group |
| Red | 10 | A |
| Red | 10 | A |
| Blue | 20 | A |
| Green | 15 | B |
| Blue | 20 | A |
| Red | 15 | B |
| Green | 40 | B |
| Yellow | 20 | B |

SELECT DISTINCT Color, Quantity, Group would return:

| --- | --- | --- |
| Color | Quantity | Group |
| Red | 10 | A |
| Blue | 20 | A |
| Green | 15 | B |
| Red | 15 | B |
| Green | 40 | B |
| Yellow | 20 | B |

You can see that the query has looked across all the fields being selected and has only returned a single unique occurrence of each record. (The highlighted records above show where duplicate records were eliminated.)

**WHERE**

The WHERE clause is used with SELECT to filter the returned records based on specified criteria. The syntax would be similar to:

SELECT _field1, field2,…, fieldn …_

FROM _tablename_

WHERE _fieldn_ = _definition_;

Note that WHERE can be used with many different operators besides the = operator shown in the example. Possible operators include:

= Equal to

> Greater than

< Less than

>= Greater than or equal

<= Less than or equal

<> Not equal

BETWEEN Between specified endpoints of a range

LIKE Matching to a pattern

IN Matching to 1 of several specified options

**AND, OR, NOT**

AND, OR, and NOT can be used with the WHERE clause to expand and further define the filter. These enables the user to return more refined query results.

Use of AND would follow this syntax:

SELECT _field1, field2, field3 …_

FROM _tablename_

WHERE _condition1_ AND _condition2_ AND _condition3 …_;

Use of OR would follow this syntax:

SELECT _field1, field2, field3 …_

FROM _tablename_

WHERE _condition1_ OR _condition2_ OR _condition3 …_;

Use of NOT would follow this syntax:

SELECT _field1, field2, field3 …_

FROM _tablename_

WHERE NOT _condition_;

**ORDER BY**

It may be desirable to return query results in a prescribed order. To do this the ORDER BY clause may be used. Default ordering is alphabetic for text fields and smallest to largest for numeric fields.

SELECT _field1, field2, … fieldn …_

FROM _tablename_

ORDER BY _fieldn_;

If you desire, you can specify to order either ascending or descending:

SELECT _field1, field2, … fieldn …_

FROM _tablename_

ORDER BY _fieldn_ ASC;

Or

SELECT _field1, field2, … fieldn …_

FROM _tablename_

ORDER BY _fieldn_ DESC;

You can also specify more than 1 field to order by. SQL will order from the first field listed, then secondarily from the next field listed, and so forth. You can use ASC and DESC as you choose, attached to each field. As an example, first ordering by _field1_ ascending, then _field2_ descending would look like this:

SELECT _field1, field2, … fieldn …_

FROM _tablename_

ORDER BY _field1_ ASC, _field2_ DESC;

**SELECT TOP**

SELECT TOP is used to retrieve a smaller subset of records matching to a specified condition – either percentage of records or number of records.

For percentage of records you specify a percentage and then PERCENT:

SELECT TOP 10 PERCENT _field1, field2, field3 …_

FROM _tablename_;

For number or records you merely specify the number of records:

SELECT TOP 50 _field1, field2, field3 …_

FROM _tablename_;

**LIKE**

LIKE is used with the WHERE clause to define a pattern as the condition. When records match the pattern specified by the LIKE operator, they are returned as results of the query.

The wildcards used to help define the pattern are:

% The percent symbol replaces any number of characters, including zero.

_ The underscore replaces a single character.

An example using the % wildcard would look like this:

SELECT *

FROM _tablename_

WHERE _field1_ LIKE ‘a%’

Note that the pattern description is always enclosed in single quotes. The example above would return all records where the value in _field1_ began with the letter “a” followed by any number of characters or no other characters.

**IN**

The IN operator allows you to specify a list of values that each will satisfy the condition of a WHERE clause. Any record which matches to 1 of the list items is returned.

SELECT _field1, field2, … fieldn …_

FROM _tablename_

WHERE _fieldn_ IN ( ‘_Value1’, ‘Value2’, ‘Value3’_ );

In the example above, anytime _Value1, Value2,_ or _Value3_ appeared in _fieldn,_ its record would be returned in the query result.

**BETWEEN**

The BETWEEN operator is used with WHERE to select values within a defined range, inclusive of the endpoints. It can be used with numeric values, dates, and text.

SELECT *

FROM _tablename_

WHERE _fieldn_ BETWEEN _value1_ AND _value2_;

**NULL**

The NULL operator is used in SQL to test for null values and only return those records:

SELECT *

FROM _tablename_

WHERE _fieldn_ IS NULL;

Alternatively, by pairing NULL with IS NOT, one can return only the records where there are non-null values:

SELECT *

FROM _tablename_

WHERE _fieldn_ IS NOT NULL;

**AS**

In SQL, the AS command is used to alias a field being returned by a query:

SELECT

_field1_ AS _name1,_

_field2_ AS _name2,_

FROM _tablename_;

This effectively renames the field(s) in the query results with a temporary name (the respective alias given).

**UNION**

The UNION operator is used to combine the result sets of 2 or more SELECT statements. In order for this to work however, several rules must be followed:

* Each SELECT statement must return the same number of fields
* Each SELECT statement must return fields with similar data types
* Each SELECT statement must return those fields in the same order

SELECT _fieldnames_ FROM _table1_

UNION

SELECT _fieldnames_ FROM _table2;_

When the UNION operator combines the result sets, it looks across all the records and removes any duplicate records. To combine the result sets and retain any duplicated records, use UNION ALL:

SELECT _fieldnames_ FROM _table1_

UNION ALL

SELECT _fieldnames_ FROM _table2;_

**INTERSECT**

INTERSECT functions similarly to UNION, however rather than keeping only unique records, INTERSECT looks across 2 or more SELECT statement result sets and only returns those records that are common between each result set.

SELECT _fieldnames_ FROM _table1_

INTERSECT

SELECT _fieldnames_ FROM _table2;_

**EXCEPT**

EXCEPT also functions similarly to UNION and is the inverse of INTERSECT. EXCEPT looks at the result sets for 2 SELECT statements and only returns the records from the first SELECT statement that are not found in the results of the second SELECT statement.

SELECT _fieldnames_ FROM _table1_

EXCEPT

SELECT _fieldnames_ FROM _table2_;

**GROUP BY**

GROUP BY is used to group the records in a result set by a designated field. It is most commonly used with one of the aggregate functions (COUNT, SUM, MAX, MIN, AVG). For example:

SELECT

COUNT _field1,_

_field 2,_

_…_

_fieldn_

FROM _tablename_

GROUP BY _field2_;

**HAVING**

HAVING is used in the same way as WHERE, but since WHERE cannot be used with aggregate functions, HAVING may be used to impose a condition on the aggregated result set.

SELECT _field1, field2, … fieldn_

FROM _tablename_

GROUP BY _fieldn_

HAVING _condition_;

**2. Table Modification**

**INSERT INTO**

INSERT INTO is used in insert new records into a table. These records may be copied from another table by pairing with SELECT, or their data may be specified using VALUES. Here are examples of the syntax for each:

Here is an example which copies records from _table2_ into _table1_:

INSERT INTO _table1 ( field1, field2, field3 )_

SELECT _field1, field2, field3_ FROM _table2_;

In this next example, new records are created, and the data is specified using VALUES:

INSERT INTO _table1_ (

_field1,_

_field2,_

_field3_

)

VALUES

( _value1, value 2, value3_ ),

( _value1, value 2, value3_ ),

( _value1, value 2, value3_ );

**3. Aggregate Functions**

The following functions can be used to aggregate data and produce a designated output for reporting:

**COUNT**

COUNT returns a count of the records matching to a specified criteria. It is common to use WHERE and GROUP BY with these functions. Here is an example of COUNT:

SELECT

COUNT(_field1),_

_field2_

FROM _tablename_

WHERE _condition_

GROUP BY _field2_;

**AVG**

AVG returns the numeric average of the records within a specified field:

SELECT

AVG(_field1_),

FROM _tablename_

WHERE _condition_;

**SUM**

SUM returns the numeric sum of the records within a specified field:

SELECT

SUM(_field1_),

FROM _tablename_

WHERE _condition_;

**MIN / MAX**

**MIN** returns numeric minimum value for a specified field. **MAX** returns numeric maximum value for a specified field. Their use would look like this:

SELECT

MIN(_field1_),

FROM _tablename_

WHERE _condition_;

Or

SELECT

MAX(_field1_),

FROM _tablename_

WHERE _condition_;

**4. Joins**

Joins are used in SQL to combine data from multiple tables based on fields common to both tables. Fields with related data are identified and _joined_. Once this linking is established, the data may be queried and used in its combined format.

**LEFT JOIN**

The LEFT JOIN returns all records from _table1_ (the left table) along with all matching records from _table2_ (the right table).

SELECT _field1, field 2 … fieldn_

FROM _table1_  
LEFT JOIN _table2  
_ON _table1.fieldn_ = _table2.fieldn_;

**RIGHT JOIN**

The RIGHT JOIN returns all records from _table2_ (the right table) along with all matching records from _table1_ (the left table).

SELECT _field1, field 2 … fieldn_

FROM _table1_  
LEFT JOIN _table2  
_ON _table1.fieldn_ = _table2.fieldn_;

**INNER JOIN**

The INNER JOIN returns all records (and only the records) from _table1_ and _table2_ which have matching values in the specified join fields.

SELECT _field1, field 2 … fieldn_

FROM _table1_  
INNER JOIN _table2  
_ON _table1.fieldn_ = _table2.fieldn_;

**FULL OUTER JOIN**

The FULL OUTER JOIN returns all records for both tables with records matched on the join field combined.

SELECT _field1, field 2 … fieldn_

FROM _table1_  
FULL OUTER JOIN _table2  
_ON _table1.fieldn_ = _table2.fieldn_;

**5. Database Object Creation & Modification**

CREATE can be used to create new databases, tables, or views. A table is a permanent database object and contains data. A view is virtualized table and its contents are defined by a query, it does not actually store data, but it may bring together data from multiple tables.

**CREATE TABLE**

To create a new table in the database and define its structure, use the CREATE statement like this:

CREATE _tablename_ (

_field1 datatype,_

_field2 datatype,_

_field3 datatype,_

…

);

**CREATE VIEW**

  
Since a view is defined by a query, to create a new view, the syntax would look like this:

CREATE _viewname_ AS

SELECT _field1, field2, … fieldn_

FROM _tablename_

WHERE _condition_;

**SELECT (view)**

SELECT can be used to retrieve an existing view. It is written the same as when selecting from a table, only selecting from a view, rather than a table.

SELECT _field1, field2, … field2_

FROM _viewname_;

**DROP (view)**

If a view is not longer needed, it can be removed by using DROP:

DROP VIEW _viewname_;