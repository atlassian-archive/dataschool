---
section: Analysis Mistakes
title: Metric vs Metrics
meta_title: Use multiple metrics to improve your analysis. See why individual metrics
  can be misleading.
description: A single Metric can be misleading. Learn how to use multiple Metrics
  to avoid misleading yourself and others.
number: 6
authors:
- _people/matt.md
reviewers:
- _people/mike-yi.md
feedback_doc_url: https://docs.google.com/document/d/1JszhGxLjjc07yT3a1bCA8ci1fp8xScC-2BF1kvoFHLM/edit?usp=sharing
image: "/assets/images/Frame (61)-2-1.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time: 5
is_community_story: false
story_intro_blurb: ''
faqs: []

---
Analyses made off of a single metric are appealing since they are easy to understand. If we see that revenue is trending up, we might just conclude that things are going great. Unfortunately, the world is complex. Drawing conclusions through a single metric might be quick, but are likely a very low resolution picture of what is going on.

## The problem with only using a single metric

Let’s look at an example of where a single metric can be misleading. We can examine the monthly page views for a company’s website that is trying to get visitors to sign up for a newsletter.

![](https://lh5.googleusercontent.com/jJeT5d-P34c4Te_842o6uG7QppW2mhJ7X6fm_U4g5Zukg374tUiS2eM2THFoLE5Zv67YwqZfdkTSyLiwy80XPeUYC33zDYhtRexhpOPjT63mzM1RWU6y3qOXYZNot9_28zKBHVHa)

This number has been growing steadily: at face value, it could be considered an encouraging sign. We might think what the website is really resonating with an audience.

Now let’s bring in a second metric, bounce rate. Bounce rate indicates the proportion of people who leave your page without performing any other action on your site.

![](https://lh4.googleusercontent.com/DmIdamPmU112geofTwljhFBr-Zko4zkniM0FldlPK2-NLXTLl9cm8y6HZseBbcjnM02bV0eM0zTm1yBkBQCA3uzfrHiYLbgOBf0tPmjRPEK0dQJr23iGAGZuJ5eQH_8BKbTBnFqe)

This number is also growing, which means a smaller percentage of the people visiting are taking additional actions on our site after getting there. This second metric changes our understanding of how our business is doing.

**Why might traffic and bounce rate both be growing?**

We might be producing effective marketing or headlines that capture initial user interest, but the website does not follow up with an effective call to action (CTA). While this may be fine for a blog or a news site, this content was created to drive traffic to sign up for the company’s newsletter.

Looking at your business from a single metric can create the wrong incentives. If your only goal is to drive up the number of viewers it might make sense to create clickbait or run an expensive marketing campaign. However, if your goal is to grow the business you need to understand more about the customer journey; this requires monitoring multiple metrics along the way.

## Creating multiple metrics

Use visualization tools to put metrics next to each other. This allows you to compare and contrast them, and develop a higher resolution picture of what is going on.

### Interpreting Two Metrics

Let’s combine the two previous graphs into a single dashboard.

![](https://lh3.googleusercontent.com/VJaFOQ93IaTkJsWqd0JNPXoy255bVo5ld29YkIOmDu0J6hSdnhZa-fqGhsqN1zkpTMOlu8sLwcn8qU3kRij5puo71QTQ7qc1ZXgoqyk05uoYLHu-Zm-Wa_-d_j2hhhdnV-7toLgc)

We can now quickly compare them instead of getting overly excited by one metric. With the plot of bounce rate placed next to the number of sessions, we can’t ignore the fact that visitors are not finding anything else they want to do on the site. Even though we were successful in getting more traffic we should re-examine the quality and targeting of the content or check out the CTAs on the page.

When visualizing [multiple metrics together in a dashboard](https://chartio.com/learn/dashboards/how-to-build-a-ceo-dashboard/), it is important they share similar timelines and segmentation so that the data can be compared quickly and accurately. Consider not just a single main goal that you want to track, but also metrics that provide additional dimensions of support around that goal.

### Interpreting Three Metrics

Different combinations of metrics will point us to different things to investigate. Let’s examine the average session length in isolation and then bring in the two metrics we combined above to create a more high resolution understanding.

![](https://lh3.googleusercontent.com/3oWPIXy7wAI9cAGOY50hXxI8IPrKzmQL5reSwR7qSugo85b3_fCFxaVok_xbXkS2Om-6CYcqbnJG4oB1UuiaXVjbWcOs1wJGUhW2DsY_0Y98zdc0dZ8OvLs2RI_zoAs68CAzbyBB)

Based on the chart, we can see steady activity through April, but that average session length starts to take off in May. We might conclude that new content is really engaging the user, but when we bring in more metrics, we have to challenge that conclusion.

![](https://lh5.googleusercontent.com/taoJRfAXoeqIJS4n64CBlgRmTy5bLwK-BExdOJI2J7jML-a8WZBR5HGm4gbXUH8ZM9YrYPHWxZeJtyAZy0IJq6WLhC3hOMaw9FyT3_xvnfMdE6oM8XAxv5HGs8T2xQI-l5faH_37)

We can see that the bounce rate is really high so even though people are spending a lot of time on our pages we are not converting them.

**Why might traffic, bounce rate, and average session length be growing?**

Due to the spike in average session length, I would investigate the distribution. The purpose of statistics is to compress information from data distributions into simpler numbers; whenever a statistic is surprising we should investigate the [distribution behind the statistic](https://dataschool.com/misrepresenting-data/statistic-vs-distribution/). Is this spike being driven by a few outliers or do most sessions have a length that is close to the average.

If the average session length was being driven by outliers we should annotate the chart to indicate why we are seeing the spike and perhaps clean the data.

If the average session length is representative, then one place to investigate further to understand why we are seeing such high bounce rates are the CTAs on the page. If people are spending a long time on page (high average session length) but are not clicking (high bounce rate), perhaps the CTA is hard to find for the visitors or the link is broken and people are unable to take any action. This type of bug happens more often than you would think and it is often found by doing this type of analysis.

## Summary

Do not settle for basing analyses off of a single metric; dig in and look at multiple metrics before drawing conclusions. This will make your analysis more robust since you likely have now asked and answered many of the follow up questions you would get from others. It is especially important to look at “trade-off” metrics to make sure that you are not spinning your wheels or creating bad experiences for customers. Some common trade-off metrics are quantity vs quality, new growth vs churn, and [LTV](https://chartio.com/learn/product-analytics/what-is-customer-lifetime-value-ltv/) vs [CAC](https://chartio.com/learn/product-analytics/what-is-customer-acquisition-cost-cac/).