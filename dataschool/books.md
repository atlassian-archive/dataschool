---
title: Content Library
meta_title: ''
layout: default
---
<h1 class="title centered">The Data School Library</h1>
<ul class="book-list mt-5">
  {% for book in site.books %}
  <li>
    <a href="{{ book.url }}">
      <div class="description">
        <h2>{{ book.title }}</h2>
        {{ book.content }}
      </div>
      <img src="{{ book.cover_image }}" alt="{{ book.title }} Data School web book cover" title="Read the {{ book.title }} web book">
    </a>
  </li>
  {% endfor %}
</ul>
