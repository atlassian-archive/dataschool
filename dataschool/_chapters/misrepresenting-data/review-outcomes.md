---
section: Experiment Design
title: Review Outcomes
meta_title: Review Outcomes of Feature Releases
description: Review Outcomes of Feature Releases to evaluate their impact and to create
  institutional knowledge. Learn how to interpret results accurately.
number: 13
authors:
- _people/matt.md
reviewers:
- _people/twange-kasoma.md
- _people/matthew-layne.md
- _people/blake.md
- _people/mike-yi.md
feedback_doc_url: https://docs.google.com/document/d/1T-RDM2NDtgsp-ZNn5F_Ls9PGyJdvzLe6_5iTIjRHnqE/edit?usp=sharing
image: "/assets/images/Frame (61)-3.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 
faqs: []

---
![Review outcomes of product launches](/assets/images/Frame (61)-2.png)

We just launched our new feature and our metrics look like they have improved. How should be feel about the following graph?:

![Large growth in page visits after feature launch](/assets/images/misrepresenting-data/reviewOutcomes/review_0.png)

We should feel skeptical! Start asking questions!

* What caused this large positive change?
* Is this the right time window to examine these metrics?
* Are we sure the data is accurate?

Remember all the analysis mistakes and mental biases covered in this book. It is easy to misrepresent or misunderstand data. We need to take a closer look.

## How to investigate changes in data

When data changes dramatically we want to take credit if it was a positive change and deny responsibility if it was a negative change. Ultimately we should want to know _why_ it changed. To figure this out we need to investigate a few common ways data changes.

### Marketing

A lot of times we are focused on the work we are doing and do not see what other parts of the company are doing to influence buyers and users. One of the most common reasons for any spike is there being a marketing push that day or that week. Reach out to that team to confirm no additional spend/effort has been going on to remove this potential reason.

### Technical Reasons

Did the site go down? Did a data point stop being tracked?Is there a mistake in the tracking? (e.g. double-counting of hits, etc.) Simple technical problems can have huge impacts on data especially in the negative direction. It is important to reach out to the development team to establish if they might have had an impact.

### Cohort Influence

When rolling out new functionality or products, the people who buy or engage with them are usually not representative of the whole customer/user base. It is important to try and group the data by different demographic and engagement metrics to see if there is anything unique about those whose activity has influenced the metrics you are tracking.

## Sharing results tips

Avoid sharing data (positive or negative) too soon with people outside your direct team. People will naturally make judgements and assumptions off of this data. And it can be hard to undo these learnings. Give your feature or product some time before declaring it a victory or defeat. Time is the ultimate judge!

When you feel confident enough time has elapsed it is important to communicate clearly the results of your work. Let people know what they should take away from this experiment and what they should not. When the results are inconclusive say so. It is much more dangerous for people to learn the wrong lessons than to learn nothing.

Rarely do lines move smoothly up and to the right. You should distinguish trends from variance (signal from noise). And point out the amount of certainty you have – or lack thereof – about the trends in the data.

Simple questions to stay in check:

* Did our change cause this?
* How should we interpret a spike?

### Summary:

* Your metric may move for reasons other than your feature or product.
* Marketing can give a metric a temporary boost.
* Bugs in the code can drastically under- or over-report some metric.
* Your cohort might not have been representative of the whole population.
* Only share your results when you feel confident they will hold; do not share at the first sign of positivity.