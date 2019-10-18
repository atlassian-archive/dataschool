---
section: Appendix
title: Third Normal Form
meta_title: Why is data in Third Normal Form
description: Learn why data is stored in third normal form in a SQL database
number: 212
authors: []
reviewers: []
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: true
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
Data School wants a comprehensive post to help people understand why third normal form is used. Most articles approach this from a principles approach, we want to focus on a practical approach, namely that updating data that is not in 3NF is error prone.

The outline for this chapter:

1) The problems with updating data

Show consistent example and how when you try updating the values how it is problematic until it is in 3rd normal form.

* Update cell with multiple values
* Update value in multiple places

2) Show how to get the data back out

Use the same example how you would query the 3NF schema into the first table we started with. Give advice about JOIN types.

Spend extra time calling attention to many to many relationships

3) Summary

3NF lets us update data with less errors.

We can rebuild big tables using JOINs