---
section: book
title: How to Create a Copy of a Database in PostgreSQL
meta_title: ''
description: ''
number: 210
authors:
- author: _people/matthew-layne.md
reviewers:
- reviewer: _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/1f7xpecovJ9GUGRaZhghalK66dPHwMGeLi3nFtRV8kqc/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
writers:
  writers: []
published: false

---
To create a copy of a database, run the following command in psql:

CREATE DATABASE \[Database to create\] WITH TEMPLATE \[Database to copy\] OWNER \[Your username\];

For more information continue reading.

**Starting the Server**

The first step to copying a database is to open psql (the postgreSQL command line). On a macOS this can be done when you start the server.

Open the Postgres app:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5ce56b9980dbc649bd49f89f_DdjqCSDRN567p9_qzwtxyw2PUC2-6n7RyR4K-aZm50CXyAxhxr-ZkWgbkObnLu7gp-0O2yX8fO1cTU7sHrWEXMYDMIRq1ByBP-P8MdP7IVDIo4fiR-7d45qgcUH1zlnXTInuB1-5.png)

In order to start the server, click the start button.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5ce56b995362df931c9bc967_fdKrksx_BTDJ0-sIi6LNAn0xJGU7yT8kXLzDBFOEWuf_6f_PdA7o7Z6znL52KeAPjY2wp-DrmN6diqXwh_R20wNQAn5VbQChFPBlwouK0ZzfBiN7sYWQdyguC-N11z48KPmP0VtQ.png)

Once this is done, a list will appear showing your databases:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5ce56b99d1f2a9925cedc38c_VRt9opBixujQBHdQBUfEndjvhptFZ0-_xQDovYVJECgb8B8U6xCC8oyWke9PnWczKKtkrOJFOZE5cFO5rbpNlA6QKhOwwHLJjAn9Ml4evtQDUa1_l745T0rVnxSeVKVhMDzDL8tl.png)

Double-click a database in order to open a psql command line interface. This will open a new window with a connection:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5ce56b99e35d8a703ccd389a_o9cCoZtq3UBXZgQ162T6_V6j40DYMvMfmer7aUJ5MB4vA1nlmyc5SYvhatEIotDE2fbwVs_B-UhJDxY7WFN6CcZPFCs0048HzUssA5nXaIhdgZn_dpqZX3v47ztDLk7fukrTbnuD.png)

Now that a connection has been established, we can begin writing queries. You can switch to other databases by typing “\\c \[Database Name\]”. To look at all the databases, the \\list or \\l [meta-command](https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/) can be used:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5ce56b9980dbc61da849f8a0_SDd63YK9WXzgrq9o4nQDuE2cR_VHOFu3llkBItBeGPti-VMIgtWy5FScUSO4jniMMPzO66OioYosa_EkRMsLAvyECJppRSCn53DmYJme_vDe9Z_TKm-f_QSYuB-49DCGM0vHMcDf.png)

**Copying the Database**

CREATE DATABASE \[Database to create\] WITH TEMPLATE \[Database to copy\] OWNER \[Your username\];

Replace the bracketed portions with your database names and username. This query will generate a copy of the database as long as the “Database to copy” is not currently being accessed. If the “Database to copy” is being accessed by a user, that connection will have to be terminated before copying the database. To do this, run the following command:

SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity

WHERE pg_stat_activity.datname = '\[Database to copy\]' AND pid <> pg_backend_pid();

This query will terminate any open connections to the “Database to copy”, and will cause brief interruptions to anyone accessing the “Database to copy”. It will disconnect users from the database, however psql will automatically reconnect a user whenever they run their next query as shown below:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5ce56b99bd2f03de0694cb24_TP0JHahSe5wkZo6R6i7hPWv8uyz7dXJuym5rje2x136FAwIW5RNbM43t6SFHsSeSoPp0iqrxNxaym3AeBbttlSrLTvcz0GjPZGUNtwaQiiuNTRRX4vCwECyF4dd8MCe_xfM4jC4Q.png)

Once they reconnect they can then run queries again against the database.

Note: They will not be able to reconnect until the database is completely copied.

Once you terminate the connections, create the copy using the first command to CREATE a copy of the specified database. Due to the fact that people can reconnect between the time you terminate and the time you copy, you may want to structure your commands like so:

SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity

WHERE pg_stat_activity.datname = '\[Database to copy\]' AND pid <>

pg_backend_pid(); CREATE DATABASE \[Database to create\] WITH TEMPLATE

\[Database to copy\] OWNER \[Your username\];

When structured and run like this, the CREATE DATABASE command will run immediately after terminating connections. This will help ensure no connections form between terminating connections and copying the database.
