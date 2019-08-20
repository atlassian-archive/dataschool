---
section: Extras
title: Additional Practice
meta_title: ''
description: ''
number: 1000
authors: []
reviewers: []
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
For practicing we will be using a online music store database. Here is the entity relationship diagram of the schema.

![](/assets/images/Frame (64).png)

\*note all primary key columns are just ID. ArtistId in the artists table is ID

\**any two word combination column name is separated by an underscore FirstName is first_name

Feel free to explore the data by using SELECT * FROM \[table name\] in the SQL editor below:

<sqlbox></sqlbox>

## Select Questions

Select all columns and rows from the albums table in the SQL box below:

<sqlbox

answer='SELECT * FROM albums;'

hint='Try using SELECT *'

correct_message='Correct! SELECT * can be used to return all of the columns from any table you have access to.'></sqlbox>

Select all columns from the albums table where the album title is 'Let There Be Rock' in the SQL box below:

<sqlbox

answer="SELECT * 

FROM albums 

WHERE albums.TITLE = 'Let There Be Rock'"

hint='Try using SELECT *'

correct_message='Correct! WHERE can be used to filter the rows returned.'></sqlbox>

## Join Questions

Join the Artist and the Album table with an **inner join** in the SQL box below:

<sqlbox

answer='SELECT * FROM albums JOIN albums ON artists.artist_id=artists.id;'

hint='Try using INNER JOIN'

correct_message='Correct! The default join type is an inner join so you could use INNER JOIN or JOIN'></sqlbox>

Join the Artist and the Album table with an **left join** in the SQL box below:

<sqlbox

answer="SELECT * FROM albums LEFT JOIN artists ON albums.artist_id = artists.id"

hint='Try using LEFT JOIN'

correct_message='Correct! We can simply replace INNER with LEFT to perform this type of join.'></sqlbox>

Join the Artist and the Album table with an **outer join** in the SQL box below:

<sqlbox

answer="SELECT * FROM albums FULL OUTER JOIN artists ON albums.artist_id = artists.id"

hint='Try using FULL OUTER JOIN'

correct_message='Correct! We can simply replace INNER or LEFT with outer to perform this type of join.'></sqlbox>

The INNER JOIN found every instance where the albums.artist_id equalled an artists.id and joined the data together to create a row in the final table.

The LEFT JOIN performed an INNER JOIN and then also added rows to the final table where the left table (albums) did not have matches.

The OUTER JOIN performed both an INNER and LEFT JOIN and then also added rows to the final table where the right table (artists) did not have matches.

## Common Errors Questions

Fix the following queries:

<sqlbox

initial='SELECT * FROM album JOIN albums ON artists.artist_id=artists.id;'

autorun="true"

answer='SELECT * FROM albums JOIN albums ON artists.artist_id=artists.id;'

hint='Try using INNER JOIN'

correct_message='Correct! The default join type is an inner join so you could use INNER JOIN or JOIN'></sqlbox>

<sqlbox

initial='SELECT * FROM albums JOIN albums ON artists.artist_id=artists.ids;'

autorun="true"

answer='SELECT * FROM albums JOIN albums ON artists.artist_id=artists.id;'

hint='Try using INNER JOIN'

correct_message='Correct! The default join type is an inner join so you could use INNER JOIN or JOIN'></sqlbox>