---
title: DATE and TIME Functions
short: DATEs
meta_title: SQL - DATE and TIME Functions
description: DATE and TIME values in PostgreSQL have a whole special set of functions
  and operators for their proper use. Learn how to use dates in PostgreSQL in this
  interactive SQL tutorial, so you can get the DATE and TIME of your data analysis.
number: 110
section: Mid-Level SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
image: "/assets/images/book-covers/learn-sql.png"
is_featured: false
is_under_construction: false

---
DATE and TIME values in {{ page.database }} have a whole special set of functions and operators for their proper use.  So many queries deal with DATE and TIME information that it's important to get to know the date tools.  Below we'll cover and practice the main functions you'll likely need.  If you want to get detailed you can checkout the [full list of {{ page.database }} functions here](https://www.postgresql.org/docs/9.1/static/functions-datetime.html).


## DATE/TIME Datatypes

There are 4 main ways to store date values in a {{ page.database }} database:   

| Data Type      | Description  | Example  | Output  |
|--------------------------|----------------------------------------------------------------------------------------------------------|
| TIMESTAMP | date and time  | `TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}'` |  {{ "now" | date: "%Y-%m-%dT%H:%M:%S" }} |
| DATE      | date (no time)          | `DATE '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}'`      |  {{ "now" | date: "%Y-%m-%d" }} |
| TIME      | time (no day)  | `TIME '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}'`      |  {{ "now" | date: "%H:%M:%S" }} |
| INTERVAL  | interval between two date/times  | `INTERVAL '1 day 2 hours 10 seconds'`        |  1 day, 2:00:10     |

We'll go over more about each of these.

## Date String Formatting

Dates in a database aren't stored as strings, but we input and fetch data from it as if it were a string with the following format for the information:

```sql
YYYY-MM-DD HH:MM:SS
```

where the letters stand for **Y**ear, **M**onth, **D**ay, **H**our, **M**inutes and **S**econds.  Let's say for example that we want to record that we got a new user on {{ "now" | date: '%B %d, %Y' }} at exactly {{ "now" | date: "%H:%M" }}.  To represent that exact date and time we would use the format:

`{{ "now" | date: '%Y-%m-%d %H:%M:00' }}`

TODO: this format is also supported: January 8 04:05:06 1999 PST

To get some familiarity try creating and SELECTing a few TIMESTAMPS below.  I was born on May 1st, 1983 at exactly 4:00am.  Can you fetch that timestamp?

<sqlbox
  initial="SELECT TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}';"
  answer="SELECT TIMESTAMP '1983-05-01 04:00:00';"
  hint="the format would be: 1983-05-01 04:00:00"
  auto-run="true"
></sqlbox>


We're just going to jump in here.  We need to use a different table as none of the previous ones we've been using have had date fields in them.  Another table available to us in chinook is *employees*.  Let's get familiar with what columns are in this table by looking at the first few rows.  Note that there are several columns so you may have to scroll right to see all of the data:

<sqlbox
  initial="SELECT * FROM employees LIMIT 3;"
  autorun="true"
  ></sqlbox>

Each *employee* has two TIMESTAMP columns, one for their *birth_date* and one for their *hire_date*.  You can use all of the ORDERing, GROUPing and other functions we learned for other columns on DATE columns as well.  Try getting a list of the 4 youngest *employees* in the company.

<sqlbox
 answer="SELECT * FROM employees ORDER BY birth_date DESC LIMIT 4;"
 hint="descending order the data by birth_date and limit to just 4 results."
 correct_message="Correct.  Note that the Chinook data is a fairly old example data set."
 ></sqlbox>


## Formatting Dates to Strings

Often you don't want to show the full raw TIMESTAMP, but rather a nicely formatted, potentially truncated version. For example, let's say we want to get a list of the *employees* names and the year that they were hired.  To do so we'll need to parse the *hired_date* to just pull out the year.  We can do so with the TO_CHAR function which works as follows

```sql
TO_CHAR([date type], [pattern])
```

where [date type] is a column or value of any of the above listed date/time data types, and [pattern] is a string indicating how to format the output date.  The main symbols you'll want to use to create your format patterns are here

