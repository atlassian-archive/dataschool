---
section: Extras
title: Find Duplicates
meta_title: Find Duplicate values in SQL
description: Learn how to find duplicate values in your database using SQL.
number: 
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
reading_time: 5
faqs: []

---
To find duplicate values in SQL, you must first define your criteria for duplicates and then write the query to support the search.

Our sample table, called users, shows our Facebook friends and their relevant information. This information includes first and last names, gender and the date when the friend request was accepted. Here are a few sample rows:

| --- | --- | --- | --- | --- |
| user_id | first_name | last_name | gender | accepted_at |
| 1 | Carlo | Thomas | male | 2020-04-17 |
| 2 | Dom | Scallion | male | 2011-01-30 |
| 3 | Tania | Lopes | female | 2020-01-03 |
| 4 | Carlo | Thomas | male | 2001-05-06 |
| 5 | Samantha | Fargo | female | 2019-03-25 |

**Finding Duplicate Values within a Single Field**

If we wanted to understand how many of our current Facebook friends had the same first name, we could do so by executing the following SQL query:

    SELECT 
    	first_name, 
    	COUNT(*)
    FROM 
    	users
    GROUP BY 
    	first_name

In order to see how many of these names appear more often than others, you could add an additional ORDER BY statement to the end of the query and order by DESC.

| --- | --- |
| first_name | count |
| Tania | 1 |
| Carlo | 2 |
| Dom | 1 |
| Samantha | 1 |

Additionally, you could add an additional HAVING clause to the above query like so:

    SELECT 
    	first_name, 
    	COUNT(*)
    FROM 
    	users
    GROUP BY 
    	first_name
    HAVING 
    	COUNT (first_name) > 1

With the following sample _users_ table, we can see that the _first_name_ Carlo appears more than once and therefore you have more than one friend named Carlo on your Facebook friends list. The HAVING clause in this query deliberately selects instances where the field in the SELECT statement appears more than once and anything that appears in the result is a duplicate value in the table.

| --- | --- |
| first_name | count |
| Carlo | 2 |

**Finding Duplicate Values Across 2 or More Fields**

Similarly, if you wanted to understand how many Facebook friends have created more than one account, you could run the following query:

    SELECT 
    	first_name, 
    	last_name, 
    	COUNT(*)
    FROM 
    	users
    GROUP BY 
    	first_name, 
    	last_name
    HAVING 
    	COUNT(*) > 1

| --- | --- | --- |
| user_id | first_name | last_name |
| 1 | Carlo | Thomas |
| 4 | Carlo | Thomas |

By executing this query we see that your friend Carlo Thomas has created two Facebook accounts causing you to have duplicate accounts in your friends list. The advantage of these methods is that we get to easily determine how many users in your account show up more than once in your friends list by first and/or last name.

**Row Number Approach**

Another way to search for duplicate values is to use the ROW_NUMBER window function. We can use this function to number each row in the table where the parameters for the ranking are determined by the partition by. This method is most useful when there are parameters included with ranking the duplicate records. For more information on how window functions work see [here](https://dataschool.com/how-to-teach-people-sql/how-window-functions-work/).

    WITH
    facebook_friends_deduped AS (
    	SELECT
    		first_name,
    		last_name,
    		ROW_NUMBER() OVER (PARTITION BY 
            	first_name, last_name ORDER BY accepted_at ASC)
     			AS occurrence
    	FROM
    		users
    	)
    SELECT
    	*
    FROM
    	facebook_friends_deduped
    WHERE
    	rank > 1

The output of this query would look something like this:

| --- | --- | --- | --- | --- |
| user_id | first_name | last_name | accepted_at | occurrence |
| 1 | Carlo | Thomas | 2020-04-17 | 2 |

The above query determined that Carlo Thomas was your duplicate Facebook friend. The ROW_NUMBER function determines which Carlo Thomas account was accepted first (the earliest date value). The first instance of Carlo Thomas in our Facebook friends list is in 2001 and therefore when we added him again in 2020, he became a duplicate record in our list of Facebook friends.

**Using CASE statements**

Utilizing the Row Number technique from above, we can additionally use a CASE statement to insert a new boolean field into the table that describes whether the row is duplicated or not. See how CASE WHEN works [here](https://dataschool.com/how-to-teach-people-sql/how-case-when-works/).

    SELECT
    	*,
    	CASE 
    		WHEN ROW NUMBER() OVER (PARTITION BY 
     			first_name, last_name > 1 THEN TRUE 
    			ELSE FALSE
    	END AS is_duplicated
    FROM
    	users

This method would return the following result:

| --- | --- | --- | --- | --- | --- |
| user_id | first_name | last_name | gender | accepted_at | is_duplicated |
| 1 | Carlo | Thomas | male | 2020-04-17 | TRUE |
| 2 | Dom | Scallion | male | 2011-01-30 | FALSE |
| 3 | Tania | Lopes | female | 2020-01-03 | FALSE |
| 4 | Carlo | Thomas | male | 2001-05-06 | TRUE |
| 5 | Samantha | Fargo | female | 2019-03-25 | FALSE |

Here, we can see that Carlo Thomas has a TRUE value in the is_duplicated field created by the CASE statement in the query above. The drawback of using this method is that we can not easily identify which user record was created in the database first.

Overall, all of these methods are important and can be used to locate duplicate records. Depending on the size of your table, the level of granularity you need to provide and what the business decision is after you’ve located the duplicate records, each of these techniques may be used over another in different contexts. Similarly, if your work also includes deleting duplicate rows there are additional CTEs (common table expressions) that can execute that body of work.