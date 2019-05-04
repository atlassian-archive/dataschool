---
title: Content Library
---
{% for book in site.books %}
  <book>

      <a href="{{ book.url }}">{{ book.title }}</a>

    <p>{{ book.description }}</p>
  </book>
{% endfor %}
