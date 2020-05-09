---
title: Inner Join - Animated
meta_title: SQL INNER JOIN - Animated with Gifs
description: Visualize how SQL is joining two tables using an Inner JOIN. See animated
  visualizations of the data being INNER joined in SQL. Learn more.
section: JOINs
number: 50
authors:
- _people/matt.md
reviewers:
- _people/tim.md
feedback_doc_url: https://docs.google.com/document/d/1BW7SJQIwigKWFxFe9mf17GCimXZOPKgigRELKteosVE/edit?usp=sharing
image: "/assets/images/innerJoin_3-1.gif"
is_featured: false
img_border_on_default: false
is_under_construction: false

---
This is the default type of [JOIN in SQL](https://dataschool.com/how-to-teach-people-sql/sql-join-types-explained-visually/), in fact you do not even need to specify INNER JOIN when writing a query. Only writing JOIN is an INNER JOIN.

```sql
SELECT *
FROM facebook
JOIN linkedin
ON facebook.name = linkedin.name
```

SQL first creates a new table with the columns of both of the tables you are trying to combine.

![Creation of joined table](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_1.png)

It then tries to find values that match between the columns you specify in the ON statement. Putting the table name with a period before the column name makes it clear which two columns of the tables SQL will be looking for matches between.

```sql
ON facebook.name = linkedin.name
```

![showing that facebook.name is the same as name from the facebook table](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_2.jpeg)

SQL then starts with the first value of the specified column in the first table (facebook.name) and then looks through every value in the specified column of the second table (linkedin.name) for a match.

![Gif of how inner join iterates through the tables](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_3.gif)

If there is a match it copies the data from both the row of the first table and the row of the second table and puts it into the newly created table. SQL will not add in any rows that did not have a match.

![gif of not adding unmatched rows](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_4.gif)

Be sure to know what data you want in the final table so that the data left out does not affect your analysis.

Another thing to consider is that SQL will join the rows every time there is a match. So if your data in the columns you are joining on are not unique you will get duplicate data in the final table.

Non Unique data in Second table:

![non unique second table](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_5.gif)

Non Unique data in First table:

![non unique first table](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_6.gif)

As we can see the non unique data pulls in the same value from the other table twice. This is a common situation that can cause you to double count data if you are not aware that this is happening.