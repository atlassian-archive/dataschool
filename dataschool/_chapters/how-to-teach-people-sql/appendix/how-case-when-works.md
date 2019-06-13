---
section: book
title: How CASE WHEN works
meta_title: ''
description: ''
number: 200
authors:
- author: _people/blake.md
reviewers:
- reviewer: _people/matthew-layne.md
- reviewer: _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1iMFvldJoRh7Uay5e_AW7sy9lKbyR5n24yeJbuuyAmsk/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: true
published: false

---
CASE WHEN takes in values, checks them against a condition and THEN outputs values into a new column based on if it satisfies the condition.

CASE WHEN in SQL operates very similarly to “if then” statements in other programming languages. Replace the “if” with CASE WHEN and “else if” with WHEN, and the rest matches:

![](https://lh3.googleusercontent.com/rcYtQP9V37AxXjZkivZY5aA_aAeUZW4tm6bbIf_SO6aVMK8DxIiCzbaD518rrLdAjOYYyX3b0DSiD9AAp-l7k72eMyRsVPs8E8pwXaW2ONfdLA6C-xvtEahg0JLC5vqWrkwDnnRR =624x169)

Note: CASE WHEN statements will always output new values to a new column which is different than “if then” which can replace values in the same column.

![](https://lh5.googleusercontent.com/sEii1MrDEmoKGC1QaVK0IuMJ5ynJV0BC5ZGn19zRNzUTgu9TYM_SChuP0DJPlxfbJUKr_ZgBXJablgZYJWKnHOWToU6rdGLDzrEh6l5o4vSIEodtyJ0k1NVj66yYbGJByIhfJVzp =624x265)

![](https://lh4.googleusercontent.com/ic9jKw0IVNQJvmSC82wD4TjwSeRB5YXGRKSsQnPQoR5sB5SCVtPNH3NSw6fjWWkdTi79zsE8uEJ3Ld6Jw0BCC3fBFu7F2sC7pXqWl6W7CVnjt-C0qCizbgiIAQrYouOXMhKgSTu3 =624x235)

Now let’s see what the full query would have looked like for that CASE WHEN statement, notice the title of the output column at the end of the CASE WHEN statement.

SELECT **City**,

CASE WHEN **City** = “SF” THEN “San Francisco”

ELSE **City**

END AS “Updated City”  
FROM friends

Let’s break down each component of the CASE WHEN statement:

* **CASE**: indicates a condition loop has been started and that the conditions will follow.
* **WHEN**: indicates the start of a condition that should be checked by the query.
* **THEN**: executed when the condition is true, determines the output for the true condition.
  * After THEN is executed, CASE will return to the top of the loop and begin checking the next entry.
  * If the condition is false, the next WHEN statement will be evaluated.
* **ELSE**: catches all of the entries that were not true for any of the WHEN conditions.
  * If no ELSE statement is present and all WHEN conditions are false, the returned value will be NULL.
* **END**: Indicates the end of the CASE loop.
* **AS**: Used to set a specific name for the returned CASE column.

NOTE: If you put the column name after THEN or ELSE it will put the value from the original column into the newly created column. In the example we see this done with ELSE City which puts LA unchanged in the new column

## **Syntax**

SELECT (**optional**: any desired columns),

CASE WHEN (condition) THEN (desired output)

WHEN (other condition) THEN (desired output)

ELSE (desired output)

END AS (descriptive header for the output column)

FROM (appropriate table);

_Note: you do not have to show all of the columns, or any columns besides the CASE column in the output._

_![](https://lh4.googleusercontent.com/0PiiwgjIUNQ-Y8W6UI_R2Oyd1i1WxNkQIr2_EBcERcpJVWnwKny4247xq1cxLljJZokQHg4723BynaYPj6s3zbjAKrEQEc4dbGcKIENbMhSzOa4D-wI21DxpTCMjzS3NCtgwG28H =624x189)_

## **CASE WHEN Issues**

### Query Time

Time to complete a query can be a problem. There is no defined maximum for the number of WHEN conditions you can have within a CASE WHEN statement. CASE WHEN queries can become very slow because the query has to check each condition for every row until it finds a case where it satisfies the condition. This can dramatically increase the query time.

If queries are taking a long time to finish, consider finding ways to optimize your query. More on [optimizing queries from Data School here](https://dataschool.com/learn/optimize-your-sql-query).

### Data Types

Make sure that you are comparing the correct data types in your queries. If you try to compare incompatible types SQL will return an “Invalid Input Syntax” error.

#### **Same Data Type**

SELECT Track.Name, Track.GenreId,

CASE WHEN (Track.Name = '’40’) THEN 'Rock'

END AS Genre FROM Track

ORDER BY Track.Name ASC LIMIT 10;

![](https://lh5.googleusercontent.com/eNrBTWR_iWcvcDrVK-mB3vwP7oidhr9Sl6Id3btjIVH2JpNTYoITcN985ZIk44FjA6fFA8RJ_rMNRwo4Jy8KlOTsixLGVgLAzUoMRAy5MoaCt8uwVZ2brgnO8YPMVBZRsecZIFVW =624x201)

The **Name** field is a VARCHAR and we compare it to the characters “40”.

#### **Different Data Type**

SELECT Track.Name, Track.GenreId,

CASE WHEN (Track.Name = 40) THEN 'Rock'

END AS Genre FROM Track

ORDER BY Track.Name ASC LIMIT 10;

![](https://lh5.googleusercontent.com/rJWCY4PClg512C0SuzbZgqlmjWtNXyAwqQObIrZRxN4Ulf7Tbr76WQW6QNUFE3x7MHXINywb3EF9-GeMgH-Zgoo3LT61bKmNrMkCOeUjiTYsBU0SC5gREitChtHQDtHye-p5oM7L =624x53)

The **Name** field is a VARCHAR and cannot be compared to an INTEGER.

Remember you can cast any of your values in order to make the data types match. More on casting from [intersystems here](https://docs.intersystems.com/latest/csp/docbook/DocBook.UI.Page.cls?KEY=RSQL_cast). To determine what data type is used in a column you can use the “\\d (Table name)” command and look for the “Type” column:

**\\d “Track”;**

![](https://lh6.googleusercontent.com/BvgcnX5Kdeoxoet2O0ItHVFeCuDfxx9g2ruJrkrCRMEo5tgUcfBnljmLWDRN-Vj_jO3_t29ceNCsAlZP9rdgSkokKd4_hkWSrorVQkiU07Tu7UnGj2xrZbNMyOSwRldFE-3giJf3 =624x225)

## **In Depth Example**

This example uses the Chinook database with PostgreSQL 11. The “Track” table in the Chinook database is a large, informational table on many different songs by many different artists.

The “TrackId” in the table below is unique for each entry. However, the “GenreId” column is a reference to another table that links each id number to a genre of music. Let’s say you lost the “Genre” table (indicated with the red X through it). Now you could not JOIN in Genre Names, How could we replace the GenreId in the Track table?

![](https://lh4.googleusercontent.com/PF8XzQYIeXk55_KW-rVFAwRIAMSepUtDoqEYNmaclmVrCrwQFiiuHJPZZHZ79Ynj4GGVsXapbXVYsaZJ0js8EL3hLpHVX0_OwnIo7vsXgKgLD3-A0uUAxYgo0DhG5rdcIaNgzaxQ =624x178)

CASE WHEN allows you to assign the genres yourself. Looking at the first few songs, you can see they all have the same GenreId and we know that 1 corresponded to the “Rock” genre. We can use CASE WHEN to check if there is a 1 in the GenreId Column and then put “Rock” into a newly created GenreType column:

**SELECT Track.Name, Track.GenreId,**

**CASE WHEN (Track.GenreId = 1) THEN ‘Rock’**

**END AS ‘GenreType’**

**FROM Track LIMIT 10;**

![](https://lh6.googleusercontent.com/tNy6QDSXe9-gP2cKTiSRV1tncFWstCkJUD0_fUT8ck2nL843Cy3lyr5NeKYbtUsZwnZKqCQ10eYNvgGTDPzdvam52IHBiSs3d4ud0NEGp12nlnPpWf6VlXSOmdMH0hoDlGTEFGcC =615x240)

There are more than just 1 genre of music in the track table. Order the entries alphabetically to see some examples of songs that do not have a “GenreId” of 1. In the GenreType column **null** is returned for any values that did not satisfy the conditions of the CASE WHEN statement:

**SELECT Track.Name, Track.GenreId,**

**CASE WHEN (Track.GenreId = 1) THEN ‘Rock’**

**END AS ‘GenreType’**

**FROM Track**

**ORDER BY Track.Name ASC**

**LIMIT 10;**

![](https://lh4.googleusercontent.com/xYoNyZe9BiQBXrRNa7M8qUU_wCeleSfnXlRNx_zD14e43PufdoHky-7nQrU-oV-7GipqOWvV7_U1WwMNmzHL_mGoClijZsZG6nHzP1jx-ZrmMJY-yfzkI-EkoDuQfS4rmTSyy7ik =624x200)

Note: **Null** values are sometimes not printed in the output, other times they will be greyed out or italicized like this _Null_

All of the null entries in GenreType column are not “Rock” songs, so you can use CASE WHEN to label them as “Not Rock”. This can be done using the ELSE keyword:

**SELECT Track.Name, Track.GenreId,**

**CASE WHEN (Track.GenreId = 1) THEN ‘Rock’**

**ELSE ‘Not Rock’**

**END AS ‘GenreType’**

**FROM Track LIMIT 10;**

![](https://lh6.googleusercontent.com/bHhUHvw0Ix-hx9Sic7fyYT6qSYrh9p0X2nQ_jS_TE2bT6BNVI6v78SndK5cu9elF3Fcq1CDz0V-mjRf6ZrBMvwYKLmvnP9rI8IDhjbkwLdYDGDQoZj3ZIY_6pRK4Ir7NI7csQ9Hk =624x202)

Alternatively the WHEN keyword can be used several times to create multiple conditions:

**SELECT Track.Name, Track.GenreId,**

**CASE WHEN (Track.GenreId = 1) THEN ‘Rock’**

**WHEN (Track.GenreId = 2) THEN ‘Jazz’**

**WHEN (Track.GenreId = 3) THEN ‘Metal’**

**WHEN (Track.GenreId = 4) THEN ‘Alternative & Punk’**

**ELSE ‘Unknown’**

**END AS ‘GenreType’**

**FROM Track LIMIT 10;**

![](https://lh5.googleusercontent.com/OuMQWDDdPnGHp0uGVJ4fMrtY6klAnc924tvxgiekJLcJolHbN2e401XMmSQ_3phJALljmRpz92cyiKQXg8VqTPDNWcUlb3W6x1tc5oP9r8FtIKEihBVIm-WV85GMMpzVfiew8CaI =624x180)

### **Summary:**

* CASE WHEN is used to determine conditional statements in SQL
  * CASE declares the start of the conditions
  * WHEN declares a condition
  * THEN declares the return of a true condition
  * ELSE catches any entries that do not trigger a conditional check
  * END declares the end of the CASE checks
* You can have a multitude of WHEN statements
* AS can be used to create a header for the return data, otherwise it is given the header “case”

### **References:**

[https://www.w3schools.com/sql/sql_case.asp](https://www.w3schools.com/sql/sql_case.asp "https://www.w3schools.com/sql/sql_case.asp")

[https://www.postgresql.org/docs/7.4/functions-conditional.html](https://www.postgresql.org/docs/7.4/functions-conditional.html "https://www.postgresql.org/docs/7.4/functions-conditional.html")