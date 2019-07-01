---
section: Prototype
title: Find the Best Visualizations for Your Metrics
meta_title: Find the Best Visualizations for Your Metrics
description: Decide what chart works best for your visualization based on if you want
  to show composition, relationship, distribution or comparison. Not all visualizations
  are appropriate, learn which are.
number: 70
authors:
- _people/tim.md
reviewers:
- _people/matt.md
- _people/dave.md
image: "/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/exampleChart.png"
is_featured: false
img_border_on_default: false
feedback_doc_url: https://docs.google.com/document/d/1z2HnZTxsdPY89M5ElREXoGSIcQMrPzwdYVcaAbFz9eQ/edit?usp=sharing

---
Selecting the best chart for your metrics is not always a straightforward process. Certain visualizations do not represent some datasets well, and certain visualizations can not represent some datasets at all. Sometimes you just need a table, single value, or just show some text. Knowing the difference will help you design the most useful dashboards.

## Advantages of data visualization

Graphs help people recognize patterns faster than looking through a table with numbers in it. For example, take a look at the table below..

![Example data table](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/exampleTable.png)

Now take a look at this chart...

![Example chart made with data table](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/exampleChart.png)

Data visualization is a general term that describes any effort to help people understand the significance of data by placing it in a visual context. Patterns, trends and correlations that might go undetected in text-based data can be exposed and recognized easier with data visualization software.

## Most Common Visualizations

After studying 90,000 dashboards at Chartio most data is displayed in a handful of the chart options.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/dashboardCreationCount.png)

While these may not be the most optimized they are most often created. People create table views of their data, single values, bar charts and line charts.

However when we look at what visualizations are on dashboards that get the highest average views we get a different ranking.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/dashboardAverageViews.png)

Bar Line, bubble, bullet, single value, and bar charts are the most often viewed. Consider these options before going into the more specialized types of visualizations.

## Selecting Visualizations

We also created a list of when each chart type is optimal to use for viewers interpreting the data correctly. We have created a decision tree to help you choose the most effective chart for your data. You can use this flowchart to select your visualizations. Please download this, print it out, and put it on the wall near your desk.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/visualizationWeb.png)

## Single Value

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/singleValueCharts.png)

## Multiple Values

To display multiple values there are 4 common categories:

* Relationship: how multiple independent variables relate to each other.
* Comparison: how two or more sets of data compare with each other.
* Composition: how a set of data is made up of smaller divisions.
* Distribution: how different sets of data are spread over a population or other distribution.

### Relationship

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/relationshipCharts.png)

### Comparison

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/comparisonCharts.png)

### Composition

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/compositionCharts.png)

###Distribution

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/distributionCharts.png)

## Examples

Using the Flow Chart we can go through the decision making process for each of the metrics we created in the previous chapter. Review the formula and grouping content in the Metric Spreadsheet and lets create visualizations for each one.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/metricSpreadsheet.png)

###Operations Cost

There are multiple ways we need to aggregate operational cost. We need to calculate the total and we need to calculate the total grouped by department and month. For the total a single value chart is appropriate. For the by department by month aggregation we should use a line chart

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/operationCost.png)

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/operationChart.png)

### Revenue

We only need to aggregate the total which produces one value. If no comment was provided by the Point Person about wanting to see the total revenue compared to a previous time or compared to a goal the Single Value Chart is the best option. (reword sentence)

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/revenueCost.png)

### Subscriptions

We are provided with one number, but we can add a sparkline (a small line graph without axes) to give us an idea of the historical context of how the number has moved.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/subscribers.png)

## Things NOT to do

### 3 Dimensions

People already struggle with comparing 2D areas, for instance all of these have the same area.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/3dNotToDo.png)

This is also why many people recommend caution using pie charts or area charts since they leverage 2D space. They can be used but only when there are very few categories.

People are also not effective at comparing 3D volume, all of these shapes have the same volume(made up of 4 cubes of the same size).

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/3dShapes.png)

In addition it typically requires much more space to convey 3D information than showing it in 2D. Stick with simple 2D visualizations.

### Too many categories

Once there are more than 5-7 categories it can be difficult to understand the graph quickly.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/tooManyCategories.png)

Consider limiting the number of categories shown in a visualization or try lumping together smaller categories into an “Other” bucket.

![](/assets/images/how-to-design-a-dashboard/find_the_best_chart_for_your_metrics/otherBuckets.png)

## Summary

* Chart decisions should be made based on the data, using the flowchart can help you make the best decision
* If you are displaying multiple values consider whether you are trying to show relationship, comparison, composition, or distribution between the value to help you pick the most appropriate chart.