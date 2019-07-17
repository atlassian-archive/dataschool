---
section: Column and Table Optimizations
title: Partial Indexes
meta_title: What are Partial Indexes
description: Partial indexes are an advanced database optimization technique. Learn
  how to create Partial Indexes and measure their performance.
number: 7
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
- _people/blake.md
feedback_doc_url: https://docs.google.com/document/d/1awdAqjjHRME_Q8I7kG4tjQ9snArvRLBFhbLWetXY4hU/edit
image: "/assets/images/sql-optimization/partialIndexing/partialIndex_0.png"
is_featured: false
img_border_on_default: true
is_under_construction: false
reading_time: 

---
Partial indexes store information on the results of a query, rather than on a whole column which is what a traditional index does. This can speed up queries significantly compared to a traditional Index if the query targets the set of rows the partial index was created for.

Creating indexes is a common practice to optimize data warehouses, as explored in [this article](https://dataschool.com/learn/how-indexing-works) on traditional indexing. Partial Indexes are less discussed but should be incorporated along with traditional indexes into any optimization strategy due to their dramatic performance effects.

## Basic Partial Index

A partial index can be as simple as an index that stores data on a subsection of a column. Take for example data.gov's dataset on [traffic violations](https://catalog.data.gov/dataset/traffic-violations-56dda) in Montgomery County, MD. This table has many columns that could benefit from partial indexing. Columns that have many distinct groups in them are good for partial indexes as there is a large amount of data in the column. This is because columns like this are often filtered for one particular group.

One example of this is the column **dlstate** (the state that the driver has a driver's license from). There are 71 distinct values (Includes out of country plates like QC for Quebec and includes XX for no plate) in the database for this column. Say you are studying how many Virginia driver's are involved in Montgomery County traffic violations.

We are going to be filtering all our queries to where **dlstate** = “VA” so applying a partial index on the **dlstate** state column where **dlstate** = “VA” will make subsequent queries much faster. For this example we will focus on Virginia:

![Shows the creation of a partial index from a table as well as its traditional index counter part](/assets/images/sql-optimization/partialIndexing/partialIndex_0.png)

The command for creating a Partial Index is the same command for creating a traditional index with an additional WHERE filter at the end:

```sql
CREATE INDEX idx_dlstate_va ON traffic (dlstate) WHERE dlstate='VA';

ANALYZE;
```
![Shows the creation of a partial index and running analyze afterwords](/assets/images/sql-optimization/partialIndexing/partialIndex_1.png)

Let's now look at querying a sample of the data to see why Partial Indexing is much faster than querying the full table or an indexed version of the table.

Lets use a subset of the data and run the following query:

```sql
SELECT COUNT *
FROM traffic
WHERE dlstate='VA';
```
![gif showing a partial index, traditional index, and table all being searched](/assets/images/sql-optimization/partialIndexing/partialIndexGIF.gif)

* Partial Index only has to move through rows where **dlstate** = VA.
* No index has to move through every row to find each place where **dlstate** = VA.
* Traditional index has the data sorted on dlstate but still has to traverse the [b-tree](https://dataschool.com/learn/how-indexing-works) to find where the rows where **dlstate** = VA are.

Remember to **ANALYZE;** after creating an index. **ANALYZE;** will gather statistics on the index so that the query planner can determine which index to use and how best to use it.

NOTE: Indexing will lock out writes to the table until it is done by default. To avoid this, create the index with the CONCURRENTLY parameter:

```sql
CREATE INDEX CONCURRENTLY [index name]
ON [table name (column name(s))] [WHERE [Filter]];
```

## Time Comparisons

Now that the index has been created, and we have an understanding as to how the different types of indexes will be traversed let's compare the query times where there is no index, a full index, and a partial index on the full data set:

### No Index

* The speed of running a COUNT aggregation where the dlstate='VA' with a **No Index** is:

```sql
EXPLAIN ANALYZE SELECT COUNT(*)
FROM traffic WHERE dlstate='VA';
```
![Image showing the query being run with no index](/assets/images/sql-optimization/partialIndexing/partialIndex_2.png)

Speed: 1.79 sec or 1784 ms

### With Traditional Index

* The speed of running a COUNT aggregation where the dlstate='VA' with a **Traditional Index** is:

```sql
EXPLAIN ANALYZE SELECT COUNT(*)
FROM traffic WHERE dlstate='VA';
```
![Image showing the query being run with a traditional index](/assets/images/sql-optimization/partialIndexing/partialIndex_3.png)

Speed: 0.06 sec or 59.7 ms

### With Partial Index

* The speed of running a COUNT aggregation where the dlstate='VA' with a **Partial Index** is:

```sql
EXPLAIN ANALYZE SELECT COUNT(*)
FROM traffic WHERE dlstate='VA';
```
![Image showing the query being run with a partial index](/assets/images/sql-optimization/partialIndexing/partialIndex_4.png)

Speed: 0.02 sec or 17.8 ms

### Speed Comparison:

![Table comparing the different speeds using different indexes](/assets/images/sql-optimization/partialIndexing/partialIndex_5.png)

As this table shows that, while adding an index of either variety is a significant improvement, a partial index is roughly 3.5 times faster than a traditional index in this situation.

## Advanced Partial Indexes

Partial indexes can become more advanced.

Like Traditional indexes:
* Can be Multi-column
* Can use [Different structures](https://www.postgresql.org/docs/current/indexes-types.html)
  * E.g. B-tree, GIN, BRIN, GiST, etc.

Unique to Partial Indexes
* Can use complicated filters
* Smaller storage cost
* More Specific than Traditional Index

### Complicated Filters

It is important to balance how specific the partial index with the frequency of queries that can use it. If the partial index is too specific, it will not be used often and simply be a waste of memory.

For example, a partial index could be created on a column with multiple filters such as the column 'arresttype' where the incident takes place from 4-4:30AM and zipcodes='12':

![Shows the creation of an overly specific partial index](/assets/images/sql-optimization/partialIndexing/partialIndex_6.png)

This would significantly speed up some queries, however this partial index is so specific it may never be used more than a few times.

Sometimes however, if a specific set of filters are used a lot it can dramatically increase performance. This is what makes partial indexes so powerful. If there are a large number of queries regarding specific times between 9am-5pm, we can create an index on serial_id for these times.

![Shows the creation of a reasonable partial index](/assets/images/sql-optimization/partialIndexing/partialIndex_7.png)

This new index will make filtering by times between 9am and 5pm much quicker. This includes times inside this range as well such as 12:00-1:00 pm.

Before Index:
![Query before the index](/assets/images/sql-optimization/partialIndexing/partialIndex_8.png)

After Index:
![Query after the index](/assets/images/sql-optimization/partialIndexing/partialIndex_9.png)

Here the execution time drops from 5013 ms to 247 ms (\~20x faster with index) which shows that partial indexes can save time.

Partial Indexes are also usually less memory intensive than traditional indexes:
![shows the file sizes](/assets/images/sql-optimization/partialIndexing/partialIndex_10.png)

The traditional version of the index is 3 times the size of the partial index. The trade off here is that the traditional index can improve a wide range of queries where as the partial index is more specific, but also faster.

## Summary:

* Partial indexes only store information specified by a filter
* Partial indexes can be very specific
  * This can be good, but make sure to balance practically and memory size. Too specific an index becomes unusable.
* Partial indexes save space compared to traditional indexes

### References:

1. [https://www.postgresql.org/docs/11/sql-createindex.html](https://www.postgresql.org/docs/11/sql-createindex.html "https://www.postgresql.org/docs/11/sql-createindex.html")
2. [https://www.youtube.com/watch?v=clrtT_4WBAw](https://www.youtube.com/watch?v=clrtT_4WBAw "https://www.youtube.com/watch?v=clrtT_4WBAw")