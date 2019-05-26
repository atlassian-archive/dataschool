# DataSchool.com

This is the site powering dataschool.com.  Please contribute!

## Rendering with Jekyll

This site is built using Jekyll.  You don't need to know or even run jekyll to
contribute - you can just edit and commit the markdown files, but if you want to
run a local copy it's fairly simple:

```
cd dataschool
bundle install --path vendor/bundle
bundle exec jekyll serve --watch
```

It will then be available at http://localhost:4000

Note - do use port 4000 and "localhost" vs 127.0.0.1 otherwise SQLBox will not work for you on your localhost.


## Organization

There are 3 main objects (jekyll calls them collections) in DataSchool:

 - People (_people)
 - Books (_books)
 - Chapters (_chapters)

The content for all of the books is in _chapters folder, organized by book.
