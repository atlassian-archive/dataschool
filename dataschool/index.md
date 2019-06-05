---
layout: default-breakout
meta_title: ''
---
<div class="home-hero">
  <div class="container centered">
    <div class="mt-5">
      <h1 class="mega-title">Welcome to the Data&nbsp;School</h1>
      <p>We're a community-driven school of free web books and content written by people who work with data <em>for</em> people who work with data.</p>
      <p>To get started check out <a href="/mission">our mission</a>, see <a href="/people" class="link-6">who's involved</a> or dig into our completely free and growing <a href="/books">content library</a> of web books.</p>
      <a href="/books" class="btn btn-primary mt-3">Browse Our Web Books <i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="featured-book">
      <h5>This month's featured web book</h5>
      {% assign book = site.books | where:'is_featured', 'true' %}
      {% assign book = book[0] %}
      <div class="smallbook">
        <a href="{{ book.url }}" class="hover-link">
          <img class="hover-img" src="{{ book.cover_image }}" alt="{{ book.title }} Data School web book cover" title="Read the {{ book.title }} web book">
        </a>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <h2>Featured Chapters</h2>
       {% assign bookchapters = site.chapters | where:'is_featured', 'true' | sort: 'number' %} <!-- maybe should be sorted by date updated? -->
      <ul class="chapter-list list-unstyled">
        {% for chapter in bookchapters %}
          <li>
            {% assign book = site.books | where:'book_slug', chapter.book_slug %}
            {% assign book = book[0] %}
            <div class="chapter-info">
              <a href="{{ chapter.url }}"><h3>{{ chapter.title }} <i class="fas fa-arrow-right"></i></h3></a>
              <em>From <a href="{{ book.slug }}">{{ book.title }}</a></em>
              <p>{{ chapter.summary }}</p>
            </div>
            <a href="{{ chapter.url }}" class="thumbnail-img" style="background-image: url('{{chapter.image}}');"></a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <h2>Get new data chapters sent right to your Inbox</h2>
      {% include newsletter-form.html %}
    </div>
  </div>
</div>

<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col centered">
        <div class="footer-links">
          <h4>Created by</h4>
          <img src="/assets/images/chartio-logo-black-tbg.svg" alt="Chartio logo" class="height-3">
          <p><a href="https://chartio.com/about/legal/">Terms</a> • <a href="https://chartio.com/about/legal/privacy/">Privacy &amp; Cookies</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
