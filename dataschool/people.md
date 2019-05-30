---
title: Contributors and Reviewers
meta_title: ''
layout: default
---
<h1 class="title centered">Contributors of Data School</h1>
<ul class="contributors-list list-unstyled">
  {% for person in site.people %}
    <li>
      <a href="{{ person.url }}">
        <img src="{{ person.image }}">
        {{ person.title }}
      </a>
    </li>
  {% endfor %}
</ul>