| Pattern | Description  | Example | Output |
|---------|---------------|-----------|---------|
| HH      | **H**our (01-12) | `TO_CHAR(TIME '4:15 pm', 'HH')`  | 04 |
| HH24    | **H**our (01-24) | `TO_CHAR(TIME '4:15 pm', 'HH24')` | 16 |
| MI      | **M**inute  | `TO_CHAR(TIME '4:15 pm', 'MI')`| 15 |
| SS	    | **S**econds  | `TO_CHAR(TIME '4:15:23 pm', 'SS')`| 23 |
| am      | displays whether time is **am** or pm  | `TO_CHAR(TIME '4:15 pm', 'am')` | am |
| YY      | last 2 digits of the **Y**ear  | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d"  }}', 'YY')` | {{ "now" | date: "%y"  }} |
| YYYY    | 4 digits of the **Y**ear  | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d"  }}', 'YY')` | {{ "now" | date: "%Y"  }} |
| MM     | **M**onth # of the year.  | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'MM')` | {{ "now" | date: "%m"  }} |
| Month   | written **Month** of the year capitalized  | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'Month')` | {{ "now" | date: "%B"  }} |
| Mon     | abbreviated of **Mon**th of year | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'Mon')` | {{ "now" | date: "%b" }} |
| DD      | Day # of the month          | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'DD')` | {{ "now" | date: "%d" }} |
| Day     | written **Day** of the week | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'Day')` | {{ "now" | date: "%A" }} |
| Dy      | abbreviated **D**ay of the week |   `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'Dy')` | {{ "now" | date: "%a" }} |
| WW      | **W**eek # of the year | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'WW')` | {{ "now" | date: "%V" }} |
| Q       | **Q**uarter of the year | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'Q')` | {{ "now" | date: "%m" | divided_by: 4 | plus: 1 }} |
| TZ      | **T**ime**Z**one | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'TZ')` | UTC |


The above patterns can be string together to get the format you eventually want.  Some common outputs are:

<sqlbox
  initial="SELECT TO_CHAR(TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}', 'Day, Month DD YYYY');"
  autorun="true"
  ></sqlbox>

and

  <sqlbox
    initial="SELECT TO_CHAR(TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}', 'YYYY-MM-DD HH:MI:SS');"
    autorun="true"
    ></sqlbox>

and

<sqlbox
  initial="SELECT TO_CHAR(TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}', 'MM/DD/YY');"
  autorun="true"
  ></sqlbox>

You don't have to memorize these (it's hard to!).  It's just good to get familiar with how it works and then reference back to it when you need it in the future.

### Number formatting

There are a couple of extra tools you can use on patterns that output numbers.

