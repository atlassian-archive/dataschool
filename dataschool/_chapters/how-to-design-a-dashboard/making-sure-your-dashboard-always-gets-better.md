---
section: Deploy
title: Making Sure Your Dashboard Always Gets Better
meta_title: Iterating on Dashboards
description: Use feedback loops from your audience to keep iterating on dashboards
  you create. Learn to improve it's usability and performance.
number: 140
authors:
- _people/tim.md
reviewers:
- _people/mike-yi.md
- _people/matt.md
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1nr7qeQM1xjHTq6wh6zCfvU-8356lqSBDG1dKKwKrZAc/edit?usp=sharing
image: "/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/gettingBetter.jpeg"
is_featured: false
img_border_on_default: false
is_under_construction: false

---
![Iterate on your dashboard](/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/gettingBetter.jpeg)

Continuous improvement is more than just a phrase or a buzzword, it is the key to a useful dashboard. You should not iterate for the sake of iteration. Iteration should be informed by feedback from consumers of the dashboard and the Point Person of the dashboard.

## Get feedback after launch

Collecting feedback from the audience of your dashboard after you launch it will provide the most useful feedback. The audience will see if the dashboard actually is helping them or not in their job. They can let you know what has been most useful and useless on it. They will also highlight what other information they wish they had. Make sure you have a way to collect, process, and ultimately iterate on the feedback.

### Feedback Channel

![Feedback Source](/assets/images/feedback google forms.png)

You will want to open some kind of easy, written feedback avenue, to give users a place to comment, offer suggestions, and ask questions. Providing your email or Slack username allows for quick communication but can get overwhelming. A tool like Google forms captures feedback into a sheet that you can review as needed. For clear tracking, you can go with a tool like JIRA and have people submit tickets when they have feedback.

As the amount of effort necessary to send feedback increases, the less likely you will get feedback. And as the amount of effort it takes you to synthesize the feedback into actionable changes increases, the less likely you will iterate on the dashboard. So balance making giving feedback easy with how easy it is for you to process. This will ensure the audience’s voice is heard and is used to make the dashboard better and better.

### Negative Feedback

![Negative feedback and bugs](/assets/images/negative feedback.png)

People are most motivated to provide feedback when things are going wrong. This type of feedback is powerful, but not always constructive. It is helpful to focus on the source of their frustration. Is it a design choice, is it the data, is it not useful for them, or are they having a bad day? Consider their feedback and weigh it against the purpose of the dashboard. The best thing you can do to encourage higher quality feedback is to let the person who gave you the feedback know what you decided to do with their feedback.

A common type of negative feedback is that something isn't working properly on the dashboard. Not so much a design critique as it is reporting a bug. This is a different type of feedback and it should be marked to grab your attention. Create naming standards for this type of issue such as placing \[BUG\] or \[BROKEN\] at the beginning of your feedback so you can prioritize the fix. In some tools, you can also accomplish this by tagging the feedback when submitted as a bug.

### Audience to community

![](/assets/images/feedback slack.png)

Moving your audience from a one way feedback channel to a community can unearth more valuable feedback. Use a community building tool like Slack, to get an insight into how viewers are talking about your dashboard with other viewers. These discussions will often provide more candid feedback.

You can also solicit feedback on these channels. Once one person chimes in, others who are experiencing the same issues will tend to add feedback as well. If a lot of people are asking for the same things it is likely something important to address.

## Iteration schedule

![Do maintenance on dashboards](/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/schedule.png)

Set up an iteration schedule where you review the feedback you have received. A regular interval such as every month or every week works best. It is better to review feedback (other than bug/broken feedback items) on a schedule instead of ad hoc. This gives you the opportunity to prioritize your work and see if there are themes in the feedback.

Create a checklist with the following items to review a dashboard thoroughly.

### Adoption and usefulness metrics of the dashboard

* Total dashboard views
* Repeat dashboard views
* Unique dashboard viewers

This can also be turned into a dashboard to help you decide when to iterate on the original dashboard.*

### Accuracy check

* Do queries produce expected results?
* Have the underlying data sources or data models for this dashboard changed?

This will likely be the largest source of feedback that you will receive from the dashboards audience.

### Data maintenance

* Check the load being placed on the dashboard.
* Optimize SQL queries if necessary.
* Open and run the dashboard to see if any errors pop up

Every so often your data sources may get re-architected for performance and system reasons. Make sure that the columns, tables, and databases still reflect the names that you provided when you wrote the initial queries.

Most dashboards get built and are used for a short time. To make sure dashboards continue to provide value you need to be committed to receiving feedback, reviewing it, and iterating on the dashboard.

## Summary

* Feedback from end consumer helps people make dashboards more useful and catch errors quickly.
* Schedule time to review feedback to determine trends and prioritize work.
* Regularly check out the health of the dashboard to see if people are using it, the data is still accurate, and if there are opportunities for optimization.