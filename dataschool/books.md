---
title: Content Library
meta_title: ''
layout: default
---
<h1 class="title centered mb-5">The Data School Library</h1>
<!-- <ul class="book-list mt-5 no-pad-list">
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
</ul> -->
{% for book in site.books %}
<div class="row mb-5">
  <div class="col-sm-8">
    <a href="{{ book.url }}" class="book-info">
      <h2 class="mt-0">{{ book.title }} <i class="fas fa-arrow-right"></i></h2>
    </a>
    {{ book.content }}
  </div>
  <div class="col-sm-4 book-cover">
    <a href="{{ book.url }}" class="hover-link">
      <img class="hover-img" src="{{ book.cover_image }}" alt="{{ book.title }} Data School web book cover" title="Read the {{ book.title }} web book">
    </a>
  </div>
</div>
{% endfor %}
<!-- <li>
  <a href="{{ book.url }}" class="hover-link">
    <div class="description">
      <h2>{{ book.title }}</h2>
      {{ book.content }}
    </div>
    <img class="hover-img" src="{{ book.cover_image }}" alt="{{ book.title }} Data School web book cover" title="Read the {{ book.title }} web book">
  </a>
</li> -->
