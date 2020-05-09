---
section: Experiment Design
title: Define Experiment Parameters
meta_title: Define Experiment Parameters to Improve your Analysis
description: Defining Experiment Parameters improves analysis and increases trust
  in results that are shared in an organization.
number: 12
authors:
- _people/matt.md
reviewers:
- _people/twange-kasoma.md
- _people/blake.md
- _people/matthew-layne.md
- _people/mike-yi.md
feedback_doc_url: https://docs.google.com/document/d/1tF58nHDntAcN3MZNjLqF2KqBcpMz1LrygZumdg7WUdw/edit?usp=sharing
image: "/assets/images/Frame (59)-1.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 
faqs: []

---
Even if a metric was chosen for a new feature or product, important parameters about how that metric will be measured and evaluated might not be set.

One of the things that makes analysis hard is that there are so many things happening at once that might affect the metric you are monitoring. Determining what caused the metric to move is complicated -- hence the need for a good experiment that tries to control for as many of the other things that may be influencing the outcomes as possible.

In a typical business context, there are three parameters that you should spend time defining:

* Cohort
* Timeline
* Controls

Not setting these parameters in the beginning allows people to move these around at the analysis stage in order to find data that makes their product or feature look more successful than it actually is. And that is bad, very bad. We want to limit the ability for people to let their confirmation bias flare up and allow them to interpret data incorrectly. Being strict on these parameters prevents people from changing how they interpret the data after the results are in.

Let’s talk through each of these pieces and some important considerations.

## ![Image of a crowd of people](/assets/images/Frame (59).png)

## Cohort

If you are testing out a feature or product with a subset of your user base, make sure your sample is representative of those you are expecting to use the product or feature. Otherwise the results might be biased and the feature or product will not perform how you expect when you roll it out to everyone.

Questions to ask yourself:

* Is the cohort unique in any way?
* Am I picking this cohort out of convenience?

If the answer to either is yes, you need to find a different cohort.

## ![Image of a planner](/assets/images/Frame (60).png)

## Timeline

People report good news too early and bad news too late. If day one after you launch there is a big spike in the metric you are tracking it is natural to feel excited and send out a message to the company. Yet, this can be dangerous, not only to your reputation of coming to conclusions prematurely but to what the company learns about your new feature. If the next day, the spike drops back down, you have to communicate all over again to try and undo the harm.

Before the product or feature launches, you should address the following two questions:

* When will we know if this is successful?
* When will we know if this is not successful?

Most launches inevitably have a bit of marketing surrounding them so the first day or first week data is not usually reliable. You do not want a spike and then a return to normal, you want a sustained increase. Pick a date before launch to review and share the impact of the data.

## ![Control your data](/assets/images/Frame (62).png)

## Controls

You need to account for a lot of different things when creating an experiment to test a feature or product within a company. Think through what other initiatives are going on at your company and what world events are coming up that may affect your metrics.

Common reasons your results were higher than expected:

* Marketing Campaign recently launched
* Internal usage is being factored into the data

Common reasons your results were lower than expected:

* Data isn’t being tracked correctly
* Bug in the code
* Broken links
* Weekends and National Holidays

## Look at it from other people’s shoes

The unfortunate truth is that most products or features will not have a big impact. You should therefore be prepared for a modification or revision to have either no effect or a negative impact. People in your organization will almost always be skeptical of large positive results. You should prepare for this because the goal of your product or feature is not only to provide value to your customers but to create knowledge your company can build off of.

Ask yourself:

* What would make me skeptical of the results?

Take your answer to that question seriously and do your best to address that in your experiment design.

### Summary:

* Define the cohort who will be involved in your experiment, note any characteristics that make them unrepresentative
* Set a timeline for when you will evaluate the success of your experiment
* Do your due diligence when conducting an experiment to make sure your results won’t be affected by other peoples’ actions.