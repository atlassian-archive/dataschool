---
title: Dashboard Design Process
section: ''
number: 4
authors:
- author: _people/matt.md
reviewers: []
image: ''
summary: Overview of all the steps in a dashboard design process

---
The dashboard design process is very similar to any design process however the output is a dashboard… obviously.

\## Why is Process Important

People get very attached to their solutions for a problem. The more they invest time and effort in their solution the stronger they believe in it regardless of the quality of the solution. This is why it is critical to avoid jumping right to solving the problem by building a dashboard. We don’t want low quality dashboards.

Spend time understanding _why_ we are building a dashboard and give ourselves _time_ to explore multiple ideas before selecting what we will actually build.

The process starts with defining our stakeholders and what the metrics they care about. Then we prototype dashboards, get feedback, and iterate. After getting feedback that the prototype meets the goals of the project we need to find the actual data and build the dashboard. Finally we need to share the dashboard and maintain it so it becomes a useful tool for the audience.

We can summarize this process into 4 steps:

<figure class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div>!\[Dashboard Design Process\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab6df7afc1aae51285ec64_7whuE2Xy1o6-AL1Xjio-Z_-Hbfb9QU4vGmqhHFWxCiNtHCIcs6SFAzWFteCTBY6DbN8hYw6rnxKYiyqHpWVkAz156MpNsk382LitTuA6AIpJLl63_6OGvdcbO_0_Q-T4ltHKt2TQ.jpeg))</div>

</figure>

\## Define

<figure class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div>!\[Define Stakeholders and Metrics\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab74819562db50cb557a8a_FkkOWNdLwmba37ySn2lYNhuDxV1z4ZLdcUp-B_vIyo9LGgWQfyjPgdmUVKzjAoiQwGChqUq-2mt8kMvUVms30nCfOk7ce_BvkbcQVFYXMUGCl6-Q7GMa_-tv6D8mQBWEdQVsarPr.png))</div>

</figure>

This is the first and most important step. Having clarity about who this dashboard is for and what metrics matter to them is critical to creating a dashboard that will be used.

\### Stakeholders

There are 4 main stakeholders

\*   The designer (you)

\*   The audience (who will be viewing this dashboard)

