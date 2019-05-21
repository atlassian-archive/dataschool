---
title: What Makes a Great Dashboard (ACES)
section: ''
number: 3
authors:
- author: _people/tim.md
reviewers:
- reviewer: _people/dave.md
- reviewer: _people/matt.md
image: ''
summary: Learn the best practices behind dashboard design to support decision making

---
An optimal dashboard is Accurate, Clear, Empowering, and Succinct. These key tenets can be remembered with the acronym ACES.

\## Accurate

A dashboard lives and dies by the trust the viewers have in what they are seeing. If the viewers doubt the accuracy it will not be used to make decisions. People will also be more hesitant to trust any dashboard or to do any querying themselves. A lack of accuracy in one dashboard causes a lack of faith in all the data.

Viewers belief in the Accuracy of the dashboard can be affected in multiple ways:

\*   Data Quality

\*   Metric Comprehension

\*   Visualization Design

\### Data Quality

\#### Is the data being displayed correct?

The answer to this question should always be yes. If for some reason the answer is no immediately flag the dashboard as needing to be fixed so people do not use incorrect information for their decisions. Viewers will assume any dashboard they come across to be accurate unless properly flagged otherwise. Use bracketed language \[BROKEN\] or perhaps emoji’s to make the status of the dashboard clear.

<figure data-w-id="11a62776-c823-574b-0d76-ffca32ed008f" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="a94f8a4a-fbcb-bca5-56c3-84eef35f386b">!\[Dashboard Broken Warning\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72d78a07165da8e775e9_Screen%20Shot%202019-04-08%20at%208.59.39%20AM.png))</div>

</figure>

‍

\#### Is the data being displayed all of the data?

Most of the times it is not, this is because of how data is loaded into the data warehouse. Engineers use batch processing that runs on a schedule to load data from their production database to the data warehouse which is what the dashboard is querying. This can cause people confusion who are dealing with customers or scenarios in real time where they are not seeing the data in the dashboard. If the dashboard is not displaying all of the data due to batch processing, you should note on your dashboard when the data was last updated and it’s schedule.

<figure data-w-id="0c4fb7e4-e059-f441-93ea-67aaabe36ee3" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="86e75842-4953-97ec-963a-0ea82bb3ac51">!\[Update data schedule\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72e6afc1aa5c948833ea_Screen%20Shot%202019-04-08%20at%208.59.47%20AM.png))</div>

</figure>

‍

\### Metric Comprehension

Metrics need to be understood before the viewer can interpret the chart accurately. It is a best practice to include formulas, notes, or definitions for any non-traditional metric directly on the dashboard. Placing it next to the visualization using it allows for the quickest use. Here we can easily see clarification around who is not included in this metric.

<figure data-w-id="9822b9be-e330-dbc8-a2ec-fb727e8c77d4" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="cab33c50-f28b-4e89-6506-81dc5d9c5194">!\[Define Metrics on Dashboard\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c92898f35b5d638110dce12_IfVO8X6UIUDjclmJeJy8VEXkhf7oiI7nf0dA1t5yAk-TehjBg5msEyMMgQ7kkhJ1XkPAfw62C3sDCjYXJE3RSP3f_Dba-ldZ004sKF1LIARGy7QODE5iN1M3IK2wOKkXd3Tk6BUh.png))</div>

</figure>

‍

\### Visualization Design

People are visual creatures and have a lot of biases in interpreting any visualization of data. A common mistake is setting the Y-axis range incorrectly. We want to highlight variation but we do not want to bias interpretation. For line graphs we do not have to start at 0 and we want to capture how the data changes

\#### Good Y-axis Range - Can clearly see the variability

<figure data-w-id="3b0ffc02-9ebb-67a4-0a7c-a26e03143752" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="119d0bfc-880c-beb1-2797-9c0c58ffb742">!\[Example of line chart with good Y-Axis\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72ab9562dba031541f6e_sT_5wEyFrpyYXI7F1PEfgbxw6k21Wf1h5ze4MzUzxAo4Eb2myAOjCqpieshDH4X9jhgYtNvTPKS2bS7N0D-OWJ-LpBqfhZ57HcZ5YpbmdwwUCyezwRdNNLzQwzwBHRT16Q1JqRb0.png))</div>

</figure>

\#### Bad Y-axis Range - Cannot see the variability

