---
title: Data School Library of Books

---
<h1>Contributors and Reviewers</h1>

{% for person in site.people %}
  <person>
  <p>
      <a href="{{ person.url }}">
        <img src="{{ person.image }}">
        {{ person.name }}
      </a>
  </p>
  </person>
{% endfor %}
