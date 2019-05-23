---
layout: default-breakout
---
<div class="home-hero">
  <div class="container">
    <div class="row">
      <div class="col-sm-7 centered">
        <h1>Welcome to the Data School</h1>
        <p>We're a community-driven school of free web books and content written by people who work with data <em>for</em> people who work with data.</p>
        <p>To get started check out <a href="/mission">our mission</a>, see <a href="/people" class="link-6">who's involved</a> or dig into our completely free and growing <a href="/books">content library</a> of web books.</p>
        <a href="/books" class="btn btn-primary">Browse Our Web Book Library</a>
      </div>
      <div class="col-sm-4 offset-sm-1">
        <p class="small-font mt-3"><em>This month's featured web book</em></p>
        {% assign book = site.books | where:'is_featured', 'true' %}
        {% assign book = book[0] %}
        <div class="smallbook">
          <a href="{{ book.url }}">
            <img src="{{ book.cover_image }}" alt="{{ book.title }} Data School web book cover" title="Read the {{ book.title }} web book">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <h2>Featured Chapters</h2>
      {% assign bookchapters = site.chapters | where:'is_featured', 'true' | sort: 'number' %}
      <ul class="chapter-list list-unstyled">
        {% for chapter in bookchapters %}
          <li>
           <a href="{{ chapter.url }}">
             <div class="thumbnail-img">
               <!-- thumbnail img -->
             </div>
             <div class="chapter-info">
               <h3>{{ chapter.title }}</h3>
               <p>{{ chapter.summary }}</p>
             </div>
           </a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <h2>Get new data chapters sent right to your Inbox</h2>
      <!--[if lte IE 8]>
      <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
      <![endif]-->
      <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
      <script>
        hbspt.forms.create({
      	portalId: "392937",
      	formId: "c12efdd1-8e2c-4852-b336-1b48e5451b06"
      });
      </script>
    </div>
  </div>
</div>

<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col centered">
        <div class="footer-links">Created by</div>
        <img src="/assets/images/chartio-logo-black-tbg.svg" alt="Chartio logo" class="height-3">
        <p><a href="https://chartio.com/about/legal/"><strong class="bold-text">Terms</strong></a><strong class="bold-text"> • </strong><a href="https://chartio.com/about/legal/privacy/"><strong class="bold-text">Privacy &amp; Cookies</strong></a></p>
      </div>
    </div>
  </div>
</div>
