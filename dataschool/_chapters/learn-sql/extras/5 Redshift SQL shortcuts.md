---
section: Extras
title: 5 Redshift SQL shortcuts
meta_title: 5 Redshift SQL shortcuts to learn
description: Learn how to use row number, date trunc, mod, split part, and rename
  to improve your queries.
authors:
- _people/josh-richman.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1j8_EWT1AWsDimIGeXCXAZQBw7_3Y2Ur-fTKUY65nU4w/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5
faqs: []

---
These are 5 Redshift SQL commands can revolutionize your ability to analyze data effectively and efficiently:

1\. ROW_NUMBER

2\. DATE_TRUNC

3\. MOD

4\. SPLIT_PART

5\. RENAME

Below, I'll give a little description of what each function can do and a quick example of how it helps save time and cleans up your code. (Note: all syntax will be reflective of [Redshift's version of PostgreSQL](http://docs.aws.amazon.com/redshift/latest/dg/cm_chap_SQLCommandRef.html), and all snippets come from their [documentation](http://docs.aws.amazon.com/redshift/latest/dg/redshift-dg.pdf#r_Examples_of_WF_ROW_NUMBER_WF).)

## ROW_NUMBER

```sql
SELECT salesid, sellerid, qty,
	ROW_NUMBER() OVER 
    (PARTITION BY sellerid ORDER BY qty asc) AS row
FROM winsales
ORDER BY 2,4;
```

| salesid | sellerid | qty | row |
| --- | --- | --- | --- |
| 10006 | 1 | 10 | 1 |
| 10001 | 1 | 10 | 2 |
| 10005 | 1 | 30 | 3 |
| 20001 | 2 | 20 | 1 |
| 20002 | 2 | 20 | 2 |
| 30001 | 3 | 10 | 1 |
| 30003 | 3 | 15 | 2 |
| 30004 | 3 | 20 | 3 |
| 30007 | 3 | 30 | 4 |
| 40005 | 4 | 10 | 1 |
| 40001 | 4 | 40 | 2 |

(11 rows)

Think about customers with multiple purchases. We want the most recent purchase for each customer, even if it didn't happen today.

With no single date or date range to attach to all customers, we could find the most recent transaction date for each customer and then join the same transactions table to itself where the transaction date equals the customer's most recent transaction date and the customer ID matches.

The more elegant way is to use the [ROW_NUMBER](http://docs.aws.amazon.com/redshift/latest/dg/r_WF_ROW_NUMBER.html) function.

Here we can assign an order to the transactions, grouped however you choose (in this case, by customer) and ordered however you choose (in this case, by transaction date descending, so the most recent orders for each customer are the same number: 1).

Then filter your results to only include the rows that are in the position you care about - in this case, 1. If you want to see the most recent transaction for each customer for each product they've bought, just partition by both customer and the product, and your row numbering will restart with each new customer/product combination.

There are so many other uses for row numbers when trying to clean or organize your data based on some ordinal parameter.

## DATE_TRUNC

```sql
SELECT date_trunc('week', saletime), sum(pricepaid)
FROM sales
WHERE saletime like '2008-09%'
GROUP BY date_trunc('week', saletime)
ORDER BY 1;
```

| date_trunc | sum |
| --- | --- |
| 2008-09-01 | 2474899.00 |
| 2008-09-08 | 2412354.00 |
| 2008-09-15 | 2364707.00 |
| 2008-09-22 | 2359351.00 |
| 2008-09-29 | 705249.00 |

(5 rows)

Dealing with [dates and times in SQL](https://dataschool.com/learn-sql/dates/) can be challenging. There are timezones, which sometimes aren’t clearly indicated. There are a variety of data types they could be stored in, and they don’t always play nicely together.our need to aggregate data based on many different segments of time, which all need to be parsed out. DATE_TRUNC is a rounding function for dates that makes it quite simple. It keeps the column in date format (as opposed to EXTRACT, which pulls out a context-free integer), and will truncate the date to whichever date part you desire, be it day, month, year, etc. It's as simple as DATE_TRUNC(datepart, timestamp).

This will become one of your most used Redshift SQL commands.

## MOD

```sql
SELECT catid, catname
FROM category
WHERE mod(catid,2)=1
ORDER BY 1,2;
```

| catid | catname |
| --- | --- |
| 1 | MLB |
| 3 | NFL |
| 5 | MLS |
| 7 | Plays |
| 9 | Pop |
| 11 | Classical |

(6 rows)

Modulo math is usually reserved for more advanced programming languages but can be useful inside of SQL as well. Modulo math is all about determining the remainder of dividing two numbers. 3/2 gives us a remainder of 1 - this would be the modulus. The [MOD](http://docs.aws.amazon.com/redshift/latest/dg/r_MOD.html) command in Redshift lets you perform this function; MOD(3,2) will equal 1.

So why is this valuable? Think about creating training and testing bins for an experiment that were a) replicable and b) more randomly selected than just the splitting my (ordered) dataset into two parts by a date cutoff.

One approach would be to divide each User ID by 3 using the modulo operation MOD(\[UserID\], 3) which would produce one of the 3 different remainders (0, 1, and 2) for each of the users. You could then define the training and test group using these simple numbers. While this type of result can be produced in a number of ways, it feels much cleaner using the MOD function to get a whole number remainder.

## SPLIT_PART

```sql
SELECT listtime,
SPLIT_PART(listtime,'-',1) as year,
SPLIT_PART(listtime,'-',2) as month,
SPLIT_PART(split_part(listtime,'-',3),' ',1) AS date
FROM listing limit 5;
```

| listtime | year | month | date |
| --- | --- | --- | --- |
| 2008-03-05 12:25:29 | 2008 | 03 | 05 |
| 2008-09-09 08:03:36 | 2008 | 09 | 09 |
| 2008-09-26 05:43:12 | 2008 | 09 | 26 |
| 2008-10-04 02:00:30 | 2008 | 10 | 04 |
| 2008-01-06 08:33:11 | 2008 | 01 | 06 |

(5 rows)

[SPLIT_PART](http://docs.aws.amazon.com/redshift/latest/dg/SPLIT_PART.html) takes 3 inputs - the string, the delimiting character, and which part of the newly-split string you want to keep. For example, if you want everything after the question mark in a URL, you can write SPLIT_PART(\[url_string\],'?',2), which gives you the second part of the string after it's split at the point of the (first) '?'. If a character appears multiple times before the segment you are looking for, you can write a nested SPLIT_PART queries. This is a perfect way to parse out UTMs or other URL parameters when the exact position of the sought-after parameter isn’t consistent

## RENAME

```sql
ALTER TABLE venue
RENAME COLUMN venueseats TO venuesize;
```

Spelling mistakes are common, [RENAME](http://docs.aws.amazon.com/redshift/latest/dg/r_ALTER_TABLE_examples_basic.html) helps you to fix these at the table and column level without needing to rebuild the table. RENAME is used within the ALTER TABLE command. The RENAME command does exactly what you'd expect with very minimal code - change the name of your table or column to exactly what you want. No extra tables to delete. No waiting for a table to copy over. Just make sure you aren't referencing this table in a script somewhere without changing the script, too!