---
section: Introduction
title: About this Book
meta_title: About Modern Data Governance
description: Information about who this book is for, who it's not, how we wrote it,
  disclaimers, influences and how to contribute.
image: "/assets/images/AboutBook (1).png"
authors:
- _people/dave.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1OFZoJFdgJWG3Rw8ysYapxC1eBuzBslvVd39eDzSd2Tw/edit?usp=sharing
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: '3'
number: 1

---
## Who this book is for

This book is for anyone looking to setup an effective, modern (typically cloud-based) data stack that will truly enable a company to explore and understand the data it collects to have high visibility into their business.  It's for people who value their data and realize that a company that is truly informed by their data has significant competitive advantages.  

![Democratized data organization](/assets/images/Data-to-analytics.png "Democratize data")

It applies to teams setting up either [Centralized or Democratized data workflows](/data-governance/democratized-or-centralized/) with an encouraging bias toward Democratized.

## Who this is NOT for

At the moment, this book is not focused on the extreme end of what you might call _Big Data_.  As a general guideline for where that might cut off, we'll call that teams collecting more than 100GB of data per day.  Those teams may still find this book generally useful (especially for the majority of their tables that are usually significantly less than the event streams), as long as they appreciate that the details and recommendations for implementing a data stack at that scale aren't covered here.

Our eventual goal is to create "Big Data" section inserts throughout the book that will go into the details that those working with enormous datasets will also have to know, while not cluttering the book for the 99% use case.

This book is also not dealing with _AI workflows_, or _realtime operational use cases_.  It is purely to build and maintain a reporting and analysis data stack.

Lastly, this book is not written for long time _data experts, vendors and thought leaders_.  If it were, we would go into more detail on the pros and cons of each choice and defend why we chose each recommendation.  Doing so would greatly clutter the book ruining the experience for those who really need this book and are trying to understand a clear path to a quality data stack.

We instead encourage continued discourse on what constitutes modern and quality data governance practices on blogs, twitter and our [Data School slack channel]({{site.slack_url}}).

## How to read this book

The book is structured in 4 stages of sophistication: [Sources](/data-governance/source-data-tools/), [Lake](/data-governance/why-build-a-data-lake/), [Warehouse](/data-governance/why-build-a-data-warehouse/) and [Mart](/data-governance/why-build-data-marts/).  This is the journey we see companies go through as they grow and their data needs become more sophisticated.  Each section starts with a quick excerpt describing when your company may be a good fit for staying at that stage, and when your company should move on to the next stage.

If you find you're already at a later stage, you may have a data lake already setup for instance, you may want to skip ahead to that section.  Note though that many best practices are discussed at each stage and are brought up in the stage where they first start to be relevant.  It will be assumed that these are already known at the later stages and they won't be repeated.  So it may benefit you to at least skim those earlier stages even if you and your company are further ahead.

## Disclaimers

While the goal of this book is to be community driven, the initial structure and version was written mostly by the team at [Chartio](https://chartio.com).  We don't pretend to have an unbiased view of the world.  We've made attempts to use and mention Chartio sparingly - but where BI examples are called for we've used our product as the example.  We've also made attempts to be open about our biases - but we may not have caught everything, please let us know if you see any blindspots in the book.

That our experience for this book has been gained by working with well over a thousand [modern companies](https://chartio.com/customers/) over almost decade, is a great advantage.  That the majority of these experiences are working with our own customers, setting up and growing data stacks to be specifically used with our unique product has undoubtedly left some blind spots in the book for those using other products.

## Influences

The main books on setting up data stacks are over a decade old, most being pre-cloud and especially pre C-Store warehouses.  The state of modern data governance today is largely self-taught and unguided, a reality which is what lead us to write this book.

This book, starting from Chartio, is primarily influenced by first hand experiences and directly working with hundreds of [modern cloud-based customers](https://chartio.com/customers/) over a decade in BI.  The second largest influence is working with our many vendor and consulting partners.  Third, are the many community shared posts from a lot of different companies on blogs like [Tristan Handy's](https://thinkgrowth.org/the-startup-founders-guide-to-analytics-1d2176f20ac1) and in data slack channels.  And lastly, it's worth noting some classic books that have influenced (sometimes negatively but mostly positively) the data community.

* [Agile Data Warehouse Design](https://www.amazon.com/Agile-Data-Warehouse-Design-Collaborative/dp/0956817203/) by Lawrence Corr
* [The Data Warehouse Toolkit](https://www.amazon.com/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802/) by Ralph Kimball
* [Information Dashboard Design](https://www.amazon.com/Information-Dashboard-Design-At-Glance/dp/1938377001/) by [Stephen Few](https://www.perceptualedge.com/about.php) - ([my review here](https://chartio.com/blog/informationdashboarddesign/))

## How this book was written

Community driven books aren't that common and we found it was important to setup some guidelines in writing this book:

**Single author voice/experience** - To avoid the potentially jarring and unnecessary context switches of changing authors each chapter and even throughout each chapter an attempt is made to speak with a single narrator.

**Heavily edited** - To keep that voice and a flow to the book, it undergoes continually heavy edits.  At this point it is still a bit chunky and we're working continually to improve that.  We'd love any help with that as you read through (see [How to contribute](#how-to-contribute)).

**No new vocabulary** - There is already a lot of jargon in the data world, often created by very talented vendor marketing teams.  We try to stick with the most common and simple words here that are already in use.

**Stay modern** - There are a lot of books for the old way, on old stacks, to work with data.  We're defining the current best practices here so we just explain those and forget about the past.  In a few cases where it is beneficial to talk about a modern change like [ETL moving to ELT](/data-governance/etl-vs-elt/) we simply teach the ELT in the book and have a chapter in the extras section discussing the choice.

**Share examples** - Right now this book is fairly light on specific examples.  We'd love to add more as we know this is one of the most effective ways of learning.  If you have stories to share - [do reach out](mailto:mdavid@dataschool.com).

**It's okay to have an opinion** - Almost every part of this book could be contentious to someone, in some use case, or to some vendor.  In writing this book it is tempting to bring up the caveats everywhere and write what would ultimately be a very defensive and overly explained book. This would be bad and a bummer to read and way less useful for people reading this book for the advice.  Where we have a strong opinion we don't argue it, we just go with it.  Where we think the user has a legitimate choice to make - we pose those options.

**Stay out of the weeds** - This book is intended to be a broad overview and general guideline of how to setup a data stack.  We intentionally don't get into the weeds of setting up a Redshift instance, or how to use various BI products.  That would clutter the already quite extensive book and repeat a lot of work that is already on the internet.

**Stay general** - Every company and data use case is a unique snowflake.  This book tries to write to the needs of the 95+% of snowflakes.  That last 5% is a long tail, and really impossible to cover.  Doing so would incredibly clutter the book.  Here we stay general and expect readers to be confident enough to deviate from our recommendations when they don't fit them.

## How to contribute

This is an open, community driven book created by many different people.  It is [hosted on github](https://github.com/chartio/dataschool), and we welcome any and all contributions. Our goal is to continually make this book better and kept modern.  We would like to continually expand it, like a wiki, to cover more topics, go more in depth, share more real company examples, and be better reviewed and edited.

Few are complete "experts" in all of the areas of modern data governance, and the landscape is changing all of the time.  If you have a story to share, or a chapter you think is missing, or a new idea - [email us](mailto:mdavid@dataschool.com) or create a pull request with the edits on our [github repo](https://github.com/chartio/dataschool).

Even if you don't know what specifically to share, but you don't mind sharing your story - please reach out as we are particularly interested in adding specific examples from specific companies as they can be the most powerful method of learning.
