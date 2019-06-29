---
title: DATE EXTRACT
short: EXTRACT
meta_title:
description:
section: Extras
number:
authors: []
reviewers: []
image:
img_border_on_default: false
is_featured: false
published: false
---
once done link from:
 - learn-sql/dates.md




 Often getting the whole date back is too much unformatted detail.  To get just parts of the TIMESTAMP and format it well we can use the EXTRACT function.  EXTRACT works with the following format

 `EXTRACT([field] FROM [date type])`

 Where the [date] is a column or value from the date types above and [field] is one of the following parts of a date/time stamp:

 | Field | Description | Example | Output |
 |-------
 | century
 | decade
 | day
 | dow
 | doy
 | milliseconds
 | minute
 | month
 | quarter
 | second
 | week
 | year
