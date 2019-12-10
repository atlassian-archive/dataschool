---
title: Mid Level SQL Practice Grounds
short: Practice
meta_title: Practice Mid Level SQL Commands
description: After you've mastered mid-level SQL fundamentals, put that knowledge
  to the test in these interactive SQL practice exercises.
number: 150
section: Mid-Level SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
image: "/assets/images/book-covers/learn-sql.png"
is_featured: false
is_under_construction: false

---
You've covered the majority of the main use cases of SQL!  You know the stuff, but now you've got some practicing to do to become really fluent and skilled at it.  Here we've constructed a large list of challenges to give you that practice.  If you forgot the rules of our practice playgrounds you can review them in the [Basic SQL Practice](../basic-practice/) page.

Good luck!

{% for quiz in site.data.learn-sql.quizes.mid-level %}
  {% include quizbox.html
    question=quiz.question
    answer=quiz.answer
    hint=quiz.hint
    show_incorrect=true
    references=quiz.references
    %}
{% endfor %}


If you've completed all of these CONGRATULATIONS!  You're proficient and fluent enough in SQL now to complete a significant portion of analytic and transactional queries.
