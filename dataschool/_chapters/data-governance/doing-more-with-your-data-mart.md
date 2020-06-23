---
section: Extras
reading_time: 5
title: Doing more with your Data Mart
meta_title: How to route your data from Mart to Applications
description: Learn why you should use a tool like census to push your data back to
  your data sources
authors:
- _people/sylvain-giuliani.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/loop-diagram.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
faqs: []
number: 9000

---
If you followed this book, you should now have a modern data stack that allows you to ingest & report on:

* Behavioral data such as click streams, page views, email opens, or product events
* Factual data about your users and customers sourced from your CRM, Marketing Automation platforms, Ad platforms, etc.

The data warehouse creates a single source of truth that provides you with clean, transformed, and unified data that you can trust. With this, you and your company have the confidence to make decisions based on dashboards, reports, and analyses that you create in a BI tool such as [Chartio](https://chartio.com/).

At this point, you have already created real value for your company, but you can increase your impact even further.

## **Doing more with your Data – Closing the loop**

As a data person, you can contribute directly to the success of your company by closing the loop and bringing the unified data back into the business tools your marketing, sales, and support teams are using to achieve their goals.

![](/assets/images/loop-diagram.png)

Without connecting the data back into these applications, your colleagues have to go outside their workflow each time they want to lookup information. Right now, for example, if your colleague in marketing wants to send personalized emails based on aggregated product data, they will have to manually import/export CSVs which is time consuming and prone to errors, creating duplications and can cause sending emails to the wrong person or with the wrong data.

Even worse, they can’t automate their work by referring to a chart. Here are some specific examples of how syncing data back into your CRM and other tools can make your team more effective:

* **Improving Customer Success with User & Account activity.** By syncing product activity metrics into an app like Salesforce, CS teams can create alerts to track expansion/churn. Without syncing your data back to the CRM, they would have to use multiple tools across many tabs to hunt down the information.
* **Driving new sales with Product-Qualified Leads.** Sales Ops teams can setup rules (combining all the signals in your warehouse) to discover potential sales accounts from aggregated freemium users and automatically assign these in a CRM. They can also highlight the most active users in each lead/account so sales reps can prioritize who to call.Without syncing your data they would have to rely on doing the scoring in a spreadsheet and then manually importing the score via CSV files.
* **Building personalized marketing campaigns.** By merging product, support, and sales data, marketers can build segments of users who should hear about new features/offers without bombarding the whole user base (e.g. notifying only users who experienced a pain point). Without the data being synced back, marketers would have to ask the engineering team to build these segments and do a “one time” import to the emailing applications.
* **Create a shared 360° Customer View** in your Help Desk, Sales CRM, and Marketing tools. Every team is aligned on definitions and can see what matters about customers at a glance. If Data is not synced, the teams will have to have multiple tabs open with each application open to help them understand what the customers are doing.
* **Prioritize support tickets.** You can start prioritizing support requests on more than revenue. By blending using product, you can make sure your power users get the VIP treatment and that the support team don’t have to ask them questions to know “which product they are using and how”.

Best of all, with more people using your data, these stakeholders act as a QA process and create a feedback loop to improve the quality and accuracy of your data models.

That sounds good, but how do you do it?

## **Getting data into external tools & keeping them up-to-date**

You have a couple of options. It all depends on how much work you want to put into it.

* **Custom integrations**. The benefit of this approach is you can build exactly what fits your needs. Most applications have open APIs and you can ask your engineering team to build these integrations. Once the integration is live, you must take responsibility to maintain, monitor, and manage it. For example, every time a business person wants more data, you will need to write & deploy some code.
* **Point to Point Integration Tools**: You can use tools like Zapier or Tray.io that make it simple to push field values from one app to another. However, you may start to encounter difficulties once you need to sync fields on multiple objects across 2+ tools. For example, if you want to update the first name field of your contact in the CRM, help desk, and marketing email tool with the latest value, you can quickly create an infinite loop. Or to avoid this, you will need to create four workflows. Besides, it is impossible to create workflows that do any aggregation of data such as page view counts or actions taken in your product over a certain amount of time.
* **Data Integration Platform**: Since your warehouse is the single source of truth, you can use a product like [Census](https://www.getcensus.com/) that is designed to keep tools in sync with your warehouse. This approach avoids having to create multiple workflows for each point-to-point integration or having to write code. The drawback is that you have to write some SQL to select the data sets your team wants to sync.

What’s next? If you are interested in taking action based on data, come talk to us in our [Slack Community](https://join.slack.com/t/thedataschool/shared_invite/enQtNjAyMTM1MTk1MzQ4LWY4YWI1YzBkOTAwZmQ4Y2Q4N2U4MWE1Njg3OWJhNmU2NGRiYTI0MDEzMmQ1MzllMTczMGFhMTEwZTBlYmQxYjY).