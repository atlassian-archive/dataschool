---
section: book
reading_time: 10
title:  Five Key Points to Consider When Executing A Tagging Implementation
meta_title: Executing A Web Tagging Implementation
description: Understanding digital customers has become more important in our current climate with the pandemic forcing many businesses to accelerate their shift to digital and even considering an online only model.
authors:
- _people/rene-villa.md
reviewers:
- _people/allen-hillery.md
feedback_doc_url: ''
image: "/assets/images/5_key_points_taggingFlow_images.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
faqs: []
---

### Introduction

Capturing how a website or app is being used by visitors or customers is a must if one wants to be successful at providing a service or selling products.  The data collected provides invaluable information that can be used to tailor the experience to customers and help to increase loyalty.  **Understanding digital customers has become more important in our current climate with the pandemic forcing many businesses to accelerate their shift to digital and even considering an online only model.**

![](/assets/images/5_key_points_Sampletag_images.png)

Tracking an online experience, most commonly referred to as ***tagging***, is typically managed by using a third-party software such as Google Analytics or Adobe Analytics. These tools collect clickstream data and provide a reporting interface that can support deep analysis and reporting.  They also provide additional software that can help manage tagging, a tag manager. Google Analytics and Google Tag Manager are the most popular tools in the marketplace given that they are free for basic service.

Tagging can be as simple as just capturing a page or screen name; helping one understand what parts of an online experience a visitor is viewing or engaging with.  Or it can get quite complicated if one implements a tool like Adobe Analytics, which can be quite flexible in how or when values are captured and can track attributes over time.  Regardless of the tool or tagging being used, some considerations should be kept in mind in order to execute and maintain a successful tagging implementation.

Over the past 15 years I’ve architected and led tagging projects, both web and app, for several companies.  Most recently I had the opportunity to help one of the largest retailers in the country finish their Adobe Analytics implementation across their web and app properties.  This particular tagging implementation was not much different from previous implementations, except for a couple of things; **it took twice as long to complete and it cost 4 times more than it should have.**  I came into the project halfway through and immediately noticed the **constant rework and lack of accountability were causing delays and cost overruns**. Based on this most recent and prior experiences I’ve identified five key points that should be considered in order to prevent these issues and support a tagging implementation that will provide flexibility and help with future growth.

### 1. Establish Ownership 
Establishing ownership of strategy and implementation requirements early on will save time, money and aggravation, and will lead to a more stable tagging implementation. Preferably, requirements gathering, documentation, and validation should be in the same team or at least in the same organization. This ensures the output meets the requirements.

One of the main issues with my last implementation was related to a ***distributed ownership model***; one team owned tagging requirements and a second team gathered them.  Implementation was done by a third team while a fourth team performed QA.  In addition a fifth team (a vendor) provided separate requirements and expertise. **All teams were in different organizations that were not necessarily aligned to the same goals.**  None of the teams had an overall view of what had been completed or what parts of the tagging implementation were working.  Collapsing three of the teams into one organization alleviated this issue.

### 2. Adaptive Tagging Strategy
The strategy used for instrumenting tags can impact the usability of the data collected and how flexible the implementation becomes as it matures. One needs to consider the type of metrics, as well as the types of interactions that will help to provide a broad view of how visitors interact with the online experience. 

Typically organizations are only focused on capturing data that supports their KPIs or want to tag everything.  Neither of these two sets up an organization for long term tagging success.  A KPI based implementation is narrowly focused on capturing data that answers specific questions and a “tag everything” approach can be too cumbersome and costly to implement.   

**Creating an adaptive strategy means thinking about KPIS as well as interactions that can better help you understand your visitors.** This requires a little more time and work up front but it is a better approach for maintaining a flexible implementation over time.  For example, understanding how often a visitor changes the size or color of a recommended product is not typically part of a KPI, however, it can be important in helping to understand recommendations and their impact on sales.

The project team at the retailer’s implementation had chosen to focus on KPIs.  The data collected provided specific answers to support those questions but left out many of the features in the shopping experience limiting the kinds of answers that could be provided about user behavior, they were unable to report on when users changed product sizes and why.
	
### 3. Documentation is Key
Since the retailer was migrating to Adobe Analytics from another tool it was at times important to understand why certain old tags were implemented, unfortunately the tagging documentation for the previous tool was non existent, leading to time wasted on testing and validating those tags. 
The new tagging team did an excellent job at documenting the specific tagging solutions for Adobe Analytics and making that documentation available to everyone, however, no one had created an overall tagging solution document that tracked the variables and values being captured and the purpose for each tag.

![](/assets/images/5_key_points_DesDoc_images.png)

I took it upon myself to create the overall solution design document for the retailer’s tagging solution.  It is important to maintain an overall solutions design document with the supporting documentation for each specific tag implemented.  These documents become critical in understanding the data being collected as well as supporting the tagging implementation as it progresses over time.

### 4. Track Errors
Every tagging implementation I have ever worked on has had limited error tracking. There are several reasons why organizations have a hard time implementing tracking on errors, one of them being the error methodology on the backend applications is not standard across functions creating complications in how error messages can be surfaced and tracked.

However, I strongly encourage tracking errors.  It may be more difficult given that it may require backend work to standardize  error methodologies across systems, but this data becomes critical in understanding what parts of the online experience may be having problems that could be costly to a business.  One can start by tagging errors in key parts of the experience and move onto other areas as time permits. 

One of the online experiences I worked on in the past had such a problem.  It was during the holiday season and a very specific type of customer couldn’t complete their purchase.  The problem was not identified for several weeks, tagging for errors didn’t exist on this part of the online experience, leading to hundreds of thousands of dollars in losses.

### 5. Tagging is a Long Term Relationship
**A tagging implementation requires continuous attention.**  After the initial implementation is completed and standard tagging processes are established, one needs to revisit the solutions design periodically.  

I typically recommend performing a quarterly review of the implementation design to ensure the solution is aligned to business needs and it’s continuing to meet expectations.  

I completed a review of the Adobe Analytics implementation for the retailer last December, 4 months after the implementation was completed. I identified a few variables that had deviated from the design and about a dozen variables that could be optimized.  Working closely with the business and tagging teams we made updates to the tagging solution and implemented updates to optimize the identified variables.

These five key points I’ve covered are obviously not the only ones to consider on a tagging implementation, however, based on my past experience these are items that I have seen organizations take for granted. They can be important in providing a flexible tagging structure and in saving time and money when working on a new or existing tagging implementation.

