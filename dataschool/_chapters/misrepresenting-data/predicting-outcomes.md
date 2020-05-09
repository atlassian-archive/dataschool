---
section: Experiment Design
title: Predicting Outcomes
meta_title: Predicting Outcomes Improves your Analysis
description: Predicting Outcomes prevents cognitive biases from affecting how your
  interpretation of the results of an experiment. Learn more.
number: 11
authors:
- _people/matt.md
reviewers:
- _people/twange-kasoma.md
- _people/mike-yi.md
feedback_doc_url: https://docs.google.com/document/d/1EN9jLWcWilsrw3z7eWCiEN3fx-VY_MSTRynGGLCk3N4/edit?usp=sharing
image: "/assets/images/Frame 2.7.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 
faqs: []

---
#### How many jellybeans are in the jar?

![](/assets/images/Frame (58).png)

#### The answer: 103 Jelly Beans

If you guessed before looking at the answer, great: you are acting like a scientist! You made a hypothesis and then looked to see if you were right. If you did not guess, then you might be saying to yourself: “103 makes sense.” or “I would’ve guessed something like that around 100.”

## The problem with not making predictions

When we do not predict outcomes, we are more likely to encounter confirmation bias. Our brain finds a way to confirm that we are good at guessing and confirms thoughts about how we would have been close if we did make a prediction (This is very similar to [hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias)). This is problematic for many reasons but we will focus on two:

* Lack of scientific rigor
* Not improving our decision making over time

## Lack of scientific rigor

The scientific method can be boiled down to two steps.

1. Make a prediction.
2. Test to see if that prediction is correct.

Your prediction should be based on past knowledge about the field you are in and the test should be designed to confirm or disconfirm that prediction. When you do not make a prediction, you cannot design a test to confirm or disconfirm it. Conclusions that are reached without a scientific process are less reliable. The interpretation of results is based on post hoc reasoning and therefore our decisions may not be valid. In addition, we are not able to learn clear lessons from our results.

If you do not make predictions you can gather data and make observations, but you can only report what you have found and not draw any conclusions (i.e. correlation ≠ causation). However, that information you gather, can help inform predictions in the future for experiments and tests that can be subject to statistical techniques.

## Not improving our decision making over time

We have to request and commit resources for projects before they commence. So we need to make predictions about what the impact of these projects will be in order to justify the resource allocation. Saying “this project is going to be good for the company” gives you a lot of ways to “find success”. This mindset does not give you a good feedback loop on whether your prediction was correct. This vague prediction provides vague information for the company

If we do not make clear predictions, we will find reasons why the data we gathered was “predictable”. We will not learn from our planning mistakes.

We need to make firm predictions and then review the outcomes. We can refine vague predictions e.g. "This project is going to be good for the company" by asking “how?”. As we closely examine our predictions and the actual results, we will improve our ability to make better predictions in the future.

# Tips for Making Predictions

While making an initial prediction is not too challenging, sticking to your prediction even when your prediction is inaccurate is difficult. Naturally, we want to make predictions that are correct. When we predict the outcome of some product or feature we are working on, we want the results to show a positive impact. The impulse to report inaccurate results is dangerous but can be overcome.

## Things aren't exact and can be negative

Make an upper bound and lower bound prediction and then add a confidence measure to it. “I am 90% confident that this feature will improve engagement 5-50%". Thinking in bounds and confidence levels allows you to think more broadly about your prediction and removes the stigma of needing to be exactly right.

A common misconception for people is that the range of impact of their feature is greater than 0 on whatever the metric is. The real range of the impact can be negative or positive. Your feature can have a negative impact as they often do.

Think through how the feature could go wrong and whether it affects your confidence level in your range. What are you basing your prediction on that would prevent the feature from having a negative impact? Have some guidelines and actions set in place if the feature you launch has a negative impact on the metrics you predicted it to positively impact. Having this plan and following it will reduce squabbling from your team and make it easier to try another experiment. Otherwise your team will be frustrated that they spent time on something that didn’t work.

## Make public facing predictions

Create a dashboard ahead of the product or feature where you have your predictions laid out. A bullet chart can be great for many metrics since there are multiple zones allowing you to define a range of outcomes.

![Monthly Recurring Revenue](/assets/images/misrepresenting-data/predictingOutcomes/predict_1.png)

Here we can see the gray areas defining the range of outcomes we predicted with the blue bar representing the actual value of the metric.

Ask others to hold you accountable. Confirmation bias plagues us all, so we need people to constantly check us on this. Make your dashboard public and share it with your team and your manager. This also provides you a way to update the team on progress and to review findings This will be covered in another chapter.

### Summary:

* If you do not predict outcomes you will not get better at making predictions and decisions based on the data collected
* Predict in ranges and confidence levels instead of exact numbers
* Make predictions public to hold yourself accountable