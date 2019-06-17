---
layout: default
title: Our Contributors and Reviewers
meta_title: 'The Data School Contributors'
description: 'Our community is made up of experienced data professionals and those just getting started with analytics. We welcome anyone who has a passion for data.'
---
<h1 class="title centered mb-5">{{page.title}}</h1>
<ul class="contributors-list list-unstyled">
  {% for person in site.people %}
    <li class="centered">
      <a href="{{ person.url }}" class="hover-link">
        <!-- <img src="{{ person.image }}"> -->
        <div class="author-img hover-img" style="background-image: url('{{ person.image }}');"></div>
        <h2>{{ person.title }}</h2>
        {% if person.job_title and person.company %}
          <h3>{{ person.job_title }}, {{ person.company }}</h3>
        {% endif %}
      </a>
    </li>
  {% endfor %}
</ul>
