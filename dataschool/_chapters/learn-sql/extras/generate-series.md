---
title: PostgreSQL Generate_Series
meta_title: Generate Series' in PostgreSQL
description: This article outlines how to use PostgreSQL's Generate_Series() function
section: Extras
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
image: /assets/images/learn-sql/extras/genSeries/genSeries_thumbNail.png
img_border_on_default: false
is_featured: false
feedback_doc_url: https://docs.google.com/document/d/1EQcE8NYHvWubJ7bO0b75ng_BogFkCkKqOs3E2EFduPs/edit?usp=sharing
is_under_construction: false

---
# Generate a Series in Postgres

```code
generate_series([start], [stop], [{optional}step/interval]);
```

Generate a series of numbers in postgres by using the `generate_series` function.

The function requires either 2 or 3 inputs. The first input, [start], is the starting point for generating your series. [stop] is the value that the series will stop at. The series will stop once the values pass the [stop] value. The third value determines how much the series will increment for each step the default it 1 for number series

For example:

<sqlbox

initial="SELECT * FROM generate_series(1,10);"

></sqlbox>

Will output the rows: 1,2,3,4,5,6,7,8,9,10

Let’s look at what happens when we start with a number that has a decimal value:

<sqlbox

initial="SELECT * FROM generate_series(0.5, 5);"

></sqlbox>

Will output the rows: 0.5,1.5,2.5,3.5,4.5

Note that the value starts at 0.5, but still increments by 1. In order to change the increment, we have to state explicitly how much to increment by as a third option in the function:

<sqlbox

initial="SELECT * FROM generate_series(1,10,2);"

></sqlbox>

This will output the rows: 1,3,5,7,9

## Timestamps

Generate_series() will also work on the timestamp datatype. This may need an explicit cast to work.

For example, to create a list of timestamps from `2018-04-07 00:00` to `2018-04-10 12:00` with one timestamp every 6 hours, the following SQL query can be run:

<sqlbox

initial="SELECT * FROM generate_series(

'2008-04-07 00:00'::timestamp,

'2008-04-10 12:00',

'6 hours');"

></sqlbox>

Note the `::timestamp`. This is an explicit cast to the timestamp data type. The reason for this is because without the cast the data type is too ambiguous. This results in an error being thrown when the query is run:

![This image shows the failure of the query due to an ambiguous type](/assets/images/learn-sql/extras/genSeries/genSeries_1.png)

This error can be avoided by adding the typecast. This will only happen on certain inputs which are ambiguous in terms of data type.

## Interval Format

Notice the use of ‘6 hours’ for the third option in the image above. When generating a time series there are additional options for how you define the way the series increments.

The 3rd input, the interval, follows the format of `[quantity] [type] [{optional} direction]`.

`[quantity]` => 6

`[type]` => hours

`[{optional}direction]` => We didn’t put anything here because the default is positive.

In the case of `6 hours`, the quantity is 6, the type is hours, and the direction is omitted so it defaults to positive. If you want the same list but opposite order you can change the interval to ‘6 hours ago’.

Adding `ago` specifies that you want the timestamps to change by 6 hours in the **negative** direction. This will however return 0 rows unless you reorder your start and stop values.

The interval can also be created using a shorthand form. Some of the time types can be abbreviated as shown by this table:

|Type       |Abbreviations|
|:----------|:------------|
|Millennium |-|
|Century    |-|
|Decade     |-|
|Year       |Y|
|Month      |M|
|Week       |W|
|Day        |D|
|Hour       |H|
|Minute     |M|
|Second     |S|
|Millisecond|-|
|Microsecond|-|

In order to use the abbreviations we can create the interval using a shorthand notation. This follows the following format:

`P [Quantity] [date unit] ... T [quantity] [time unit] … ;`

The P is used to show that the interval is starting and the T indicates that the date (year/month/day) portion of the interval is over and this is now the time (hours/minutes/seconds) portion of the interval

Using this format, an interval of 5 days and 3 hours would be:

`P5DT3H`

An interval of 9 years 8 months 7 days 6 hours 5 minutes and 4 seconds would be:

`P9Y8M7DT6H5M4S`

To write an interval of just 6 hours use:

`PT6H`

While this shorthand is much faster to write, it does sacrifice some of its readability to achieve this.

## Summary

* Standard form: `generate_series([start], [stop], [{optional}step/interval]);`
* generate_series() can take several different sets of inputs
  * Can be Numeric or Timestamp data types
  * If start/stop are timestamps:
    * Use an explicit type cast
    * Use an interval (e.g. 6 hours or 1 week ago)
* Step defaults to 1 for numeric unless otherwise specified.
* Time interval can be written in shorthand:
  * Format: P [quantity] [unit] … T [quantity] [unit] ...;
  * P5DT6H7M = 5 days 6 hours 7 minutes

### Resources

[http://www.postgresqltutorial.com/postgresql-interval/](http://www.postgresqltutorial.com/postgresql-interval/ "http://www.postgresqltutorial.com/postgresql-interval/")

[https://www.postgresql.org/docs/current/functions-srf.html](https://www.postgresql.org/docs/current/functions-srf.html "https://www.postgresql.org/docs/current/functions-srf.html")
