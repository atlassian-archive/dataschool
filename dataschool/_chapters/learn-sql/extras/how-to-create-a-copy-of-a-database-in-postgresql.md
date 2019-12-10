---
title: How to Create a Copy of a Database in PostgreSQL
meta_title: Create a copy of a Database in PostgreSQL
description: Learn how to create a copy of a database in postgres using psql.
section: Extras
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
image: /assets/images/book-covers/learn-sql.png
img_border_on_default: false
is_featured: false
is_under_construction: false

---
To create a copy of a database, run the following command in psql:

```sql
CREATE DATABASE [Database to create]
WITH TEMPLATE [Database to copy]
OWNER [Your username];
```

For more information continue reading.

**Starting the Server**

The first step to copying a database is to open psql (the postgreSQL command line). On a macOS this can be done when you start the server.

Open the Postgres app:

![postgres app logo](/assets/images/learn-sql/extras/copyDBs/copyDBs_1.png)

In order to start the server, click the start button.

![image of the postgres app gui highlighting the start button](/assets/images/learn-sql/extras/copyDBs/copyDBs_2.png)

Once this is done, a list will appear showing your databases:

![Image showing a started postgres server with databases in it](/assets/images/learn-sql/extras/copyDBs/copyDBs_3.png)

Double-click a database in order to open a psql command line interface. This will open a new window with a connection:

![image showing the psql interface with the database 'matt'](/assets/images/learn-sql/extras/copyDBs/copyDBs_4.png)

Now that a connection has been established, we can begin writing queries. You can switch to other databases by typing “\\c \[Database Name\]”. To look at all the databases, the \\list or \\l [meta-command](https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/) can be used:

![list of databases from psql](/assets/images/learn-sql/extras/copyDBs/copyDBs_5.png)

**Copying the Database**

```sql
CREATE DATABASE [Database to create]
WITH TEMPLATE [Database to copy]
OWNER [Your username];
```

Replace the bracketed portions with your database names and username. This query will generate a copy of the database as long as the “Database to copy” is not currently being accessed. If the “Database to copy” is being accessed by a user, that connection will have to be terminated before copying the database. To do this, run the following command:

```sql
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = '[Database to copy]'
AND pid <> pg_backend_pid();
```

This query will terminate any open connections to the “Database to copy”, and will cause brief interruptions to anyone accessing the “Database to copy”. It will disconnect users from the database, however psql will automatically reconnect a user whenever they run their next query as shown below:

![Query failing due to being disconnected and auto reconnecting](/assets/images/learn-sql/extras/copyDBs/copyDBs_6.png)

Once they reconnect they can then run queries again against the database.

Note: They will not be able to reconnect until the database is completely copied.

Once you terminate the connections, create the copy using the first command to CREATE a copy of the specified database. Due to the fact that people can reconnect between the time you terminate and the time you copy, you may want to structure your commands like so:

```sql
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = '[Database to copy]'
AND pid <> pg_backend_pid();
CREATE DATABASE [Database to create]
WITH TEMPLATE [Database to copy]
OWNER [Your username];
```

When structured and run like this, the CREATE DATABASE command will run immediately after terminating connections. This will help ensure no connections form between terminating connections and copying the database.
