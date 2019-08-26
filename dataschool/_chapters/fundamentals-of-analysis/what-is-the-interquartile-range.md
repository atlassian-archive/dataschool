---
section: book
title: What is the Interquartile Range?
meta_title: What is the Interquartile Range (IQR)
description: Learn what the Interquartile Range (IQR) is and how to use it to determine
  outliers.
number: 4
authors:
- _people/rebecca-barnes.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1IzGKmQzUnI2rxbJxTfESTe-HFiRwuwNLyicJoKPNaCg/edit?usp=sharing
image: "/assets/images/IQR.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 6

---
The interquartile range is a widely accepted method to find outliers in data. When using the interquartile range, or IQR, the full dataset is split into four equal segments, or quartiles. The distances between the quartiles is what is used to determine the IQR.

Here’s how it works. Let’s say that we had a pretty diverse group of 15 friends with the following ages: 31, 21, 26, 30, 31, 45, 47, 32, 53, 54, 55, 38, 43, 57, 64. If we wanted to find the IQR, we would do the following:

1. Order the ages from smallest to largest
2. Find the middle value and create a group above and below this
3. Find the middle value for each group that was created
4. Find the difference between the middle of the top and bottom groups

Let’s work through that. First we start off will all of our ages unordered.

![](https://lh5.googleusercontent.com/nDeSsBmZJjhl61DJiAmG9d7av5-CG35ZvfidMForh9VkUGuCksKm0usTtMFqulMUHp1JkZhaOkEDGGcdiH1JWVeIvclpceL9HWLtkUWR1oyreNOw4V7yxc6C__bjRT3gxJS9Y5ig)

1. Once we’ve ordered them from smallest to largest, they’ll look like this. You can also see their position below each number.

![](https://lh6.googleusercontent.com/l2ws87Y1rbu3d-Z6asVILaNuumv_cGuBr6934-DtQ3P2OEr-QRwPJrCAJ7wYNvDbENe2KHIm2o-_4cOGRI5NuB0s9JEkJmh_vcTp486fCIxkc4UDaI6UWJtQEqZtpTzOYsJ2tPal)

2. If we have 15 ages, the middle age will be at the 8th position. As we can see, the age 43 is in the 8th position.

We can use the median to split our two groups. All ages between 21 and 38 are in the bottom group, and all of our ages between 45 and 64 are in the top group.

3. Each group now has seven ages in it. So the middle value for each group will be in the 4th position.

![](https://lh5.googleusercontent.com/pN-65MSvmvzOIcfIDTqb62YJcdy5T8Ix9Ea938FTeHOREF1Go8wu4dTgQVGfHMY9mEZ3kLJFgJyIGMDt-5hQn1wremrmVesLpWjUUl7IIqb98cyQTzWhkTHOvZG2m2OlnJdsxdcP)

4. We calculate the interquartile range by first finding the value in the middle of the top group, which is 54 in this case. We then find the middle value in the bottom group, which is 31 in our example. The IQR is the difference between these two values. That is, 54 - 31, or, 23.

![](https://lh3.googleusercontent.com/2LjjyI8BSlgHMxs9K-orraPJKDKE2UtfMW1taTakM8Wq3T1MPpfYOAYK8SyHD8NC0_8Xfgod8jWEAbVUgkPcVnsxHj5wmK6zkA1hokEd-osj0WZrm8AGBXxl4RslGdbbJS9IT5rz)

This method of breaking the groups in half, finding the middle number and repeating this for each half works perfectly with a collection of 15 ages. But we can still work out the interquartile range if we had an even number of ages and couldn’t find middle values. Let’s say we had these 12 ages, instead of our original 15.

With it ordered, it would look like this.

![](https://lh4.googleusercontent.com/FugAjUamvQ5IdlnCYK1uPe-mBM9o4NPxGOEvpyNCFEbmP_C0g5Cx0nYQnsRR4HLEUwTXFfQHIsmloligxW72V3vbV41iuxbj00qZNSLASnAs_YnUZoAqFeOqCBDygK4v8N4dyZzN)

As we can see, because the total number is even, there isn’t a number that falls in the middle of the groups. And, if we split the groups in half, there also isn’t a number that falls in the middle of either half.

Instead of finding the middle number, we can break the ages in half, and then in half again.

![](https://lh3.googleusercontent.com/brdWyRjuqIyr8zJ615NddnivW0HWrVZl5x1sWyASpoV5VxhQmVlpK14YhhKthNYqQoE2ZUDECrUgS7gjR5RiPsizRepJMGTwCl0ExAjty81LNo6BPLuYwlJhyRZkkiQcD4x7r7us)

In this case, the “middle” value, between each of the groups, is the average of the values on either side of the line:

(30 + 31)/2 = 31.5 (38 + 45)/2 = 41.5 (53 + 55)/2 = 54

![](https://lh6.googleusercontent.com/tGgANYECd6DTSJvQ7oyUDHy26NteGCGiJgwpx9dMmuquFbkp_YCt2U9bXAoSRNemkRsG0VdgJ_oxwK4yPcIkaS64Gan-X1B1I5Ll9SLU9VYLX5jlubqZDfuMLOtV3Zu02auo88Pd)

This means that the interquartile range would be 54 - 31.5, or 22.5.

We can also refer to these values in the following way. For the above example:

The Q1 value is 31.5. This is also the 25th percentile.   
That is, 25% of values are equal to or lower than 31.5.

The Q2 value is 41.5. This is also the 50th percentile or median.   
That is, 50% of values are equal to or lower than 41.5.

The Q3 value is 54. This is also the 75th percentile.   
That is, 75% of values are equal to or lower than 54.

The interquartile range, or IQR, is 22.5

## Finding Outliers with the IQR

### Minor Outliers (IQR x 1.5)

Now that we know how to find the interquartile range, we can use it to define our outliers. The [most common method](https://math.stackexchange.com/questions/966331/why-john-tukey-set-1-5-iqr-to-detect-outliers-instead-of-1-or-2) of finding outliers with the IQR is to define outliers as values that fall outside of 1.5 x IQR below Q1 or 1.5 x IQR above Q3.

Let’s break that down using our original example.

![](https://lh6.googleusercontent.com/GqSCvBR6_u2e3GM-bGS8aJRtMdkk3xwPD1t9SvmIn4Vs9xIZPe8BjvJf_2IG1M4Tx_GEBctQKEja8zz9YYPkLAwjH0p84OoAO0Y4FjYLuGlv9jAoddwOuCjDquPZJkG5N0zRY2U7)

Our IQR was 23. If we multiply this by 1.5, we get 34.5. This means that we would consider any ages that are below -3.5 or above 88.5 to be outliers.

Notice that the thresholds for the outliers are simply defined by the data we use. Even though it’s not possible to have a negative age, our outlier calculation only considers the numerical values. In our case, because we are using ages, this means that no matter how young our friend may be, we would not consider them an outlier. We’d also need a friend who was 89 years or older to consider them an outlier.

In the case above, we have a pretty broad range of ages for our friends. What would happen if the range of ages for our friends was much smaller?

![](https://lh5.googleusercontent.com/jHYaC0UYHOf3oYnaUf7T48CVRvpsUuLHwwgwXtq0MBO0KtQajzboLEcXKrthOXe2AhVuhP0KNy1wk6lr-Ss__Bfmtd_i4_NJ4axYIsDRz_dn-CdwdM13NN4d2C4p5HnSeBgJWYjn)

In this case, our Q1 value is 31 and our Q3 value is 35. This means that our IQR is only 4. Now, 1.5 times IQR is 6. Any values below 25, or higher than 41 will be considered outliers.

Now, our friends with the ages 21, 57, and 64 are considered outliers.

### Major Outliers (IQR x 3)

This brings us to a second, less common threshold for assessing outliers. If we have a very small IQR, not all outliers are created equal. In the case above, while 21 and 64 are both outliers, 21 is only 10 years lower than our Q1 value of 31. But 64 is 30 years older than our Q3 value. How do we distinguish between “regular” outliers and “extreme” outliers.

A major outlier is defined as values that fall outside of 3 times IQR below Q1 or 3 times IQR above Q3.

![](https://lh5.googleusercontent.com/ecIV8lZI_dnLMGVtGLBjU8_TV3d-xGPN6Ae8FasG46emwHFjMK21cY8YnMtNTr3-9SNe3z2iGjFTK5PPAzCddXXHJTsRd7OJNK06-sxfP6qZmXXjUom_lnhnMGnyGqUuYtIvp1i3)

If we go back to the previous example, 4 x 3 = 12. Major outliers will be those that are less than 19 and more 47.

This allows us to indicate some difference between 21 and the other two outliers. An age of 21 is not considered a major outlier, but 57 and 64 are major outliers.

Now that we know how to calculate our IQR and identify outliers, let’s look at how we can use SQL to find outliers using the IQR.

[Finding Outliers With SQL](https://dataschool.com/how-to-teach-people-sql/how-to-find-outliers-with-sql/)