<figure data-w-id="ecedafbf-de19-0681-db5d-0dceb76f512f" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="85d0b519-432b-e651-c5a9-1fe35717aa6c">!\[Example of line chart with bad Y axis\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72a9e5f4b62beafcecf1_r-t1Mt_b9s0pYCuMnhBfowDkCkGe2vlyCvunZXUoodPWoLLCbEIAQmMrsoz96wI56kCyP8hAdrVKj0ApWyj31XmtLFGUeobW4RePb760sYYYm3LQIY2aUtWtLr5mFA09ObxylFw3.png))</div>

</figure>

For bar graphs we must start at 0 because if it starts at a different point it prevents us from being able to use the size to judge the difference. When we look at the two examples below in the first we can see that HR is about half of what support is which is correct Support is \~450,000 and HR is \~200,000\\. However when we look at the second example HR looks like it is ⅕ of what Support is which is not correct.

\#### Good Y-axis Range - Starts at 0

<figure data-w-id="86d4fb4d-283c-2265-9350-bd1a844c9c0c" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="59c5078a-3372-33ed-eb18-20871b599d1a">!\[Example of bar chart with good Y axis\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72aaafc1aa40a1880a83_d8_7CK6UOnayzgfQHQV2JYbrftsCfmLxDIo0uNhoIWxCy-firHSOIhSoaeYGY3kv08-1Oer0kS08V-hxvjIyW1J6j-WiNZP2sIsTPutGRpSKBDcYTqhxyjWizxpGSxfEC6u0e1lv.png))</div>

</figure>

\#### Bad Y-axis Range - Does not start at 0

<figure data-w-id="4992f5a6-a148-afaa-c329-42bd5ea6d497" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="a565f0dd-ba78-b317-d450-57c90c8ae511">!\[Example of bar chart with bad Y axis\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72aae5f4b66101fced15_6SdwQuyB9VMghXQX4oOlnf5R9tfe20Vbm7oPub0xtrnQTcXhHdcKWG1HfxC01tIxeK6chNO0ESUaZCP7msYU7KCMEQGlTtOuPrbBmdNtNdheWO4XMTKwOq-25DSvhr4nq3CpvJQh.png))</div>

</figure>

\## Clear

To be able to make a decision based off of a dashboard, the data must be displayed clearly. There are several factors that go into making the data clear.

\*   Fonts

\*   Colors

\*   Context

\*   Layout

\### Fonts

Fonts for chart titles, axes labels, and details should not be decorative. The goal is legibility. We recommend using a sans serif font such as Arial, Helvetica, or Verdana.

<figure data-w-id="5bf12e3a-37d4-db92-3139-bf415b589500" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="8471fe8d-b422-a96d-f73e-6cdc2ee6a56b">!\[Use legible Fonts\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72fac775ff80b53b2080_Screen%20Shot%202019-04-08%20at%209.00.01%20AM.png))</div>

</figure>

Consider the font size of any metric that will be displayed on your dashboard. Think about what type of device the audience will be viewing this on as well. All text on a dashboard should not require you to squint to read it.

<figure data-w-id="02927be1-f169-a9a1-e397-6b21689e13ad" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="c204248e-0b0e-de73-a3ff-215ed574840e">!\[Make text and numbers readable\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c9271bd9c457ed3923fd2bf_nFSWRDYkMRbBtNcXRvc5O0h5ui-47ycYjgLt2mwL0HWKKHK58RHRT8iltn43MTL0qEDjczfYqqtCLj4opWCTR7avjKCytJJg2YeM_Gd-9Fovohccj7go2byenGr4OxqbYT8tqNV1.png))</div>

</figure>

\### Colors

The color palette used for the dashboard should be easy on the eyes and not overweight one color over another. An easy way to accomplish this is to use more muted tones.

<figure data-w-id="f524cf36-7257-19e6-bc17-79ceb8b8d69c" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="8441cf84-e71f-61bb-838a-96b8462bbd9d">!\[Use muted tones\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72aee277f745edaf8792_A6VNQXDL-tUtyKaL1Z8sfhJFDfTRhEZWlf2iP9woyEycyDKFxkisn-2f-qVip5wBBbFwJd7O1JTb3WNScjmaP5tXEJyN-QIZIfxHOfQLlmj4ALMpXpsy5KUaqPZalgtDac9AtE1y.png))</div>

</figure>

Colors should also be consistent when representing the same metric or type of metric from chart to chart.This makes it easy to relate the data across graphs, tables and charts

