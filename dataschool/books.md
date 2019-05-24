---
title: Content Library
layout: default
---
<ul>
  {% for book in site.books %}
  <li>
    <a href="{{ book.url }}">{{ book.title }}</a>
    <p>{{ book.description }}</p>
  </li>
  {% endfor %}
</ul>
