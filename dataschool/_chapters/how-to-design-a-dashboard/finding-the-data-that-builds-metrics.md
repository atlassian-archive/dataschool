---
section: book
title: Finding the Data That Builds Metrics
meta_title:
number: 100
authors:
- author: _people/matt.md
reviewers:
- reviewer: _people/dave.md
- reviewer: _people/tim.md
image: /assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/findingData.png
description: Learn to collaborate with your data team to discover what data can be used within a dashboard.
is_featured: false
writers:
  
published: true
img_border_on_default: false
feedback_doc_url: https://docs.google.com/document/d/1AjcnERWqKWWREjniCZ-WZwbBQ_IT4n2FcMAFWyO4iy0/edit?usp=sharing
---
<div style="text-align:center"><img src="/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/findingData.png" /></div>

From the previous chapters most of the ambiguity of what is going on the dashboard should have been addressed:

* Why - why you are building this dashboard
* Who – who you will be working with in the dashboard creation process
* What – what metrics will support decisions to achieve the dashboards goal

However the biggest challenge can be the “How”, as in how do we get the data to build the actual dashboard. The three data scenarios you will encounter are:

* When you have the data
* When you have messy data (most common)
* When you have no data

If you have the data this will be an easy step of the process. If the data is messy or it does not exist things will get much more challenging.

## When you have the data

Now you have to find the data that you will use to calculate those metrics in your database. Review the schemas of the databases you have access to.

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/schema.png)

Finding where the data is that you need can be the hardest part of the process. Often times data is not well documented and what you need could be spread across multiple databases. First search for tables that have keywords from your Metrics Spreadsheet.

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/keywords.png)

When you find something promising such as a table with the same keyword you searched or contains a field that matches your keyword do a quick query:

```sql
SELECT *
FROM operations
LIMIT 3;
```

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/fromOperations3.png)

Once you get the results you can quickly see if it has the relevant information. In this case we can see it has a department column that looks appropriate, and the amount column may be the cost data we are looking for.

If a table such as this one looks relevant to one of the metrics write it down or put it directly in the Metrics Spreadsheet.

Your next step will be to determine what data you cannot find yourself. If you find a table but are unsure if it is the correct data put the name of the table in with a ? at the end. If you cannot find any relevant tables for a metric put three ? in the Metrics Spreadsheet.

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/metricsSpreadsheetFull.png)

If you have any questions about the tables or columns you have found, it is time to consult the Data Gatekeeper. I’d highly recommend coming to the Data Gatekeeper with the list of tables and fields you have questions about, using the metric spreadsheet is a convenient way to structure the conversation.

Go through each metric with the Data Gatekeeper, and explain what tables and fields you think you should be using and which ones you have questions about.

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/highlightedSchema.png)

The Data Gatekeeper will confirm which tables and fields you have selected so far or will help locate the tables and fields you need. Some of the data you need might not be accessible to you due to access permissions. The Data Gatekeeper may grant you access or will provide feedback about how to work around this limitation. After locating the relevant tables, update the Metrics Spreadsheet.

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/metricsSpreadsheetDatasource.png)

We also need to specify the fields within the tables that will be used to make creating the SQL queries easy. Place the field names from the tables you found into the Formulas directly and put them in parentheses below your grouping categories in the Content column. Notice ‘Total’ does not have a column associated with it because it is the full aggregation.

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/metricsSpreadsheetFormula.png)

## When you have messy data

Well you have data but it is messy. It may be obvious such as missing values. It may be mysterious, such as a value you have is different than what a user of your application is seeing. Let’s explore what to do about different messy data problems.

### Missing Values

On any column that you will be using in a metric calculation you should check for Nulls and blank records. Here is an example query to get the Total number of nulls and nulls as a percent of total records.

SELECT COUNT(*)

FROM table

WHERE field is null
```

To check for blank values we can use:
```sql
SELECT COUNT(*)

FROM table

WHERE field = ‘’ or field = ‘ ’

You need to evaluate how to treat missing values.

* Ignore - leave the values as they are
  * This is the most common approach to dealing with missing data, you note the amount of missing values that exist and move on.
  * If there are high amounts of missing data in a field it is not recommended to use it in a calculation since it may no longer be representative of that field.
* Delete - remove any records with missing data
  * Deletion is only recommended if the records are a very small minority of the data set so it does not skew the data.
  * One legitimate reason for removing a record due to a missing value is if it has missing values in multiple fields.
* Impute - replace the missing value with a value
  * If the data is relatively normally distributed replacing the value with the average or median can be done if there are only a few records missing the value.
  * In some cases it is clear that leaving a field blank might indicate that the answer is 0, in these cases it is appropriate to impute with a 0

Regardless of which option you choose be sure to have the decision documented so others can reproduce the calculation and understand if they should take the data they are seeing to be 100% accurate or not.

### Obviously Wrong Values

On any column that you will be using in a metric calculation you should also check for bizarre values. The Data School recommends doing a quick check on the highest and lowest values of any of the fields that will be used. You can do this using the ORDER BY clause.

SELECT *

FROM table

ORDER BY field DESC
```

```sql
SELECT *

FROM table

ORDER BY field ASC

This will quickly surface values that are way off if they are in the field.

