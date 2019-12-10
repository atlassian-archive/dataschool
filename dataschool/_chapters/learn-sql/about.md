---
title: Interactive PostgreSQL SQL Tutorial
short: SQL Tutorial
description: Learn how to use SQL against your PostgreSQL database. SQL is the primary
  language for data exploration and analysis. Get a foundational understanding in
  how to use the SQL language with your PostgreSQL database in these data tutorials.
image: "/assets/images/learn-sql/sql-tutorial-sqlbox.gif"
authors:
- _people/dave.md
reviewers: []
published: false
is_under_construction: false
---
Welcome to our {{ page.database }} interactive SQL Tutorial!  We've designed this specifically for tech-savvy folks to learn enough SQL to be able to do their own analysis and data fetching.  

We've added a big innovation to our tutorial that makes it quite different: Because we believe the best way to learn SQL is by playing around, we've created an interactive _SQLBox_ for you to follow along and play with writing queries from the very start.  The SQLBox takes your input and runs it against a live {{ page.database }} database that we're hosting.

The SQLBox is embedded right in to the lessons themselves.  Some of them have a checkbox to their left.  These are ones that have a correct answer to them.  See if you can get all of them correct!

![figure 1](/assets/images/learn-sql/sql-tutorial-sqlbox.gif)

Best of luck to you!  I hope you learn a great amount from our lessons here.  If you have any comments, feedback, suggestions, etc. please [drop us a line at support@chartio.com](mailto:support+sqltutorial@chartio.com)

<br>
<p class="text-center">
  <a class="btn btn-success btn-large " href="/learn-sql/introduction/">START TUTORIAL</a>
</p>


# SQL Tutorial Lessons
{% assign tutorials = site.chapters | where: 'book',page.book | sort:'number', 'last'  %}

{% for section in site.data.learn-sql.data.levels %}
## {{ section.title }}
       {% assign tutorials = site.chapters | where: 'book',page.book | sort:'number', 'last'  %}
       {% for tutorial in tutorials %}
         {% if tutorial.section == section.slug %}
  - [{{ tutorial.title}}]({{ tutorial.url }})<br>{{ tutorial.description }}
         {% endif %}
       {% endfor %}
{% endfor %}



## FAQ

### Q: Why did you build this SQL Tutorial?

Our company Chartio is on a mission to ensure that anyone (not just engineers and data scientists) can explore and understand data.  Half of that mission is about creating an easy to use product for data exploration, and the other half is about educating because no matter how easy we make our tools, there is still much to teach.  

I wrote this tutorial because I wasn't comfortable suggesting any existing SQL Tutorials to customers or friends.  Most of them start with a lengthy process of installing, creating, structuring, and loading a database yourself.  Others are purely reference based and offer no process or dataset to follow along yourself.

### Q: Who is this tutorial for?

This tutorial is built specifically for technically savvy, but non-engineer types who know their way around tools like Excel, but may be new to databases.  That's not to say it's not useful for new engineers or students on their way to becoming DBAs, but if you're one of those you're just not our primary target here.  

### Q: Who wrote this SQL Tutorial?

I'm Dave, the Founder and CEO of Chartio.  I programmed the interactive SQLBox and wrote the core of this tutorial myself.  Much of my team has and will continue to continuously build more lessons and extra content.  

With thousands of new queries being added in Chartio every day we have a unique set of knowledge on what parts of SQL are the most used, and where people are more likely to get hung up.

### Q: Why is it for {{ page.database }} specifically?  

Most tutorials out there are for generic SQL.  We thought we'd be a little more specific and plan to eventually build a specific (though fairly similar) tutorial for each of the major database engines.

### Q: What was wrong with the other tutorials?

Many tutorials require users to first learn how to install, configure, and import data into their database before getting going with common queries.  

Others are purely text based, and offer no interactivity to play/learn along.  

We solve both these major issues by having an interactive SQL editor running against a live {{ page.database }} database.  The lessons have the SQL editor built into them, and have challenges along the way.


### Q: What's so great about the SQLBox?

Having an interactive SQL interface running against a live {{ page.database }} server allows a few key advantages:

  - Interactive SQL Interface (SQLBox)
  - No setup needed - start with writing queries!
  - Database ({{ page.database }}) specific tutorial
  - SQL quizzes/challenges as you go along and at the end of each section.

### Q: What is Chartio?

Chartio is a company and a product on a mission to enable anyone in a company (not only the data scientists) to explore and understand their data.  If you're interested you can see [more about our product here](https://chartio.com/product/) or [signup for our free trial here](https://chartio.com/signup/).


### Q: Why so colloquial?

The style of this tutorial was inspired by Joe Burns, Ph.D and his classic [HTMLGoodies][htmlgoodies] that was by far the best written, most useful, and fun tutorial I've ever read.  

[htmlgoodies]: https://web.archive.org/web/19990302022344/http://www.htmlgoodies.com:80/
