---
section: book
title: What is an Outlier?
meta_title: What is an Outlier and how to find them
description: Learn how to detect Outliers in different types of data and scenarios.
number: 3
authors:
- _people/rebecca-barnes.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/13xrMu9mfJQR2qtugCn4eP7RubEDL_bAEqwnrHDrgiuM/edit?usp=sharing
image: "/assets/images/Outlier.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 6

---
An outlier is a value or point that [differs substantially from the rest of the data](https://en.wikipedia.org/wiki/Outlier).

Outliers can look like this:

![](https://lh4.googleusercontent.com/QMOX7liGjtovgT1Y-KxjRTBHBPv_aCyLnwSOFtUQL1LKhRyQ6BJaTG9toFfqeoZv_skFxTTVWeADpF_kqR3UXoPDsL0RM7hzJXgu2vV9n1YamfuZdljlMx5_JI9-MJC8Mfjci9p4)

This:

![](https://lh4.googleusercontent.com/mV89QgedmvVy27O_EmgpJcYk2Wrhr_-jRQceOCWxoKvHui0RPxNvaUfdHksAzX1YDcJ0cQLFc2L2yAmOCn-nsFZBKNnlV1oTaaUzYI0hkvBdzuTnDjXX0Fzs4Ah2L7BEs0G8aYX3)

Or this:

![](https://lh5.googleusercontent.com/P_vV21kBHWByEHkbYrVJMttt3mkEROe-aVZH3E4aLYjL8DhfPxTL-qnayt7eBfHfkYOjJtiUnq8AaR8S2i_-09IdWclcjXcDoEc3AVCDQDVjPKVix13kqESQs_rOwL5FhJD4LU35)

Sometimes outliers might be errors that we want to exclude or an anomaly that we don’t want to include in our analysis. But at other times it can reveal insights into special cases in our data that we may not otherwise notice.

For example, in our names data above, perhaps the reason that Jane is found so many more times than all the other names is because it has been used to capture missing values(ie Jane Doe).

There is not a hard and fast rule about how much a data point needs to differ to be considered an outlier. As a result, there are a number of different methods that we can use to identify them.

## Use of Domain Knowledge

![](https://lh5.googleusercontent.com/zTcr-oSDWe2Yxk3KTA0GykF6qjgCP2s4oTGv6Da6t2Zg6qbHwyjkBhYs9JVMteqhV6vgv7JXD96NfT14ZRciKVKs9g2kCO11Kps6BsxIusHaQvrwyi-_wfXBeWrQqY1wDUMROvj1)

Sometimes, the typical ranges of a value are known. For example, when measuring blood pressure, your doctor likely has a good idea of what is considered to be within the normal blood pressure range. If they were looking at the values above, they would identify that all of the values that are highlighted orange indicate high blood pressure. As a result, they may advise some course of action.

In this case, “outliers”, or important variations are defined by existing knowledge that establishes the normal range. It might be the case that you know the ranges that you are expecting from your data. If you identify points that fall outside this range, these may be worth additional investigation.

## Statistical Indicators

When using statistical indicators we typically define outliers in reference to the data we are using. We define a measurement for the “center” of the data and then determine how far away a point needs to be to be considered an outlier.

There are two common statistical indicators that can be used:

1. Distance from the mean in standard deviations

![](https://lh5.googleusercontent.com/ahsVrhQu03Fc9y7LRRyBn9uo6ai2wJbBEiOOhuE-aEilTD1p2DgEKUY1yvkGBWXe_yEbjJreKyKclbSqyYvuvKIAiBuCsrcPVqeIL91f7wyLo_M2FEfXEHiBBsC6kgOx5XTSXREo)

1. Distance from the interquartile range by a multiple of the interquartile range

![](https://lh3.googleusercontent.com/tsBGlM-zrlUsS-bL62F49byYDV4RDumxYyAfx02XLDKTAsk8hJzyuKmZv4GD9jxutZ1ch2IWzTlcWLmh9gmCaruOiOtEbrDpjrjR0T6eanYd8DyFaGTGpmWHDZ_ws2fUbGG6NtJ1)

For the purposes of our exploration, we’re going to use the interquartile range, but for more information about using the mean and the standard deviation, you can check out this [article](https://machinelearningmastery.com/how-to-use-statistics-to-identify-outliers-in-data/).

## Why is Finding Outliers Important?

### Ensure Data Quality

One of the reasons we want to check for outliers is to confirm the quality of our data. One of the potential sources for outliers in our data are values that are not correct. There are different potential sources for these “incorrect values”. Two potential sources are missing data and errors in data entry or recording.

#### Code for missing data

At times, when values are unknown, the person entering the data might use a value to indicate this. Some examples include:

* **Numeric values**: If there are values that are known to be outside of the expected range of values, these can be used to indicate missing values. Examples include:
  * 0
  * 9999
  * -9999
* **String values:** Often a repeating single character, punctuation, or specific words can be used for missing or unknown string. Examples include:
  * xxxx, aaa, yy
  * ., ,, ?, *
  * Unknown, Unspecified, Missing
* **Dates:** Dates are typically either the date of an event or a person’s birth date. Dates that cannot be a true date can be used for missing values. For humans, this is usually dates that make the person’s age impossible. For events, these can be dates before the event/activity began, or very far in the future. January 1 is also more common for a missing For example:
  * 1850-01-01, 1900-01-01
  * 2130-01-01, 3000-12-31
* **Names:** Missing names can be coded in similar methods as outlined for strings above, but there are some additional conventions that are often found for names. The names John and Jane Doe have long been used for those whose name is unknown, but other generic terms can often be used, depending on the area of business. Sometimes missing names are captured in a combination of first and last names, so if these are separate fields, it’s good to combine them to double check. Missing name fields can include individual or combinations of:
  * Client, Customer, Person, Tenant
  * Man, woman, boy, girl, wife, husband, son, daughter
  * Other descriptive terms specific to the field

For all but the numeric values, often you won’t be able to directly sort your data. However, if you complete a grouped count of these fields, it is often easy to identify “default” values. Because most of these are quite unique, if default values are used, they will often have much higher counts. You can quickly identify these counts using this type of query:

```sql
SELECT field_name, COUNT(*) AS value_counts
FROM my_table
GROUP BY 1
ORDER BY 2 DESC
```

#### Data entry/recording errors

* **Typos**: If someone is manually entering data, it can be easy to record something incorrectly. Most of the above examples can also be the result of typos, but some others include:
  * Digits in name fields
  * Misspelled words
  * Adding extras of the same character
* **Incorrect units:** If different people are recording data, sometimes the information could have been recorded correctly, but a different unit of measure is used. Identifying these types of errors typically requires some knowledge of the expected range of values of values and can be trickier to identify. Some examples include:
  * Weights records in pounds and kilograms
  * Distances recorded in miles and kilometers
  * Temperature recorded in Fahrenheit and Celsius
  * Dates recorded in different orders, e.g. MM-DD-YY and DD-MM-YY
  * Times records in different units such as seconds, minutes, hours

If we find data that is in error or is missing, we may attempt to correct this data, or may need to exclude it from our analysis.

## Provide Confidence in Analysis

When outliers exist in our data, it can affect the typical measures that we use to describe it.

For example, if we had five friends with the ages of 23, 25, 27, and 30, the average age would be 26.25.

![](https://lh4.googleusercontent.com/shLtcG6mWP-RQVBLuEj50OUhV9hTMljyy-ckmC2yFQbLkF8G7uViHP9ClNNQPvyeqwtYj-L715-9VSwo2K8xIbNtDljt1Q-7-YxCb1_7nvn2QEh_cw8YjeZJgJJOklpHdCC07QaP)

In this case we can have high confidence that the average of our data is a good representation of the age of a “typical” friend.

However, if we then change the value final value and we had friends with the ages of 23, 25, 27, and 70, the average age is now 36.25. This is quite a large increase, even though the majority of our friends are under 30 (mind the change in scale of the graphic).

![](https://lh4.googleusercontent.com/s0MCRfkfDt7sBVqw8ZCgbLiQ-lyxigKS2E5ckQao3HpXwnWzzPpwpPU689CBXtWDdyItp8yQg0YK1T51OA1u4h_-u2k_vXMmIUinCURrrA2aRTt0ljXxg_CSwC8vzeHSMcEvaW2V)

In this case, we have much less confidence that the average is a good representation of a typical friend and we may need to do something about this.

Being able to identify outliers can help to determine what is typical within the data and what are exceptions. If we don’t have outliers, this can increase our confidence in the consistency of our findings.

## Contextualize the Findings

### Identify High Performers

Identifying outliers can also help to determine what we should focus on in our analysis. Sometimes what we wish to discuss is not what is common or typical, but what is unexpected. If results are extraordinarily good, it may be helpful to understand why a particular value is so much better than the rest - is there something that can be learned from this situation that can be applied elsewhere?

For example, let’s say we’re looking at our web traffic and we notice that we have some peaks that are much higher than others.

![](https://lh6.googleusercontent.com/L3hIhN8DVppfk928ntJ9_HQrkz0Ukd9_Rn7Ip3t2mPeP45CkFyQKFAAL5bEe2BSB23r2zNK93EWADsGqqN888sLE-B5CMXu6EcV9E6VH8sPFv75YXR7KwQCcJZq0Cep14-zKnY_J)

It can be helpful to try to understand the cause of these peaks. Did we start a new ad campaign on that day? Do these peaks always happen when we start an ad campaign? Are there some ad campaigns that have been associated with higher peaks than others? What can we learn from this? When presenting the information, we can add annotations that highlight the outliers and provide a brief explanation to help convey the key implications of the outliers.

### Identify Low Performers

If something is particularly poor, it may alert us that there is an issue that needs to be addressed. For example, if you run four stores and in a quarter three are doing well in sales and one is not, this may be something to look into.

![](https://lh3.googleusercontent.com/BrVw7woJptTDTO-i9g6KA4lIkgn3IbNcdaMCpc2oaNj5lXW7AAOTZ4JThohqkczGhash63RNCnPw-ITMalXUfRaIDNkxv7V8nxVQaSKF7zaQKidXK8dAZL7Y5QOedJlPf7kWGWgD)

Is this consistent performance for the store? Was there something happening in the local neighborhood, such as construction on the street where it is located, that could have contributed to the lower sales? Are there practices that are implemented in the other stores that could be adopted here? Or, is it that this is a brand new store and it is still building up its customer base?

All outliers are not created equal! If we do identify them it’s important to attempt to identify why they may have occurred. This will give us insights into how we manage them.

## Visualization

Visualizing data gives an overall sense of the spread of the data. Outliers in visualizations can dramatically skew the visualization making it hard to interpret the rest of the data.

![](https://lh3.googleusercontent.com/daivtcv6GY6S-uFjjr3F1GMa9-Yr6zkIAt6UGthypkBYI0ZbEPH4KVN_Z2fh_rd6kxs_YttXjU-HKLXaNe4SNURiK5JLmPlcNaSQh9i-h6zf66J94v6VwmyHjAEh0-rb6SgliQbq)

In the above visualization, it is difficult to fully understand the fluctuation of the number of site visits because of one abnormal day.

There are visualizations that can handle outliers more gracefully. One such method of visualizing the range of our data with outliers, is the box and whisker plot, or just “box plot”.

In a box plot we segment our data into four buckets or quartiles. The value that describes the threshold between the first and second quartile is called Q1 and the value that describes the threshold between the third and fourth quartiles is called Q3. The difference between the two is called the interquartile range, or IQR.

![](https://lh5.googleusercontent.com/s0FxoD2J-qIgCUNWeuJdR3dgG1lgApObm1u7bHUGmJH6deIfpPOA2s2B5CqvOSuOVBPLs5EzVb0IoEzsRRb4lFdkVg8OzAOkFQx0cPW7KYrqAI2vzvFPmSfnoyGrTAEG_Bq3CrkB)

The boundaries of Q1 and Q3 create our box, and Q2 or the median is visualized as a line through the box.

From here, we add lines above and below the box, or “whiskers”. To easily visualize the outliers, it’s helpful to cap our lines at the IQR x 1.5 (or IQR x 3). Any points that fall beyond this are plotted individually and can be clearly identified as outliers.

If we want to look at different distributions of outliers we can plot different categories together:

![](https://lh4.googleusercontent.com/Knbja34DiZd84ApKH_nZqNMIM5r7ZbRDJ-E_IGYfCypmSUz2UeiHqKbEjJDb23RXKZjaPbmhdw4S-_O4-7bNhZEgoAranCp5RwKB5umm0UVXzCyRiLDCqG4g3PhKIhqROYUxT74Q)

For more detailed information on how outliers are found using the IQR, and how to use this method in SQL, check out these articles:

* [What is IQR?](https://dataschool.com/fundamentals-of-analysis/what-is-the-interquartile-range/)
* [How to Find Outliers with SQL](https://dataschool.com/how-to-teach-people-sql/how-to-find-outliers-with-sql/)

# Conclusion

By now, it should be clear that finding outliers is an important step when analyzing our data! It helps us detect errors, allows us to separate anomalies from the overall trends, and can help us focus our attention on exceptions. While what we do with outliers is defined by the specifics of the situation, by identifying them we give ourselves the tools to more confidently make decisions with our data.