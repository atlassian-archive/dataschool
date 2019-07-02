---
section: Analysis Mistakes
title: Statistic vs Distribution
meta_title: Examine Distributions before using Statistics
description: Distributions provide much more nuance to the data than a statistic does.
  Learn how to query to get distributions and then interpret them correctly
number: 4
authors:
- _people/matt.md
reviewers:
- _people/blake.md
- _people/matthew-layne.md
feedback_doc_url: https://docs.google.com/document/d/1QPvkbgXwiIPgZlU81-kiSZe2mrqhsgoQ44C62hSPbnM/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false

---

## The problem with a single statistic

Most metrics are reported by a single statistic: Average time on page, Number of Active Users, Customer Acquisition Cost. While this high-level stat can be informative, relying on it to accurately represent the underlying data can be problematic because it can hide important patterns in the underlying data.

![High Level Statistic](https://lh6.googleusercontent.com/GSSSDck5R8x0PL2bpS4lAcfd_WPTvYK-Q4FVh08tzuV4ExhjzJPq85-kU27LhNrABBNvul2_4wskX8n6bzpWbyg77BZi2FTyrNAuTJo3CTIIvRMPExTjnovRb0DeZEFKaUJqMIII)

That amount of time on page seems respectable! Let’s look at the actual underlying distribution.

![Avg Time on Page Distribution](https://lh3.googleusercontent.com/77guS8Qb6XFje9gfYYMkrEN4ks5fu5hrnMqwb6CztpaYD8Lw4h7jcv0AyQcz_OSrGjygC81A83kzx0RZXYV1awQCNF-SNpw9-So_8q8mA4GpCHqALrnWr5hkSfOJqoqbtrKPKWDP)

Here we can see most people are under 2 minutes, and we have some outliers that are effecting the average time on page. Your data could be fairly normally distributed and the average represents this underlying data well:

![Avg Time On Page Normally Distributed](https://lh6.googleusercontent.com/ZR2RUhkRTT_YVArsfyXXHXV6lx4LpCKZ1RqbFZx8bsECCJXvWkXySCNtdGqxbh32Boz2l9ZiODjUfl17A7FpavoM642LpMKHby7vMxWcWCQr3_fHjC-K0P9SNaJEhKZU20uUhgYJ)

Distributions help you tell a much more nuanced story than a single metric.

## Create a Distribution

While you can get a stat quickly with SQL with commands such as:

```sql
SELECT AVG("Time On Page")
FROM Traffic;
```

Creating a distribution is a bit more complex. First you have to bucket the data, which means you need to create evenly sized ranges for your numeric data to fit into.

If you had the numbers 1,2,3,3,6,6 You could bucket them into two groups. 1-3 and 4-6. The first bucket 1-3 would have 4 values in it 1,2,3,3 and the second bucket 4-6 would have two values in it 6,6.

Bucketing can be done using CASE WHEN. Bucket size should be the same with the exception that the last bucket can have an open ended upper limit if there are extreme outliers. Figuring out the correct bucket size to use takes some trial and error to capture the right amount of variation in the data.

Put the buckets into a [Common Table Expression](https://www.essentialsql.com/introduction-common-table-expressions-ctes/) and then use a COUNT aggregation on your newly created column.

```sql
WITH 'Buckets' as (
  SELECT
    CASE WHEN "Time On Page" < 1 THEN '0.00-0.99'
    WHEN "Time On Page" < 2 THEN '1.00-1.99'
    WHEN "Time On Page" < 3 THEN '2.00-2.99'
    WHEN "Time On Page" < 4 THEN '3.00-3.99'
  END AS "Minutes on Page"
FROM data)

SELECT COUNT(*)
FROM Buckets
GROUP BY "Minutes on Page";
```

In many BI tools creating a histogram is a built-in type of chart that can take in any numeric field, bucket it, and then chart it appropriately.

## Interpret a Distribution

![Right Skewed Distribution](https://lh3.googleusercontent.com/77guS8Qb6XFje9gfYYMkrEN4ks5fu5hrnMqwb6CztpaYD8Lw4h7jcv0AyQcz_OSrGjygC81A83kzx0RZXYV1awQCNF-SNpw9-So_8q8mA4GpCHqALrnWr5hkSfOJqoqbtrKPKWDP)

**Right Skewed** - Most of the data is lower than the average, using a median instead of an average would be more representative of the data because it falls more in the center of the actual data. This is because it is less affected by values in the tail.- Most of the data is lower than the average, using a median instead of an average would be more representative of the data because it falls more in the center of the actual data. This is because it is less affected by values in the tail.

![Left Skewed Distribution](https://lh5.googleusercontent.com/mebThBvJihLFhpUOt1-4lTT_Viokx7Xfthkv2uciw_yXzLXHCYglRF9yoMSvd7OFczZPkvc8Vp8CPWmb7a9YXKuNxC2Zp83uCelXDQlL42CSUIWynRSyRm4-wXGw1KXenN-A7-7U)

**Left Skewed** - Most of the data is higher than the average, using a median instead of an average would be more representative of the data because it falls more in the center of the actual data. This is because it is less affected by values in the tail.

![Normal Distribution](https://lh6.googleusercontent.com/ZR2RUhkRTT_YVArsfyXXHXV6lx4LpCKZ1RqbFZx8bsECCJXvWkXySCNtdGqxbh32Boz2l9ZiODjUfl17A7FpavoM642LpMKHby7vMxWcWCQr3_fHjC-K0P9SNaJEhKZU20uUhgYJ)

**Normal** - Using an average or median here is acceptable because they both fall within the middle of the data.

![Bimodal Distribution](https://lh6.googleusercontent.com/JDTWxbaFzKc2iteajySZkm4oy_y4mHur6qv7r9TjCCiYqv18P0pwRhFxn3sMgUaBtcrEBSAmXwiarV1gpKOsiMD074psSrIqLW1g8VdPGad_Mzn6KYoDp1gJJ9xbi-dqYS1otXtg)

**Bi-Modal** - Neither an average or median is representative because there is more than one peak in the data. Split the data in half and then report a summary stat on each section of the data.

We can look closer at the peak on the lower end by making the bucket size smaller and filtering the data to be less than 10 minutes on the page.

![Left half of Bimodal distribution](https://lh5.googleusercontent.com/0zQwqOqPQnV2N74bry5ABHxG-Js2vgwYdBjQgfg5gW7nhQ0Fef8EGlntVbIWZEZAp8CJMFfIffJXt7ZDyleZFkzqxgxUIeugkmM-p0NbUWqMOWOJFOUmJacz4zKUm6hTUZllRyDT)It looks to be normally distributed, now we can look at the higher end peak by making the bucket size smaller and filtering the data to be greater than 10 minutes.

![Right half of Bimodal distribution](https://lh4.googleusercontent.com/-FBin4u8tEQFyyt0pZ5Uey_9WAJoHizn8Ik3DdrOmw8e4UNhVhEGDTUfaGTIhFPQiJuBaKARbguuXe41DF1KqJbjyxvW-F-DLmOXPUPGbqyoV5xyqBlWCuYoSqhi1lAIO6zOpSye)

By splitting and re-bucketing we can see in greater detail what the underlying data looks like and what statistics would be representative of them.

## Summary

While statistics such as a mean or median are commonly used and easy to understand, a distribution adds much more nuance to the data. Even if you do not end up displaying your distribution you should look at it to know how well your summary stat represents it.

* Always look at the distribution of the underlying data
* Verify that high level statistic accurately represent the underlying data
* There are many types of distributions
  * Right Skewed
  * Left Skewed
  * Normal
  * Bi-modal
  * [And more](https://blog.cloudera.com/blog/2015/12/common-probability-distributions-the-data-scientists-crib-sheet/)
