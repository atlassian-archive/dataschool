---
section: Define
title: Determine the Metrics to Monitor
meta_title: Determine Metrics to Monitor for a Dashboard
description: Define what metrics actually matter to business professionals. Use customer
  development techniques to determine the best metrics.
number: 60
authors:
- _people/matt.md
reviewers:
- _people/dave.md
image: "/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/dau.png"
is_featured: false
img_border_on_default: false
feedback_doc_url: https://docs.google.com/document/d/1G9A9TKdhPH_0P5EaeahoFvoU5W0PzUKnWqAbv1XY_pc/edit?usp=sharing

---
![Dau logo](/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/dau.png)

After defining the stakeholders involved we need to get clear about what decisions this dashboard is going to help people with. The point of a dashboard is to help people find insights and make decisions. The Point Person will help you determine this since they are the main audience member who will be using the dashboard to make decisions.

Often times the Point Person will have really vague overall goal for wanting a dashboard. It is your job to help them refine their vision to a few key decisions that need to be made and then finding metrics that will help inform those decisions.

* Understanding the Point Person
* Define the Decisions
* Define the Metrics

## Understanding the Point Person

### Overall Goal

While there is a lot written about strategies for defining goals, they all boil down to the same thing. State a specific result that you want to achieve. The more specific the easier it is to act on. Have the Point Person write out what specific result they are hoping to achieve by having a dashboard.

Ask them: _What does success look like?_

The more specific they are the easier the rest of the process is since the dashboard can be measured against that specific result.

### Motivation

Understanding what they want out of the dashboard is a great start but we want to dig deeper to understand their motivation, what is the pain the dashboard will solve for them. We can understand this be learning how they are currently solving their problem. Dig into their stated goal using a customer development framework such as:

What is the hardest thing about achieving \[stated goal\]?

Why is that hard?

Can you tell me about a time when you last tried achieving that goal?

How did you overcome the hardest parts?

What don’t you like about your solution?

We will learn a lot from the Point Person’s answers. If it is not hard for them to achieve their goal a new dashboard is unlikely to be valuable to them. Understanding why achieving their goal is hard gives insight into why a dashboard might be the solution they need. Hearing a story about their struggle in achieving their goal will give you insight into full process involved. If they have not tried to overcome the hard parts they likely do not care that deeply about the goal. If they did try to overcome the hard parts then you might be able to borrow from their solution in your dashboard. Understanding what they didn’t like about their solution will make sure you do not repeat the same mistake in your dashboard.

After getting perspective on the goal and motivation of the Point Person we need to breakdown all of the decisions along the way to achieving their goal that need data to support them.

## Define the Decisions

### Best Case Scenario

Start with ideal scenario, and work backwards. Have the Point Person imagine that they have achieved their goal and then think backwards.

* How did this happen?
* What decisions did they make in order to achieve their goal?
* What data did they have to make those decisions on?

This exercise eliminates any technical constraints and captures the aspirational decisions they wish a dashboard could support.

### Worst Case Scenario

Explore the worst scenarios, and work backwards. Have the Point Person imagine completely failing at achieving their goal.

* How did this happen?
* What bad decisions lead to this outcome?
* What decisions were made with a lack of data?

This exercise identifies decisions that definitely need data to support them. It focuses on identifying what could go wrong so it will likely surface more practical decisions.

### Prioritize

Take the list of aspirational and practical decisions and rank order them with the Point Person. While there is no hard number for the number of decisions you want to support with a dashboard the fewer the better. It creates a focused use case and makes it easier to design the dashboard. After determining the decisions for this dashboard we need to see how we could inform those decisions with metrics.

## Define the Metrics

After we know what decisions are important we need to figure out which metrics would best support those decisions. Below is a spreadsheet that outlines all the necessary pieces that you will need to specify to create a query around a metric. We will refer to this as the Metric Spreadsheet.

Work with the Point Person to write out how they want to aggregate, group by, and filter the metrics. If you are skilled at extracting metric formulas from business people this may not be necessary, but if you want a clear way to document their metric definitions we suggest using a Metric Spreadsheet. Either way this book will use the Metric Spreadsheet keep track and reference what metrics are important to this dashboard design process.

Metric Spreadsheet

![Blank sample metric spreadsheet template](/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/blankSpreadsheet.png)

This Metric Spreadsheet will help you track what the Point Person wants and help you build the final visualizations quickly.

There are two approaches that can assist with figuring out the proper metrics that will support their decision making. Visual and conversational. They can be helpful independently or used together.

### Visual Method

Some people who are requesting a dashboard will struggle to articulate what they need. An easy hack for this is to have them fill out what a dashboard would look like that would help them make decisions. Here is a sample template:

![Blank sample of a hand drawn dashboard template](/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/blankVisual.png)

After they fill this out it is easier to talk with them in more detail about the underlying metrics in the visualizations they drew. In the “Bringing it all together” section further down we will discuss how to dig in to each of these visualizations.

### Conversational Method

After determining their prioritized list of decisions that they need to make, clarify what metrics would inform those decisions with the following questions:

* What data would help inform that decision?

As you work through each decision with the Point Person, there will likely be multiple types of data they wish they had for each decision.

You should also directly prompt them at each question by asking “What other data might be useful” or “How else could we improve this decision’s quality?” The data they want to see will become the metrics that you will be visualizing for them in the dashboard. Before we get started building them we want to make sure we understand exactly how these metrics are aggregated, grouped, and filtered.

## Bringing it all together

After determining the set of metrics the Point Person is interested in from their drawings or through conversation, get specific about each one.

* How is this metric calculated?
  * Write out formula behind each one. For example: LTV is Average Revenue Per Customer / Customer Churn Rate
* How do you want to group the data?
  * Category, Timeframe, etc
* How do you want to filter the data?
  * Group
  * Timeframe
  * Specific Criteria

It is valuable to push the Point Person to think about the question in different ways. Go through common aggregations(SUM, COUNT, AVG, MAX, MIN, etc) and groupings (Time, Category, etc) to see if they find any value in them. Looking at a metric in multiple ways can help people develop better insights around that data. Should they look at the average or the median, should they group by month or by year.

After they clarify all these aspects of the metrics they are interested in writing it down so you can easily calculate them in your BI tool. You could also use this information in the Metric Spreadsheet to log the information.

We will use the Metric Spreadsheet to keep track, the questions above map to directly to it’s columns:

![Filled out Metric Spreadsheet example](/assets/images/how-to-design-a-dashboard/determine_the_metrics_to_follow/filledSpreadsheet.png)

These metrics should inform the decisions that need to be made by the Point Person to achieve their goal. Before we start prototyping these metrics in the next few chapters we will review best practices for visualization selection and arranging a dashboard.

## Summary

* The first step in building a great dashboard is understanding the central premise or purpose for building the dashboard.
* This understanding can be obtained by interviewing the Point Person of the dashboard and first finding out the question they want to have answered.
* Then you can work with the Point Person to define the metrics that are involved in answering the questions that will guide their decision making.
