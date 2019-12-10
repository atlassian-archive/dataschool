---
title: What Makes a Great Dashboard (ACES)
meta_title: What Makes a Great Dashboard
description: Learn the best practices behind dashboard design to support decision
  making. Accuracy, Clarity, Empowerment, and being Succinct.
section: Introduction
number: 30
authors:
- _people/tim.md
- _people/matt.md
reviewers:
- _people/dave.md
image: "/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72d78a07165da8e775e9_Screen
  Shot 2019-04-08 at 8.59.39 AM.png"
is_featured: false
img_border_on_default: false
feedback_doc_url: https://docs.google.com/document/d/173T4Q9yB9arBmAFfLcIRqTj_KFGKFOMEkKGMqSlAtgo/edit?usp=sharing
is_under_construction: false

---
An optimal dashboard is Accurate, Clear, Empowering, and Succinct. These key tenets can be remembered with the acronym ACES.

## Accurate

A dashboard lives and dies by the trust the viewers have in what they are seeing. If the viewers doubt the accuracy it will not be used to make decisions. People will also be more hesitant to trust any dashboard or to do any querying themselves. A lack of accuracy in one dashboard causes a lack of faith in all the data.

Viewers belief in the Accuracy of the dashboard can be affected in multiple ways:

* Data Quality
* Metric Comprehension
* Visualization Design

### Data Quality

#### Is the data being displayed correct?

The answer to this question should always be yes. If for some reason the answer is no immediately flag the dashboard as needing to be fixed so people do not use incorrect information for their decisions. Viewers will assume any dashboard they come across to be accurate unless properly flagged otherwise. Use bracketed language \[BROKEN\] or perhaps emoji’s to make the status of the dashboard clear.

![Use of emojis and bracketed language to make message clear](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72d78a07165da8e775e9_Screen Shot 2019-04-08 at 8.59.39 AM.png)‍

#### Is the data being displayed all of the data?

Most of the times it is not, this is because of how data is loaded into the data warehouse. Engineers use batch processing that runs on a schedule to load data from their production database to the data warehouse which is what the dashboard is querying. This can cause people confusion who are dealing with customers or scenarios in real time where they are not seeing the data in the dashboard. If the dashboard is not displaying all of the data due to batch processing, you should note on your dashboard when the data was last updated and it’s schedule.

![Database update statistics](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72e6afc1aa5c948833ea_Screen Shot 2019-04-08 at 8.59.47 AM.png)‍

### Metric Comprehension

Metrics need to be understood before the viewer can interpret the chart accurately. It is a best practice to include formulas, notes, or definitions for any non-traditional metric directly on the dashboard. Placing it next to the visualization using it allows for the quickest use. Here we can easily see clarification around who is not included in this metric.

![Clarifying note on metric](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c92898f35b5d638110dce12_IfVO8X6UIUDjclmJeJy8VEXkhf7oiI7nf0dA1t5yAk-TehjBg5msEyMMgQ7kkhJ1XkPAfw62C3sDCjYXJE3RSP3f_Dba-ldZ004sKF1LIARGy7QODE5iN1M3IK2wOKkXd3Tk6BUh.png)‍

### Visualization Design

People are visual creatures and have a lot of biases in interpreting any visualization of data. A common mistake is setting the Y-axis range incorrectly. We want to highlight variation but we do not want to bias interpretation. For line graphs we do not have to start at 0 and we want to capture how the data changes

#### Good Y-axis Range - Can clearly see the variability

![good y axis range](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72ab9562dba031541f6e_sT_5wEyFrpyYXI7F1PEfgbxw6k21Wf1h5ze4MzUzxAo4Eb2myAOjCqpieshDH4X9jhgYtNvTPKS2bS7N0D-OWJ-LpBqfhZ57HcZ5YpbmdwwUCyezwRdNNLzQwzwBHRT16Q1JqRb0.png)

#### Bad Y-axis Range - Cannot see the variability

