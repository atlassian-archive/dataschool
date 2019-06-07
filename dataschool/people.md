---
layout: default
title: Our Contributors and Reviewers
meta_title: 'The Data School Contributors'
description: ''
---
<h1 class="title centered mb-5">{{page.title}}</h1>
<ul class="contributors-list list-unstyled">
  {% for person in site.people %}
    <li class="centered">
      <a href="{{ person.url }}" class="hover-link">
        <!-- <img src="{{ person.image }}"> -->
        <div class="author-img hover-img" style="background-image: url('{{ person.image }}');"></div>
        <h2>{{ person.title }}</h2>
        <h3>{{ person.job_title }}, {{ person.company }}</h3>
      </a>
    </li>
  {% endfor %}
</ul>
