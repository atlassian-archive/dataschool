---
title: Content Library
meta_title: ''
layout: default
---
<h1 class="title centered">The Data School Library</h1>
<ul class="book-list mt-5 no-pad-list">
  {% for book in site.books %}
  <li>
    <a href="{{ book.url }}" class="hover-link">
      <div class="description">
        <h2>{{ book.title }}</h2>
        {{ book.content }}
      </div>
      <img class="hover-img" src="{{ book.cover_image }}" alt="{{ book.title }} Data School web book cover" title="Read the {{ book.title }} web book">
    </a>
  </li>
  {% endfor %}
</ul>