<figure data-w-id="41c6afe7-907a-020e-70ca-9fd8ef0c193d" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="30dd10ca-a3d2-2a0b-f94b-c9ff121f1215">!\[Use same colors to represent the same categories\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c926d2f35b5d620b3025ac1_9Z1xfJw0MFTjfj4MBQr6EEzetgwfq3WDzvg6LA7QQ7GPc2Ei8tOLfqEwMP3W9iH093xjZ7y2ZV7VRwG_NjeacJBlJeTiON6_BPjKjfqdcHnVu6f4WoM0qciLJGg6f_bMJSNmfCzM.png))</div>

</figure>

The colors used in the visualizations need to contrast the background enough to be seen clearly. However, too much contrast within a chart can be distracting.

We can examine some different color palette choices below and better alternatives.

<figure data-w-id="d5be9887-83c4-8db9-23af-53769ad40fe8" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="d5be9887-83c4-8db9-23af-53769ad40fe9">!\[\]([https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cd37779eb189664d0cb76c0_chart5948124%20](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cd37779eb189664d0cb76c0_chart5948124%20 "https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cd37779eb189664d0cb76c0_chart5948124%20")(1).png)</div>

<figcaption data-w-id="619bd49b-904f-e740-e495-35858eb1572e">❌</figcaption>

</figure>

This is difficult to see which part of the bar belongs to which category

<figure data-w-id="9b254d36-7628-af71-2eaf-8017b476d71c" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="f2c51ccb-18ef-a3bc-2c8c-670f843419c1">!\[\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cd3771984b35c2362118771_chart5948124.png))</div>

<figcaption data-w-id="175f8bb5-f99b-fb88-3ff7-7b2c1f9025a7">❌</figcaption>

</figure>

This shows the difference between the categories but the last part of the chart is too saturated and grabs your attention so this is not ideal unless you are trying to highlight that section.

<figure data-w-id="c3e15957-142d-68a0-eb3e-482d48b4bfc4" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="c3e15957-142d-68a0-eb3e-482d48b4bfc5">!\[\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cd377b1eb18968542cb8325_chart5948158.png))</div>

<figcaption data-w-id="92298354-f9a0-8fc5-d762-b52770ad12e3">✅</figcaption>

</figure>

This differentiation is clear but some of the colors are very far apart on the color wheel and could become a bit distracting if these colors are used too much on the dashboard.

<figure data-w-id="05616772-1369-1e36-454a-bf43095c68d6" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="05616772-1369-1e36-454a-bf43095c68d7">!\[\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cd377be84b35c49d911af94_chart5948177.png))</div>

<figcaption data-w-id="54d448b8-952f-4f68-a293-03e578bcbdb5">✅</figcaption>

</figure>

These colors show the difference between the categories without overweighting one of the categories.

The Data Color Picker tool is a great resource for picking evenly spaced out colors for any visualization: \[[https://learnui.design/tools/data-color-picker.html](https://learnui.design/tools/data-color-picker.html "https://learnui.design/tools/data-color-picker.html")\]([https://learnui.design/tools/data-color-picker.html](https://learnui.design/tools/data-color-picker.html "https://learnui.design/tools/data-color-picker.html"))

Most dashboarding tools will default you to a color scheme that delineates categories clearly. If for some reason they do not, then customize your color selection so that evaluations of the data can be made at a glance.

\### Context

Include information such as:

\*   A descriptive title

\*   Categorical labels

\*   Value labels when it is hard to compare against an axis

These additions make it easier for new viewers to understand what is going on.

<figure data-w-id="78b7b956-ec7e-c52e-7f27-d898a295cecc" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="ca99ab13-6266-30a2-5b8b-70aa6b5d6cbc">!\[Lack of Chart Title\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c926d2f35b5d61976025aab_kT5CLHUbT4yJy0uAYOoJ2bd4rdyfPca1dslxkl_-5XE9NX2-lU-_sKvGZJAJl2kuDz-U2ZU2f4DCUObjYN0W5PKnXicURlS5h95fbCtN2AZTrvSf9RIGEvbmRjR7JGBVpYyvU2iH.png))</div>

</figure>

<figure data-w-id="22c6c40c-4220-feb7-7426-6486c68db192" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="a035f35a-8da2-a10c-88fa-404532f4bd4b">!\[Chart with chart title\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c926d2fba1051744f0958e0_VFKwsIuaIZkSMQqLcq96c9GQKuSDB8-xusXZrrzytNAuEoK0LEGo1vqrC_6d6Lt0t3MIPzWlNSf7izegHHY1zVDAAar2bX1LHA2LYv6eA6pIvehyt-WCyC4TOy2FddGuRlRcYqK5.png))</div>