\*   The point person (the member of the audience who has the most experience

\*   The Data Gatekeeper (member of the data team who will help with the database)

We will define in detail their responsibilities and where they factor into the process in the next chapter.

\### Metrics

You will work with the point person to go from vague goals to query-able metrics. This process involves a lot of back and forth to weed out interesting but ultimately not relevant metrics to mission critical data for decisions to be based on. We will go into further details about how to do this in \[Determine the Metrics to Monitor\]([https://dataschool.com/learn/determine-the-metrics-to-monitor](https://dataschool.com/learn/determine-the-metrics-to-monitor "https://dataschool.com/learn/determine-the-metrics-to-monitor"))

\## Prototype

<figure class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div>!\[Prototype\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab74815e4349b72e708466_7Zc02onZFF8Dc0IUDJsCGiSsU0iijEcKmxcOhvAfamGkVzi1SnvGtzvunFgeB2O0avSpIKaQnxweANsYNN1YsQZjjUmCWKE100RaHX4h4fU-dF-njRyMtNMokU-8nqsdC1m7iu6u.jpeg))</div>

</figure>

Once we have the metrics that we want to put in a dashboard we need to figure out how best to display them so that it is useful to the whole audience.

\### Visualizations

Use the visualization that best presents the metrics clearly and accurately. Even when sketching and prototyping graphs making the right visualization decisions here will improve the prototype and the feedback loop. We will cover when to use which chart in depth in \[Find the Best Visualizations for Your Metrics\]([https://dataschool.com/learn/find-the-best-chart-for-your-metrics](https://dataschool.com/learn/find-the-best-chart-for-your-metrics "https://dataschool.com/learn/find-the-best-chart-for-your-metrics"))

\### Dashboards

There are best practices for taking the visualizations and composing them together in a dashboard. In fact some composition choices might actually make you change what visualization you had selected as optimal before. We cover best practices for arranging dashboards in \[Arranging Your Visualizations as a Dashboard\]([https://dataschool.com/learn/arranging-your-charts-as-a-dashboard](https://dataschool.com/learn/arranging-your-charts-as-a-dashboard "https://dataschool.com/learn/arranging-your-charts-as-a-dashboard"))

\### Sketching and Iteration

At this stage it is recommended that the visualizations and dashboards be sketched out on paper or using a lo fi tool that is not connected to any real data. The reason for this is that it allows you to quickly throw out bad ideas without worrying about the time investment. It also allows you to focus on design instead of checking if the numbers are right. We talk through visualization and dashboard prototyping strategies in \[Dashboard Prototyping and Feedback\]([https://dataschool.com/learn/dashboard-prototyping-and-feedback](https://dataschool.com/learn/dashboard-prototyping-and-feedback "https://dataschool.com/learn/dashboard-prototyping-and-feedback"))

\## Build

<figure class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div>!\[Build Dashboard\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab7481e5f4b61c7afe0ddc_h2Ffz0eklqH8BwVfX_naUVJa3FE6sFO57JWzUXZ3FSG3qffZMG7W0H6M7wIfaeEtPTPT7_T2S5l4WSBqF_pI-9osLVrN2f2PBAxcGKrgMqZRJQaUXqzb6V32A9nWNyNZCIM159pp.jpeg))</div>

</figure>

Once we are satisfied with the prototype we have to create the dashboard using real data.

\### Find the Data

Many challenges can arise at this point. Where is the data stored? Is the data messy? Do we even have the data available? Working with the data team and the Data Gatekeeper is critical to navigating this step. We talk through common difficulties and how to overcome them in \[Finding the Data That Builds Metrics\]([https://dataschool.com/learn/finding-the-data-that-builds-metrics](https://dataschool.com/learn/finding-the-data-that-builds-metrics "https://dataschool.com/learn/finding-the-data-that-builds-metrics"))

\### Build Metrics/Dashboard

We need to create queries to power the metrics, create formulas, and transform the data into charts. Using a framework to log the metrics, formulas, and data sources makes creating queries much easier, we outline how to do this best in \[Build the Metrics\]([https://dataschool.com/learn/build-the-metrics](https://dataschool.com/learn/build-the-metrics "https://dataschool.com/learn/build-the-metrics"))

\## Deploy

<figure class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div>!\[Distribute scale and mainating dashboard\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab74815ad679021b11f505_oDGwWr7q1ujS2X9ppLt7Fh3m2qxxm8i0RbpmKeEzrpmVzB3lAME2hf7-j2c8sIxMqQnqB6aYDjNXTMeFIqoJ5GHrno0xtvAWFKZ7xEwdZUWCW0HyRw3pdaCWlb4y8SZSSqUc7jRl.png))</div>

</figure>

Finally we have a fully functioning dashboard. Now we need to share it with the full audience. We should enhance the dashboard to make it more effective at scale and we need to make sure to maintain it as usage grows and changes.

\### Sharing

The audience will have varying levels of data literacy and context for the data presented in the dashboard. You need to verify you have enough context within the dashboard and that you provide enough training so that people can get insights out of it easily. We go over these techniques in \[Sharing the Dashboard – Distribution Strategies\]([https://dataschool.com/learn/sharing-the-dashboard-distribution-strategies](https://dataschool.com/learn/sharing-the-dashboard-distribution-strategies "https://dataschool.com/learn/sharing-the-dashboard-distribution-strategies"))

\### Scaling

If the dashboard is useful the amount of views and total number of viewers is likely to grow. Adding links, interactivity, and documentation to a dashboard helps it accommodate more use cases and inspire other dashboard creators. Also as the number of views/viewers increases spending time optimizing queries becomes an important way of keeping the dashboard useful. We outline the steps in \[Scaling Dashboards\]([https://dataschool.com/learn/scaling-dashboards](https://dataschool.com/learn/scaling-dashboards "https://dataschool.com/learn/scaling-dashboards"))

\### Maintenance

Datasources, tables, and fields change, dashboards need to change with it. Setting up scheduled times to review dashboards is critical to keeping them relevant and functional. Providing a way for the audience to alert you about issues will allow you to make informed improvements to the dashboard. We cover maintenance in \[Making Sure Your Dashboard Always Gets Better\]([https://dataschool.com/learn/making-sure-your-dashboard-always-gets-better](https://dataschool.com/learn/making-sure-your-dashboard-always-gets-better "https://dataschool.com/learn/making-sure-your-dashboard-always-gets-better"))

\[Give Feedback on our Google Doc\]([https://docs.google.com/document/d/1Hr58hfvmlgidqNYG8E-vwTid2lQwbXi8621lsktysH0/edit?usp=sharing](https://docs.google.com/document/d/1Hr58hfvmlgidqNYG8E-vwTid2lQwbXi8621lsktysH0/edit?usp=sharing "https://docs.google.com/document/d/1Hr58hfvmlgidqNYG8E-vwTid2lQwbXi8621lsktysH0/edit?usp=sharing"))