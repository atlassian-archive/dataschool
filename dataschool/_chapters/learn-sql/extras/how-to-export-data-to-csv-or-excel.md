---
title: How to Export PostgreSQL Data to a CSV or Excel File
short: Export CSV
meta_title: Export PostgreSQL Data to a CSV or Excel File
description: Learn how to export PostgreSQL data to a CSV or Excel file. Follow these
  instructions to copy tables, copy a query results, and open CSV files.
section: Extras
number:
authors:
- _people/dave.md
reviewers:
- _people/matt.md
image: /assets/images/book-covers/learn-sql.png
img_border_on_default: false
is_featured: false
is_under_construction: false

---
PostgreSQL has some nice commands to help you export data to a Comma Separated Values (CSV) format, which can then be opened in Excel or your favorite text editor.  

To copy data out first connect to your PostgreSQL via command line or another tool like PGAdmin.  

## Copying Full Tables

To copy a full table to a file you can simply use the following format, with *\[Table Name\]* and *\[File Name\]* being the name of your table and output file respectively.

```sql
COPY [Table Name] TO '[File Name]' DELIMITER ',' CSV HEADER;
```

For example, copying a table called *albums* to a file named */Users/dave/Downloads/albums.csv* would be done with.  

```sql
COPY albums TO '/Users/dave/Downloads/albums.csv' DELIMITER ',' CSV HEADER;
```

Note, PostgreSQL requires you to use the full path for the file.  

## Copying a Query Result Set

Besides exporting full tables you can also export the results of a query with the following format where *[Query]* and *[File Name]* are your query and output file name respectively.

```sql
COPY ([Query]) TO '[File Name]' DELIMITER ',' CSV HEADER;
```

For example, the following query exports all the blues (genre #6) tracks from a table.

```sql
COPY (SELECT * FROM tracks WHERE genre_id = 6) TO '/Users/dave/Downloads/blues_tracks.csv' DELIMITER ',' CSV HEADER;
```

## Opening

After you have run the copy command you can then open the .CSV file(s) with Excel or your favorite text editor.

![figure 1](/assets/images/learn-sql/extras/export-csv/sql-tutorial-export-csv.png)

Did you know, that you can also import data from CSV or Excel files into PostgreSQL?
