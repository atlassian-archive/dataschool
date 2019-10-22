---
section: Extras
title: What is the difference between UNION and UNION ALL
meta_title: Difference between UNION and UNION ALL
description: UNION ALL keeps all of the records from each of the original data sets,
  UNION removes any duplicate records.
number: 1000
authors:
- _people/josiah-faas.md
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

---
UNION and UNION ALL are SQL operators used to concatenate 2 or more result sets. This allows us to write multiple SELECT statements, retrieve the desired results, then combine them together into a final, unified set.

The main difference between UNION and UNION ALL is that:

* **UNION:** only keeps _unique_ records
* **UNION ALL:** keeps all records, including _duplicates_

## **UNION ALL Difference**

UNION ALL _keeps all of the records_ from each of the original data sets, UNION _removes any duplicate records_. UNION first performs a sorting operation and eliminates of the records that are duplicated across all columns before finally returning the combined data set.

### **UNION**

![](https://lh6.googleusercontent.com/OSvoewMol5ukLWH19K7Ffrgd6zgvfrP91RjCTxXYS6CAyaHjznzavZzka0NraQJxL1PwFOc6My_djgwqKDJW1X_lyL47-txlYKpq-2HVKAftMd8dLMcM4z1hgAdybH6D3ExWMouz)

### **UNION ALL**

If we were to now perform the UNION ALL on the same data set, the query would skip the deduplication step and return the results shown.

![](https://lh4.googleusercontent.com/I1EPG9JsbvQ2PEu3MT8MqVFwPF8chYGBvS5QqTW6IQxgvGeD5K_kk2LNHXvBD0WNyXqA3LNr1FTNT1lpZXPhU9aoJlf1c50CTmKRPIyfQL2wuVHZcLYcAu3QEj8CuoWUENDaTdCY)

\*Note: In both of these examples, the field names from the first SELECT statement are retained and used as the field names in the result set. These can be changed later if desired.

## **UNION-ing data**

UNION or UNION ALL have the same basic requirements of the data being combined:

1. There must be the same number of columns retrieved in each SELECT statement to be combined.
2. The columns retrieved must be in the same order in each SELECT statement.
3. The columns retrieved must be of similar data types.

The next 2 examples shows that we would return results whether we used UNION or UNION ALL since all required criteria are met.

![](https://lh6.googleusercontent.com/hDKBOuGbyC99A_eiEbQLvBBoW9LMOvCA_KncWuMmij3ycxkn7pi63ccWhUzHIHsJ55BAaWdnD2UDfob3WFgecgFS6KU-PQaWarliyhjXddN-SfYnQz08Hc4hAhHhQFg1RykqjOyO)

![](https://lh4.googleusercontent.com/VxdYnU7yUP6ZAEJ_D53XNh6-2KzXSAifIdUCTGPJ29ufxOPIz5kP8QF1jvYvj6TrzS8A9GD3PlUrESVOi-fILlDkm2Umq9kDbI7LWCcvouzHzpbSv2h6eTmGfjImTO4KWz_6i_VS)

This final example would fail. While we have the correct number of columns, they are now queried in the wrong order in the second SELECT statement and thus the data types also do not match up. This will result in an error being returned.

![](https://lh5.googleusercontent.com/dBOn5Tzf5sFQ9BaXdU0WZInVbE0gAotKcJI31ZKDriDRpfpKZ5YfBN-HqArGzJyPOJAB4sMC3QkP2w1VsKqa24MnXpJPpUMoSmVCeHJ1Gx6uhrHOBLK3jYsjf75O-QaTHKaYdAxQ)

## **Summary**

We have seen that UNION and UNION ALL are useful to concatenate data sets and to manage whether or not we retain duplicates. UNION performs a deduplication step before returning the final results, UNION ALL retains all duplicates and returns the full, concatenated results. To allow success the number of columns, data types, and data order in each SELECT must be a match.