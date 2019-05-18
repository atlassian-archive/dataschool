---
layout: default-breakout
---
<div class="hero">

</div>

<div class="container">
  Welcome to
  <h1>The Data School</h1>


  Check out our
  <ul>
  <li><a href="/books/">Books</a></li>
  <li><a href="/mission/">Mission</a></li>
  <li><a href="/people/">Contributors</a></li>
  <li><a href="/books/">Slack Community</a></li>
  </ul>

  <h2>Books</h2>

  {% for book in site.books %}
    <p>
      <a href="{{ book.url }}">{{ book.title }}</a>
      <br>
      {{ book.description }}
    </p>
  {% endfor %}
</div>
