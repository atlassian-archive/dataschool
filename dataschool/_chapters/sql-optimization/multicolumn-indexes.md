---
section: book
title: Multicolumn Indexes
meta_title: Creating Multicolumn Indexes in SQL
description: This article walks through what multicolumn indexes are, how to make
  them, and when to use them.
number: 80
authors:
- _people/matthew-layne.md
reviewers:
- _people/blake.md
- _people/matt.md
feedback_doc_url: https://www.quora.com/How-do-you-export-to-CSV-from-PostgreSQL
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time: 
published: false

---
Multicolumn indexes (also known as composite indexes) are similar to standard indexes. They both store a sorted “table” of pointers to the main table. Multicolumn indexes however can store additional sorted pointers to other columns.

Standard [indexes](https://dataschool.com/sql-optimization/how-indexing-works/) on a column can lead to substantial decreases in query execution times as shown in [this article](https://dataschool.com/sql-optimization/optimization-using-explain/) on optimizing queries. Multi-column indexes can achieve even greater decreases in query time due to its ability to move through the data quicker.

## Syntax

\`\`\`sql

CREATE INDEX **\[index name\]** ON **\[Table name\]**(**\[column1, column2, column3,...\]**);

\`\`\`

Multicolumn indexes can:

* be created on up to 32 columns
* be used for [partial indexing](https://dataschool.com/sql-optimization/partial-indexes/)
* only use: [b-tree, GIN, BRIN, and GiST structures](https://www.postgresql.org/docs/current/indexes-types.html)

## What is a multicolumn index?

Multicolumn indexes are indexes that store data on up to 32 columns. When creating a multicolumn index, the column order is very important. This is due to the structure that multicolumn indexes possess. Multicolumn indexes are structured to have a hierarchical structure. Take for example this table:

![](https://lh3.googleusercontent.com/97cMxdX3Pxw45SQK7YxjMM9ywSvYPsC27036UXcS82EqaI-RmrXrjNrsCxUFAMEkf94SeUq4xMMscBX0-_TtK_YVCs-6FkFlli8Tu0_HD6irWpYmE1U3qn_ybzVGKNIJFG5Vi-AZ =492x196)

A traditional index on this table would look like this:![](https://lh6.googleusercontent.com/vON61f8_409JipXG8cJrn6c5KFfX-S6C0-m6IKhnbkYoSOVpfA9HTx2xn7SIprXN37J1Zwvfop8sQNEsDMQ-PvvNyQKtj9SwT-faqc94x8E0ajk0c6A5PljQv7Z0KY_aSVWZujK4 =522x364)

The index points back to the table and is sorted by year. Adding a second column to the index looks like this:![](https://lh6.googleusercontent.com/oJ5x6pzW9g-fOGx349-TTCEkM9zkn3q2YXfvFP_JoJRKH2X9QBBDbimIG_X5QDFnCp7NUIkWnLdZymzr4qkgM8bjuIGKbgqv88Q_AA0W9egl_TB5QbEyAzml4XIZ9O1G_fOmWosu =624x341)

Now the index has pointers to a secondary reference table that is sorted by make. Adding a third column to the index causes the index to look like this:![](https://lh4.googleusercontent.com/KBrqEK4hJUEMk-5kIfOW-ZYfVttbLOc_ChHjbNiGb9O56_VWJe5ok33LVVIrE96f_7UCe3xR43YCiszDiC8I2pK1DVy9nzd36Ber9H1FvjRJ10LaccXe1giSFzMNazipq5v6BuMh =706x259)

In a three column index we can see that the main index stores pointers to both the original table and the reference table on make, which in turn has pointers to the reference table on model.

When the multicolumn index is accessed, the main portion of the index (the index on the first column) is accessed first. Each entry in the main index has a reference to the row‘s location in the main table. The main index also has a pointer to the secondary index where the related make is stored. The secondary index in term has a pointer to the tertiary index. Because of this pointer ordering, in order to access the secondary index, it has to be done through the main index. This means that this multicolumn index can be used for queries that filter by just year, year and make, or year, make, and model. However, the multicolumn index cannot be used for queries just on the make or model of the car because the pointers are inaccessible.

Multicolumn indexes work similarly to traditional indexes. You can see in the gifs below how using a multicolumn index compares to using both a sequential table scan and a traditional index scan for the following query:

\`\`\`sql

SELECT * FROM myTable

WHERE year=2017

AND make=’ACURA’

AND model=‘TL’;

\`\`\`

### Table Scan![](https://lh3.googleusercontent.com/FXRyMgLY4SNyBXnFQRKkZbsXyChc0XYfGMf7Tf9frG95HXwoR3tVD7HrfxYd8c75pkcxzn3ZXaT68XU7Bir0u94wVKIv0_miYLIJB5pabE1bL81g8UllyAVDbw33XpdMq8_CTcfU =624x168)

* Scans every row for correct entry or entries

### Traditional Index

* Can filter out wrong years using the index, but must scan all rows with the proper year.

### Multicolumn Index

* Can filter by all 3 columns allowing for much fewer steps on large data sets

From these gifs you can see how multicolumn indexes work and how they could be useful, especially on large data sets for improving query speeds and optimizing.

## Performance

Multicolumn indexes are so useful because, when looking at the performance of a normal index versus a multicolumn index, there is little to no difference when sorting by just the first column. For an example look at the following [query plans](https://dataschool.com/sql-optimization/what-is-a-query-plan/):![](https://lh3.googleusercontent.com/b4lhkQtj8QrWVyjDYM_lvRwH1bCXd5e2Caf58wjKJo5DKrakmXyFO-T08GRcn3FjpGxmGUzKfEeuYBl6saGtmG1b2WEP4ZZ93yBlXcOif7LdGykUYThtNwV2b6AjDunsM8a1nThy =439x297)

These two query plans show that there is little to no difference in the execution time between the standard and multicolumn indexes.

Multicolumn indexes are very useful, however, when filtering by multiple columns. This can be seen by the following:

Create standard index:

\`\`\`sql

CREATE INDEX standard_index_vehicle_year ON traffic_data(year);

\`\`\`

Create multicolumn index:

\`\`\`sql

CREATE INDEX mult_col_idx_vehicle ON traffic_data(year, make, model);

\`\`\`

Query run in Images:

\`\`\`sql

EXPLAIN ANALYZE SELECT * FROM traffic_data

WHERE year=’2001’ AND make=’CHEVROLET’ AND model=’TAHOE’;

\`\`\`

![](https://lh3.googleusercontent.com/cD4OdIHGv8JvC5dBLoN1GwWY10OXp_MKPVJlszJx3fBMUe0hT8rqI3goJiTSPdraVwitJLxKrCNkCSnJM4v-kMNeft32kKMGF9Kd-jHLhskQSFX8IPoCPa4fG6Ynv2b7tTY2DsaC =654x553)

The table above shows the execution times of each index on the given query. It shows clearly that, in the right situation a multicolumn index can be exactly what is needed.

## Summary

* Multicolumn indexes:
  * Can use b-tree, BRIN, GiST, and GIN structures
  * Can be made on up to 32 columns
  * Can be used for [Partial Indexing](https://dataschool.com/sql-optimization/partial-indexes/)
* Perform comparably to traditional indexes on their single column
* Perform much better once additional Columns are added to the query.
* Column order is very important.
  * The second column in a multicolumn index can never be accessed without accessing the first column as well.

### References

[http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/](http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/ "http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/")

[https://medium.com/pgmustard/multi-column-indexes-4d17bac764c5](http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/ "http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/")

[https://www.bennadel.com/blog/3467-the-not-so-dark-art-of-designing-database-indexes-reflections-from-an-average-software-engineer.htm](http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/ "http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/")