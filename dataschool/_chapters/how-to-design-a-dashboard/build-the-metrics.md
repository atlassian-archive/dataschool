---
section: book
title: Build the Metrics
number: 110
authors:
- author: _people/matt.md
reviewers:
- reviewer: _people/tim.md
- reviewer: _people/dave.md
image: ''
summary: ''
is_featured: false
writers:
  writers: []
published: false

---
# ![](https://lh3.googleusercontent.com/Nb5p495OR2gxPmlu1R4oj781eHWrzTfMULRGqkHgFrYK2ZY48Lx-aRPxTDKnMeuX6edGG6i8B0vfDWV8wcPH-m_T0LFl9FwANuODwfrNmrhscirTDp_-V8QJxiWDwc9rkmSW7SUi =448x178)

In the previous chapters, we filled out a metric spreadsheet. We took a vague ask from a Point Person and turned it into a well-defined list of metrics, calculations, and data sources. We will now use the completed metric architecture to create various SQL queries.

The columns of the metric architecture map to a SQL query.

![](https://lh3.googleusercontent.com/1OzRTqEb7pX9jsMNviKhWGCrdMnceZNZxVpn9Qk2lEmKf-SwbJ6L9UY9buPvacs2nVF1yasK4_1iqmCmyiU9yWUxx3efNNSawNjZzxf7gAGIJzG53sLCPnAgwomNYlLleeacoGEb =624x472)

Take a look at a couple of sample queries we could create from this spreadsheet for the Operations Cost metric:

**Total Operations Cost**

SELECT SUM(amount)

FROM Operations

WHERE department != ‘marketing’

![](https://lh4.googleusercontent.com/V7Wluc4YUAoo2LJ2xOFmA0ww7dHCdQV2W6MsdsjvAApywVkKeXCGCO1xZJTcyPQbOfyCXgCSA3u6DeInEn_1-gZGRReC-P_J8KsTt3sswRatb6eLRqwRZvA4iGXs_FJAGGUN21aT =143x76)

**Total Operations Cost by Department**

(When we introduce a GROUP BY statement we must include any column there in the SELECT statement as well)

SELECT SUM(amount), department

FROM Operations

WHERE department != ‘marketing’

GROUP BY department

![](https://lh4.googleusercontent.com/NhYMejfK7h4hPMHKou0_WyOwwz5g13HSWS7sSHfB4njtLiDQ7B-Us_W8O7WqMgys18If8DyXjj9ZWpxgoJRD8X6xjPStkNwJASTeiowSB7Md2DDq5pNEgMu_7ymPtGhPE_BE-iGa =571x150)

**Total Operations Cost by Department by Month**

SELECT SUM(amount), department, TO_CHAR(created_date, ‘YYYY-MM’) AS month

FROM Operations

WHERE department != ‘marketing’

GROUP BY department, month

![](https://lh4.googleusercontent.com/VgtGT_-1fnVT_ARRS-6ENfc2z8CvilxA1x7idHI51MMD61nA0d0P3RzXRL3xFLtCAdHOmKTr1IIAebz87PSXG1YGWyiJFNrFnNzc5BX2FF4z5QQcMfFly7dVEP0DlTZ6rPC_VC-u =624x141)

One of the beauties of SQL is that it can do the logistical work of finding the columns in the data sources, and it can also compute mathematical equations. Most other methods require you to first access the unaggregated data via SQL and export the data into the tool so that you can create the calculations. Since SQL is tied to accessing the database when the underlying data changes, you can rerun the query and see the latest data. This is more efficient than exporting data into another tool.

## SQL Resources

If you are new to SQL check out Chartio’s tutorial here:

* [https://chartio.com/learn/sql/](https://chartio.com/learn/sql/ "https://chartio.com/learn/sql/")

If you are struggling with understanding how Aggregations or Subqueries work check out:

* [https://dataschool.com/learn/how-sql-count-aggregation-works](https://dataschool.com/learn/how-sql-count-aggregation-works "https://dataschool.com/learn/how-sql-count-aggregation-works")
* [https://dataschool.com/learn/how-sql-subqueries-work](https://dataschool.com/learn/how-sql-subqueries-work "https://dataschool.com/learn/how-sql-subqueries-work")

If you are running into errors or are getting 0 rows returned check out:

* [https://dataschool.com/learn/debugging-sql-series-syntax-errors](https://dataschool.com/learn/debugging-sql-series-syntax-errors "https://dataschool.com/learn/debugging-sql-series-syntax-errors")
* [https://dataschool.com/learn/debugging-sql-series-0-rows-returned](https://dataschool.com/learn/debugging-sql-series-0-rows-returned "https://dataschool.com/learn/debugging-sql-series-0-rows-returned")

## Checking your Queries

Do not assume your query is perfect. You should check it by looking at other peoples’ queries and/or by having the Data Gatekeeper review it.

### Check other people’s Queries

Depending on the BI tool that you are using you can see other people’s SQL queries. This can be very insightful. You can take note of data sources they used that you were not aware of. You can also see if other people have complexity in their queries.

Complex Query example:

SELECT DATE_TRUNC('day', "Payments"."payment_date")::DATE AS "Day of Payment Date",

SUM("Payments"."amount") AS "MRR"

FROM "public"."payments" AS "Payments"

WHERE ("Payments"."payment_date"::DATE BETWEEN {CALENDAR_INTERVAL.START} AND {CALENDAR_INTERVAL.END})

GROUP BY DATE_TRUNC('day', "Payments"."payment_date")::DATE

ORDER BY "Day of Payment Date" ASC

LIMIT 1000;

Complexity in a query typically suggests the data is nuanced, messy, or certain business logic needs to be adhered to. If you come across a complex query that is for the same or a similar metric as the one you are working on, try reaching out to the creator. You should try to understand what the extra parts are all about so you can incorporate what is relevant into your own query.

On the other hand, if other people have similar looking queries for similar metrics you are probably in the clear. However, you still will want to get someone else's eyes on it for verification.

### Consult Data Gatekeeper

Getting a code review on your queries is a best practice. Reach back out to the Data Gatekeeper to validate your queries are calculating their metrics correctly. Having the metric spreadsheet facilitates this process since they can see your work and how you go to the query you wrote.

# Build the Dashboard

Take the tables of data line them up with where they fit into your design.

![](https://lh4.googleusercontent.com/4ufOnvKmngRCHHxYHbKCJLseHlsHo7nBC_dlCj2fg-BLvIVi_e7WqdoBl-yXVlEDFfcFmC-cVdr6dXjTaF53uVgNM6etGE2TSXDZsb1ny82PI1BfKXuFIPvWc5Y77IbX0Lmc0itl =624x261)

Go through each table and create the corresponding data visualization in your BI tool. Put all the visualizations together into your final dashboard.

![](https://lh5.googleusercontent.com/nlOnqSLXreSkPzbpPqnaP7MHgMNsW2FsQrEr0xtkK4Dbz8Qh6T2rkWZaErBJClM33vYIM7mgrJnvOuXRtaC7TpSdRvixKWaIzufdGwUOndvjzu6LrydL7Kt2zGape2udte7GOSGf =624x433)

## Summary

* Build metrics in SQL by plugging in the columns to their relevant part of a SQL statement
* SQL is required to get the data. Use it to calculate the metrics directly as well as to reflect any underlying changes
* Check your queries by evaluating other people’s queries in your company and/or having the Data Gatekeeper review it