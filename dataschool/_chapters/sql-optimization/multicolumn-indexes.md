---
section: Column and Table Optimizations
title: Multicolumn Indexes
meta_title: Creating Multicolumn Indexes in SQL
description: This article walks through what multicolumn indexes are, how to make
  them, and when to use them.
number: 8
authors:
- _people/matthew-layne.md
reviewers:
- _people/blake.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1VN1sAdJYshvQLdkoEJftrBDMFLKQypB2jEh3Pr6Soow/edit?usp=sharing
image: /assets/images/sql-optimization/multicolumn/multiCol_2.png
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time:

---
Multicolumn indexes (also known as composite indexes) are similar to standard indexes. They both store a sorted “table” of pointers to the main table. Multicolumn indexes however can store additional sorted pointers to other columns.

Standard [indexes](https://dataschool.com/sql-optimization/how-indexing-works/) on a column can lead to substantial decreases in query execution times as shown in [this article](https://dataschool.com/sql-optimization/optimization-using-explain/) on optimizing queries. Multi-column indexes can achieve even greater decreases in query time due to its ability to move through the data quicker.

## Syntax

```sql
CREATE INDEX [index name]
ON [Table name]([column1, column2, column3,...]);
```

Multicolumn indexes can:

* be created on up to 32 columns
* be used for [partial indexing](https://dataschool.com/sql-optimization/partial-indexes/)
* only use: [b-tree, GIN, BRIN, and GiST structures](https://www.postgresql.org/docs/current/indexes-types.html)

## Video
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/--c8TnI1Sws?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is a multicolumn index?

Multicolumn indexes are indexes that store data on up to 32 columns. When creating a multicolumn index, the column order is very important. This is due to the structure that multicolumn indexes possess. Multicolumn indexes are structured to have a hierarchical structure. Take for example this table:

![Table that will be used as an example](/assets/images/sql-optimization/multicolumn/multiCol_0.png)

A traditional index on this table would look like this:
![Image of a Traditional Index on the table](/assets/images/sql-optimization/multicolumn/multiCol_1.png)

The index points back to the table and is sorted by year. Adding a second column to the index looks like this:
![Image of a two column index](/assets/images/sql-optimization/multicolumn/multiCol_2.png)

Now the index has pointers to a secondary reference table that is sorted by make. Adding a third column to the index causes the index to look like this:
![Image of a three column index](/assets/images/sql-optimization/multicolumn/multiCol_3.png)

In a three column index we can see that the main index stores pointers to both the original table and the reference table on make, which in turn has pointers to the reference table on model.

When the multicolumn index is accessed, the main portion of the index (the index on the first column) is accessed first. Each entry in the main index has a reference to the row‘s location in the main table. The main index also has a pointer to the secondary index where the related make is stored. The secondary index in term has a pointer to the tertiary index. Because of this pointer ordering, in order to access the secondary index, it has to be done through the main index. This means that this multicolumn index can be used for queries that filter by just year, year and make, or year, make, and model. However, the multicolumn index cannot be used for queries just on the make or model of the car because the pointers are inaccessible.

Multicolumn indexes work similarly to traditional indexes. You can see in the gifs below how using a multicolumn index compares to using both a sequential table scan and a traditional index scan for the following query:

```sql
SELECT * FROM myTable
WHERE year=2017
AND make='ACURA'
AND model='TL';
```

### Table Scan
![gif of a table scan](/assets/images/sql-optimization/multicolumn/multiCol_4.gif)

* Scans every row for correct entry or entries

### Traditional Index
![gif of a traditional index scan](/assets/images/sql-optimization/multicolumn/multiCol_5.gif)

* Can filter out wrong years using the index, but must scan all rows with the proper year.

### Multicolumn Index
![gif of a multicolumn index scan](/assets/images/sql-optimization/multicolumn/multiCol_6.gif)

* Can filter by all 3 columns allowing for much fewer steps on large data sets

From these gifs you can see how multicolumn indexes work and how they could be useful, especially on large data sets for improving query speeds and optimizing.

## Performance

Multicolumn indexes are so useful because, when looking at the performance of a normal index versus a multicolumn index, there is little to no difference when sorting by just the first column. For an example look at the following [query plans](https://dataschool.com/sql-optimization/what-is-a-query-plan/):
![image comparing query plans and run times between traditional and multicolumn index scans on a single filter query](/assets/images/sql-optimization/multicolumn/multiCol_7.png)

These two query plans show that there is little to no difference in the execution time between the standard and multicolumn indexes.

Multicolumn indexes are very useful, however, when filtering by multiple columns. This can be seen by the following:

Create standard index:

```sql
CREATE INDEX standard_index_vehicle_year ON traffic_data(year);
```

Create multicolumn index:

```sql
CREATE INDEX mult_col_idx_vehicle ON traffic_data(year, make, model);
```

Query run in Images:

```sql
EXPLAIN ANALYZE SELECT * FROM traffic_data
WHERE year='2001' AND make='CHEVROLET' AND model='TAHOE';
```

![Comparison between all 3 scans on a query with three filters](/assets/images/sql-optimization/multicolumn/multiCol_8.png)

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

[http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/](http://www.postgresqltutorial.com/postgresql-indexes/postgresql-multicolumn-indexes/)

[https://medium.com/pgmustard/multi-column-indexes-4d17bac764c5](https://medium.com/pgmustard/multi-column-indexes-4d17bac764c5)

[https://www.bennadel.com/blog/3467-the-not-so-dark-art-of-designing-database-indexes-reflections-from-an-average-software-engineer.htm](https://www.bennadel.com/blog/3467-the-not-so-dark-art-of-designing-database-indexes-reflections-from-an-average-software-engineer.htm)
