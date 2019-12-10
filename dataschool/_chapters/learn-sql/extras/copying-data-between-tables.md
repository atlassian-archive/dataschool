---
title: Copying Data Between Tables
meta_title: Copying Data Between Tables in a Postgres Database
description: Learn to copy data from a table or query into another table using the
  INSERT command in psql.
section: Extras
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/blake.md
- _people/matt.md
image: /assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_3.png
img_border_on_default: false
is_featured: false
feedback_doc_url: https://docs.google.com/document/d/13CikUhX31sfe_ouqeKRCZPr14TIxi45wzQksXs9yaJE/edit?usp=sharing
is_under_construction: false

---
**Copy into a new pre-structured table:**
```sql
CREATE TABLE [Table to copy To]
AS [Table to copy From]
WITH NO DATA;
```
\- Note: “WITH NO DATA” specifies that the new table should only copy the table structure with no data

**Copy into pre-existing table:**
```sql
INSERT INTO [Table to copy To]
SELECT [Columns to Copy]
FROM [Table to copy From]
WHERE [Optional Condition];
```
Copying data between tables is just as easy as querying data however it will take a bit longer to run than a normal query. It can be used to update an inventory, create a table that has different permissions than the original, and much more.

## Example:

Take for example a shopkeeper who needs to create a master list of all the items in his store to conduct a store-wide audit. However the data he needs exist in separate tables containing the inventories of each department:

![List of available Tables](/assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_1.png)

In order to create a master list that contains all of the store's items and prices the shopkeeper needs to create the table for all items and copy the data from each of the departments into the new table.

### Creating the table

The shopkeeper needs to first make a new table to contain the data. The master list needs to have the same table structure (columns, data-types, etc.). The easiest way to create a table with the same table structure as a different table is to use:
```sql
CREATE TABLE [New Table] AS TABLE [Old Table] WITH NO DATA;
```
Once filled out, this command will create a new table with the same table structure, but without any data. The shopkeeper can use this to create his master list:

![Creating a blank copy of the table](/assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_2.png)

With this done, the shopkeeper now has the following tables:

![Tables that the shopkeeper has](/assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_3.png)

### INSERT INTO command

Now that the shopkeeper's master list has been created and structured, the data needs to be inserted into the table. This can be done using the INSERT command. This command inserts specified values into a specified table. It is often used to insert single values into tables by running the command as such:

![Inserting an element manually](/assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_4.png)

When using INSERT INTO with the VALUES command it is possible to add entries by hand, however a query can also be used in place of the VALUES command. For example to copy all items from the table “hardware” to the table “masterlist” the following query can be run:

![Inserting using a subquery to copy a table](/assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_5.png)

This query uses a subquery to find all values in “hardware” and then adds them to the “masterlist”. In order to copy data from all the tables, the shopkeeper can use UNION to merge the tables together in the subquery:

![Using a subquery to copy multiple selections using "UNION"](/assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_6.png)

This gives the shopkeeper the desired result so that he can begin his audit:

![The final resulting table from our previous insert](/assets/images/learn-sql/extras/copying_data_between_tables/copyingBetweenTables_7.png)

### Adding Conditions

Copying data with INSERT INTO can also be done with conditions. For example, if the shopkeeper is only interested in items over $50 these values can be copied by using:
```sql
INSERT INTO masterlist [SELECT statements] WHERE price>money(50);
```
Each SELECT statement can also have its own where statement for table specific conditions. After the table is created and filled it can be manipulated, added to or removed from without affecting the tables the data was copied from.

## Video example
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/Viia9B2EEEw?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Summary

* To copy create a pre-structured table:
  * CREATE TABLE \[Table to copy **To**\] AS \[Table to copy **From**\] WITH NO DATA;
  * Table will be pre structured to handle data from the 'table to copy from'
* Copy into pre-existing table:
  * INSERT INTO \[Table to copy **To**\]
    SELECT \[Columns to Copy\]
    FROM \[Table to copy **From**\]
    WHERE \[Optional Condition\];
* Will create independent copy in the new table

### References

1. [https://www.postgresql.org/docs/9.5/sql-insert.html](https://www.postgresql.org/docs/9.5/sql-insert.html "https://www.postgresql.org/docs/9.5/sql-insert.html")
2. [https://stackoverflow.com/questions/25969/insert-into-values-select-from/25971](https://stackoverflow.com/questions/25969/insert-into-values-select-from/25971 "https://stackoverflow.com/questions/25969/insert-into-values-select-from/25971")
