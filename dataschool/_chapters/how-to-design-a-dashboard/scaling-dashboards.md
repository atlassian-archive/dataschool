---
section: book
title: Scaling Dashboards
meta_title: 
description: Successful dashboards get used a lot so they need to be built to scale
number: 130
authors: []
- _people/matt.md
reviewers: [] 
feedback_doc_url: https://docs.google.com/document/d/1wE7Dah1_zBK5gcSZHdyrdsmzvuiw_mYuIln7vc0W1dU/edit?usp=sharing
image: "/assets/images/how-to-design-a-dashboard/scaling_dashboards/scaling.png"
is_featured: false
img_border_on_default: false

---
![Scaling your dashboards](/assets/images/how-to-design-a-dashboard/scaling_dashboards/scaling.png)

Once your dashboard is in front of it’s full audience how the dashboard is used is likely to evolve. This can be an expansion of decisions they would like to see supported or the number of groups who wants to use it for their specific scenarios. To accommodate these changes there are some scaling strategies to consider using.

## Linking out

If the feedback for the dashboard is to support more decisions consider if it is appropriate for the dashboard you current have or if you should start the dashboard design process over to create a second dashboard to support these new decisions. You can then provide links on the original dashboard to link to these new dashboards.

![Dashboard with Link](/assets/images/how-to-design-a-dashboard/scaling_dashboards/dashboard.png)

Here we have an example where at the bottom there is blue text that links out to another dashboard.

There are also technical benefits to linking out. Keeping the number of queries limited per dashboard will keep the dashboard loading quickly.

## Interactivity

If the feedback for the dashboard is to support more groups’ specific scenarios you will need to incorporate interactive features. This means having dropdowns for variables so that multiple situations can be evaluated using the same framework of the dashboard.

![Dashboard with interactivity](/assets/images/how-to-design-a-dashboard/scaling_dashboards/interactive.png)

Here we have an example where at the top there is an interactive element to change the date range we are viewing.

When you introduce interactivity it is a best practice to turn off any auto refresh if you have multiple variables you can set. This will limit the amount of queries being performed until you confirm to refresh the dashboard.

## Optimization

Regardless of how it evolves if the usage on a dashboard is high the demand on your database will likely increase. You need to ensure the dashboard still loads quickly and that the work placed on the database is mitigated. This can be accomplished by:

* Optimizing queries
* Setting the schedule
* Removing unused queries

### Optimizing queries

At Chartio our rule of thumb is that if a query takes longer than 30 seconds there likely can be something done to optimize your query. If aggregations are taking a long time go to the Data Gatekeeper to discuss creating a pre-aggregated table that you can query from. This sort of data modeling can drastically improve query performance.

In addition leave any data manipulation (truncation, casting, etc) until after the aggregation. This means that you will aggregate the data first and then apply the transformations to the aggregated data.

```sql
SELECT SUM(num), category
FROM table
GROUP BY CAST(category AS VARCHAR)
```

```sql
SELECT SUM(num), CAST(category AS VARCHAR)
FROM table
GROUP BY category
```

This is much more efficient to making the change to every record before aggregation. You can check out more Query optimization strategies here: [Optimize your SQL Query](https://dataschool.com/learn/optimize-your-sql-query)

### Setting the schedule

Most business dashboards are not using real time data. Data is delivered to the data warehouse where you are querying from on a schedule in batches, which is setup by the Data Gatekeeper. Set expectations with the audience about how “live” the data is. You can also discuss with the Data Gatekeeper the speed at which people need to make decisions based on the data so they can adjust the schedule for when data is loaded into the data warehouse.

### Removing unused dashboards

While this dashboard may be getting heavily used, it is likely some are not being used as much. It is a best practice to regularly archive dashboards that have not been viewed in over 90days. This is because the more dashboards are querying the database, the more the database slows down for everyone. We do recommend sending out an email first alerting people which dashboards will be archived so they can respond and flag any that shouldn’t be.

## Documentation

Beyond the audience there is another consumer of your dashboard. This is future analysts who are trying to build their own dashboards. This could also be a future you. Do the future a favor and document your queries so that they can be understood easily and any quirks can be identified quickly.

A few settings will make your impact on the future much higher. Make sure that other people have access to the query and that they can access the data sources used. If these are protected sources, include the information about how to get access from the Data Gatekeeper

## Summary

* Link out to support more decisions
* Add interactivity to accommodate more individuals/groups needing to make the same decisions
* Set a refresh rate that mimics the rate of decision making so that it is not refreshing more than necessary
* Document your work so that you and others can learn from your query decisions in the future.