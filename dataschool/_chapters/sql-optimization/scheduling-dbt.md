---
section: Modeling Data
title: Scheduling Modeling
meta_title: Scheduling dbt with dbt Cloud
description: Schedule data modeling tasks to make data easy to query. Learn to use
  dbt Cloud to model data to optimize your data warehouse. Learn more.
number: 100
authors:
- _people/blake.md
reviewers:
- _people/matthew-layne.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1CDOGxgTlL9b8oI-cLlPzGb8DJG3N37KjE9MznqMNogo/edit?usp=sharing
image: /assets/images/sql-optimization/scheduling_dbt/jobSchedule.png
is_featured: false
img_border_on_default: false
is_under_construction: false

---
Dbt is a great tool for creating, storing, and then running queries against a database. These queries can be for any purpose but we will be talking about how they can be used to create and update simplified tables and views. This allows you to create a set of table and views that are more easily queryable by the rest of your organization so they can find insights faster. Making data easier to use is an important piece of optimizing your SQL and Data Warehouse because this is where most of the time is spent, determining the right query to run.

You can automate these queries that simplify the data to run on a schedule with [dbt Cloud](https://cloud.getdbt.com/). In order to use dbt Cloud you need to set up dbt linked to a GitHub repository and a data warehouse. If you have not done this already you can check out The Data School's article on dbt and BigQuery here.

## Setting up dbt Repository

Once you have set up your dbt and BigQuery, you need to set up your GitHub repository to store your dbt files. To do this, first go into your GitHub and create a new repository. Copy the link to that new repository and save it, you will need it to link your dbt files.

Now, in your dbt folder run these commands:

'git init.'
'git add .'
'git commit -m 'commit message''
'git remote add (the URL you saved)'
'git push -u origin master'

After this you can refresh your GitHub account to make sure you have all your files and you are ready to begin scheduling dbt.

## Using dbt Cloud

Once you have created your dbt Cloud account there are just a few steps between you and automated dbt runs.

1. Link your dbt repository to your dbt Cloud account

In the side menu select “Repositories”:

![Shows the dbt interface and where the repositories button is located on it](/assets/images/sql-optimization/scheduling_dbt/repositories.png)

Click “Add New Repository” and link your GitHub account to your dbt account.

2. Create a dbt Cloud connection

In the side menu select “Connections”:

![Shows where the connections button os located](/assets/images/sql-optimization/scheduling_dbt/connections.png)

Then click “New Connection”:

![shows where the 'New Connection' button is](/assets/images/sql-optimization/scheduling_dbt/newConnection.png)

In the “Type” drop down, select the type of database you want to connect. For this example, we will connect a BigQuery database:

![Shows how to select the type of connection](/assets/images/sql-optimization/scheduling_dbt/connectionType.png)

The easiest way to fill in the information to build your “Connection” is to “Upload a Service Account JSON file” that you used when linking dbt to your BigQuery account:

![shows where the 'Upload a Service Account JSON File' button is](/assets/images/sql-optimization/scheduling_dbt/uploadAJSON.png)

Now the only information you should have to fill out for yourself is the “Schema”, the name of the table in your BigQuery to connect to:

![Shows where to edit the new connection](/assets/images/sql-optimization/scheduling_dbt/schema.png)

and your desired “Timeout in Seconds”, the length of time your query is allowed to run before the system terminates it:

![shows what fields in the file still needs to be filled out](/assets/images/sql-optimization/scheduling_dbt/schemaAndTimeout.png)

Once you have filled out those two fields, you can press “Save” in the top right.

3. Create a dbt Cloud environment

In the side menu select “Environments”:

![shows where the 'Environments' button is](/assets/images/sql-optimization/scheduling_dbt/environments.png)

Then select “New Environment” to create your environment:

![shows where the 'New Environment' button is](/assets/images/sql-optimization/scheduling_dbt/newEnvironment.png)

Then begin filling in the required information. Give your “Environment” a name, select the repository you would like to link it to, and select the database “Connection” you would like this environment to have:

![shows where the significant fields that need to be filled are](/assets/images/sql-optimization/scheduling_dbt/environmentFields.png)

Once you have selected your desired options from the drop down menus, click “Save” to save this “Environment”.

4. Schedule your first job

To schedule your first dbt query, select “Jobs” from the side menu:

![shows where the 'Jobs' button is](/assets/images/sql-optimization/scheduling_dbt/jobs.png)

Click on “New Job”:

![shows where the 'New Job' button is](/assets/images/sql-optimization/scheduling_dbt/newJob.png)

Give your new “Job” a name, select the “Environment” you want to automate, you can also change the “Run Timeout” by default the query will never timeout:

![shows where the new job fields need to be filled in](/assets/images/sql-optimization/scheduling_dbt/jobFields.png)

Next, you can tell the “Job” which dbt commands to run, 'dbt run' is used by default. Finally, you can tell the “Job” when you want it to run:

![shows where to write your commands and where to schedule triggers to run the command](/assets/images/sql-optimization/scheduling_dbt/jobSchedule.png)

Once you have filled in all the required fields, you can click “Save” in the top right and the job will begin running on schedule. Now your queries will be regularly updated and ready to use by others in your organization.

## Summary

* Create your dbt and BigQuery instances
* Link your dbt files to a GitHub repository
* Link your GitHub repository to dbt Cloud
* Connect your database to dbt Cloud
* Create an “Environment” linking your repository and database
* Create a “Job” to automatically run your “Environment”

References

[https://cloud.getdbt.com](https://cloud.getdbt.com "https://cloud.getdbt.com")
