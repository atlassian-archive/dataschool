---
section: book
title: How Window Functions work
meta_title: ''
description: ''
number: 200
authors:
- _people/blake.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1-baqTQWPYoOB_IFykR9DZcqiAXA0B6SGE_51UhMOyOI/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: true
published: false

---
# **What are Window Functions?**

Window functions create a new column based on calculations performed on a subset or “**window**” of the data. This window starts at the first row on a particular column and increases in size unless you constrain the size of the window.

\`\`\`sql

SELECT Day, Mile Driving,

SUM(Miles Driving) OVER(ORDER BY Day) AS Running Total

FROM Running total mileage visual;

\`\`\`

![](https://lh6.googleusercontent.com/CskgXytbaHd1Kpn3bh7dGDIE0W0spjIoajfzNNX2GO3S7Z29QiEMvwhkgXTMwpxi3vU0myZL2YvZuwxiLxL3kiTwKwna3sOBnnxfMhhjLpdVhwncehfy6lgOQNr79vCHVLSW-9lw =600x234)

Here we can see it perform an aggregation of what is in side of the window. The window grows each row and so it aggregates more and more of the data giving you a running aggregation, in this case a running total.

If we constrain the window to be 3 rows tall we can get a 3 day running average.

\`\`\`sql

SELECT Day, Daily Revenue,

AVG(Daily Revenue) OVER(ORDER BY Day ROWS 2 PROCEEDING)

AS 3 Day Average FROM Running Average Example;

\`\`\`

![](https://lh3.googleusercontent.com/u07O-HM8JFb7LGIfUMHpir9LiP56JcoWDK2ujFAqIOsKj_a-D8kzNQNyK6XtC2XvUdT_VcIV3O6LBtfsDa2KIUrNK9grXfyewGD4K53B4rS5wWbTTMbIaYhkyX7ahxsP8Y7ff0RF =600x349)

The window still starts as a single row, then it grows to its fixed size and then the whole window shifts along with it.

Window functions also work on partitioned data (grouped data). It first sorts the data then applies the aggregate function on those groups, putting the result in the new column for each row in that group.

Below, you can see an example of this calculating the total revenue a business makes on the weekend vs the rest of the week.

\`\`\`sql

SELECT Day, Weekend, Daily Revenue,

SUM(Daily Revenue) OVER(PARTITION BY Weekend) AS Total

FROM Partitioned Total Example;

\`\`\`

![](https://lh6.googleusercontent.com/TItaKMN5kzCFGme6zdzUQFED3qoDBsdDErflFCHImp1cBodugUG1EyswJy4kX62DyCJWmQiCBQ_ySzvbYJg4ROcRau1FS1csfud-xf9nsj4GcK4Ub94n3W1v-IPbegYUBHT-ywJp =600x418)

Window functions are very similar to aggregation functions, in fact every window function applies an aggregation within it. The difference are:

**Output:**

* Aggregations produce a single row of output for rows the aggregation was applied to
* Window functions produce a new column of data that is the same number of rows as the data it was applied to.

**Subsetting the data:**

* Aggregations are applied to data that is grouped categorically or across the whole data set.
* Window functions are applied to the data within a window. The window can scale in size with each row, be constrained to a specific amount of rows, or can fit groups.

Let’s look at the first example above if we applied an aggregation instead of a window function to it.

Window Function:

\`\`\`sql

SELECT Day, Mile Driving,

SUM(Miles Driving) OVER(ORDER BY Day) AS Running Total

FROM Running total mileage visual;

\`\`\`

Aggregate:

\`\`\`sql

SELECT SUM(Miles Driving) FROM Running total mileage visual AS Sum of Miles Driving;

\`\`\`

![](https://lh6.googleusercontent.com/Dspqz4dEF-yMOEB-ruj86uTurkmIcMm1j_GaL1ja9X7XWlgpxVf7bZYcBdiJGSdrFJb-8E_h_-BDk9CBGtoS9gimVbERNl4U0XZYTo0W4dL84bAQq5pm2eIyXo3kFFBe0c4w5yoP =624x324)

Window Functions can be used to create running totals, moving averages and much more. The three main keywords to create a Window Function are:

* OVER
* PARTITION BY
* ORDER BY

OVER - Indicates the beginning of a Window Function, this causes the results of the aggregation to be added as a column to the output table.

PARTITION BY - Creates groups of data in the table, that the aggregation will be performed on.

ORDER BY - Sorts the data based on the given column.

Now, let's look at these keywords within a full query.

### **Syntax**

SELECT (**Optional**: The data you want to select),

\[aggregate function\](The column to perform the aggregate function on)

OVER(**Optional**: PARTITION BY and/or ORDER BY) AS (Descriptive name) FROM (corresponding table);

Going back to the first example the query would look like:

SELECT “Date”, “Miles Driving”,

SUM(“Miles Driving”) OVER(ORDER BY “Date”) AS “Running Total”

FROM “Running Total Mileage”;

The SUM keyword shows that the query is looking for the SUM of the “Miles Driving” column, shown OVER the whole table, ORDERed BY the date the mileage will occur.

### **Example**

The example below uses the Chinook database with PostgreSQL 11. The “Track” table in the Chinook database is a large, informational table on many different songs by many different artists:

![](https://lh3.googleusercontent.com/Wr1E8xoSwJwRYbUmCrwZDr7QacmQdZ0EJHEqBSqKgVmH65BHKuEXoTBVRpX4dejXiKjni18QSpNUUy9xKV86_a21u7psJ6VIpsyxE86QFyBo9ygFAA3cxKETKmNZbvJzWwbXeQnP =624x88)

If you wanted to create a column displaying the average song length you can do so like:

**SELECT Track.Name, Track.Milliseconds**

**AVG(Track.Milliseconds) OVER() AS “AverageSongLength”**

**FROM “Track” LIMIT 20;**

![](https://lh4.googleusercontent.com/xD33QdMN4866b1BR3faLIIkE8waLyEk3CfjI1M_Hx_v-qCU3Ubq2YM4qQFZwyrhTyLwEkxSpuuhM6lv8_FjT5EP4B433cPDhxy596yqKpSwueq1r_uruQV6phPLLhuTxCbHugoGt =624x449)

You can see the “AverageSongLength” is stored in the last column and is the same for every row. This can help you visualize and compare songs that are longer or shorter than the “AverageSongLength”.

## **Organizing with Window Functions**

### **Using PARTITION BY**

PARTITION BY is used to group the data before performing an aggregate function so that the aggregation runs on each category independently.

#### **Syntax**

SELECT (The data you want to select),

\[aggregate function\](The column to perform the aggregate function on)

OVER(PARTITION BY \[category to **group** by\]) AS (descriptive name)

FROM (appropriate table);

#### **Example**

If you wanted to compare the average length of a song by the genre of the song, you can run the same query as above just adding the partition:

**SELECT Track.Name, Track.Milliseconds**

**AVG(Track.Milliseconds) OVER(PARTITION BY Track.GenreId)**

**AS “AverageSongLength”**

**FROM Track ORDER BY Track.Name ASC LIMIT 20;**

![](https://lh6.googleusercontent.com/CGGzsmjIZsr4zkBlYCGsGEMsVsb5730QaGJ55Ke_GL24Dwq5wn3dwtUUDNid4hnUbe0zdgkBlxYA-N9IvaXd77oKZxsDy64dkDvtYHxhJf3XeCGC7ARmWz01LeQT99kP-DLNw2Sy =624x259)

You can see that the average song length from the first example is not the same average song length for all songs grouped by their genres.

### **Using ORDER BY**

Traditionally, ORDER BY is called on the whole table(as seen above) and will sort the table by the given column. There are two circumstances ORDER BY can be used in:

1. **Without PARTITION BY:** ORDER BY will sort like the traditional ORDER BY while also causing the aggregate function to be applied incrementally, providing a new, recalculated value for every row in the table.(first example below)
2. **With PARTITION BY:** ORDER BY will sort each partition individually by the given column.

#### **Example**

If you had the data for the daily steps taken by an individual:

_![](https://lh6.googleusercontent.com/NFTLGExw2WdsuasCDm9Yqz2RL_KlAE2wDkmRKN8ftjcy2RaWHCalI3VOh019GS1inxyoL59GP5CagdxKOtrUEjAI3QlB68fdZw6SVSsfGVHV4P8f2l9NYBwLSmNaIy4TYjopSVyH =624x304)_

You could begin to find the average number of steps someone has taken in a week to determine their weekly activity levels:

SELECT Date, “Steps Taken”,

AVG(“Steps Taken”) OVER(ORDER BY Date) AS “Average Steps Taken”

FROM “Steps Taken Daily”;

![](https://lh4.googleusercontent.com/xKUoocXACeUX18SNVE6rNOYyIkAuuyMH3DBNeaBEEleQxxf6xODiaqXBZXyDc1RUhc-QZET3AOeiQTGMAwvpeJZ2yeP2zsKzcfwnk2rjBiO6UtXU8W2sAW0bsrFfbp_o9TBHNmzy =624x301)

You should notice that, since ORDER BY was used alone, the AVG function is taken as the “running average”. So the AVG is recalculated in every row.

We could also use PARTITION BY with ORDER BY, implementing a weekend indicator, to separate weekday activity from weekend activity:

SELECT Date, Weekend, “Steps Taken”,

AVG(“Steps Taken”) OVER(PARTITION BY Weekend ORDER BY Date)

AS “Average Steps Taken” FROM “Steps Taken Daily”;

![](https://lh6.googleusercontent.com/dM_jMOYWfBdZr-5ONzPbmfIwWfDYLqnpu4Uwk91a5U_HYUC3IrKQmqzm81i0JzJgfL7zzFmEYnKV7jSd1NBajipSEzun6QZhwiycBu3kEQb23ZkEsjH-NWtQSu34xqfUo24qME2N =624x320)

Looking at the data above, you can see that when used with PARTITION BY, ORDER BY does not create a “running average”. Again, note that Window Functions do not return two new rows just displaying the average steps from during the week and on the weekend, the average is displayed as a new column on the end of the data.

### **Controlling the Window**

## **Summary**

* A window function does not cause rows to become grouped into a single output row, it creates a whole output column.
* A window function can be broken into groups and organized easily with keywords like: PARTITION BY and ORDER BY.
  * PARTITION BY- Divides the aggregate function results between different groupings of data.
  * ORDER BY- Organize the data being worked on by the aggregate functions and create running calculations

### **References**

[https://mode.com/sql-tutorial/sql-window-functions/](https://mode.com/sql-tutorial/sql-window-functions/ "https://mode.com/sql-tutorial/sql-window-functions/")

[https://www.postgresql.org/docs/9.1/tutorial-window.html](https://www.postgresql.org/docs/9.1/tutorial-window.html "https://www.postgresql.org/docs/9.1/tutorial-window.html")