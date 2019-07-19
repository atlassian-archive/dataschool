---
section: Advanced
title: How CASE WHEN Works
meta_title: How CASE WHEN works in SQL with animated Gifs
description: CASE WHEN is a SQL function that works a lot like IF THEN in other programming
  languages. Learn to use CASE WHEN in SQL.
number: 140
authors:
- _people/blake.md
reviewers:
- _people/matt.md
- _people/matthew-layne.md
feedback_doc_url: https://docs.google.com/document/d/1iMFvldJoRh7Uay5e_AW7sy9lKbyR5n24yeJbuuyAmsk/edit?usp=sharing
image: "/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen1.png"
is_featured: false
img_border_on_default: true

---
CASE WHEN takes in values, checks them against a condition and THEN outputs values into a new column based on if it satisfies the condition.

CASE WHEN in SQL operates very similarly to “if then” statements in other programming languages. Replace the “if” with CASE WHEN and “else if” with WHEN, and the rest matches:

![comparison between 'if' logic in other languages to 'CASE WHEN' logic in SQL](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen1.png)

Note: CASE WHEN statements will always output new values to a new column which is different than “if then” which can replace values in the same column.

![How if then works: replaces values](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen2.png)

![How case when works: adds value to new column](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen3.png)

Now let's see what the full query would have looked like for that CASE WHEN statement, notice the title of the output column at the end of the CASE WHEN statement.

```sql
SELECT City,
CASE WHEN City = "SF" THEN "San Francisco"
ELSE City
END AS "Updated City"  
FROM friends
```

Let's break down each component of the CASE WHEN statement:

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

```sql
SELECT (optional: any desired columns),
CASE WHEN (condition) THEN (desired output)
WHEN (other condition) THEN (desired output)
ELSE (desired output)
END AS (descriptive header for the output column)
FROM (appropriate table);
```

_Note: you do not have to show all of the columns, or any columns besides the CASE column in the output._

![Image showing how the query results look with and without an additional column selected](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen4.png)

## **CASE WHEN Issues**

### Query Time

Time to complete a query can be a problem. There is no defined maximum for the number of WHEN conditions you can have within a CASE WHEN statement. CASE WHEN queries can become very slow because the query has to check each condition for every row until it finds a case where it satisfies the condition. This can dramatically increase the query time.

If queries are taking a long time to finish, consider finding ways to optimize your query. More on [optimizing queries from Data School here](https://dataschool.com/sql-optimization/optimize-your-sql-query/).

### Data Types

Make sure that you are comparing the correct data types in your queries. If you try to compare incompatible types SQL will return an “Invalid Input Syntax” error.

#### **Same Data Type**

```sql
SELECT Track.Name, Track.GenreId,
CASE WHEN (Track.Name = '40') THEN 'Rock'
END AS Genre FROM Track
ORDER BY Track.Name ASC LIMIT 10;
```

![Showing results from the query and how rock is added in an additional column](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen5.png)

The **Name** field is a VARCHAR and we compare it to the characters “40”.

#### **Different Data Type**

```sql
SELECT Track.Name, Track.GenreId,
CASE WHEN (Track.Name = 40) THEN 'Rock'
END AS Genre FROM Track
ORDER BY Track.Name ASC LIMIT 10;
```

![Error caused by wrong data types](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen6.png)

The **Name** field is a VARCHAR and cannot be compared to an INTEGER.

Remember you can cast any of your values in order to make the data types match. More on casting from [intersystems here](https://docs.intersystems.com/latest/csp/docbook/DocBook.UI.Page.cls?KEY=RSQL_cast). To determine what data type is used in a column you can use the “\\d (Table name)” command and look for the “Type” column:

```sql
\d "Track"
```

![details on the column types using \\d "Track"](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen7.png)

## **In Depth Example**

This example uses the Chinook database with PostgreSQL 11. The “Track” table in the Chinook database is a large, informational table on many different songs by many different artists.

The “TrackId” in the table below is unique for each entry. However, the “GenreId” column is a reference to another table that links each id number to a genre of music. Let's say you lost the “Genre” table (indicated with the red X through it). Now you could not JOIN in Genre Names, How could we replace the GenreId in the Track table?

![Showing lost table](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen8.png)

CASE WHEN allows you to assign the genres yourself. Looking at the first few songs, you can see they all have the same GenreId and we know that 1 corresponded to the “Rock” genre. We can use CASE WHEN to check if there is a 1 in the GenreId Column and then put “Rock” into a newly created GenreType column:

```sql
SELECT Track.Name, Track.GenreId,
CASE WHEN (Track.GenreId = 1) THEN 'Rock'
END AS 'GenreType'
FROM Track LIMIT 10;
```

![Using CASE WHEN to fill in certain Genres](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen9.png)

There are more than just 1 genre of music in the track table. Order the entries alphabetically to see some examples of songs that do not have a “GenreId” of 1. In the GenreType column **null** is returned for any values that did not satisfy the conditions of the CASE WHEN statement:

```sql
SELECT Track.Name, Track.GenreId,
CASE WHEN (Track.GenreId = 1) THEN 'Rock'
END AS 'GenreType'
FROM Track
ORDER BY Track.Name ASC
LIMIT 10;
```

![Showing ordering the output from the query](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen10.png)

Note: **Null** values are sometimes not printed in the output, other times they will be greyed out or italicized like this _Null_

All of the null entries in GenreType column are not “Rock” songs, so you can use CASE WHEN to label them as “Not Rock”. This can be done using the ELSE keyword:

```sql
SELECT Track.Name, Track.GenreId,
CASE WHEN (Track.GenreId = 1) THEN 'Rock'
ELSE 'Not Rock'
END AS 'GenreType'
FROM Track LIMIT 10;
```

![Adding an ELSE to the CASE WHEN clause](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen11.png)

Alternatively the WHEN keyword can be used several times to create multiple conditions:

```sql
SELECT Track.Name, Track.GenreId,
CASE WHEN (Track.GenreId = 1) THEN 'Rock'
WHEN (Track.GenreId = 2) THEN 'Jazz'
WHEN (Track.GenreId = 3) THEN 'Metal'
WHEN (Track.GenreId = 4) THEN 'Alternative & Punk'
ELSE 'Unknown'
END AS 'GenreType'
FROM Track LIMIT 10;
```

![Adding multiple additional WHEN subclauses to the query in order to fill in multiple genres (not just rock and not rock)](/assets/images/how-to-teach-people-sql/appendix/case_when/caseWhen12.png)

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