| Formatter | Description | Example  | Output |
|-----------|-------------|----------|--------|
| FM        | **F**ill **M**ode will remove any 0's <br>at the front of a 2 digit number. | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-05" }}', 'FMDD')` | 5 |
| th        | adds the ordinal suffixes <br>like **st**, **nd** or **th** to the end of a number | `TO_CHAR(DATE '{{ "now" | date: "%Y-%m-05" }}', 'FMDD')` | 05th |

And of course you can combine the two to get

<sqlbox
  initial="SELECT TO_CHAR(DATE '{{ "now" | date: "%Y-%m-03" }}', 'Month FMDDth');"
  autorun="true"
  ></sqlbox>

### String Formatting

For string outputs, most of the patterns above support different casing output based on the case you use for the pattern.  Some examples using different casings of "Day":

<sqlbox
 initial="SELECT
 TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'DAY') AS &quot;DAY&quot;,
 TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'Day') AS  &quot;Day&quot;,
 TO_CHAR(DATE '{{ "now" | date: "%Y-%m-%d" }}', 'day') AS &quot;day&quot;;"
 autorun="true"
 ></sqlbox>


And you can see the following common date format in UPPERCASE, Capitalized and lowercase formats:

<sqlbox
 initial="SELECT
 TO_CHAR(TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}', 'FMHH:MMAM DAY, MONTH DDTH YYYY') AS &quot;UPPERCASED&quot;,
 TO_CHAR(TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}', 'FMHH:MMam Day, Month DDth YYYY') AS &quot;Capitalized&quot;,
 TO_CHAR(TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}', 'FMHH:MMam day, month FMDDth YYYY') AS &quot;lowercased&quot;;"
 autorun="true"
 ></sqlbox>

 Note that the case for numeric values doesn't change.  Still use DD for the day # of the month and YYYY for year.  

 We're going to move on in the tutorial but if you'd like more details checkout the [full list of {{ page.database }} date formatting functions ](https://www.postgresql.org/docs/9.1/static/functions-formatting.html).


## Current DATE and TIME Functions

{{ page.database }} supports a number of special values, or functions to help bet the current DATE, TIMESTAMP or TIME.  The most used ones are

```sql
CURRENT_DATE
CURRENT_TIME
CURRENT_TIMESTAMP
```

and they are used by just putting them in the query

<sqlbox
  initial='SELECT CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP;'
  ></sqlbox>


## GROUPing BY DATE

In analytic queries, it's very common to group things by dates.  For example you may want to see new users by year, month, week or day.  To do so, you'll want to use the TO_CHAR function to convert the dates into a truncated string before you GROUP BY it.  You don't want to simply GROUP BY the raw date as those are accurate down to the millisecond so grouping by the unaltered date would be like making GROUPs for each millisecond.    

The following examples are using the *hire_date* field from the *employees* table and show a lot of common formats you can use for these groups.  These are what we use at Chartio for our [date group formatting standards](https://support.chartio.com/knowledgebase/date-formatting).

| Group Period | Example SQL                                       | Example Output       |
|==============|===================================================|======================|
| Second       | `TO_CHAR(hire_date, 'YYYY-MM-DD"T"HH24":"MI:SS')` | 2018-03-04T00:00:00	|
| Minute       | `TO_CHAR(hire_date, 'YYYY-MM-DD"T"HH24":"MI')`    | 2018-08-14T00:00	    |
| Hour         | `TO_CHAR(hire_date, 'YYYY-MM-DD"T"HH24')`         | 2018-01-02T00	      |
| Day          | `TO_CHAR(hire_date, 'YYYY-MM-DD')`                | 2003-10-17	          |
| Week         | `TO_CHAR(hire_date, 'IYYY"-W"IW')`                | 2002-W33	            |
| Month        | `TO_CHAR(hire_date, 'YYYY-MM')`                   | 2002-05	            |
| Quarter      | `TO_CHAR(hire_date, 'YYYY"-Q"Q')`                 | 2003-Q2	            |
| Year         | `TO_CHAR(hire_date, '"Y"YYYY')`                   | Y2012                |
| Hour of Day  | `TO_CHAR(hire_date, 'HH24')`                      | 14                   |
| Day of Week  | `TO_CHAR(hire_date, 'FMDay')`                     | Thursday             |
| Day of Month | `TO_CHAR(hire_date,  'DD')`                       | 17                   |
| Day of Year  | `TO_CHAR(hire_date, 'DDD')`                       | 125                  |
| Month of Year | `TO_CHAR(hire_date, 'FMMonth')`                  | October              |

Feel free to try out any of the above formats on the query below:

<sqlbox
  initial='SELECT TO_CHAR(hire_date, &apos;"Y"YYYY&apos;) AS "Year Hired",
    COUNT(*) FROM employees
    GROUP BY "Year Hired";'
></sqlbox>

There are only 8 *employees* in our database so we're not dealing with too many groups there.  You can get a little more granular with the *invoices* table and it's *invoice_date* column with 250 rows.

<sqlbox
  initial='SELECT TO_CHAR(invoice_date, &apos;"Y"YYYY&apos;) AS "Year Invoiced",
    COUNT(*) FROM invoices
    GROUP BY "Year Invoiced";'
    answer='SELECT TO_CHAR(invoice_date, &apos;YYYY-MM&apos;) AS "Month Invoiced",
      SUM(total) FROM invoices
      GROUP BY "Month Invoiced";'
      hint="Use the month group from the above table and SUM the total"
></sqlbox>

The above query returns the number of *invoices* created per year.  Can you modify it to get a SUM of the *total* amount invoiced by month?




<!-- ## DATE INTERVALS

An INTERVAL in SQL is a time difference between two DATEs, TIMEs or TIMESTAMPS.  Whenever you subtract one from the other you get an interval.  The following query returns exactly how old I am at the moment you run it as an INTERVAL.

<sqlbox
  initial="SELECT CURRENT_TIMESTAMP - TIMESTAMP 'May 1 04:00:00 1983 CST';"
  autorun="true"
  ></sqlbox>

Well that's my age in days and seconds anyway.  We could format it better, but it's rare to need to do that with Intervals.

 -->

<!-- # TODO - Finish writing about other date things:
\ - INTERVALS with examples
 -->
