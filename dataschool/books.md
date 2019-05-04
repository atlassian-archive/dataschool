---
title: Data School Library of Books
 
---
<h1>Book Library</h1>

{% for book in site.books %}
  <book>

      <a href="{{ book.url }}">{{ book.title }}</a>

    <p>{{ book.description }}</p>
  </book>
{% endfor %}
