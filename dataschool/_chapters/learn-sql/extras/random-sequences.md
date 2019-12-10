---
title: How To Generate Random Data in PostgreSQL
short: Random Sequences
meta_title: Generate Random Data in Postgres
description: You can generate random values and sequences in SQL. Learn how with this
  interactive PostgreSQL tutorial.
section: Extras
number:
authors:
- _people/dave.md
reviewers:
- _people/matt.md
image: /assets/images/learn-sql/extras/random-sequences/random-sequence-4.svg
img_border_on_default: false
is_featured: false
is_under_construction: false

---
There are occasionally reasons to use random data, or even random sequences of data.  {{ page.database }} supports this with the `random` SQL function.  The following are some nice examples of how to use this.

## The random() Function


Click to run the following multiple times and you'll see that each time a different random number between 0 and 1 is returned.

<sqlbox
  initial="SELECT random();"
></sqlbox>

If you'd like to scale it to be between 0 and 20 for example you can simply multiply it by your chosen amplitude:

<sqlbox
  initial="SELECT 20*random();"
></sqlbox>

And if you'd like it to have some different offset you can simply subtract or add that.  The following will return values between -10 and 10:

<sqlbox
  initial="SELECT 20*random() - 10;"
></sqlbox>

## Seeding the Random

Often you want random data but would like it to be the same random data every time it's run.  To do so we want to set the starting seed (always between 0 and 1) for the random number generator.

Try running the following query multiple times:

<sqlbox
  initial="SELECT setseed(.123);
SELECT random();"
  answer="SELECT setseed(.42); SELECT random();"
  hint="set the seed to .42"
></sqlbox>

Notice that it returns a random result as expected, but unlike above, it's the same random result every time.  Change the seed value (.123) in the `setseed` function above and notice that it will now choose a different random value but maintain that on multiple runs.  To get the answer correct to the above SQLBox, set the seed to .42.

To understand what's happening, imagine that there is a long list of random numbers that the computer chooses from.  Setting the seed is like telling {{ page.database }} to always start at the same spot every time.

A quick tip: some SQL interfaces's (like Chartio's) won't let you run/return multiple queries in a connection, which is necessary to set the seed.  This can be worked around by using the WITH function as shown here:

<sqlbox
  initial="WITH seed AS (SELECT setseed(.123))
SELECT random();"
></sqlbox>


## Random Sequences

If you'd like full sequences of random data you can use the `generate_series` function to generate a series of [dates](/learn-sql/dates/).  

```sql
... FROM generate_series([start date], [end date], [increment])
```

The following example gets a random value for each day between February 2017 and April 2017.  

```sql
SELECT TO_CHAR(day, 'YYYY-MM-DD'), random() FROM generate_series
        ( '2017-02-01'::date
        , '2017-04-01'::date
        , '1 day'::interval) day
```

We've [visualized the sequence with Chartio](https://chartio.com/signup/) here to make it more clear what's going on with the data.

![Random Sequence](/assets/images/learn-sql/extras/random-sequences/random-sequence-1.svg)

The above results are all between 0 and 1 as again that is what's returned from random().  As above, to add an amplitude and minimum offset to it we can simply multiple and add to the random value.  The following makes a random sequence with values in the range of 10 to 17.

```sql
SELECT TO_CHAR(day, 'YYYY-MM-DD'), 10 + 7*random() FROM generate_series
        ( '2017-02-01'::date
        , '2017-04-01'::date
        , '1 day'::interval) day
```

![Random Sequence](/assets/images/learn-sql/extras/random-sequences/random-sequence-2.svg)

### Random  Growth Sequence

To make a sequence increase linearly we can use {{ page.database }}'s `row_number() over()` functions to get an increasing count of what row we're on.  

```sql
SELECT TO_CHAR(day, 'YYYY-MM-DD'), (10 + 7*random())*(row_number() over()) as value FROM generate_series
        ( '2017-02-01'::date
        , '2017-04-01'::date
        , '1 day'::interval) day
```

Multiplying the row number by our random makes our data linearly increase as you can see in the chart.

![Incremental Linear Random Sequence](/assets/images/learn-sql/extras/random-sequences/random-sequence-3.svg)


### Random Exponential Sequence

If we want to randomly model exponential growth, we can use the `row_number` in the exponent.  Here we're having a daily exponential growth of 10% (see the `1.1^(row_number() over())`) in the query:

```sql
SELECT TO_CHAR(day, 'YYYY-MM-DD'), (10 + 7*random())*(1.1^(row_number() over())) as value FROM generate_series
        ( '2017-02-01'::date
        , '2017-04-01'::date
        , '1 day'::interval) day
```
![Random Exponential Sequence](/assets/images/learn-sql/extras/random-sequences/random-sequence-4.svg)

### Random Exponential Decay Sequence

Similarly to get a exponential decay we can take the power of a number less than 1 (see `(.9^(row_number() over()))`).  

```sql
SELECT TO_CHAR(day, 'YYYY-MM-DD'), (1000 + 1000*random())*(.9^(row_number() over())) as value FROM generate_series
        ( '2017-02-01'::date
        , '2017-04-01'::date
        , '1 day'::interval) day
```
![Random Exponential Decay](/assets/images/learn-sql/extras/random-sequences/random-sequence-5.svg)

### Random Log Growth Sequence

And {{ page.database }} also has a log function we can use to model random logarithmic growth:

```sql
SELECT TO_CHAR(day, 'YYYY-MM-DD'), (1000 + 500*random())*log(row_number() over()) as value FROM generate_series
        ( '2017-02-01'::date
        , '2017-04-01'::date
        , '1 day'::interval) day
```

![Log Growth Sequence](/assets/images/learn-sql/extras/random-sequences/random-sequence-6.svg)


There are a lot great things you can do with {{ page.database }}'s random() function combined with generating series to get sequences.  Feel free to play around with a few yourself in the SQLBox below, or using [Chartioif you'd like to visualize them](https://chartio.com/signup/) as well.

<sqlbox
  initial="
SELECT TO_CHAR(day, 'YYYY-MM-DD'), (1000 + 500*random())*log(row_number() over()) as value FROM generate_series
        ( '2017-02-01'::date
        , '2017-04-01'::date
        , '1 day'::interval) day
"
></sqlbox>