![bad y axis range](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72a9e5f4b62beafcecf1_r-t1Mt_b9s0pYCuMnhBfowDkCkGe2vlyCvunZXUoodPWoLLCbEIAQmMrsoz96wI56kCyP8hAdrVKj0ApWyj31XmtLFGUeobW4RePb760sYYYm3LQIY2aUtWtLr5mFA09ObxylFw3.png)

For bar graphs we must start at 0 because if it starts at a different point it prevents us from being able to use the size to judge the difference. When we look at the two examples below in the first we can see that HR is about half of what support is which is correct Support is \~450,000 and HR is \~200,000\\. However when we look at the second example HR looks like it is ⅕ of what Support is which is not correct.

#### Good Y-axis Range - Starts at 0

![good y axis on bar graph](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72aaafc1aa40a1880a83_d8_7CK6UOnayzgfQHQV2JYbrftsCfmLxDIo0uNhoIWxCy-firHSOIhSoaeYGY3kv08-1Oer0kS08V-hxvjIyW1J6j-WiNZP2sIsTPutGRpSKBDcYTqhxyjWizxpGSxfEC6u0e1lv.png)

#### Bad Y-axis Range - Does not start at 0

![bad y axis on bar graph](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72aae5f4b66101fced15_6SdwQuyB9VMghXQX4oOlnf5R9tfe20Vbm7oPub0xtrnQTcXhHdcKWG1HfxC01tIxeK6chNO0ESUaZCP7msYU7KCMEQGlTtOuPrbBmdNtNdheWO4XMTKwOq-25DSvhr4nq3CpvJQh.png)

## Clear

To be able to make a decision based off of a dashboard, the data must be displayed clearly. There are several factors that go into making the data clear.

* Fonts
* Colors
* Context
* Layout

### Fonts

Fonts for chart titles, axes labels, and details should not be decorative. The goal is legibility. We recommend using a sans serif font such as Arial, Helvetica, or Verdana.

![Legible vs Illegible fonts](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72fac775ff80b53b2080_Screen Shot 2019-04-08 at 9.00.01 AM.png)

Consider the font size of any metric that will be displayed on your dashboard. Think about what type of device the audience will be viewing this on as well. All text on a dashboard should not require you to squint to read it.

![small dashboard picture](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c9271bd9c457ed3923fd2bf_nFSWRDYkMRbBtNcXRvc5O0h5ui-47ycYjgLt2mwL0HWKKHK58RHRT8iltn43MTL0qEDjczfYqqtCLj4opWCTR7avjKCytJJg2YeM_Gd-9Fovohccj7go2byenGr4OxqbYT8tqNV1.png)

### Colors

The color palette used for the dashboard should be easy on the eyes and not overweight one color over another. An easy way to accomplish this is to use more muted tones.

![Use muted tones over loud color tones](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72aee277f745edaf8792_A6VNQXDL-tUtyKaL1Z8sfhJFDfTRhEZWlf2iP9woyEycyDKFxkisn-2f-qVip5wBBbFwJd7O1JTb3WNScjmaP5tXEJyN-QIZIfxHOfQLlmj4ALMpXpsy5KUaqPZalgtDac9AtE1y.png)

Colors should also be consistent when representing the same metric or type of metric from chart to chart.This makes it easy to relate the data across graphs, tables and charts

![consistency of color between graphs](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2f35b5d620b3025ac1_9Z1xfJw0MFTjfj4MBQr6EEzetgwfq3WDzvg6LA7QQ7GPc2Ei8tOLfqEwMP3W9iH093xjZ7y2ZV7VRwG_NjeacJBlJeTiON6_BPjKjfqdcHnVu6f4WoM0qciLJGg6f_bMJSNmfCzM.png)

The colors used in the visualizations need to contrast the background enough to be seen clearly. However, too much contrast within a chart can be distracting.

We can examine some different color palette choices below and better alternatives.

![random darkness of blue](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cd37779eb189664d0cb76c0_chart5948124 (1).png)
<p style="text-align: center;">❌</p>

