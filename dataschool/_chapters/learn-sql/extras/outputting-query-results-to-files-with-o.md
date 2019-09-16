---
section: Extras
title: Outputting Query Results to Files with \o
meta_title: Using the o command to Export Output to Files
description: This article discusses how to use the o meta command to output to a text
  file
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1fk6jWB3VWdRf4_fv6eIN83VVEsV_SbeAe7o-4M3CNJw/edit?usp=sharing
image: "/assets/images/learn-sql/extras/outputtingWithMetacommand/outputtingWithMeta_0.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time:
is_community_story: false
story_intro_blurb: ''

---
```code
\o [filename].txt
[Query or Queries to write to file];
\o
```

Outputting query results to a file instead of the terminal allows the data to be saved later analysis. The results can be shared easily and provide a snapshot of the data at the time of the query.

In order to output to a file, several methods can be employed. In this article the `\o` method of writing to files will be explored. One other method is using either `\copy` or `COPY` which are discussed in [this article](https://dataschool.com/learn-sql/export-to-csv-from-psql/).

## Video
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/euUcYD3nw78?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The \\o metacommand

`\o` is a [metacommand](https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/). This means that it is delimited by a new line in the terminal rather than being part of the query. Simply write the metacommand and then press enter/return to run the command.

`\o` works like this:

* `\o [filename].txt`
  * This will start writing the results of subsequent queries and certain metacommands to the specified file.
* \[Query or Queries to write to file\];
  * Since these lines are after `\o [filename]`, these queries will be logged to the file.
    * Depending on version, the results of `\d` as well as `\di`, `\dt`, etc will be printed to the new file. (see example below)
    * `\!` Commands will not be printed to the file.
    * If the output of a command is logged on the console, this means that it was not written to the file. If the result is not shown on the console, then the result was sent to the file
* `\o`
  * Using `\o` again will close the file. This means that after running `\o` the file is done being written and can not be reopened using `\o [filename].txt`. Running `\o [filename].txt` again with the same filename **will overwrite the file.**
  * Can also be terminated with `\q`

## Example use

Let’s look at an example of `\o` being used:

![\\o being used to output](/assets/images/learn-sql/extras/outputtingWithMetacommand/outputtingWithMeta_0.png)

As you can see, the output of `\dt` and the `SELECT` query are not shown on the console. This indicates that they are being logged in the file. We can confirm this if we check the file. This can be done manually outside of psql or through psql using the `\!` meta command:![the output from the previously run commands](/assets/images/learn-sql/extras/outputtingWithMetacommand/outputtingWithMeta_1.png)

`\!` allows the user to use terminal commands and see the results without leaving the psql environment. As such, the file contents can be checked quickly using commands like `cat` which displays the contents of the text file to the screen.

## Summary

* `\o` can be used to write query results to a file instead of the console:
  * `\o [filename].txt`
  * `[Query or Queries to log to file];`
  * `\o`
* Can write the results of certain meta commands to the file.
* Can be checked using: `\! cat [filename].txt`
