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