This is difficult to see which part of the bar belongs to which category

![ordered darkness of blue](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cd3771984b35c2362118771_chart5948124.png)
<p style="text-align: center;">❌</p>

This shows the difference between the categories but the last part of the chart is too saturated and grabs your attention so this is not ideal unless you are trying to highlight that section.

![Different colors](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cd377b1eb18968542cb8325_chart5948158.png)
<p style="text-align: center;">✅</p>

This differentiation is clear but some of the colors are very far apart on the color wheel and could become a bit distracting if these colors are used too much on the dashboard.

![2 similar colors gradient](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cd377be84b35c49d911af94_chart5948177.png)
<p style="text-align: center;">✅</p>

These colors show the difference between the categories without overweighting one of the categories. Most dashboarding tools will default you to a color scheme that delineates categories clearly. If for some reason they do not, then customize your color selection so that evaluations of the data can be made at a glance.

[The Data Color Picker tool](https://learnui.design/tools/data-color-picker.html) is a great resource for picking evenly spaced out colors for any visualization.

### Context

Include information such as:

* A descriptive title
* Categorical labels
* Value labels when it is hard to compare against an axis

These additions make it easier for new viewers to understand what is going on.

![unlabelled data](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2f35b5d61976025aab_kT5CLHUbT4yJy0uAYOoJ2bd4rdyfPca1dslxkl_-5XE9NX2-lU-_sKvGZJAJl2kuDz-U2ZU2f4DCUObjYN0W5PKnXicURlS5h95fbCtN2AZTrvSf9RIGEvbmRjR7JGBVpYyvU2iH.png)

![labeled data](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2fba1051744f0958e0_VFKwsIuaIZkSMQqLcq96c9GQKuSDB8-xusXZrrzytNAuEoK0LEGo1vqrC_6d6Lt0t3MIPzWlNSf7izegHHY1zVDAAar2bX1LHA2LYv6eA6pIvehyt-WCyC4TOy2FddGuRlRcYqK5.png)

If data is hard to decipher, it won’t be read. The more explanation or context needed to understand charts on a dashboard  the less the dashboard is an effective intelligence tool. Remember, speed to insight is key. Squinting is challenging and time spent seeking out the author of a report for further explanation diminishes the impact of the dashboards goal.

### Layout

Viewers in most countries read from left to right and top to bottom. Therefore the most important information should be top left and the least important information on the bottom right.

![ordering charts](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab72ae23424367bf45e284_PMvKBIFKwzuNiHkKzwSC_V56ZGdcEYrGMlV3ev0P2N9O7VgYU7NZ6LW2H16FyQXVONfsKVgY4TF0KsZRnkoz2o2iDHs5Af_-vMDCaHs3DMgyIEU9bBAW6620ZMjt6fKF5o_jU4tH.png)

Visualizations should be aligned. Having a chart unaligned with the other visualizations will distract from the goal of presenting all of the information clearly to the viewer.

![Aligning charts](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2f0e85f047846d5e5b_7xKyoViMIOHjx_hxBA3Hjy-T_tN4TnsB47FHZbWmilbbD5-xTUpT_C-0jYol5TWAIycF3RqbdvI6eAqUD8qwYoDHtYWLPvH7VAln3PzqL7S6FYGWSXfEgoZSoHF7TS5sx95HwUNn.png)

Since Yearly Subscriptions  is out of alignment, it sticks out, and grabs the viewers attention and therefore may seem more important

## Empowering

Does a dashboard get used regularly and does it help people make decisions? These qualities are best evaluated after the dashboard is created by the end user/viewer of the dashboard.

* Do they view it regularly?
* Does it factor into their decision making?

### Do they view it regularly?

Most BI tools will provide you with a query log where you can track the number of views for each dashboard:

![Track views](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2fbafe0452e59d202f_jdoWYLISPDsfh1-7OJNjWyzEHmQetjxotx2Ed-1SJDmnZwCJjb3JEr6N6otpEgUB8ut_KfetsY5mPmvZ0LutbadciV3UsafQhHyXMyiw2vOYXOU7yQSIy1mbIrNtH1rEPm7PuaYw.png)

If you start to see a drop off in views, you should follow up with the individuals who are no longer viewing the dashboard. Asking the following questions can help:

* Is the dashboard useful to them?
* Is the dashboard missing some critical information?
* What sources are they currently using  to access  accurate data for making decisions?
* How can the dashboard be updated to better serve their needs??

Some dashboards may be viewed less frequently if they are set up for longer-term decisions. These gaps indicate when the dashboard is not being used. The regular spikes show when it is used and how useful it is.

![dashboard views with gaps](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2fed88234cf2b797d1_NyKMwfvelkTCKsLnOOPDyPohysbNjkkucaaxmgNW3FPt_0wWGKaOPwPnVsOiL9Rz63472GYiVS2Wq4zKjy7EmIQUdi0QEIi6W7aqXpP8aHb0gh11g2y-8JyjUlZWpSb5vcwjIQCC.png)

In this case, the views might be related to quarterly planning or reporting, if you look at a shorter time frame it appears not useful.

![Close up of chart with gaps](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cae7c2761e6fb1eaf187bc2_Screen Shot 2019-04-10 at 4.28.18 PM.png)

### Does the data displayed on the dashboard factor into their decision making?

A simple way to check this is to ask the viewer, if the numbers on this dashboard went to 0 or if the numbers doubled would you do anything? If the answer is no, then the dashboard is probably not useful. If the answer is yes, then the dashboard is probably useful.

## Succinct

One of the main benefits of a dashboard is that it shows multiple data visualizations simultaneously which facilitates processing all of the information together. Due to people’s limited working memory, needing to scroll to see other data visualizations prevents viewers from being able to compare the various visualizations side by side to reach significant conclusions. Scrolling becomes counterproductive.

In the image below we can see the report on the left it would be impossible to compare the charts that are circled at once since we would need to scroll to see each one.

![Do not have scrolling](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c81b2bb32b01728f174af7e_DASHBOARD-vs-REPORT-PNG-1.jpg)

Having information on a dashboard hidden “below the fold” or below the bottom of the screen usually indicates that there is too much information on that dashboard.  Ask yourself if the data is necessary or if it can be displayed in a smaller space without compromising its clarity.

It is easy to keep putting more and more charts on a dashboard that are useful, however not all useful charts are relevant to the purpose of a dashboard.

![Combining random data example](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5cab73884eb4db27a1d3ef66_Screen Shot 2019-04-08 at 9.14.35 AM.png "Combining random data example")

While a weather forecast is useful and a Spend vs Customer Acquisition with a Forecast chart is useful. Neither is relevant to each other. Keep your forecasts separate :-)

Data that is relevant to other pieces of information on the dashboard should be placed in close proximity on your dashboard

![Relevant data grouped tightly together](/assets/images/how-to-design-a-dashboard/what-makes-a-great-dashboard/5c926d2fbafe0473e29d2030_smh7v8ndmVC7GH98CEfo7hHFaQ1Em98GlJ8j5b6nG0zlfXWcximEwzq-g9Gutf4zj0NE6KuhELcafGJUdY3RDStvZnXyug5M8EJgg91cDnLOiOZ65Qfc_P44qriTglCdX2u1Up0R.png)

Looking back at our original dashboard, we can note the placement of relevant data succinctly which makes it is easy to evaluate the data displays as a group.

## Summary- think ACES

* Accurate - If the data that is visualized is incorrect or the visualization biases how it is interpreted the dashboard becomes unusable
* Clear- clarity allows for speed of insight
* Empowering - will people access the dashboard regularly to make decisions (makes sure the dashboard delivered on it goal of supporting decisions)
* Succinct - keeping it brief and relevant to critical information makes it easy to evaluate all of the data simultaneously and make decisions
