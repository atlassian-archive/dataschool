---
title: Dashboard Design Process
meta_title: Design Thinking Process for Dashboards
description: See how design thinking principals map to dashboard design. Define, Prototype,
  Build, and Deploy Dashboards.
section: Introduction
number: 40
authors:
- _people/matt.md
reviewers:
- _people/mike-yi.md
image: "/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-process-overview.jpg"
is_featured: false
img_border_on_default: false
feedback_doc_url: https://docs.google.com/document/d/1Hr58hfvmlgidqNYG8E-vwTid2lQwbXi8621lsktysH0/edit?usp=sharing
is_under_construction: false

---
The dashboard design process is very similar to any design process – the output in this case is simply a dashboard.

## Why the Design Process is Important

People get very attached to solutions they come up with for a given problem. The more they invest time and effort into their solution, the stronger they believe in it regardless of how well it actually solves the problem. This is why it is critical to avoid jumping right to solving a problem by building a dashboard. We don’t want dashboards that don’t solve the problem well because they will not be used.

Spend time understanding _why_ we are building a dashboard and give ourselves _time_ to explore multiple ideas before selecting a solution that we will actually build.

The dashboard design process starts with defining our stakeholders and determining what decisions they need to make, we then determine what metrics would support those decisions. Next we prototype dashboards with pen and paper, get feedback, and iterate. After verifying that the prototype meets the goals of the project, we need to find the actual data and build the dashboard. Finally, we need to share the dashboard and maintain it so it becomes a useful tool for the audience.

### Dashboard Design Process

We can summarize this process into four steps:

1. Define
2. Prototype
3. Build
4. Deploy

![Four steps of the design process: Define > Prototype > Build > Deploy](/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-process-overview.jpg)

## 1. Define

![Example of potential audience](/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-define-audience.jpg)

This is the first and most important step. Having clarity about who this dashboard is for and what metrics matter to them is critical to creating a dashboard that will be used.

### Stakeholders

There are 4 main stakeholders

* The designer (you)
* The audience (who will be viewing this dashboard)
* The point person (the member of the audience who has the most experience)
* The Data Gatekeeper (member of the data team who will help with the database)

We will define their responsibilities and where they factor into the process in the next chapter, [Identifying Key Roles](https://dataschool.com/how-to-design-a-dashboard/identifying-key-roles/).

### Metrics

You will work with the point person to go from decisions that need to be made to metrics that can be queried and tracked. This process involves a lot of back and forth to weed out interesting but ultimately not relevant metrics to mission critical data for decisions to be based on. We will go into further details about how to do this in [Determine the Metrics to Monitor](https://dataschool.com/how-to-design-a-dashboard/determine-the-metrics-to-monitor/).

## 2. Prototype

![visualization of the prototyping process](/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-prototype.jpg)

Once we have the metrics that we want to put in a dashboard, we need to figure out how to best display them so that the dashboard is useful to the whole audience.

### Visualizations

Use visualizations that present the metrics clearly and accurately. Even when sketching and prototyping graphs, making the right visualization decisions here will improve the prototype and the feedback loop. We will cover when to use which chart in depth in [Find the Best Visualizations for your Metrics](https://dataschool.com/how-to-design-a-dashboard/find-the-best-visualizations-for-your-metrics/).

### Dashboards

There are best practices for taking the visualizations and composing them together in a dashboard. In fact, some composition choices might actually make you change what visualization you had selected as optimal before. We cover best practices for arranging dashboards in [Arranging your Charts as a Dashboard](https://dataschool.com/how-to-design-a-dashboard/arranging-your-charts-as-a-dashboard/).

### Sketching and Iteration

At this stage, it is recommended that the visualizations and dashboards be sketched out on paper or using a lo-fi tool that is not connected to any real data. The reason for this is that it allows you to quickly throw out bad ideas without worrying about the time investment. It also allows you to focus on design instead of checking if the numbers are right. We talk through visualization and dashboard prototyping strategies in [Dashboard Prototyping and Feedback](https://dataschool.com/how-to-design-a-dashboard/dashboard-prototyping-and-feedback/).

## 3. Build

![Building process visualization](/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-desig-build.jpg)

Once we are satisfied with the prototype we have to create the dashboard using real data.

### Find the Data

Many challenges can arise at this point. Where is the data stored? Is the data messy? Do we even have the data available? Working with the data team and the Data Gatekeeper is critical to navigating this step. We talk through common difficulties and how to overcome them in [Finding the Data that Builds Metrics](https://dataschool.com/how-to-design-a-dashboard/finding-the-data-that-builds-metrics/).

### Build Metrics/Dashboard

We need to create queries to power the metrics, create formulas, and transform the data into charts. Using a framework to log the metrics, formulas, and data sources makes creating queries much easier. We outline how to do this best in [Build the Metrics](https://dataschool.com/how-to-design-a-dashboard/build-the-metrics/).

## 4. Deploy

![Deploying the product](/assets/images/how-to-design-a-dashboard/dashboard-design-process/dash-design-deploy.png)

Finally, we have a fully functioning dashboard. Now we need to share it with the full audience. We should enhance the dashboard to make it more effective at scale and we need to make sure to maintain it as usage grows and changes.

### Sharing

The audience will have varying levels of data literacy and context for the data presented in the dashboard. You need to verify that you have enough context within the dashboard and that you provide enough training so that people can get insights out of it easily. We go over these techniques in [Sharing the Dashboard - Distribution Strategie](https://dataschool.com/how-to-design-a-dashboard/sharing-the-dashboard-distribution-strategies/)s.

### Scaling

If the dashboard is useful, the amount of views and number of viewers is likely to grow. Adding links, interactivity, and documentation to a dashboard helps it accommodate more use cases and inspire other dashboard creators. Also as the number of views and viewers increases, spending time optimizing queries becomes an important way of keeping the dashboard useful. We outline the steps in [Scaling Dashboards](https://dataschool.com/how-to-design-a-dashboard/scaling-dashboards/).

### Maintenance

Datasources, tables, and fields change, and dashboards need to change with them. Setting up scheduled times to review dashboards is critical to keeping them relevant and functional. Providing a way for the audience to alert you about issues will allow you to make informed improvements to the dashboard. We cover maintenance in [Making Sure your Dashboard Always gets better](https://dataschool.com/how-to-design-a-dashboard/making-sure-your-dashboard-always-gets-better/).