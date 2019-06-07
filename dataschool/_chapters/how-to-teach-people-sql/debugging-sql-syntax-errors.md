---
section: book
title: 'Debugging SQL: Syntax Errors'
number: 100
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1gviTDfo7zo2KOm2IlgH4kaa2RB7iE17oOdwIzOdhHKE/edit?usp=sharing
image: ''
description: ''
is_featured: false
img_border_on_default: false
writers:
  writers:
  - _people/matt.md
published: false

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

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a896e83c3e0cee4906_ANZ6LFIoWCrBHiFetuat-yl_hlCztRWJ2IU17J1DWeY0u3ZvvrJLJTrQsI3WsN1TTp6YsnhxZUDU95i2rGfiSclELstyxqx418yMo_kVvzggIZzQEp7gGI0w6wh8MEwFES2xHiXS.png)

Double quotes indicate you are referencing a table name or a field.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a8855a513a544a0f59_BK6q9ifma5wO4llMojzEGfdDhzsRliji9Fs7FVJp4YsY38G8u3fLqehQoFQC-5989KD4BZdMVpioYoJj4v4qC6gSFhd9-qbNEX_ojnMCUmQIUFF_pQQjY5rEy36-Yrm-Q-Xaqxgk.png)

Different types of SQL handle a single quote ‘ and a double quote “ differently so if you get an error such as “ERROR: column “age” does not exist,” try switching to using the other type of quotation around the text and if that does not work consult the documentation for that specific type of SQL.

## Capitalization

If you reference a column or table and put it in quotes and the capitalization does not match what it is in the database, you will get an error since that table or column does not exist in the database. If you do not use quotes to reference the column or table it will run as expected.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a80c011e01be8cc7e2_WxTD-gH4gz5nzkfCgvxTc6VIvJLTjd7GFJWQ6Ckl20KL89O_FCt7mSRdzKRkIIAx8hvkRO7tQOVj-K-sWUXYkzvYj3i3q5y29BECoVTQ6G4K0GIZ7xB2va2UGE1tuaqkKhw81UYZ.png)

For the table above the keyword select, the table facebook, and the column name without quotes can be written as:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a84cfd2adb3739de1f_hga7t-PQGwUVNMfeJ6whkl86NcJ3Y7hX_klsVFnKXS_hjYeAr4FywpajVYQkipDlgSR8PcPSMtAmM4vin3zUIqnnrFBNzMvASuVzMYjvVwaJirZuhrqlCISz2keLUcMDfRO-80H-.png)

You can get the same result with whatever use of upper and lower case letter:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a94cfd2a45f439de2a_HulItXLXOD4xbe0lm3jlXcZIwHSpINT5IKFvUor7QJzUAqGgAEx6USGxCIJXadAAYDwvyDGEEVbFvMGj40J1_MUgokxsgdZZDpTqh9AIyoLaMkw_kcJnIbIQfK_PE-K4nHl0kr6o.png)

Table and column with quotes must be written lowercase since that is how they are in the table above:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a925962db6d83de443_s20fznNGBPu_csnC8vU8xMcfx6zaeN5CyQDJAgNgzChUrsqqpQ3BbqgvS0yRVBsUnFE1_ZP7vZxzXamAF-k7GNq8puknm68YwMkYZ2UHmmNxviaZWlxs9b5xvnCVOcZSudoVRGGI.png)

There are some capitalization conventions that should be followed though they are not required. The main one being that the keywords for clauses should be written out in all caps. This helps with the readability of the query.

While this capitalization of Select and From will work:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a94476fb426d47f3c5_khCGOBY0-uKrKp37T1zjP8a1JZC-5LlDK4rMOehDLYqDnB9hxFnnsskVwiqXrf-zYzrCEUD85-rVepIfnxWTvNNYUqhfWu2GE-sD0yHBaJVExU016KsRsWTk-rGORtyMwfLLiYqc.png)

This is all capitalization of SELECT and FROM is preferred:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a996e83ca3b8ee4921_cxCrWnuE91bkxLsl8B84YQTCNyaoU8lZaqularc7SmZILnpZO-6ChRQ9vt_KTxvmlubuvbks9lCxmDEdcyJ1JWCTHjCY3mulnrHm3MGO8F46u1qxGHShljRJ1BKk6-ftU5iX1WXc.png)

## Data Types

A common syntax error is not using the correct data type when comparing a value in a field with some constant in your query. Sometimes when a number is stored in a database it is stored as a string. This would cause the following query to error.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a8855a513c4d4a0f5a_YedMUY76nvEyKxtE17V06VvR1bAGx7la7UvAgucTDJyAzgxcDLf2Hp5vcOEr4MQFh99CER1P8nwVHdLMsMiGNAa6rgZDHTexrGQVW9uMz9nQItZ1QWS95GzznjlY6yhcZKq1Qeh9.png)

The query below will produce an error because the data type of 27 in the WHERE clause is numeric but the field age is a text data type:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a93a35645f365a1e90_QszPvPvMBAP9_x8rsksiVRjOrR8rzxLERiTlWb5vMF0E8CNKCBISkjN19RuHjV1Ym3Xitz6fhn1EXTPAlbHWKfzm9MYZmSaaTfACkl1U_py_oCy2KQ_p4ANeo02Vrgxa8lXq5JZk.png)

To get the answer we expect we must put 27 in double quotes “27”

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a90c011e91998cc7fe_9893ywgFaAjhl9QK1Hsmjx7WW01Mtv8lsgADchouz0--87ggduPs2CXn5aeRZaec-YfXCPcDTk5nOgMCJYIxPK_y1c1If_Y582uvjMBNhkhQqtRs_b49Mf1Q20ffzN55gJLPAYyc.png)

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a94476fbcefa47f3d6_Xpw7ET9v0q5ZCYttRtSMjN6x0H-BAlrwkENxKk0LneumnAzez-Ys7mzBgpHM1YJO7u5ZqFpTFk1cQM2Tl2lHw6w0dJ0JEjY7NIVrzs-ylklI4XdLcyrjqP5ss3kLnRVohX5h8UW-.png)

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

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a9855a510f834a0fa1_SddSSB2NWgxuWoCuvE8Y6PgnDwv0q-d8k62BOflGLpKQ6BxlscAvcJ3BaMtOYUom48OVZurKiALKoLPgk_4z9s-35w4lB73YO59m1FW4Qb-kVTDHdq37dImgXVU2so6FsODpKFHe.png)

HAVING filters the newly grouped rows.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c9561a9e36e2c52ccd6f4e1_XVhBx1TEHIYlcEEzgCau-9zJzAbllIDptehhn4Z-6f8Ii37wQG2DY8WxydZV99jJRW_YLlAEd_k88hb3-8-PASwMREqynjoymawJ1QuKuK_c2bHivdlwwfS3qgpEpIFMBbO4edyv.png)

## Summary

Be careful when writing a SQL query. If you get an error first check for these common syntax errors before delving more deeply into what might be the cause.

* Spelling errors
* Single vs Double quotes
* Capitalization
* Data Types
* Clause Order