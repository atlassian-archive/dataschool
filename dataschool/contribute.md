---
title: How to Contribute to The Data School
meta_title: Contribute to Data School
description: Provide content on data analytics, data visualization, data modeling,
  data governance, or any data topic you think is important to creating a data driven
  organization.

---
<h1 class="title centered mb-5">{{page.title}}</h1>

Welcome to the Data School.  We are building a thriving community of contributors, reviewers and readers. Help contribute to the site!

While at The Data School let us know if you find any of the following:

* Areas that you want more info on
* Any mistakes or errors
* Topics you want to contribute to

### Comment on our Google Docs

There are links to the Google Doc version of each chapter at the bottom of the page:

![](/assets/images/Screen Shot 2019-07-08 at 12.04.42 PM.png)

### Reach out on Slack

We have channels for each of these in our Slack:

* #book-expansion
* #book-edits
* #book-contribute

[Go here to join the Data School Slack](https://join.slack.com/t/thedataschool/shared_invite/enQtNjAyMTM1MTk1MzQ4LWY4YWI1YzBkOTAwZmQ4Y2Q4N2U4MWE1Njg3OWJhNmU2NGRiYTI0MDEzMmQ1MzllMTczMGFhMTEwZTBlYmQxYjY)

If you want to contribute more substantially to a book or help write our next one please reach out to me (@MattDavid) in The Data School’s Slack.

### Make a Pull Request

Our whole site is public and open to contributors. Feel free to make a pull request: [https://github.com/chartio/dataschool](https://github.com/chartio/dataschool "https://github.com/chartio/dataschool")

## Code of Conduct

This is a collaborative project to create the best resource for creating data driven organizations.

So by definition this means that we need to be open and helpful to everyone here to accomplish our goal. This is what we expect of everyone. If there is any behavior here you find in conflict with that please reach out to me directly.



{% assign in_progress_chapters = site.chapters | where:'is_under_construction', 'true' | sort: 'last_modified' %}
{% if in_progress_chapters %}
  <h2 class="mt-5">{{ in_progress_chapters | size }} Chapters need Contribution</h2>
  <ul>
  {% for chapter in in_progress_chapters %}
    <li class="mb-2">
     <a href="{{ chapter.url }}">{{ chapter.title }}</a> {% if chapter.is_under_construction %}<em>(In progress)</em>{% endif %}
    </li>
  {% endfor %}
  </ul>
{% endif %}