</figure>

If data is hard to decipher, it won’t be read. The more explanation or context needed to understand charts on a dashboard  the less the dashboard is an effective intelligence tool. Remember, speed to insight is key. Squinting is challenging and time spent seeking out the author of a report for further explanation diminishes the impact of the dashboards goal.

\### Layout

Viewers in most countries read from left to right and top to bottom. Therefore the most important information should be top left and the least important information on the bottom right.

<figure data-w-id="b20baed2-a75a-b8a7-f019-4e58584dc14f" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="42a25d92-a4e0-8638-a460-2fb4a9933225">!\[Visual Reading Path\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab72ae23424367bf45e284_PMvKBIFKwzuNiHkKzwSC_V56ZGdcEYrGMlV3ev0P2N9O7VgYU7NZ6LW2H16FyQXVONfsKVgY4TF0KsZRnkoz2o2iDHs5Af_-vMDCaHs3DMgyIEU9bBAW6620ZMjt6fKF5o_jU4tH.png))</div>

</figure>

Visualizations should be aligned. Having a chart unaligned with the other visualizations will distract from the goal of presenting all of the information clearly to the viewer.

<figure data-w-id="aa167b83-76fe-c15d-3bd2-e3657c2bf14e" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="07a5a6f3-3b5e-e872-9a86-42e4df6e3107">!\[Example Dashboard\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c926d2f0e85f047846d5e5b_7xKyoViMIOHjx_hxBA3Hjy-T_tN4TnsB47FHZbWmilbbD5-xTUpT_C-0jYol5TWAIycF3RqbdvI6eAqUD8qwYoDHtYWLPvH7VAln3PzqL7S6FYGWSXfEgoZSoHF7TS5sx95HwUNn.png))</div>

</figure>

Since Yearly Subscriptions  is out of alignment, it sticks out, and grabs the viewers attention and therefore may seem more important

\## Empowering

Does a dashboard get used regularly and does it help people make decisions? These qualities are best evaluated after the dashboard is created by the end user/viewer of the dashboard.

\*   Do they view it regularly?

\*   Does it factor into their decision making?

\### Do they view it regularly?

Most BI tools will provide you with a query log where you can track the number of views for each dashboard:

<figure data-w-id="fcb3d35b-312c-daed-f3a5-18bcaf6de13a" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="86157afb-a3f6-b800-11bc-f0ebf88d14af">!\[Number of views on your dashboard\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c926d2fbafe0452e59d202f_jdoWYLISPDsfh1-7OJNjWyzEHmQetjxotx2Ed-1SJDmnZwCJjb3JEr6N6otpEgUB8ut_KfetsY5mPmvZ0LutbadciV3UsafQhHyXMyiw2vOYXOU7yQSIy1mbIrNtH1rEPm7PuaYw.png))</div>

</figure>

If you start to see a drop off in views, you should follow up with the individuals who are no longer viewing the dashboard. Asking the following questions can help:

\*   Is the dashboard useful to them?

\*   Is the dashboard missing some critical information?

\*   What sources are they currently using  to access  accurate data for making decisions?

\*   How can the dashboard be updated to better serve their needs??

Some dashboards may be viewed less frequently if they are set up for longer-term decisions. These gaps indicate when the dashboard is not being used. The regular spikes show when it is used and how useful it is.

<figure data-w-id="2ca1c8c5-3eed-3f94-8d91-07a2cea51a4c" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="0ad5c9c4-edde-45db-4f2e-854580e9b654">!\[number of views on a dashboard\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c926d2fed88234cf2b797d1_NyKMwfvelkTCKsLnOOPDyPohysbNjkkucaaxmgNW3FPt_0wWGKaOPwPnVsOiL9Rz63472GYiVS2Wq4zKjy7EmIQUdi0QEIi6W7aqXpP8aHb0gh11g2y-8JyjUlZWpSb5vcwjIQCC.png))</div>

</figure>

In this case, the views might be related to quarterly planning or reporting, if you look at a shorter time frame it appears not useful.

<figure data-w-id="f08b6938-3c39-998e-6f98-f97d94186a23" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="379a8c1b-3784-4c45-c644-d22e4591f7a1">!\[number of views on a dashboard\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cae7c2761e6fb1eaf187bc2_Screen%20Shot%202019-04-10%20at%204.28.18%20PM.png))</div>

