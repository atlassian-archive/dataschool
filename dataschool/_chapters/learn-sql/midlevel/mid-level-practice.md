---
title: "Mid Level SQL Practice Grounds"
short: Practice
description: "Now that you've gone through our PostgreSQL interactive SQL tutorials, you've got mid-level SQL fundamentals that you can apply to your data and databases. Put that knowledge to use in these SQL practice exercises."
number: 150
section: mid level
---
You've covered the majority of the main use cases of SQL!  You know the stuff, but now you've got some practicing to do to become really fluent and skilled at it.  Here we've constructed a large list of challenges to give you that practice.  If you forgot the rules of our practice playgrounds you can review them in the [Basic SQL Practice](../basic-practice/) page.

Good luck!

{% for quiz in site.data.tutorials.postgresql.mid-level %}
  {% include quizbox.html
    question=quiz.question
    answer=quiz.answer
    hint=quiz.hint
    show_incorrect=true
    references=quiz.references
    %}
{% endfor %}


If you've completed all of these CONGRATULATIONS!  You're proficient and fluent enough in SQL now to complete a significant portion of analytic and transactional queries.
