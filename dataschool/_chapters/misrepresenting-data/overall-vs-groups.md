---
section: book
title: Overall vs Groups
meta_title: The Problem with Overall Statistics
description: Overall statistics in data can be misleading because there may be distinct
  groups within the data that have very different statistics.
number: 7
authors:
- _people/matt.md
reviewers:
- _people/mike-yi.md
feedback_doc_url: https://docs.google.com/document/d/1TrqcSIOq3d8ItC637ub2FOQAV9yArf6Q0A2QNHJREuU/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
published: false

---
## The problem with overall statistics

Overall statistics that describe all of your users or visitors can be misleading, the overall statistic does not show you nuanced patterns about the underlying data. As you saw in [statistic vs distribution](https://dataschool.com/misrepresenting-data/statistic-vs-distribution/) you know that distributions help you see these patterns but there are multiple ways to examine the underlying data. Another method is to group the data by different categories.


Let’s start with the same high-level statistic:

![](https://lh4.googleusercontent.com/FRkQCJEzOhdjk2ag7DCDkXv2p_kypJZ1OX4dQ85J6w7CykJnPBbhVz-3lCZeL5F2Qtmv_4_CqP6BZ4B2clzF80LUHqsn7De4sRYND1qiJ5NM0eB5DO1n5ClXHPTtxr_jRvX5EiDp)  
When you group this high level metric of AVG Time on Page by different countries you can see how it varies:

![](https://lh6.googleusercontent.com/WJTTs7ev07c5oBLC2dGw-7LIWPhfGu0thPIkL0E3au1YF4d74eYdVNueqwu1TQKZHSSU1kjPvz-nZSBExirQs8_H3q41Y3ZcMy8o_Ia4p47jJV2HMs-sj5SJKWnVZ_QkYOrgte-0)

The AVG Time on Page is much higher for France and is lower for the other countries. Why is this the case? This is a tough question to answer since the data only shows you what is going on and not why it is happening. However, this is the right question to be asking and the sort of question that you only come to once you start grouping the data.

Common ways to group data about web site visitors:

* Country
* Age
* Gender
* Device
* Education
* Products purchased
* Start date

## Create metrics for groups

### Group by Category

To get a high level metric we can use an aggregation on a column in SQL:

```sql
SELECT AVG("Time on Page")
FROM Users
```

To get a high level metric broken out by group we need to add the group to the SELECT and then put it in the GROUP BY clause:

```sql
SELECT Country, AVG("Time on Page") as "AVG Time on Page"
FROM Users
GROUP BY Country
ORDER by 1 DESC
```

Order it by the group as well to be able to scan the data quickly for outliers.

### Group by Start date

It is quite common to group data by date in analytical queries. You can turn dates into truncated strings using the [TO_CHAR function](http://www.postgresqltutorial.com/postgresql-to_char/). Here we will use it to truncate down to the Year and Week.

```sql
SELECT TO_CHAR(First_Visit, 'IYYY"-W"IW'), AVG("Time on Page") as "AVG Time on Page"
FROM Users
GROUP BY Country
ORDER by 1 DESC
```

## Interpret Grouped Data

Once data is grouped, the statistics for each group vary. How much they vary can give you different ways of investigating the data

### Low Variance

![](https://lh6.googleusercontent.com/wpf7oiDJiBBLLz6_79KzFjeycL3PE_9RVwiMcxc2QuwPSIxa4l2-I5of3pB31DspRguuIBGBTkNHvzKLlEv5uq0APdGX_97Zq8mNb3G0uy1nC1cgs1HJWXXnFpYvufsYD3fPpgFA)

Grouped by Device

![](https://lh3.googleusercontent.com/Tcan_3Ub_Q1lQ4IBfC96TJOUr49R2Ht3t5NngSMQ8t6XHQnwu5GCgvaIEr4yQHqTzu4v_hv5HuKHir4tmHpY-1_eQSphw_c5O8sNpJwMOjUZAgkqld0Ic-EqnXolwAHmFUqm8suB)

There is not a meaningful difference between these statistics and the overall statistic does a good job of representing these groups. However this might also be an indication that this type of grouping might not be the most informative. Try grouping the data in a few different ways before feeling confident in the overall statistic.

### Medium Variance

Grouped by Age

![](https://lh6.googleusercontent.com/Tto0VPyXHVJGyzX7l1XgYertRIcyw4ibsiil-25frH6H9W7jW5GptylzVoW5kYV5WkXMTSlevPo5e9PFfBcXnAM7CFkOJbPKGca-qazj3Y1voWgC7g1zHOd0q-ctIcAG5FVLU9Ix)

There are meaningful differences here but they still revolve around the same overall statistic. These differences might be large enough to investigate outlier groups more closely. It is a common practice to report a high level stat and provide a margin around how much it varies. Providing this extra context can help you feel more confident in the overall statistic

### High Variance

Grouped by Country

![](https://lh4.googleusercontent.com/kLby9F5YuVkjUlluyFTuA6qUs929M2LzKKb5bAdA8zxmodrtFnXPKnFQc5pFdGO3VBW-2Dfn-CWHQJiX4_Yomrai3ZmWzZVVEINthYnjvODHdWdFr1wSwmNRbbW8Tg5nC0uFMlyw)

Returning to the original example, the overall statistic is not representative of this data. Do not use an overall statistic when the variance between groups is high. You should investigate the largest outliers to determine what is going on. You can choose to isolate any outlier groups or you can perform separate analyses of the data similar to how you would address a bimodal distribution.

### Simpson’s Paradox

Grouped by Gender

![](https://lh6.googleusercontent.com/x0jDNbFcWAMePSlzFtQFXQ-LxbM65aMeQgqIhteVAVuzmSqHEXmwznJBh9s7ZDgqX1cAIMrJ4SBop_DU9VBM3Yn1rnACmKSNpw5PBzl92wRwv-4sZts960YHd28q-HfCRmFTHIl8)

Females have an overall higher average Time on Page. However when we group by Gender and then by Device we see that in every category females have a lower average time on page than males.

![](https://lh4.googleusercontent.com/QstfHNSoCG5IvQkBzoFp5HEj2NG0XP2RwIQwpL31XbZK4Nhz7q_pdreB8bBHCvvI-JbFPXRZa-_N1hK5PU1CTDzDFULhuXQ0s4MfX6cuB2804kYf0tuci6OlBkItch408k3aGepx)

Even though females had a lower average time on page than males for every device they still have a higher overall time on page, how is this possible?

This is because the amount of people behind each one of these average time on page statistics is different:

* The amount of male visitors per device was 100 mobile, 100 desktop, and 100 tablet.
* The amount of female visitors by device was 325 mobile, 50 desktop, and 25 tablet.

Since the female mobile group was so disproportionately large it dragged the average up with it in the overall statistic. This is an example of [Simpson's Paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox).

This phenomenon is important to consider when comparing groups: you should examine what the total number of observations are behind any statistic. For scenarios like this neither the overall statistic nor grouped statistics are sufficient explanations of the underlying data by themselves. You should present all of this data so that people understand the patterns at play.
