---
section: Data Mart
title: Data Mart Maintenance
meta_title: How to Maintain a Data Mart
description: Learn Best Practices for Maintaining a a Data Mart, such as handling
  errors and incorporating new data sources.
number: 22
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: ''
image: "/assets/images/Outlier-1.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 6

---
Now that you have set up Data Marts, you will still have ongoing maintenance to get the most out of your data. The first step is to establish a mayor per mart, they will then be responsible for carrying out the mart maintenance tasks:

* Communicate/educate team
* Identify issues
* Identify new needs

## Establish Mart Mayors

This role is similar to the data governor for the data warehouse. Data Governors delegate down to Mayors, and Mayors take care of Governor tasks at the mart level. They need to be who communicates and educates the to the team using their mart. They are responsible for identifying issues in data that exist in their mart. They also should be the ones creating request to get more data sources or tables added to their mart.

## An Ideal Mayor

### Communicate/educate team

Different teams have different needs but some common threads are teaching SQL skills or how to use your BI tool. Mayors should document and share out and data quirks that show up in a lot of queries (note you should try to address these with modeling in the data warehouse stage).

We wrote a book on [how to teach SQL](https://dataschool.com/how-to-teach-people-sql/) if you need assistance in [explaining how JOINs](https://dataschool.com/how-to-teach-people-sql/sql-join-types-explained-visually/), [Aggregations](https://dataschool.com/how-to-teach-people-sql/how-sql-aggregations-work/), or [subqueries work](https://dataschool.com/how-to-teach-people-sql/how-sql-subqueries-work/).

### Identify issues

There are two types of issues you will need to investigate as a mayor of a data mart.

* Data that doesn’t make sense
* Common data errors

#### Data that doesn’t make sense

![](https://lh4.googleusercontent.com/PlPywHU0zg0ISjz12Cwm8mnXJADec5fIQpfpiCS2rwv7_RCExwQLOEa2zqiHX9Fo5G0uDqDIdjI_PCY1bh10-frNbJoD6joFKQYD3-258Oh-WV6VJJxDyKFHReLUDkGDxHZVsbfv)

##### Spike

Numbers that are much different than the day before but no changes have been made. If your traffic to your website doubles in a day it is likely caused by something and not just a fluke. That spike may be caused by a new marketing campaign, a bug, or potentially a google search algorithm update. You should explore these possibilities in that order.

![](https://lh5.googleusercontent.com/j3axTEBypcKPX90sxrC5qgPAQDRGt8CrC7_hGUt-LMg_oNFX_xLaGyFEnwSLpdakogpk8xdwaiJn1dJhqSt3P7LlkMQbFHy4G69wZMSQ9E_Cwqs2Bx3XBmxtE_d0YF0ilozwj7Hp)

##### No Spike

Numbers that are not changing at all even though changes have been made. If you did launch a new marketing campaign and the numbers are not going up that could be due to a bug or poor campaign performance. Again investigate in that order. Often times the tracking was not set up correctly or the link in the advertisement is going to the wrong place.

![](https://lh3.googleusercontent.com/XZq7qe8TuoJeVmBJi41DwnOxPeiQe5ObaGenKjwZgklu_hL8yF3MHzRlM31V6ykO6nwObr5oXESz1x7ZOjGCWxlnK2M9hIaUF-TLiXPBrM9gu_I97g3cxknVBfX8AyO9ZDq5R6-j)

##### Conflicting numbers

Numbers that conflict with numbers you have seen in another place measuring the same thing. If you see the number of new trials in hubspot and your production database are different the rule of thumb is to trust the data source closest to the event that is being tracked. In this case it would be production.

```sql
SELECT COUNT *
FROM USER
WHERE Trial_Start > NOW()::date - 7 
	AND Email != “%chartio.com”
```

vs

```sql
SELECT COUNT *
FROM USER
WHERE Trial_Start > NOW()::date - 7
```

Often times people’s calculation of a metric will differ because they are calculating it based on a different formula, the data source they are using is different, they might be filtering the data differently, or there is an error in their calculation.

#### Common data errors

* New field or value not cleaned (nulls, encoded, wrong format, etc)
* No new data
* All queries on a data source erroring out
* Performance

##### New field or value not cleaned

You will likely be the first to notice when there is a new column in one of your views that is not easily understandable. You should raise this to the data governor so that they can apply the necessary cleaning to it at the Data Warehouse stage. Avoid doing additional cleaning at the Mart level because others might need this field as well. Having a single version of it helps make sure analyses are consistent.

![](https://lh5.googleusercontent.com/D-JQKw3Pb2dEzn3HtnPx9BXDR_rvfoK1JODmpoS8L1mHSi0Ti5l3zz6yaTHBPS58jSkV_rfiwyAcT5eCCjvbykaJcyIMtxeb6Ufmh5XBZyoT5xtOSEomqjY1Z9wKC5LM38oBI1Sk)

This can also happen when a new option is added to a field and it is encoded in an unreadable way. Follow the same process, get it updated at the Data Warehouse level.

##### ![](https://lh4.googleusercontent.com/qHW3iMjZIQuwaGQ7sOY0FDNGHyNRpSbtpWfS1Cg6JupxCnpnNRimYIgk_B3yxy61rovUd0t4VHZntkE_N3d6QOQT4Uvc7QKWtdtBQdJIPnVK3Dxii43rw14b_vjz3asz8K61rvZG)

##### No new data

If your query stops producing data after a specific date, you need to investigate. This can be caused by a bug, by a field being renamed, or by the data source changing. This is more common than you would think, for instance if you update a url the data associated with the previous name will cut off. You can work around this within your SQL query.

For example when Chartio moved it’s url from Chart.io to Chartio.com we needed to use CASE WHEN statements to maintain our tracking accurately:

```sql
SELECT
CASE WHEN page_tracking.url LIKE 'www.chart.io' 
	THEN 'www.chartio.com'
    ELSE page_tracking.url 
    END AS “Page”,
to_char(page_tracking.viewed_at_date, ‘YYYY-MM’) AS “Month”,
COUNT(distinct page_tracking.view_id) as “Views”
FROM page_tracking
GROUP BY 1
ORDER BY 2 ASC
```

Or you can implement this as a more permanent fix in the data warehouse stage. One note of warning here is sometimes you want to preserve this cut off to remember the name was changed, so think through before making this modeling decision. If you aren’t sure why it cut off consult the data governor or engineers to track down what is going on.

##### All queries on a data source are erroring out

This happens for a few reasons, the source has been deprecated, the source had an update changing its data structure, or a bug. This is something to communicate out to your team quickly as it can prevent a ton of data from being used.

##### Performance

If queries by you or your team start to take over a minute to run you should investigate. Can the query be optimized, do we need to spin up more clusters, or do we need to do some pre-aggregation.

These are all fairly advanced solutions. To optimize the SQL we wrote a book on how to approach that called SQL Optimization. To spin up more clusters you will need to consult with engineering and the data governor. To do pre-aggregation you should consult with the data governor and create a new view at the Data Warehouse level so that others can use this newly formed data.

### Identify new needs

Data is never a static thing. As new features roll out, new tools start getting used, and objectives get set new data needs will emerge for your team. Do not assume that your mart will be updated when any of these changes happen. You need to proactively advocate to make sure your mart is updated.