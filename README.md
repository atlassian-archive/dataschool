# DataSchool.com

This is the site powering dataschool.com.  Please contribute!

## Installing Jekyll

This site is built with [Jekyll](https://jekyllrb.com/), a simple static site server.  To install Jekyll simply use:

1. Clone this repository: `git@github.com:chartio/dataschool.git`
1. Install homebrew with `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
1. Install jekyll and bundler with `sudo gem install bundler jekyll`.  Note you'll be prompeted to enter your computer's password to install.


## Building Jekyll

This site is built using Jekyll.  You don't need to know or even run jekyll to
contribute - you can just edit and commit the markdown files, but if you want to
run a local copy it's fairly simple:

```
cd dataschool
bundle install --path vendor/bundle
bundle exec jekyll serve --watch
```

It will then be available at http://localhost:4000


## Organization

There are 3 main objects (jekyll calls them collections) in DataSchool:

 - People (_people)
 - Books (_books)
 - Chapters (_chapters)

The content for all of the books is in _chapters folder, organized by book.
