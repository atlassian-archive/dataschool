---
title: The Data School Library
meta_title: The Data School Web Book Library
description: Read our web books on topics such as SQL, data visualization, and dashboard
  design. Learn how to make your company more data driven.
layout: default
pdf: true
---
<h1 class="title centered mb-5">{{page.title}}</h1>
{% assign books = site.books | sort: 'book_sort_number' %}
{% for book in books %}
  {% if book.published != 'false' %}<div class="row mb-5">
    <div class="col-sm-8 chapter-info">
      <a href="{{ book.url }}">
        <h2 class="mt-0">{{ book.title }} <i class="fas fa-arrow-right"></i></h2>
        <p>{{ book.snippet }}</p>{% if book.status == "in_progress" %}<em>(In progress)</em>{% endif %}
      </a>

    </div>
    <div class="col-sm-4 book-cover">
      <a href="{{ book.url }}" class="hover-link">
        <img class="hover-img" src="{{ book.cover_image }}" alt="{{ book.title }} Data School web book cover" title="Read the {{ book.title }} web book">
      </a>
    </div>
  </div>{% endif %}
{% endfor %}
