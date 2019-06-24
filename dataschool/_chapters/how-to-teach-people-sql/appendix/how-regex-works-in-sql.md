---
title: How to use Regex to Create Optimal Search Queries
short: How Regex Works
section: appendix
number: 210
authors:
- _people/blake.md
reviewers:
- _people/matt.md
- _people/matthew-layne.md
description: Learn how Regex works and how to use it in your queries.
feedback_doc_url: https://docs.google.com/document/d/1MgGrt9nqanxNvJ3FLZNoBP5R0nlzksrsOQp6g5R5fcc/edit?usp=sharing
img_border_on_default: true
meta_title: How to use Regex in SQL

---
## What is Regex?

Regex is a tool to find text within text. For instance, if you were looking for a list of company emails from a list of all your stored emails:

```sql
SELECT * FROM Email Addresses
WHERE Email Address ~* '%@chartio.com'
```

![Regex Search Gif](/assets/images/how-to-teach-people-sql/appendix/how_regex_works/RegexGif.gif)

How does Regex do this? A more technical definition is that Regex, or Regular expression, is a sequence of characters, used to search and locate specific sequences of data that match a complex pattern defined by the user. So it actually can be used to find text, numbers, and special characters.

Regex statements are created using common letters, numbers, and metacharacters. Regex takes this string and tries to find the specific pattern in the data you are applying it to.

[Metacharacters](https://www.ibm.com/support/knowledgecenter/en/SSGU8G_12.1.0/com.ibm.dbext.doc/ids_dbxt_545.htm) use special characters, and combination of characters to represent patterns. The most commonly used regex metacharacters are +, ^, \|, (), _, %, ., .* I know this looks pretty crazy but regular expressions do tend to look a little intimidating. Here is a quick cheat sheet for those metacharacters:

|Metacharacter|Description|Example|Examples Matches|
|---|---|---|---|
|^|Start the match at the beginning of a string|^c%|cat, car, chain|
|\||Alternation (either of two alternatives)|c(a\|o)%|can, corn, cop|
|()|Group items in a single logical item|c(a\|o)%|can, corn, cop|
|_|Any single character (using LIKE and SIMILAR TO)|c_|co, fico, pico|
|%|Any string (using LIKE and SIMILAR TO)|c%|chart, articulation, crate|
|.|Any single character (using POSIX)|c.|co, fico, pico|
|.*|Any string (using POSIX)|c.*|chart, articulation, crate|
|+|Repetition of the previous item one or more times|co+|coo, cool|

### Why is Regex Used?

Regex is used in data searches when:

-   The data being searched for has some known type but the specific values are not known
-   You are searching for a group of similar items.

Regular expressions are used in searches, "find and replace", in email and password validation, and many more cases that require pattern matching of characters. Regex can set very specific parameters as to what a search result can or cannot contain without having to explicitly state which character and case should be contained.

For example, if you have a file in an overcrowded folder called "myVeryImportantDoc.txt" but you don't remember the exact semantics you used when naming the folder, regular expressions can help you easily find the file.

![File Manager on Mac](/assets/images/how-to-teach-people-sql/appendix/how_regex_works/fileManager.png)

Regex expressions allows you to run a search, case insensitive, for the word "important", which will bring up a list of all files with the word "important" and we can locate "myVeryImportantDoc.txt".

![File Manager results from searching "Important"](/assets/images/how-to-teach-people-sql/appendix/how_regex_works/searchResults.png)

Using Regex in PostgresQL
-------------------------

A full list of regular expressions can be found at: [RexEgg](https://www.rexegg.com/regex-quickstart.html)

There are three ways to use regex comparisons in SQL:

-   `LIKE`
-   `SIMILAR TO`
-   POSIX comparators

LIKE and SIMILAR TO are used for basic comparisons where you are looking for a matching string. LIKE and SIMILAR TO both look and compare string patterns, the only difference is that SIMILAR TO uses the SQL99 definition for regular expressions and LIKE uses PSQL's definition for regular expressions.

**Syntax**:
[String or Column name] `LIKE`/`SIMILAR TO` [Regex]

|Expression|Returns|
|---|---|
|'char' LIKE 'char'|True|
|'char' LIKE 'c%'|True|
|'char' LIKE '_ha_'|True|
|'char' LIKE 'c'|False|
|'char' SIMILAR TO 'char'|True|
|'char' SIMILAR TO '%(h\|g)%'|True|
|'char' SIMILAR TO 'h'|False|
|'char' SIMILAR TO '(a\|b)%'|False|

<br>
Unlike LIKE and SIMILAR TO, POSIX is not a keyword that is used in a SQL query. POSIX is a set of comparators for case matches and non equivalency. It is the most powerful way to use Regex in SQL. Regex does not use = and != to compare rather it uses these POSIX comparators:

1.  `~` : Case-sensitive, compares two statements, returns true if the first string is contained in the second
2.  `~*` : Case-insensitive, compares two statements, returns true if the first string is contained in the second
3.  `!~` : Case-sensitive, compares two statements, returns false if the first string is contained in the second
4.  `!~*` : Case-insensitive, compares two statements, return false if the first string is contained in the second

**Syntax**:
[String or Column name] [POSIX] [Regex]

These comparators can be used in queries to locate or exclude certain data from being returned.

### Examples of Regex in SQL Queries

![POSIX comparator definitions and examples](/assets/images/how-to-teach-people-sql/appendix/how_regex_works/posixTable.png)

If you wanted to search a column of a database for all entries that contain the word 'fire', you could use ~* 'fire'  to find any row that contains the word:

```sql
SELECT (column name)
FROM (table name)
WHERE (column name) ~* 'fire';
```

![All songs with Fire in the title](/assets/images/how-to-teach-people-sql/appendix/how_regex_works/allFire.png)

To get all entries that start with the word 'Fire':

```sql
SELECT (column name)
FROM (table name)
WHERE (column name) ~ * '^fire';
```

![Just songs that start with Fire](/assets/images/how-to-teach-people-sql/appendix/how_regex_works/firstFire.png)

### Summary

-   Regular expressions use patterns to match strings.
-   Regex provides a way to query databases to find a smaller subset of data.
-   The POSIX comparators are:
-   `~` : Case-sensitive, compares two statements, returns true if the first is contained in the second
-   `~*` : Case-insensitive, compares two statements, returns true if the first is contained in the second
-   `!~` : Case-sensitive, compares two statements, returns false if the first is contained in the second
-   `!~*` : Case-insensitive, compares two statements, return false if the first is contained in the second

### References

<https://lerner.co.il/2016/03/01/regexps-in-postgresql/>
<https://www.rexegg.com/regex-quickstart.html>