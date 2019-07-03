---
section: Analysis Mistakes
title: Trends
meta_title: The Problem with Trends in Data
description: Trend in data can be misleading depending on what time frame you are
  looking at it. Learn how to accurately interpret trends.
number: 8
authors:
- _people/matt.md
reviewers:
- _people/matthew-layne.md
- _people/blake.md
feedback_doc_url: https://docs.google.com/document/d/1ZDh4zs4M_srmPSZnmtSQk6N1fmTem9N84tCij33wpb0/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
published: false

---
## The problem with trends

When we look at a trend, the size of the time period we examine can drastically alter the conclusion about whether some number is trending up, down or is relatively stable. All three of the following graphs come from the same data:

Avg Time on Page over the past **day**

![](https://lh3.googleusercontent.com/Wbo74ZjSy06YnmNePTAxzcKWIVV1RnyKwVWjgon5bs0-N9XEfqkEbY0qDppkXIgl6RYE3OZ_v7HuK1HwAtbbWIUnzKgXkRbl6xZCkTUhhaOhMUNsdwlW1N6Z5xM6lbArA1O5r7W- =440x215)

The data is moving up and to the right – things are trending up!

Avg Time on Page over the past **week**

![](https://lh4.googleusercontent.com/bBvkEErU-vR3DbE87eJTwFQEyRsXA82GE1Fl3ajBk6qQKmwWdQWAYZvXf-CmdjTBKdnS3w31CIs5UDr80GzwjLzrHN_d0ZXMz6JfqJYwK41Ky-KQSXXfdQ0uakVMrUpcmtJ7wVnn =624x275)

The data has been up and down the past week, we can’t be sure if the past day is part of a trend or not.

Avg Time on Page over the past **2 months**

![](https://lh3.googleusercontent.com/srB5WEJ61i6-DfLoi9HIbHHu86kzQbaCi3X_ig1uaookVJyE87Kwz1R1CjZ63IJnuv0uFPTsXMrvSGC49WnFLMV3qtNYoL392fbcLsrLiX_EoPi-pgx-JGGYaBIPB9K-xnEF2ECM =624x275)

The data has been trending up recently but the variance is much higher than it has ever been.

We can tell three different stories based on how much time we include. People gravitate to the timeline that accommodates the story they believe to be true (an example of confirmation bias). Therefore it is a best practice to show as much data as possible first, then try to contextualize specific data points.

## Creating the right timeline

Deciding what data to show has a large impact on how people will read the chart. It is important for the reader to factor in context and variance to make their decision.

### Context

Seeing what this data was in the past helps us judge the trend in the present. We can determine if this is new or something we have seen before. In the case of the example above, there is a clear trend that things are going up but variance is also increasing.

To filter data down to the amount of historical context you want is simple. In SQL you can include dates in the WHERE clause. Dates are notoriously difficult to work with due to time zones and date data types but they can be filtered quite easily using standard operators or the BETWEEN keyword.

SELECT date, AVERAGE(“Time on Page”)

FROM users

GROUP BY date

WHERE date > 2019-04-01

Check the data on the longest timeline you have and then move the filter up as long as you feel the data you are excluding is not relevant. Including access to the full timeline will add credibility to your analysis. Another critical chart modification you can make is to annotate the timeline to point out why variations happened.

![](https://lh4.googleusercontent.com/mYGrN6lr93_1GPz7VNbnzNB8lQMnhA8RSiP_8qMPLn1vnPak9VrgRL_o4ZS7JJjv5s0WwWZfPLCd5CIxYUb_hPrq71tHyOIx6DFMNv6DfEOiAeie23t9dfcBWtsX775drK23w-Qv =624x275)

With the annotation it is more clear why this spike in time on page has increased.

### Variance

Variance in a line graph can be distracting or informative about the trend we are analyzing. If we take the daily avg time on page chart from above and look at it by month it tells a much more general story:

![](https://lh5.googleusercontent.com/9uWqr-H1urbns93HwEnF4__csMQmMKdtwzQF6trWvqc-h2ZAZrxB4AvPVjLvmjvCuSnN8Vy6Q9RB00_0vnaz7m2sSmePQLeRjjifg-52e_E03nMpKd1F455ZBg_txa1UgHneuGC0 =513x251)

You get more variance by showing the data at a more granular level such as by day vs by month. You get less variance if you show the data at a less granular level such as by month vs by day. You can also reduce variance using [moving averages](https://www.investopedia.com/terms/m/movingaverage.asp).

![](https://lh4.googleusercontent.com/r2RG8ln_5VbVx_nYXCSo7wBQ0c-uvclssNB4u0G6MSvIMLjCj30IEs3AvfDD8wnwSQM0QAEvAwkkdOE85EG0shDUKb8ibLD_crKlTVlo4UsScysmpvHDNlckJg67169ys5WUp6LR =470x230)

Here we can see the yellow line captures the overall trend and smooths out (hides) the variance.

## Interpreting timelines

Whenever you are presented with time series data, take note of the axes:

### **X-axis:** could there be more data they aren’t showing? Why?

Having seen the graph above we know there was a long period where it was low. The choice of cutoff point in this graph removes that context.

![](https://lh3.googleusercontent.com/MLcQ85UOKoPofECa9no-X9RI2lmUBIfbPvHsmmxOyefNTIyoxe41rVoSx3Z1EiJd5CQgAieFNygfLOTrv4cuPIzGnvJcERLTJoIeJtu5cL7RYEKyQVadAWMHm5qlWXTnYuEbMp4C =469x230)

### **Y-axis:** Is the range compressing or expanding the variation inappropriately?

By increasing the y-axis range we can compress any trend to look basically flat. This is a subtle technique that can be applied to highlight the size and variance of a trend.

![](https://lh6.googleusercontent.com/AByS-u41I-WP2cHjyscvjyuiXLUYSGvpbvIUHOdcrLUdm5NWRkaln5kZFtAxhfUQbBJlsdhUGdUq7RWueNQyeuLvExmYuMLylB9llK-5MkPdrfHEsuaJlA6XeAmjfCIB0ef2Ia_5 =624x305)

(Caption: The data is the same as before, but the y-axis limit has been changed from 70 to 1 000.)

### **Annotations:** Do they explain the various parts of the chart that stand out?

When a metric varies greatly it is an indication that there might have been a problem in how the data was collected or there was an outlier among very few users that dramatically affected the statistic. Sometimes it is a true effect, but either way pointing out and addressing these points on the graph helps everyone understand it more clearly.

![](https://lh6.googleusercontent.com/-NbZe7AhJ_UkVY7yDLrp0T95eoVNOCl8QZK9BlBJVdOw5KnXlTRU14LHRQo89oofop0eYNE_dCSW1RbOtJgLFXfhf5LE375Tsu7q9sgPoeZcd2_AZ73LtUcZDCAp5T4ZywBvHdI3 =624x275)

### Summary:

* Visualizing trends can be misleading
* It is important to get context for your data
  * Try to explain any variances from the norm
* Monitor the x and y axes:
  * X- Does the time period provide enough information to draw accurate conclusions ?
  * Y- Is the data effectively visualized using this scale?