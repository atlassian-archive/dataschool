---
title: The Data School Library
meta_title: The Data School Web Book Library
description: Read our web books on topics such as SQL, data visualization, and dashboard
  design. Learn how to make your company more data driven.
layout: default

---
<h1 class="title centered mb-5">{{page.title}}</h1>
{% assign books = site.books | sort: 'book_sort_number' %}
{% for book in books %}
  {% if book.published != 'false' %}<div class="row mb-5">
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
  </div>{% endif %}
{% endfor %}