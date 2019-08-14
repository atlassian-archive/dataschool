---
title: SQL Practice
authors:
- _people/matt.md
number: 100
section: Appendix
meta_title: SQL practice on JOINs, Aggregations, and Subqueries
description: Test your SQL skills by performing complex JOINs, different types of
  aggregations, and Subqueries

---
Good luck!

{% for quiz in site.data.learn-sql.quizes.slideshow %}
  {% include quizbox.html
    question=quiz.question
    answer=quiz.answer
    hint=quiz.hint
    show_incorrect=true
    references=quiz.references
    %}
{% endfor %}