</figure>

\### Does the data displayed on the dashboard factor into their decision making?

A simple way to check this is to ask the viewer, if the numbers on this dashboard went to 0 or if the numbers doubled would you do anything? If the answer is no, then the dashboard is probably not useful. If the answer is yes, then the dashboard is probably useful.

\## Succinct

One of the main benefits of a dashboard is that it shows multiple data visualizations simultaneously which facilitates processing all of the information together. Due to people’s limited working memory, needing to scroll to see other data visualizations prevents viewers from being able to compare the various visualizations side by side to reach significant conclusions. Scrolling becomes counterproductive.

In the image below we can see the report on the left it would be impossible to compare the charts that are circled at once since we would need to scroll to see each one.

<figure data-w-id="2cd8a73b-3d2f-8bea-c0a0-71c658ffeb81" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="45a777a5-184d-046b-d615-94a80adb8a6d">!\[Do not have scrolling\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c81b2bb32b01728f174af7e_DASHBOARD-vs-REPORT-PNG-1.jpeg))</div>

</figure>

Having information on a dashboard hidden “below the fold” or below the bottom of the screen usually indicates that there is too much information on that dashboard.  Ask yourself if the data is necessary or if it can be displayed in a smaller space without comprimising its clarity.

It is easy to keep putting more and more charts on a dashboard that are useful, however not all useful charts are relevant to the purpose of a dashboard.

<figure data-w-id="fbbc4b2e-acf8-6fdb-df84-6666bfe3c3d7" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="f8753089-c71a-3d4e-4d45-e7eaa6b443aa">!\[Combining random data example\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5cab73884eb4db27a1d3ef66_Screen%20Shot%202019-04-08%20at%209.14.35%20AM.png))</div>

<figcaption data-w-id="6b27fccf-f64c-2bbe-88d9-51cbc4d7bd8e">‍\[[https://dribbble.com/shots/2225681-Weather-iPhone-App](https://dribbble.com/shots/2225681-Weather-iPhone-App "https://dribbble.com/shots/2225681-Weather-iPhone-App")\]([https://dribbble.com/shots/2225681-Weather-iPhone-App](https://dribbble.com/shots/2225681-Weather-iPhone-App "https://dribbble.com/shots/2225681-Weather-iPhone-App"))</figcaption>

</figure>

While a weather forecast is useful and a Spend vs Customer Acquisition with a Forecast chart is useful. Neither is relevant to each other. Keep your forecasts separate :-)

Data that is relevant to other pieces of information on the dashboard should be placed in close proximity on your dashboard

<figure data-w-id="c1785851-abd9-e037-ddde-5b692122669f" class="w-richtext-figure-type-image w-richtext-align-center" data-rt-type="image" data-rt-align="center">

<div data-w-id="d92ffffc-fcd6-1fb0-2f12-d6fac6b8a4b4">!\[Grouping of Charts\](![](https://uploads-ssl.webflow.com/5c197923e5851742d9bc835d/5c926d2fbafe0473e29d2030_smh7v8ndmVC7GH98CEfo7hHFaQ1Em98GlJ8j5b6nG0zlfXWcximEwzq-g9Gutf4zj0NE6KuhELcafGJUdY3RDStvZnXyug5M8EJgg91cDnLOiOZ65Qfc_P44qriTglCdX2u1Up0R.png))</div>

</figure>

Looking back at our original dashboard, we can note the placement of relevant data succinctly which makes it is easy to evaluate the data displays as a group.

\## Summary- think ACES

\*   Accurate - If the data that is visualized is incorrect or the visualization biases how it is interpreted the dashboard becomes unusable

\*   Clear- clarity allows for speed of insight

\*   Empowering - will people access the dashboard regularly to make decisions (makes sure the dashboard delivered on it goal of supporting decisions)

\*   Succinct - keeping it brief and relevant to critical information makes it easy to evaluate all of the data simultaneously and make decisions

\[Give Feedback on our Google Doc\]([https://docs.google.com/document/d/173T4Q9yB9arBmAFfLcIRqTj_KFGKFOMEkKGMqSlAtgo/edit?usp=sharing](https://docs.google.com/document/d/173T4Q9yB9arBmAFfLcIRqTj_KFGKFOMEkKGMqSlAtgo/edit?usp=sharing "https://docs.google.com/document/d/173T4Q9yB9arBmAFfLcIRqTj_KFGKFOMEkKGMqSlAtgo/edit?usp=sharing"))