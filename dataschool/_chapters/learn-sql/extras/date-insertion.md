---
title: DATE EXTRACT
short: EXTRACT
meta_title:
description:
section: Extras
number:
authors: []
reviewers: []
image: /assets/images/book-covers/learn-sql.png
img_border_on_default: false
is_featured: false
published: false
---
once done link from:
 - learn-sql/dates.md




 ## INTERVALs

 Here's how old I am on the day that this tutorial was last updated:

 <sqlbox
   initial="SELECT TIMESTAMP '1983-05-01 04:00:00' - DATE '{{ "now" | date: "%Y-%m-%d" }}';"
   auto-run="true"
 ></sqlbox>

 It's just displaying it in days.


 options: microsecond, millisecond, second, minute, hour, day, week, month, year, decade, century, millennium, or abbreviations or plurals of these units; direction can be ago or empty.



 ### TIMESTAMP

 TIMESTAMPS store

 <sqlbox
   initial="SELECT TIMESTAMP '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}';"
   auto-run="true"
 ></sqlbox>

 ### DATE

 Dates are values that only get as granular as a specific day.  They don't store the hour, minutes or seconds for example.  Just the day.  Here's an example of making a date from a string input with the format YEAR-MONTH-DAY.

 <sqlbox
   initial="SELECT DATE '{{ "now" | date: "%Y-%m-%d" }}';"
   auto-run="true"
 ></sqlbox>

 We can also create a string that has Hour, Minute and Seconds information.  We can see here though that DATEs will ignore that information as again they don't get that granular.

 <sqlbox
   initial="SELECT DATE '{{ "now" | date: "%Y-%m-%d %H:%M:%S" }}';"
   auto-run="true"
 ></sqlbox>
