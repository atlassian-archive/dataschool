---
title: Using ALTER in PostgreSQL
meta_title: ALTER in PostgreSQL
description: Learn the different potential uses of the ALTER command in PSQL. Add
  and drop columns from tables. Rename and change schemas and more.
section: Extras
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/matt.md
- _people/blake.md
feedback_doc_url: https://docs.google.com/document/d/1CEOlXDZAoDMGhhwFmZ2q4aStSulRmmIWLjqBBvcZU0U/edit?usp=sharing
image: /assets/images/book-covers/learn-sql.png
is_featured: false
img_border_on_default: false
is_under_construction: false

---
In SQL, tables, databases, schemas, groups, indexes, servers, and more can be modified using the **_ALTER_** command. This command enables the user to modify a specific aspect of the table, database, group, etc. while leaving the rest of the data untouched.

There are many alterable things in postgreSQL heavily discussed in the PostgreSQL [Documentation](https://www.postgresql.org/docs/11/sql-altertable.html). This article will only focus on a few main uses of ALTER (ALTER TABLE and ALTER DATABASE.) For a comprehensive list, check the documentation [here](https://www.postgresql.org/docs/11/sql-altertable.html).

**Warning:** Altering tables and databases alters critical parts of their structure. As such, queries that ran on tables/databases that were altered may no longer work and may need to be rewritten.

## Video
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/BrSDzg_QFwE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ALTER TABLE

Altering tables is a very common use of ALTER. Using ALTER TABLE is very useful for adding, removing, and editing columns:

```sql
ALTER TABLE traffic
ADD COLUMN nameofdriver VARCHAR;
```

This query will **add a column** called 'nameofdriver'.

This column can be **dropped** by using ALTER as well. To do this:

```sql
ALTER TABLE traffic
DROP COLUMN nameofdriver;
```

ALTER can also be used to **change the datatype** of a pre-existing column. For example, you can change a boolean to a char:

```sql
ALTER TABLE traffic
ALTER COLUMN belts
TYPE char USING belts::char;
```

This usage of ALTER takes a column and converts it into a different type using a specified method for this (in this case the cast: belts::char).

### Table Constraints

Another usage of ALTER TABLE is to **add table constraints**. For example, if a column should be unique:

```sql
ALTER TABLE traffic
ADD CONSTRAINT unique_seqid UNIQUE (seqid);
```

This command can also be used to add a constraint to the whole table.

NOTE: An error will be thrown if a constraint is added to a column that already breaks that constraint (e.g. adding the UNIQUE constraint to a non-unique column will throw an error).

Common constraints include: **_NOT NULL_**, **_PRIMARY KEY_**, and **_UNIQUE_** (full list included in the [documation](https://www.postgresql.org/docs/11/ddl-constraints.html)). The constraint can also be dropped using the same command with the **_DROP_** **_CONSTRAINT_** command instead:

```sql
ALTER TABLE traffic
DROP CONSTRAINT unique_seqid;
```

### Renaming and Changing Schemas

ALTER TABLE can also be used to rename the table or column that is being accessed. To do this, use the rename command:

```sql
ALTER TABLE traffic
RENAME TO violations;
```

Or

```sql
ALTER TABLE traffic
RENAME COLUMN dateofstop TO date;
```

The **schema** that a table is using can be changed by using:

```sql
ALTER TABLE public.traffic
SET SCHEMA mySchema;
```

## ALTER DATABASE

Databases can also be modified using the ALTER command. There are fewer things that can be modified in a Database, however they have very serious effects. As such they often have required permissions to execute them. The things that can be changed using ALTER DATABASE are:

* **Name:** The database can be renamed.

```sql
ALTER DATABASE [database name]
RENAME TO [new name];
```

* **Allow Connections:** Whether the database allows connections to itself. **NOTE:** this will block all connections when true, even connections from localhost. It will need to be set to false before it can be connected to again.

```sql
ALTER DATABASE [database name]
WITH ALLOW_CONNECTIONS [true/false];
```

* **Connection Limit:** Limit the number of simultaneous connections. Set to -1 for unlimited connections.

```sql
ALTER DATABASE [database name]
WITH CONNECTION_LIMIT [number of connections];
```

* **Template:** Can set the database to be or not to be a template. A template is a designation that some tables get which allows the database to be copied by a user with lower privileges so that they can have a pre-structured database and fill it out with their own data.

```sql
ALTER DATABASE [database name]
WITH IS_TEMPLATE [true/false];
```

* **Owner:** Can set the owner of the database. Only the current database owner and [superusers](https://www.postgresql.org/docs/11/app-createuser.html) can change the owner.

```sql
ALTER DATABASE [database name]
OWNER TO [username];
```

* **Tablespace:** Can set which default tablespace is used. A tablespace is a way to logically separate databases on the disk so that they can handle more throughput. See the [documentation](https://www.postgresql.org/docs/11/manage-ag-tablespaces.html) for more.

```sql
ALTER DATABASE [database name]
SET TABLESPACE [new tablespace];
```

* **Configuration Parameters:** Can be used to override system preferences on an individual basis. Some possible parameters that can be edited are: enable_indexscan, enable_bitmapscan, statement_timeout, and more.

```sql
ALTER DATABASE [database name]
SET [configuration parameter] TO [value];
```

```sql
ALTER DATABASE [database name]
RESET [configuration parameter];
```

```sql
ALTER DATABASE [database name]
RESET ALL;
```

* **Example:**

```sql
ALTER TABLE traffic SET enable_indexscan TO OFF;
```

* This will disable index scans on the specified database

## References

* [https://www.postgresql.org/docs/11/sql-alterdatabase.html](https://www.postgresql.org/docs/11/sql-alterdatabase.html "https://www.postgresql.org/docs/11/sql-alterdatabase.html")
* [https://www.postgresql.org/docs/11/ddl-constraints.html](https://www.postgresql.org/docs/11/sql-alterdatabase.html "https://www.postgresql.org/docs/11/sql-alterdatabase.html")
* [https://www.postgresql.org/docs/11/sql-altertable.html](https://www.postgresql.org/docs/11/sql-alterdatabase.html "https://www.postgresql.org/docs/11/sql-alterdatabase.html")
