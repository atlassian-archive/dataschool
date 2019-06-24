---
title: Inner Join - Animated
meta_title: Inner Join - Animated
description: Visualize how SQL is joining two tables using an Inner JOIN
section: book
number: 50
authors:
- _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1BW7SJQIwigKWFxFe9mf17GCimXZOPKgigRELKteosVE/edit?usp=sharing
image: "/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_1.png"
is_featured: false
img_border_on_default: false

---
This is the default type of JOIN in SQL, in fact you do not even need to specify INNER JOIN when writing a query. Only writing JOIN is an INNER JOIN.

```sql
SELECT *
FROM facebook
JOIN linkedin
ON facebook.name = linkedin.name
```

SQL first creates a new table with the columns of both of the tables you are trying to combine.

![](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_1.png)

It then tries to find values that match between the columns you specify in the ON statement. Putting the table name with a period before the column name makes it clear which two columns of the tables SQL will be looking for matches between.

```sql
ON facebook.name = linkedin.name
```

![](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_2.jpeg)

SQL then starts with the first value of the specified column in the first table (facebook.name) and then looks through every value in the specified column of the second table (linkedin.name) for a match.

![](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_3.gif)

If there is a match it copies the data from both the row of the first table and the row of the second table and puts it into the newly created table. SQL will not add in any rows that did not have a match.

![](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_4.gif)

Be sure to know what data you want in the final table so that the data left out does not affect your analysis.

Another thing to consider is that SQL will join the rows every time there is a match. So if your data in the columns you are joining on are not unique you will get duplicate data in the final table.

Non Unique data in Second table:

![](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_5.gif)

Non Unique data in First table:

![](/assets/images/how-to-teach-people-sql/innerJoin/innerJoin_6.gif)

As we can see the non unique data pulls in the same value from the other table twice. This is a common situation that can cause you to double count data if you are not aware that this is happening.