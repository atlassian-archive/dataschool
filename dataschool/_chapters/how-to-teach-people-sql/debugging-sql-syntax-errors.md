---
title: Syntax Errors
meta_title: 'Debugging SQL: Syntax Errors animated with Gifs'
section: Debugging
number: 100
authors:
- _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1gviTDfo7zo2KOm2IlgH4kaa2RB7iE17oOdwIzOdhHKE/edit?usp=sharing
image: "/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_1.png"
description: Learn the most common reasons you will get a SQL error due to syntax.
  Spelling errors, Quotation marks, Capitalization, Data Types, and Clause Order.
is_featured: false
img_border_on_default: false

---
When writing SQL queries there are many places where a small mistype can cause you to receive an error. We will review some of the most common errors due to syntax mistakes. Note: this article will cover how common syntax errors affect Postgresql, if you are using a different type of SQL please check the documentation for these scenarios.

## Spelling

Misspellings are the most common cause for error in SQL. Unfortunately, SQL will not autocorrect mistyped keywords, tables, columns, or values.

* Check keyword spelling by referring to the documentation for the type of SQL you are using.
* Check table spelling by referring to the database schema.
* Check column spelling by referring to the database schema or doing SELECT * FROM the table you are trying to check the column name on. NOTE: putting limit 1 on that query will make it run quickly.
* Check value spelling by doing SELECT * FROM table GROUP BY the column where the value is in. Then look through this column to find the value you were trying to match.

## Single vs. double quotes

A very common, yet not so obvious syntax error you can make is to use the wrong type of quotation marks in your query. This can change the meaning of what you are referencing inside the quotes.

Examine the following two examples:

Single quotes indicate you are referencing that text string

![table for query filtered by name='Matt'](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_1.png)

Double quotes indicate you are referencing a table name or a field.

![table for a similar but Unfiltered query](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_2.png)

Different types of SQL handle a single quote ‘ and a double quote “ differently so if you get an error such as “ERROR: column “age” does not exist,” try switching to using the other type of quotation around the text and if that does not work consult the documentation for that specific type of SQL.

## Capitalization

If you reference a column or table and put it in quotes and the capitalization does not match what it is in the database, you will get an error since that table or column does not exist in the database. If you do not use quotes to reference the column or table it will run as expected.

![image of the table used for this example](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_3.png)

For the table above the keyword select, the table facebook, and the column name without quotes can be written as:

![Image demonstrating that sql is not picky about capitalization unless " characters are used](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_4.png)

You can get the same result with whatever use of upper and lower case letter:

![Table showing that mismatched capitalization is not an error](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_5.png)

Table and column with quotes must be written lowercase since that is how they are in the table above:

![Example using " characters making capitalization matter](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_6.png)

There are some capitalization conventions that should be followed though they are not required. The main one being that the keywords for clauses should be written out in all caps. This helps with the readability of the query.

While this capitalization of Select and From will work:

![Only first letters of Select and From are capitalized](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_7.png)

This is all capitalization of SELECT and FROM is preferred:

![SELECT and FROM are both completely capitalized. This is best practice.](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_8.png)

## Data Types

A common syntax error is not using the correct data type when comparing a value in a field with some constant in your query. Sometimes when a number is stored in a database it is stored as a string. This would cause the following query to error.

![table with the column data types listed](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_9.png)

The query below will produce an error because the data type of 27 in the WHERE clause is numeric but the field age is a text data type:

![query that will fail due to missing quotation marks around 27](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_10.png)

To get the answer we expect we must put 27 in double quotes “27”

![corrected version of the previous query](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_11.png)

![output of the query above](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_12.png)

## Clause Order

When writing a SQL query you have to place the clauses you use in this order.

1. SELECT
2. FROM
3. JOIN
4. WHERE
5. GROUP BY
6. HAVING
7. ORDER BY
8. LIMIT

You do not need to include all of these clauses in a SQL query but you do need at least the first two. The most common mistake is placing the HAVING clause ahead of the GROUP BY clause. Or placing the WHERE clause after the GROUP BY.

WHERE filters rows before they are grouped.

![table being filtered by where clause](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_13.png)

HAVING filters the newly grouped rows.

![table being filtered by having clause](/assets/images/how-to-teach-people-sql/debugging-syntax/syntax_14.png)

## Summary

Be careful when writing a SQL query. If you get an error first check for these common syntax errors before delving more deeply into what might be the cause.

* Spelling errors
* Single vs Double quotes
* Capitalization
* Data Types
* Clause Order
