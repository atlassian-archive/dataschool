---
section: Stage 2 - Lake
title: Data Lake Maintenance
meta_title: Maintain a Data Lake
description: Learn best practices for data lake maintenance. Handle Data Source updates
  and improve performance.
number: 8
authors:
- _people/tim.md
reviewers:
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1edd-_jVBC597JSJG60cNANT7KazukO-hUxKLj74ziKY/edit?usp=sharing
image: "/assets/images/Data Sources.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 5

---
Data Lakes are inherently not super well organized or maintained. They should be relatively low maintenance but there are two areas that will need some attention.

* Data Sources
* Performance

These maintenance activities can be expensive if you extracted and loaded your data with custom scripts. You would need in depth knowledge of where data is coming from. You would need to know how to work with their API and data structures and potentially have to write a lot of new code when they make an update. Don’t Extract and Load manually, use tools like Fivetran, Blendo, or Stitch which will automatically handle these data source updates.

## Data Sources

The main place where maintenance issues occur is when the data from the sources changes or the data is not making it from the source into the Data Lake.

### Adding new data sources

Ideally, this is as simple as clicking a few buttons inside of an ELT product. Products such as Fivetran, Stitch, and Blendo have large numbers of connectors for different data sources:

![](https://lh3.googleusercontent.com/lvRcwi8dRbmbWldSPsKMydxah97SNqrem0qwWfQPayBD5dqa7msI2NEJkNbga6tJnm6sJEKADTxY9-uMkhw-ZYvTY6WbaYasqpbDlYBuC10H6C3ZJZRD5yeh0QhTHxHLphylt5eZ)

[https://fivetran.com/directory](https://fivetran.com/directory "https://fivetran.com/directory")

[https://www.stitchdata.com/integrations/sources/](https://www.stitchdata.com/integrations/sources/ "https://www.stitchdata.com/integrations/sources/")

[https://www.blendo.co/integrations/](https://www.blendo.co/integrations/ "https://www.blendo.co/integrations/")

### Data source updates

Sources change all the time, ETL tools handle these for you. This is what they focus on, so they will work to update API calls to make sure the data you are getting is accurate.

![](https://lh4.googleusercontent.com/D3lNT3xQXyuEZzz-6689843AoElOyypifxTSpMMHZBk34SbqyWNNqMHBBB131TjOH6sw1XosafQm18QAWYqSo9JiBZx-5TncV7PT9p3rW77Q-QxDoXSj8vXsGl1rLHEYlhKU0fQT)

### Fixing broken connections

Occasionally you will need to manually reconfigure things. If a data source adds a new field or removes a certain table some of your queries might break. You will need to look into the changes and update your queries to work appropriately.

![](/assets/images/Screen Shot 2019-09-30 at 10.35.51 PM.png)

As shown in the case above, we need to consult the datasource and update the field name in the query. Therefore, to fix the query, we updated "cost" to "campaign_cost" as shown below.

![](/assets/images/Screen Shot 2019-09-30 at 10.36.18 PM.png)

## Performance

At the Data Lake stage you should focus your optimization at the dashboard or query level.

### Optimize individual queries

There are simple concepts to keep in mind when optimizing queries. Only join what you have to, Select only the columns you will need to analyze and so on. To dig in deep check out our [Book on Optimizing SQL](https://dataschool.com/sql-optimization/).

### Caching

Many BI products allow you to cache data for improved query speeds and less strain on the database itself. While this reduces the real time nature of your analytical query, you can query the data as much as you would like.

![](/assets/images/Screen Shot 2019-09-30 at 10.37.04 PM.png)

### Create limits

Some platforms struggle with concurrency, where lots of people are querying the same source at once. Improve query speed in these scenarios by limiting how many queries people can perform on the database. While this can be a blow to people’s curiosity or analysis it quickly solves this performance problem.

![](https://lh5.googleusercontent.com/9DFpy-EsVALoyHPi9VgSJ2fVCxw5rrhXUU0gdTHKa53SvsXpgAtRRV1MkWXL33OfchJLwwleM4H_KzCn4ay7xUnfXmnnsCattHbcZFGJU0j4QWwD8Y_OX4XY-qpOMg0Iy2kySAYO)

Queries can be limited in different ways:

* Limit number of people querying
* Limit queries per day
* Big Query - Set max bytes

![](https://lh4.googleusercontent.com/cWIU4UojEVcEtiOGQYCaNZTJIuTlNH9rjk_iBu3sedBKASalfahg3sQfleCW2-zFMyv3ZfKssMCiHdo8aKJtaAyLTnWXhCsAHhauUyPw6_z4CtijUjP0_q_l9i66UBa37K2BukVn)

### Scheduling

Examine how your BI product queries the database. Does it do it automatically on a schedule or is it manual. Tools such as Chartio have Smart refresh options to run queries at off peak times to balance the load on the database.

![](/assets/images/Screen Shot 2019-09-30 at 10.37.16 PM.png)

These sorts of tweaks become especially important as more users query the database.