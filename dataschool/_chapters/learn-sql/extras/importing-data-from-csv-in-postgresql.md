---
title: Importing Data from CSV in PostgreSQL
meta_title: Import Data from a CSV using PostgreSQL
description: This article outlines how to use psql to import data from csv files.
section: Extras
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1zt39uLRSjBc74SXJ-xioYcN9XZDs7NarubmVqn0qrwk/edit?usp=sharing
image: /assets/images/book-covers/learn-sql.png
img_border_on_default: false
is_featured: false
is_under_construction: false

---
# Importing from CSV in PSQL

As mentioned in [this](/learn-sql/how-to-export-data-to-csv-or-excel/) article on exporting data to CSV files, CSV files are a useful format for storing data. They are usually human readable and are useful for data storage. As such, it is important to be able to read data from CSV articles and store the data in tables. This can be done in psql with a few commands.

## Syntax:
```sql
COPY [Table Name](Optional Columns)
FROM '[Absolute Path to File]'
DELIMITER '[Delimiter Character]' CSV [HEADER];
```
## Key Details:

There are a few things to keep in mind when copying data from a csv file to a table **before importing the data**:

1. **Make a Table:** There _must_ be a table to hold the data being imported. In order to copy the data, a table must be created with the proper table structure (number of columns, data types, etc.)
2. **Determine the Delimiter:** While CSV files usually separate values using commas, this is not always the case. Values can be separated using '\|'s or tabs (\\t) among other characters. (NOTE: for tab delimited CSV files (also known as TSV files however the CSV command is still used for TSV) use: “DELIMITER E'\\t' ” The 'E' allows for the tab character to be used)
3. **Does the Data Have a Header:** Some CSV files will have Headers while others will not. A Header is a file which contains the column names as the first line of values in the file. If a header is present, include **HEADER** at the end of the query. If there is not a header in the data, do not include **HEADER**.

## Video:
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/l-v6FodULk0?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Example:

Take this list of items as an example:

![list of items used in example](/assets/images/learn-sql/extras/importCSV/exampleCSV.png)

This data contains two columns: 'name' and 'price.' Name appears to be a VARCHAR due to it's different lengths. Price appears to be MONEY. This will help in creating the table to load the CSV file into.

The first step, as stated before, is to create the table. It must have at least two columns, one a VARCHAR type and the other a MONEY type:

![Shows the creation of the table before we can import](/assets/images/learn-sql/extras/importCSV/createTable.png)

Note: It is also possible to import the csv data to a table with more than 2 columns, however the columns that should be copied to will need to be specified in the query (e.g. **COPY items(item, value) FROM**...).

Now that a table, 'items,' has been created to house the data from the csv file, we can start writing our query. The second step in copying data from CSV is to check the delimiter and the third step is to check for a header. In this case, the delimiter is ',' and there is a header in the file:

![Annotated image showing the CSV file's important characteristics](/assets/images/learn-sql/extras/importCSV/annotatedCSV.png)

Since the header and the delimiter is known, the query can now be written. As before, the syntax is:
```sql
COPY [Table Name](Optional Columns)
FROM '[Absolute Path to File]'
DELIMITER '[Delimiter Character]' CSV [HEADER];
```
So in order to import the csv we will fill out the necessary parts of the query:

* \[Table Name\] - items
* \[Absolute Path\] - this is the location of the csv file. In this example it is on the desktop, so the path is: '/Users/matt/Desktop/items.csv'
* \[Delimiter Character\] - ','
* \[HEADER\] - the data does have a header

So the final query will be:

**COPY items FROM '/Users/matt/Desktop/items.csv' DELIMITER ',' CSV HEADER;**

Running this query will look like:![Running the final query](/assets/images/learn-sql/extras/importCSV/copyToTable.png)

The message COPY 31 indicates that 31 rows were successfully copied from the CSV file to the specified table.

## Summary

* Make a table to store the data
* Determine what delimiter was used
* Verify if a header is exists
* Copy from the csv file
