---
title: AND OR Boolean Logic
meta_title: Boolean logic and Truth tables
description: This post goes into detail on how Boolean logic works and how Boolean
  logic can be molded with truth tables
section: Extras
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
image: /assets/images/book-covers/learn-sql.png
img_border_on_default: false
is_featured: false
feedback_doc_url: https://docs.google.com/document/d/1nCpMs3F4_irNxKL7Fo4a69tlM3v4mWb-cgDUi_j24G8/edit?usp=sharing
is_under_construction: false
---
AND is used to find where multiple conditions are true

<sqlbox

initial="SELECT * FROM albums WHERE id=4 AND artist_id=1;"
autorun="true;"

></sqlbox>

OR is used to find where at least one out of multiple conditions are true

<sqlbox

initial="SELECT * FROM albums WHERE id=4 OR artist_id=1;"
autorun="true;"

></sqlbox>

To get more technical, boolean logic is a way of representing how bits in a computer are processed. Let’s explore more about these conditional statements (e.g. if-else, [where](https://dataschool.com/learn-sql/where/), or [case-when](https://dataschool.com/how-to-teach-people-sql/how-case-when-works/) statements) with truth tables to understand how precisely boolean logic works.

## Truth Tables

For example, let's look at the following conditional:

If: `A and B`

Then: `C`

This returns the value C, when the values A and B are true. We can represent this using something called a truth table. A truth table is a way of representing every possible input and it’s corresponding output. The truth table for this AND statement looks like this:

| A | B | C |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 0 |
||||

In the truth table, a `1` represents true while a `0` represents false. From looking at this table it is evident that the only time C is true, is when both A and B are true.

There is also an OR statement. The OR statement is true when A OR B is true:

If: `A or B`

Then: `C`

Truth table:

| A | B | C |
| 1 | 1 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 0 |
||||

This truth table might be a little different then you were expecting. This is because an OR statement is only false when both input values (A and B) are False.

## Building a Truth Table

Truth tables can be made for combinations of gates as well with more inputs. Look at the following statement for example:

If: `(A or B) and C`

Then: `D`

The first step to building a truth table is to decide how many rows we need. The way to decide this is to check how many inputs we have and raise two to that number. In this case we have 3 inputs so we need 2^3 or 8 rows.

Next we need to decide how many columns to use. In this case we will have one column for each input, one for the output, and one for the value of A and B. The truth table will look like this:

| A | B | C |A or B | D |
|1|1|1|1|1|
|1|1|0|1|0|
|1|0|1|1|1|
|1|0|0|1|0|
|0|1|1|1|1|
|0|1|0|1|0|
|0|0|1|0|0|
|0|0|0|0|0|
||||||

As expected, when the table is filled out, the only true output is when all 3 inputs are true.

## Short Circuit Logic

Because of the way `AND` and `OR` logic works, programming languages can use something called "short circuit logic". This is when not all inputs are evaluated, because the computer can guess the answer from the first input that was checked. To see how this works, look at the AND truth table again:

| A | B | C |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 0 |
||||

Notice that, when A is False (`0`), C is also always False. This is because C is only true when both inputs are true, therefore a single false means C is false.

If a computer is using an `AND` condition and the first input is false, then the second input, B, will never be checked. OR will evaluate as true without checking the second input when the first input is true. This ability for the computer to invalidate later boolean logic steps can save a lot of unneeded processing power for your query.

## Examples in SQL

Example of a `WHERE` condition:

```sql

SELECT * FROM [table]

WHERE

[column A]=5 AND [column B]=22;

```

Example of a `CASE-WHEN` Statement

```sql

CASE

WHEN [column A]=21 OR [column B]=7 THEN [Action]

END

```

### Summary

* Boolean AND / OR logic can be visualized with a truth table
  * Truth tables two to the number of inputs rows in them
  * 1 - true
  * 0 - false
* Short Circuit Logic
  * If the first input guarantees a specific result, then the second output will not be read
  * AND - first input of false will short circuit to false
  * OR - first input of true will short circuit to true
