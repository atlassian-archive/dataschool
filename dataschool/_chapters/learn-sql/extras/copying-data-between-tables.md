---
section: extra
title: Copying Data Between Tables
number: 
authors:
- author: _people/matthew-layne.md
reviewers:
- reviewer: _people/blake.md
- reviewer: _people/matt.md
image: ''
summary: This article discusses how to copy data from a table or query into another
  table using the INSERT command in psql
is_featured: false
writers:
  writers:
  - _people/matthew-layne.md
published: false

---
# **Copying Data Between Tables**

**Copy into a new pre-structured table:**

CREATE TABLE \[Table to copy **To**\] AS \[Table to copy **From**\] WITH NO DATA;

\- Note: “WITH NO DATA” specifies that the new table should only copy the table structure with no data

**Copy into pre-existing table:**

INSERT INTO \[Table to copy **To**\]

SELECT \[Columns to Copy\]

FROM \[Table to copy **From**\]

WHERE \[Optional Condition\];

Copying data between tables is just as easy as querying data however it will take a bit longer to run than a normal query. It can be used to update an inventory, create a table that has different permissions than the original, and much more.

## Example:

Take for example a shopkeeper who needs to create a master list of all the items in his store to conduct a store-wide audit. However the data he needs exist in separate tables containing the inventories of each department:

![List of available Tables](https://lh5.googleusercontent.com/TureoI_0_YSW85MLK6B9I1rLdHUhmL9-VQIcVgQ001cUjp1wHyGHdym9EMQW9yvmTqtekLF44xBdcLOxVpgAFBN1NRJrmyIdBksllNvsfsznGbKxhgtEZUdgMm_FlN0HRlbG_aKm "List of Tables" =355x167)

In order to create a master list that contains all of the store’s items and prices the shopkeeper needs to create the table for all items and copy the data from each of the departments into the new table.

### Creating the table

The shopkeeper needs to first make a new table to contain the data. The master list needs to have the same table structure (columns, data-types, etc.). The easiest way to create a table with the same table structure as a different table is to use:

CREATE TABLE \[New Table\] AS TABLE \[Old Table\] WITH NO DATA;

Once filled out, this command will create a new table with the same table structure, but without any data. The shopkeeper can use this to create his master list:

![Creating a blank copy of the table](https://lh6.googleusercontent.com/5HyyWyXrCnJJK94C6-S2kOGDkT_ja1UYkdeA1qeTofgJEbjjOcvTqLe1tVGlbnr_UkjYnUTlWTKkIj98zIBTD4SdswAxJqvzfKcVwNo9UbclXWcBjahP8h8jVA0T3QXFUpu7kgTe "Creating blank copy" =624x40)

With this done, the shopkeeper now has the following tables:

![](https://lh6.googleusercontent.com/UCkJNUE_uQbIUsb4lQW1K2rJogCEYwLSfr_SY6PulMb_9PodvjIjjyfdc6dzrYMoluI0PPZnE3xH6VqmYEOX7DGUaQilOL2kzHfAwIqgtZcReGe-kXBdxmUsAXgJcVrc4VBbcBAj =624x268)

### INSERT INTO command

Now that the shopkeeper’s master list has been created and structured, the data needs to be inserted into the table. This can be done using the INSERT command. This command inserts specified values into a specified table. It is often used to insert single values into tables by running the command as such:

![Inserting an element manually](https://lh4.googleusercontent.com/KerKUDDIGUHkA8XzvGmOSHzcqnyBA7DxjY3-vc_fAzzj2oIN8NIhN1ySkGc8xVh-Tc2TAMY574UjguT1mbqvLmwQWYOgCWYtXFc54dI7rRnh4lVVAZCngtTdGU_ovvdv8W3808Oc "Inserting by hand" =590x47)

When using INSERT INTO with the VALUES command it is possible to add entries by hand, however a query can also be used in place of the VALUES command. For example to copy all items from the table “hardware” to the table “masterlist” the following query can be run:

![Inserting using a subquery to copy a table](https://lh3.googleusercontent.com/VPUcUIwnUI5rVCMVeWyPMYsi3lTw9_11MY5A5dJc_HGjJG1LbhW3LD8z_8qEvBDLlkVTPp52eN_iBcmCn2S4w8ePSBh1QfI9yySTfYObmtN5hzEtWscOb_vkP6TNRYW_R5T2ioes "Insert from table" =629x46)

This query uses a subquery to find all values in “hardware” and then adds them to the “masterlist”. In order to copy data from all the tables, the shopkeeper can use UNION to merge the tables together in the subquery:

![Using a subquery to copy multiple selections using "UNION"](https://lh4.googleusercontent.com/bf1PdCK0VdaPeVJeTpRuA0lUCooglZttRnCayzNkWX8QcwmdfuXikfdD3QRxJUPAraO6m4oTHRm0IvE1HGBCOCCiS9K5FxsGjUm79p_ltA3xvMKm-FgKWInYJhAmDRydRum5zsY- "Copying multiple tables" =669x47)

This gives the shopkeeper the desired result so that he can begin his audit:

![The final resulting table from our previous insert](https://lh3.googleusercontent.com/XsB4jrTsoT3hFObP1As4RBISzuwCFgvm61G9X0Sm--s4HON6P-S7qPAQHoHfydJGivdbyv_RHqb8cecgPOnezUMldFXcDNTc1cmOGuWvAxf81tid-k-ZJUacfQnjVKbrRbXP3AyY "Final Table" =210x484)

### Adding Conditions

Copying data with INSERT INTO can also be done with conditions. For example, if the shopkeeper is only interested in items over $50 these values can be copied by using:

INSERT INTO masterlist \[SELECT statements\] WHERE price>money(50);

Each SELECT statement can also have its own where statement for table specific conditions. After the table is created and filled it can be manipulated, added to or removed from without affecting the tables the data was copied from.

## Summary

* To copy create a pre-structured table:
  * CREATE TABLE \[Table to copy **To**\] AS \[Table to copy **From**\] WITH NO DATA;
  * Table will be pre structured to handle data from the ‘table to copy from’
* Copy into pre-existing table:
  * INSERT INTO \[Table to copy **To**\]

SELECT \[Columns to Copy\]

FROM \[Table to copy **From**\]

WHERE \[Optional Condition\];

* Will create independent copy in the new table

### References

1. [https://www.postgresql.org/docs/9.5/sql-insert.html](https://www.postgresql.org/docs/9.5/sql-insert.html "https://www.postgresql.org/docs/9.5/sql-insert.html")
2. [https://stackoverflow.com/questions/25969/insert-into-values-select-from/25971](https://stackoverflow.com/questions/25969/insert-into-values-select-from/25971 "https://stackoverflow.com/questions/25969/insert-into-values-select-from/25971")

[Give Feedback on our Google Doc](https://docs.google.com/document/d/13CikUhX31sfe_ouqeKRCZPr14TIxi45wzQksXs9yaJE/edit?usp=sharing "Link to Google Doc")