In text fields this is more difficult to detect, however there are some tricks here as well. They are more use case oriented tips.

* Phone Number
  * Common fake numbers 123-456-7890, 000-000-0000, 867-5309, and 999-999-9999
* Name:
  * Common fake names: John Doe, Jane Doe,
  * Repetitive letters such as ‘aa’,’bb’
* Birthday
  * Too old: pre 1919
  * Too young: 2014 and above

### Potentially Wrong Values

While the previous method showed us obvious outliers there can be more subtle outliers that you may want to address. A commonly accepted definition of an outlier is 1.5 * IQR + Q3 and Q1 - 1.5 * IQR. This formula which is one and a half times the interquartile range added to the upper quartile or subtracted from the lower quartile finds outlier values.

Quartiles split a quantitative variable up into 4 sections

![](/assets/images/how-to-design-a-dashboard/finding_the_data_that_builds_metrics/IQR.png)

[http://sphweb.bumc.bu.edu/otlt/mph-modules/bs/bs704_summarizingdata/bs704_summarizingdata7.html](http://sphweb.bumc.bu.edu/otlt/mph-modules/bs/bs704_summarizingdata/bs704_summarizingdata7.html "http://sphweb.bumc.bu.edu/otlt/mph-modules/bs/bs704_summarizingdata/bs704_summarizingdata7.html")

The interquartile range is the difference between the upper quartile (Q3) and the lower quartile (Q1).

Here is an example query applying this formula to find outliers using IQR.

WITH orderedList as

(SELECT ROW_NUMBER() OVER(ORDER BY amount)as num, quantity

FROM table)

SELECT num, quantity

FROM orderedList

WHERE

num > FLOOR(

(SELECT COUNT(*) as c

FROM table)*0.75 +

(FLOOR(

(SELECT COUNT(*) as c

FROM table)*0.75)-

FLOOR(

(SELECT COUNT(*) as c

FROM table)*0.25)

))

or

num < FLOOR(

(SELECT COUNT(*) as c

FROM table)*0.25 -

(FLOOR(

(SELECT COUNT(*) as c

FROM table)*0.75)-

FLOOR(

(SELECT COUNT(*) as c

FROM table)*0.25)

))

Again in text fields this is more difficult to detect. Watch out for the following:

* Incorrect Grouping
  * Misspellings of the same thing such as ‘Hamburger’, ‘Hamburdr’, ‘Hanburger’
  * Various capitalization ‘Hamburger’, ‘HamBurger’, ‘hamburger’’

SQL will treat each of these variations as unique, you can find these by grouping by the column the text values are in and reviewing any groups with very few records in them. This is potentially a sign that they should have been incorporated into a larger group but weren’t due to misspellings and capitalization inconsistencies.

## When you have no data

Sometimes you do not have the data in your database to calculate a metric. This can be seen as a huge roadblock but there are a few ways forward. We need to first ask ourselves the following to know what we can do.

Do we care about historical data?

Is the metric actually trackable?

How much data is needed for this metric to be valuable?

### Instrumenting new data points

If historical data is of no concern consider working with the Data Gatekeeper to talk with engineering about starting to track what you want. This will delay the project from completion based on the engineering resources available to help.

Consider the costs

* People time
* Data Complexity
* Database costs

If the metric desired here is for a statistical test, talk with the Data Gatekeeper about how much data will be necessary to do the test properly. Factor in how much time it will take to get that data and let the Point Person know. Often times people will want to draw conclusions as quickly as possible, do not let your dashboard get used incorrectly like this. Set expectations up front when instrumenting new data points and perhaps even note on the dashboard when conclusions can be drawn.

### Proxy Metrics

If we want historical data but we do not have the data for the metric we wanted we can use proxy metrics. Proxy Metrics are metrics that give us the same or similar information to what we wanted.

Example:

The Point Person wants to know what customers think of the product.

Desired Metric: NPS

* This has not been implemented yet and is reliant on people filling out a form so there might not be a lot of data to draw conclusions from.

Proxy Metric: Return Visitors

* We could look at how often customers use the product as a proxy metric, we equivocate regular usage with our customers liking the product.

While Proxy Metrics are not exact they can give us a good estimation. Finding good proxy metrics can be dangerous because they can change the focus of your company.

Consider a company who has to wait a long time to see if their product was valuable to the consumer such as an education company. They provide a lot of knowledge but if their ultimate goal is job placement they have to wait several months to know if their education was effective for the student.

How can they measure if they are doing a good job before their desired metric event happens?

You could introduce surveys to measure how confident students are in their job prospects, you could measure graduation rates, or you could measure the amount of inbound interest in your students from outside employers. Each one of these Proxy Metrics which you might be able to assess sooner than the “did they get a job” metric will lead you to focus on different activities. So be cautious with Proxy Metrics

## Summary

* Finding where the data is located can be challenging
* Most likely you will need to involve the Data Gatekeeper in your search, be prepared with what data you are looking for before engaging with them
* Sometimes you will not be able to find data due to your level of access and will need to consult the Data Gatekeeper.
* Fill out your metric architecture to know which table and field will be necessary for each metric.
* Determine how messy your data is and clean it appropriately
* If you do not have the data for a metric work with the Data Gatekeeper to instrument new data points or use Proxy Metrics
