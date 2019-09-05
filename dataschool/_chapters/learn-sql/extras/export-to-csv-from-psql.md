---
section: Extras
title: Export to CSV with \copy
meta_title: Export to CSV from PSQL using the copy command
description: This article discusses how to export data from psql to a csv file using
  the copy commands
number:
authors:
- _people/matthew-layne.md
reviewers:
- _people/blake.md
- _people/matt.md
feedback_doc_url: https://docs.google.com/document/d/17cO2KNHGF5Tnaxg5LPnl6HSEcwnlz-bNGA-DccflcN8/edit?usp=sharing
image: "/assets/images/book-covers/learn-sql.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time:

---
## **The Commands:**

In order to export a table or query to csv use one of the following commands:

For Client-Side Export:

```code
\copy [Table/Query] to '[Relative Path/filename.csv]' csv header
```

For Server-Side Export:

```code
COPY [Table/Query] to '[Absolute Path/filename.csv]' csv header;
```

Example Absolute Path: '/Users/matt/Desktop/filename.csv'

Example Relative Path: 'Desktop/filename.csv'

Key words:

* csv: this tells the copy command that the file being created should be a CSV file.
* header: this tells copy command to include the headers at the top of the document.

## Using the Commands

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/nbV0zUmkEHU?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## **CSV Files**

Comma Separated Value (CSV) files are a useful format for storing data. Many tools support importing data from CSV files because it is an easy to read format that is plain text and not metadata dependent.

In psql there are two commands that can do this, both slightly different.

The first is the _\\copy_ [meta-command](https://chartio.com/resources/tutorials/how-to-list-databases-and-tables-in-postgresql-using-psql/) which is used to generate a client CSV file. This command takes the specified table or query results and writes them to the client's computer.

The second command, _COPY_, generates a CSV file on the server where the database is running.

### **The _\\copy_ command**

The _\\copy_ meta-command is used for exporting to a client computer. It is useful for copying a database that may have somewhat restricted access and for creating a personal copy of the data. For example, a user may want to generate a csv so that they can analyse financial data in excel. The format of a _\\copy_ to csv is as follows:

```code
\copy [Table/Query] to [Relative Path] csv header
```

The \[Table/Query\] section can be filled with a table or query. For example to copy all entries from a table, the table name can be put here. To copy all entries that contain “saw” in their names from the table of tools to a csv, the following commands could be run:![using \\copy with a subquery to select entries that have 'saw' in them](/assets/images/learn-sql/extras/export/export_0.png)

The \[Relative Path\] is the path from where psql is currently saving files to where you want to save the file. The location that psql is currently saving can be found by using the _\\! pwd_ command.

Note: The _\\!_ meta-command takes whatever arguments it is given and runs them as a bash command within psql.

The pwd command prints the current working directory. The meta-command \\! pwd and \\! ls are shown being used below:![using ! to run ls and pwd](/assets/images/learn-sql/extras/export/export_1.png)

This means that if the file name “myTools.csv” is used as the \[Relative Path\], it will be saved in _/Users/matt/_ as can be seen below:

![Showing \\copy running and the corresponding file that was created](/assets/images/learn-sql/extras/export/export_2.png)

The file can also be saved elsewhere by entering a specific relative path. For example, if _'/Desktop/\[Filename\].csv'_ is entered as the path, the file will be saved to the desktop.

Following the Relative Path in the command is the text _'csv header;'_ This text does two things. The _'csv'_ specifies that the data should be stored in the CSV format. Other possible formats are 'text' and 'Binary.'

The _'header'_ specifies that, when the data is copied to a csv file, the names of each column should be saved on the first line as shown here:

![comparing a csv with and without a header](/assets/images/learn-sql/extras/export/export_3.png)

### **The _COPY_ command**

The _COPY_ command also requires the user to specify a Table/Query to copy. Unlike _\\copy_ however, the _COPY_ command requires an absolute path. This is because _COPY_ is for copying a database from a server to another location on the same server; not to a client computer. The _\\! pwd_ is very useful for finding the absolute path if you do not know where to save the file. In order to save to the desktop using \\copy _'Desktop/\[Filename\].csv'_ would be used. In order to do this with _COPY_, _'/Users/\[Username\]/Desktop/\[Filename\].csv'_ would need to be used as shown below:

![Shows using COPY to copy a csv file](/assets/images/learn-sql/extras/export/export_4.png)

## **Summary**

* To copy a table or query to a csv file, use either the _\\copy_ command or the _COPY_ command.
* _\\copy_ should be used for a copy to local systems
  * _\\copy_ uses a relative path
* _COPY_ should be used to create a csv on the server's side.
  * _COPY_ uses an absolute path.

## References

1. [https://www.postgresql.org/docs/9.2/app-psql.html#APP-PSQL-META-COMMANDS-COPY](https://www.postgresql.org/docs/9.2/app-psql.html#APP-PSQL-META-COMMANDS-COPY "https://www.postgresql.org/docs/9.2/app-psql.html#APP-PSQL-META-COMMANDS-COPY")
2. [https://www.postgresql.org/docs/9.2/sql-copy.html](https://www.postgresql.org/docs/9.2/sql-copy.html "https://www.postgresql.org/docs/9.2/sql-copy.html")
3. [https://tableplus.io/blog/2018/04/postgresql-how-to-export-table-to-csv-file-with-header.html](https://tableplus.io/blog/2018/04/postgresql-how-to-export-table-to-csv-file-with-header.html "https://tableplus.io/blog/2018/04/postgresql-how-to-export-table-to-csv-file-with-header.html")
