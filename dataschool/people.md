---
title: Contributors and Reviewers
meta_title: ''
layout: default
---
<h1 class="title centered">The Data School Contributors</h1>
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
