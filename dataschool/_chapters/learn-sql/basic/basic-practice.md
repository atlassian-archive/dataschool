---
title: Basic SQL Practice Grounds
short: Practice
meta_title: Practice Basic SQL Commands
description: After you've got the basic SQL fundamentals. Put that knowledge to the
  test in these interactive SQL practice exercises.
number: 59
section: Basic SQL
authors:
- _people/dave.md
reviewers:
- _people/matt.md
is_featured: false
image: "/assets/images/book-covers/learn-sql.png"
is_under_construction: false

---
You're through the basics of SQL!  This is a great place to stop and get more practice on what you've learned so far.   Here we've constructed a list of challenges to give you that practice.  Take some time to go through these before moving on to the Mid-Level SQL section.

A few things to keep in mind when going through

  - If no specific columns or values are called out to return, assume that it's asking for all the columns (splat `*`).
  - If it does ask for specific information like "names", only return that column.  If you return other things as well it won't be able to match the correct answer.
  - If you're having trouble with a question use the 'Hint' button.  If you're really having trouble or think that the answer might be wrong, send us a note at [support@chartio.com](mailto:support@chartio.com).
  - We check if things are correct not by the query you wrote, but by the results that are returned.  This is the best way as there are often a few different ways to get the same result.

<!-- TODO: Remind of Schemas here -->

Good luck!

{% for quiz in site.data.learn-sql.quizes.basic %}
  {% include quizbox.html
    question=quiz.question
    answer=quiz.answer
    hint=quiz.hint
    show_incorrect=true
    references=quiz.references
    %}
{% endfor %}

If you've completed all of these CONGRATULATIONS!  You're proficient and fluent enough in SQL now to complete a significant portion of analytic and transactional queries.
