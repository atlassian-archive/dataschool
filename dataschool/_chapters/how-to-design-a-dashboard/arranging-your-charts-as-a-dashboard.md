---
section: book
title: Arranging Your Charts as a Dashboard
meta_title: Arranging Your Charts as a Dashboard
description: Maximize understanding of a dashboard by arranging data visualizations
  intelligently.
number: 80
authors:
- _people/tim.md
reviewers:
- _people/dave.md
- _people/matt.md
image: "/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/dashboardBreakdown.jpeg"
img_border_on_default: false
feedback_doc_url: https://docs.google.com/document/d/1Pa0bVsWjKnISzwNY7REZqlkMQVtJhnMi74QccC7ut1A/edit?usp=sharing
is_featured: false

---
Arranging the charts is where the science of a dashboard project starts to cede some of its control to art. There are many things to consider when arranging and sizing charts and selecting fonts and colors. How visualizations are composed in a dashboard can either facilitate or hinder the decision making process.

## Alignment & Grouping

In the dashboard that we have been working to create with this book, we ended up with thirteen individual charts, monitoring eight different metrics. Some metrics were monitored twice so the current status, as well as a trend analysis over time, could be analyzed. When we started to create the dashboard we ended up with thirteen charts in three zones. By grouping charts and metrics that are closely associated with each other it gives us a larger picture.

![Dashboard grouping breakdown example](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/dashboardBreakdown.jpeg)

Here we can see revenue and operations metrics shaded in blue, marketing metrics shaded in orange and user metrics shaded in green. Group charts that are about similar topics together.

### Alignment Quick Tips

* If a specific metric is displayed in two ways, these should be right next to each other. For example here we can see both the current Count of Users, and we can see how they have been trending in the graph next to it this year.
![Different views of the same metric](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/sameMetrics.png)

* Line charts with the same time frame should be stacked vertically to facilitate comparisons. For example below we can see how our MRR (Monthly Recurring Revenue) compares to our operational costs by department.
![vertically stacked charts with same time period](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/sameTime.png)

* Put items next to each other with no separation to use the same title for both visualizations. Here you can see that there does not appear to be any separation between these two visualizations. This groups the data and makes it clear they are describing the same thing.
![Using a title for multiple charts on a dashboard](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/sameTitle.png)

## Examine Layouts

Determine the aspect ratio of the device (iphone, laptop, tv, etc) the dashboard you are building will ultimately be delivered on by consulting with the Point Person. View our templates to get ideas about how you could compose visualizations together.

![Example dashboard layout](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/exampleLayout.png)

View more here: [Dashboard Templates in Figma](https://www.figma.com/file/dTND29GywRZ16tgsv7nORhKx/Dashboard-Templates?node-id=0%3A1)

Also now is a good time to use google and apps that you use with a dashboard interface to get inspired about what combinations work.

Here is a great layout used by Google Analytics:

![A good example dashboard from Google Analytics](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/googleAnalytics.png)

[https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812](https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812 "https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812")

While being innovative in dashboard design can challenge the way we look at things in a positive way it is also likely to confuse the audience. Stick with simple arrangements that don’t violate the ACES dashboard design qualities in our [previous chapter](/how-to-design-a-dashboard/what-makes-a-great-dashboard-aces).

## Limited Variety

At Chartio we have also noticed that dashboards with multiple chart type get more views to a point. Viewership peaks when three different types of charts are used, and it

![Chartio chart types variety](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/chartioChart.png)

## Avoid Too Much Information (TMI)

In addition to not including too many cool BI Tool features in your dashboard, remember to not include too many visualizations in your dashboard either. There will be many opportunities to overload the dashboard with too much information. Information overload deteriorates the power of the dashboard.

At Chartio we took a look at the number of visualizations per dashboard and found that it is heavily skewed, the vast majority only use a few charts.

![TMI long tail](/assets/images/how-to-design-a-dashboard/arranging_your_charts_as_a_dashboard/TMI.png)

If information needs to be viewed as is and aggregated at a more granular level, you need a second dashboard containing this has a more drilled down view. Don’t be afraid to link out to other dashboards. This preserves the decisions and goals of the dashboard at hand and let’s people explore the data in more detail if they wish.

## Summary

* Align visualizations to facilitate comparisons
* Group visualizations to facilitate insight
* Familiarize yourself with various dashboard layouts to help develop useful arrangements for your own dashboard.
* Be wary of flashy dashboards arrangements made possible in BI tools
* Do not overcrowd the dashboard with too many visualizations, link out to provide further investigation where appropriate