---
section: book
title: Making Sure Your Dashboard Always Gets Better
meta_title: 
description: Once a dashboard is built and shared it is not done. You should maintain
  it and improve it by using audience feedback.
number: 140
authors:
- _people/tim.md
reviewers:
- _people/matt.md
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1nr7qeQM1xjHTq6wh6zCfvU-8356lqSBDG1dKKwKrZAc/edit?usp=sharing
image: "/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/gettingBetter.jpeg"
is_featured: false
img_border_on_default: false

---
![Iterate on your dashboard](/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/gettingBetter.jpeg)

Continuous Improvement is more than just a phrase or a buzzword, it is the key to a useful dashboard. You should not iterate for the sake of iteration. Iteration should be informed by feedback from consumers of the dashboard and the Point Person of the dashboard.

## Get feedback after launch

Collecting timely feedback from the users and consumers of your dashboard will help you improve the dashboard. There are a few options for opening feedback channels that you may wish to investigate.

### Feedback Channel

You will want to open some kind of easy, written feedback avenue, to give users a place to comment, offer suggestions, and ask questions. Providing your email or slack username allows for quick communication but can get overwhelming. A tool like Google forms captures feedback into a sheet that you can review as needed. For clear tracking, you can go with a tool like JIRA and have people submit tickets when they have feedback. As the amount of effort increases to send feedback, the less likely you will get feedback so make it easy.

### Negative Feedback

Everyone knows that a person is most motivated to provide feedback when things are going wrong. This type of feedback is powerful, but not always constructive. It is helpful to focus on the source of their frustration. Is it a design choice, is it the data, is it not useful for them, or are they having a bad day? Consider their feedback and weigh it against the purpose of the dashboard and make a decision. The best thing you can do to encourage higher quality feedback is to let the person who gave you the feedback know what you decided to do with their feedback

A common type of negative feedback is that something isn't working properly on the dashboard. This is a different type of feedback and it should be marked to grab your attention. Create naming standards for this type of issue such as: Place \[BUG\] or \[BROKEN\] at the beginning of your feedback so you can prioritize the fix. In some tools, you can accomplish this by tagging the feedback.

### Audience to community

![Three examples of the new logo and how it works in different environments ](/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/slack.png)

Moving your audience from a one way feedback channel to a community can unearth more valuable feedback. Use a community building tool like Slack, to get an insight into how viewers are talking about your dashboard with other viewers. These discussions will often provide more candid feedback. You can also solicit feedback on these channels. Once one person chimes in, others who are experiencing the same issues will tend to pipe up so you can judge the significance of the issue.

## Iteration schedule

![Do maintenance on dashboards](/assets/images/how-to-design-a-dashboard/making_sure_your_dashboard_always_gets_better/schedule.png)

Set up an iteration schedule where you review the feedback you have received. A regular interval such as every month or every week works best. It is better to review feedback (other than bug/broken feedback items) on a schedule instead of ad hoc. This gives you the opportunity to prioritize your work and see if there are themes in the feedback.

Create a checklist, similar to the below, to review the dashboard in the scheduled review session.

Adoption and usefulness metrics of the dashboard

* Total dashboard views
* Repeat dashboard views
* Unique dashboard viewers

Accuracy check

* Do queries produce expected results?
* Have the underlying data sources or data models for this dashboard changed?

Data maintenance

* Check the load being placed on the dashboard.
* Optimize your SQL if necessary.
* Open and run the dashboard to see if any errors pop up
* Every so often your data sources may get re-architectured for performance and system reasons. Make sure that the columns, tables, and databases still reflect the names that you provided when you wrote the initial queries.

## Summary

* Feedback from end consumer helps people make dashboards more useful and catch errors quickly
* Schedule time to review feedback to determine trends and prioritize work
* Regularly check out the health of the dashboard to see if people are using it, the data is still accurate, and if there are opportunities for optimization