---
section: Appendix
title: Syntax Conventions
meta_title: SQL Style Guide
description: Learn the most important syntax conventions and styles to writing SQL
number: 211
authors:
- _people/katherine-chiodo.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 
faqs: []

---
Syntax conventions allows people to easily scan through your query and understand what metrics are being measured and analyzed.

## All Caps SQL Commands

Show example queries with ALL CAPS, First Letter Caps, and lowercase SQL commands.

For readability, all SQL commands should be written in uppercase letters. This allows the reader to identify the keywords in the SQL statement and easily determine what the query is executing. Avoid writing first letter caps and lowercase queries as they are difficult to scan quickly and separate into different clauses.

❌
```
Select 
    created_at, 
    gender, 
    age_at_registration, 
    province
from 
    users
```
✅
```
SELECT 
	created_at, 
	gender, 
	age_at_registration, 
	province
FROM 
	users
```
## New Lines and Indenting

Lay out each column or logical statement on new lines so that it easy to identify what is being queried and filtered. When they are placed in the same line as the SQL command they may not even fit within your SQL editor window. Keep Aliases on the same line to make it clear what they are referring to.

Keep the SQL keywords on lines of their own and indent the other parts of the query. This makes it easy to read, edits and spot any unexpected errors.

❌
```
SELECT u.created_at, u.age_at_registration,u.gender,AVG(p.amount) AS average_user_payment_amount
FROM users AS u
INNER JOIN payments AS p ON u.user_id = p.user_id
WHERE p.has_refund = FALSE
```
✅
```
SELECT
	u.created_at,
	u.age_at_registration,
	u.gender,
	AVG(p.amount) AS average_user_payment_amount
FROM
	users AS u
	INNER JOIN payments AS p ON u.user_id = p.user_id
WHERE
	p.has_refund = FALSE
```
When writing simple queries for up to 3 three (3) columns, you can write the columns in line with the SQL commands. 

✅
```
SELECT created_at, age_at_registration, current_age
FROM customers
```
## GROUP BY Numbers and Names

GROUP BY allows you to separate data into groups, which can be aggregated independently of one another. It is generally recommended to  use column names to be clear as to what you are grouping by but when you are grouping many columns or long titled columns you may substitute numbers that correspond with the select statement order.

✅
```
SELECT
	date_of_customer_registration,
	number_of_user_logins,
	number_of_user_payments,
	COUNT(*) AS total_user_engagement
FROM
	user_metrics
GROUP BY
	date_of_customer_registration,
	number_of_user_logins,
	number_of_user_payments
ORDER BY
	total_user_engagement DESC
```
Due to the length of the column names, rewriting them for the GROUP BY statement can become tedious and time consuming. Instead, the GROUP BY could number the columns in order (1, 2, 3).

✅ ?
```
SELECT
	date_of_customer_registration,
	number_of_user_logins,
	number_of_user_payments,
	COUNT(*) AS total_user_engagement
FROM
	user_metrics
GROUP BY
	1, 2, 3
ORDER BY
	total_user_engagement DES
```
At a quick glance the numbers become difficult to determine the metrics under analyses. Another risk with this method is if you update any column in the SELECT statement, and you used numbers in the GROUP BY it will not produce any errors so you may assume nothing is wrong. The numbers reference whatever columns are in the SELECT. You will need to check to see if the numbers are still corresponding to the columns you are expecting in the SELECT statement to have an accurate query.

Happy syntax-ing!