---
section: Analysis Mistakes
title: Overall vs Groups
meta_title: The Problem with Overall Statistics
description: Overall statistics in data can be misleading because there may be distinct
  groups within the data that have very different statistics. Learn to avoid this
  analysis mistake.
number: 5
authors:
- _people/ben-jones.md
- _people/matt.md
reviewers:
- _people/twange-kasoma.md
- _people/mike-yi.md
feedback_doc_url: https://docs.google.com/document/d/1TrqcSIOq3d8ItC637ub2FOQAV9yArf6Q0A2QNHJREuU/edit?usp=sharing
image: "/assets/images/Frame 2 (8).png"
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time: 
is_community_story: false
story_intro_blurb: ''
faqs: []

---
![](/assets/images/Frame (54).png)

## The problem with overall statistics

Overall statistics that describe all of your users or visitors can be misleading. This is because the overall statistic does not show you nuanced patterns about the underlying data. As you saw in [statistic vs distribution](https://dataschool.com/misrepresenting-data/statistic-vs-distribution/) you know that distributions help you see these patterns but there are multiple ways to examine the underlying data. Another method is to group the data by different categories.

Let’s start with the same high-level statistic:

![High level statistic](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_0.png)  
When you group this high level metric of AVG Time on Page by different countries you can see how it varies:

![AVG time on page by Country](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_1.png)

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

To get a high-level metric we can use an aggregation on a column in SQL:

```sql
SELECT AVG("Time on Page")
FROM Users
```

To get a high-level metric broken out by group we need to add the group to the SELECT and then put it in the GROUP BY clause:

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

![Overall Statistic](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_2.png)

Grouped by Device

![low variation](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_3.png)

There is not a meaningful difference between these statistics and the overall statistic does a good job of representing these groups. However this might also be an indication that this type of grouping might not be the most informative. Try grouping the data in a few different ways before feeling confident in the overall statistic.

### Medium Variance

Grouped by Age

![medium variation](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_4.png)

There are meaningful differences here but they still revolve around the same overall statistic. These differences might be large enough to investigate outlier groups more closely. It is a common practice to report a high-level stat and provide a margin around how much it varies. Providing this extra context can help you feel more confident in the overall statistic.

### High Variance

Grouped by Country

![high Variance](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_5.png)

Returning to the original example, the overall statistic is not representative of this data. Do not use an overall statistic when the variance between groups is high. You should investigate the largest outliers to determine what is going on. You can choose to isolate any outlier groups or you can perform separate analyses of the data similar to how you would address a bimodal distribution.

### Simpson’s Paradox

Grouped by Gender

![Overall stat where females are higher](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_6.png)

Females have an overall higher AVG Time on Page. However when we group by Gender and then by Device we see that in every category females have a lower AVG Time on Page than males.

![breakdown of stats where females are lower in all sections](/assets/images/misrepresenting-data/overallVsGroups/origVsGroups_7.png)

Even though females had a lower AVG Time on Page than males for every device they still have a higher overall Time on Page, how is this possible?

This is because the number of people behind each one of these AVG Time on Page statistics is different:

* The number of male visitors per device was 100 mobile, 100 desktop, and 100 tablet.
* The number of female visitors by device was 325 mobile, 50 desktop, and 25 tablet.

Since the female mobile group was so disproportionately large it dragged the average up with it in the overall statistic. This is an example of [Simpson's Paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox).

We can visualize this more clearly by mapping number of people behind a statistic with the size of a circle and increase the saturation of a color to show the increase in the AVG Time on Page:

![Simpsons Paradox visually explained with circles and colors](/assets/images/simpsonsParadox.png "Simpsons Paradox")

This phenomenon is important to consider when comparing groups: you should examine what the total number of observations are behind any statistic. For scenarios like this neither the overall statistic nor grouped statistics are sufficient explanations of the underlying data by themselves. You should present all of this data so that people understand the patterns at play.