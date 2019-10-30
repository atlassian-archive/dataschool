---
section: Stage 2 - Lake
title: Data Lake Maintenance
meta_title: Maintain a Data Lake
description: Learn best practices for data lake maintenance. Handle Data Source updates
  and improve performance.
number: 25
authors:
- _people/tim.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/16sbj9Kt4mbq8ygb9WGVROH06cBHyiZ-sAzrYa1QjpgA/edit?usp=sharing
image: "/assets/images/DataLakeDiagramCover.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
Data Lakes are inherently not very well organized or maintained. They should be relatively low maintenance but there are two areas that will need some attention.

* Data Sources
* Performance

These maintenance activities can be expensive if you extracted and loaded your data with custom scripts. You would need in-depth knowledge of where data is coming from. You would need to know how to work with their API and data structures and potentially have to write a lot of new code when they make an update. Don’t Extract and Load manually, use tools like Fivetran, Blendo, or Stitch which will automatically handle these data source updates.

## Data Sources

The main place where maintenance issues occur is when the data from the sources changes or the data is not making it from the source into the Data Lake.

### Adding new data sources

Ideally, this is as simple as clicking a few buttons inside of an ELT product. Products such as Fivetran, Stitch, and Blendo have large numbers of connectors for different data sources:

![Adding new data sources](/assets/images/NewDataSources (1).png "Data Sources")

[https://fivetran.com/directory](https://fivetran.com/directory "https://fivetran.com/directory")

[https://www.stitchdata.com/integrations/sources/](https://www.stitchdata.com/integrations/sources/ "https://www.stitchdata.com/integrations/sources/")

[https://www.blendo.co/integrations/](https://www.blendo.co/integrations/ "https://www.blendo.co/integrations/")

### Data source updates

Sources change all the time, and ETL tools can handle these for you. This is what they focus on, so they will work to update API calls to make sure the data you're getting is accurate.

![Data Source Updates from ELT Tool](/assets/images/DataSourceUpdates.png "Data Source Updates")

### Fixing broken connections

Occasionally, you will need to manually reconfigure things. If a data source adds a new field or removes a certain table some of your queries might break. You will need to look into the changes and update your queries to work appropriately.

![Data Source Update Broken Query](/assets/images/BrokenQuery.png "Broken Query")

As shown in the case above, we need to consult the datasource and update the field name in the query. Therefore, to fix the query, we updated "cost" to "campaign_cost" as shown below.

![Fix Query after Data Source Updates](/assets/images/FixedQuery (1).png "Fixed Query")

## Performance

At the Data Lake stage, you should focus your optimization at the dashboard or query level.

### Optimize individual queries

There are simple concepts to keep in mind when optimizing queries. Only join what you have to, Select only the columns you will need to analyze, and so on. To dig in deep check out our [Book on Optimizing SQL](https://dataschool.com/sql-optimization/).

### Caching

Many BI products allow you to cache data for improved query speeds and less strain on the database itself. While this reduces the real-time nature of your analytical query, you can query the data as much as you would like.

![Caching data in Chartio](/assets/images/CachingData.png "Cache Data")

### Create limits

Some platforms struggle with concurrency, where lots of people are querying the same source at once. Improve query speed in these scenarios by limiting how many queries people can perform on the database. While this can be a blow to people’s curiosity or analysis, it quickly solves this performance problem.

![Solve Concurrency with limits](/assets/images/QueryLimits.png "Limit Query People")

Queries can be limited in different ways:

* Limit number of people querying
* Limit queries per day
* Big Query - Set max bytes

![Big Query Limit queries](/assets/images/LimitQuery.png "Limit Queries")

### Scheduling

Examine how your BI product queries the database. Does it do it automatically on a schedule or is it manual. Tools such as Chartio have options to schedule queries to run at off-peak times to balance the load on the database and Smart Refresh options to prevent queries from running when dashboards aren't actively being viewed.

![Chartio database refresh schedule](/assets/images/ScheduleRefresh.png "Schedule Refresh")

These sorts of tweaks become especially important as more users query the database.

## Summary

To keep a Data Lake being useful you need to:

1. Monitor data source connections and update pipelines when necessary. Use an ETL product to make this simple.
2. Keep an eye on performance. More people will be querying the database in different ways. Optimize individual queries that are impacting the database, set up caching to improve speed, create limits to stop people from over-querying, and schedule how your BI tool refreshes queries.