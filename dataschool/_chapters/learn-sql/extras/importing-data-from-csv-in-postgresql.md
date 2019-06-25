---
title: Importing Data from CSV in PostgreSQL
meta_title: Importing Data from CSV in PostgreSQL
description: This article outlines how to use psql to import data from csv files.
section: extras
number: 
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1zt39uLRSjBc74SXJ-xioYcN9XZDs7NarubmVqn0qrwk/edit?usp=sharing
image: 
img_border_on_default: false
is_featured: false

---
# Importing from CSV in PSQL

As mentioned in [this](/learn-sql/how-to-export-data-to-csv-or-excel/) article on exporting data to CSV files, CSV files are a useful format for storing data. They are usually human readable and are useful for data storage. As such, it is important to be able to read data from CSV articles and store the data in tables. This can be done in psql with a few commands.

## Syntax:

    COPY [Table Name](Optional Columns) 
    FROM ‘[Absolute Path to File]’ 
    DELIMITER ‘[Delimiter Character]’ CSV [HEADER];

## Key Details:

There are a few things to keep in mind when copying data from a csv file to a table **before importing the data**:

1. **Make a Table:** There _must_ be a table to hold the data being imported. In order to copy the data, a table must be created with the proper table structure (number of columns, data types, etc.)
2. **Determine the Delimiter: While CSV files usually separate values using commas, this is not always the case. Values can be separated using ‘|’s or tabs (\\t) among other characters. (NOTE: for tab delimited CSV files (also known as TSV files however the CSV command is still used for TSV) use: “DELIMITER E‘\\t’ ” The ‘E’ allows for the tab character to be used)**
3. **Does the Data Have a Header:** Some CSV files will have Headers while others will not. A Header is a file which contains the column names as the first line of values in the file. If a header is present, include **HEADER** at the end of the query. If there is not a header in the data, do not include **HEADER**.

## Example:

Take this list of items as an example:

![](https://lh3.googleusercontent.com/PE0O_u78X-__TB_RtfZYCu6ISURCZHnx6MPpVQneXIpkd2PVP52wguqKVgrBQXsSXyYOluqgQi5rTREaGjVetftntcSZ5l1-63D_30X4-bDeVVFTawt8NKGOwetjBkkgRqFsJ2fr =200x636)

This data contains two columns: ‘name’ and ‘price.’ Name appears to be a VARCHAR due to it’s different lengths. Price appears to be MONEY. This will help in creating the table to load the CSV file into.

The first step, as stated before, is to create the table. It must have at least two columns, one a VARCHAR type and the other a MONEY type:

![](https://lh4.googleusercontent.com/ahqlG1qAUrtrvan33pas-3GDonrGSv6EnH-rsUaPvUmD4ORoooFHy_arJrAUZZOagQoBl_49-p1PF1S560gUwDTr9T0gWQgpZCO6jonGx23nkMMzOhUwRkLWezWgbrCqrD37uQ2b =624x48)

Note: It is also possible to import the csv data to a table with more than 2 columns, however the columns that should be copied to will need to be specified in the query (e.g. **COPY items(item, value) FROM**...).

Now that a table, ‘items,’ has been created to house the data from the csv file, we can start writing our query. The second step in copying data from CSV is to check the delimiter and the third step is to check for a header. In this case, the delimiter is ‘,’ and there is a header in the file:

![](https://lh5.googleusercontent.com/ZjAkM2TLY06x3f3dkWRWYJHzdptzveXpwcJlGijwwQNNNuD7ZDH7kjhjXcYy0jxCThTBxGnAbJcOTrzTrNpyX1f3Cwx_MlY1TNWJF474LjLCDF0UJRrnlax8aKZDTVwlurJOrQ1L =400x149)

Since the header and the delimiter is known, the query can now be written. As before, the syntax is:

    COPY [Table Name](Optional Columns) 
    FROM ‘[Absolute Path to File]’ 
    DELIMITER ‘[Delimiter Character]’ CSV [HEADER];

So in order to import the csv we will fill out the necessary parts of the query:

* \[Table Name\] - items
* \[Absolute Path\] - this is the location of the csv file. In this example it is on the desktop, so the path is: ‘/Users/matt/Desktop/items.csv’
* \[Delimiter Character\] - ‘,’
* \[HEADER\] - the data does have a header

So the final query will be:

**COPY items FROM ‘/Users/matt/Desktop/items.csv’ DELIMITER ‘,’ CSV HEADER;**

Running this query will look like:![](https://lh3.googleusercontent.com/Luectf-jbn1tqmENcHnXC-yN7QQtKvk1WJSkk8tL5Cxm3aFjxw_F5BNvCfC2sbVN2JFFoRHl8FECcRIHJK9-qYPhKcJNTiZNhJFMFjbQNL7oObrL2EWUywbBFEuWumlda0qahIHG =624x33)

The message COPY 31 indicates that 31 rows were successfully copied from the CSV file to the specified table.

## Summary:

* Make a table to store the data
* Determine what delimiter was used
* Verify if a header is exists
* Copy from the csv file