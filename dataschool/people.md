---
title: Contributors and Reviewers

---
{% for person in site.people %}
  <person>
  <p>
      <a href="{{ person.url }}">
        <img src="{{ person.image }}">
        {{ person.title }}
      </a>
  </p>
  </person>
{% endfor %}
