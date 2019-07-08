---
section: book
title: Why Databases?
meta_title: Why use Databases over Excel
number: 20
authors:
- _people/katerina-bicakci.md
- _people/matt.md
reviewers: []
feeDBsack_doc_url: https://docs.google.com/document/d/1o8PIYkD2m3PHzgZZyQqqc0F4P-F6Qj7gIoCyeNBm9W8/edit?usp=sharing
image:
description: Databases are better for managing data than spreadsheets when you consider
  size, accuracy, and security
is_featured: false
img_border_on_default: false

---
## What is a database and why use one

People understand a spreadsheet. It is visual, the data is right there, and you can perform calculations right next to the data. For many scenarios this is the right tool to use.

![Google Sheets example](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_1.png)

Some people have even figured out ways to power their mobile applications off of using google sheets. ([https://www.appsheet.com/apps-from-google-sheets-and-forms](https://www.appsheet.com/apps-from-google-sheets-and-forms "https://www.appsheet.com/apps-from-google-sheets-and-forms"))

The scenario we will be exploring is managing the data within a business. There are big disadvantages to using spreadsheets to do this, which databases handle very well.

* Size
* Accuracy
* Security

### Size

Spreadsheets typically top out a million rows of data. Databases can store practically and unlimited number of rows of data. Spreadsheets can have multiple sheets which can allow for complex calculations between multiple sets of data, but these become difficult to manage visually. Databases again can practically support unlimited number of tables and make working with all that data much more simple through SQL queries.

### Accuracy

Keeping data accurate is very difficult. Imagine updating the following sheet:

![Sample data set](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_2.png)

Now Imagine if the city of San Francisco (SF) made the horrible choice to officially change it's name to Frisco (F). Now while we might disagree with this decision when we go to update the spreadsheet we have to update the value in multiple places. This creates an opportunity for error. Perhaps we missed one.

In a spreadsheet we could do ctrl F or use the Find and Replace but this might break down if data is spread across multiple sheets, it would be easy to miss one. In databases using SQL and 3rd Normal Form(more on this later) we can make these updates easily and accurately.

### Security

Spreadsheets have a binary level of access, either you have the file or link or you do not. Databases allow for complex permission settings to not only prevent certain people from being able to see certain parts of the data, but also to encrypt data within the database. This allows for compliance with regulations like GDPR and also protects the data from being edited by the wrong people.

## Why using a database can be challenging

To access the data within a database you will need to use SQL. While this is a fairly simplistic programming language it is not as intuitive as using a spreadsheet. There is a learning curve here.

Another pain point with working with data in a database is getting access. In many companies the amount of people who can run queries is fairly limited. Typically you will need to request access from the data team or your IT group.

Data is structured differently than in a spreadsheet. It is stored in what's called 3rd Normal Form. This means that the data you want is typically spread out across multiple tables which you will need to join together.

## Basic database vocabulary

New jargon always takes time to sink in. These words will be used throughout the book and will help make conversations about data more clear.

* Table
* Field
* Record
* Primary Key
* Foreign Key
* Schema

Table, Field and Record all mean something very similar to common spreadsheet words. Their pairs are as follows:

![Table, Field, and Record compared to their spreadsheet alternative](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_3.png)

Primary Key and Foreign Key are database specific concepts. Data in a database is spread out across multiple tables we need ways of bringing all that data back together. This is accomplished by using Primary and Foreign Keys. The Primary Key is the ID field in a table, that uniquely identifies each record.

The primary key is indicated here with `PK_id`:

![sample table from database primary key](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_4.png)

Then in another table the primary key for the location table might exist as well, this is called a Foreign Key.

The Foreign Key is indicated here as `FK_location_id`:

![sample table from database foreign key](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_5.png)

Now we can join these two tables together using the Primary and Foreign Keys to make one big table:

![tables joined based on primary and foreign keys](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_6.png)

If we zoom out to see these two tables in the same database before they were joined we can explain the last jargon word, **Schema**. Schema is the word to describe all of the tables that exist within the database:

![sample table in schema](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_7and8.png)

These tables in a schema are commonly represented by showing the table name at the top with all of the field names listed below:

![simple ERD example](/assets/images/how-to-teach-people-sql/whyDatabase/whyDBs_9.png)

## Data types

Ok there is actually more new jargon and these require special attention since most of the errors in writing SQL statements will be related to data type issues. Data types specify what sort of data is stored and what sort of functions can be called on. Every field in a database has a data type associated with it.

* **VARCHAR:** Character string having variable length
    * This data type treats everything as text, you can place numbers in here but adding them together would just attach them which is what you would expect with text.
    * a + b = ab
    * 1 + 2 = 12
* **INTEGER:** Whole Numbers
    * This data type only allows whole numbers inside of it. All math functions can be applied to it. Text cannot be placed inside of it
    * 1 + 2 = 3
* **FLOAT:** Numbers with decimal point values
    * This data type works the same as INTEGER but allows decimal values
    * 1.1 + 2.2 = 3.3
* **BOOLEAN:** True or False value
    * This data type can either be True or False. It is useful for setting binary characteristics or status about some data.
    * Is the house on fire? True or False?
* **DATE:** Date/Time value
    * This data type contains date or time information which allows you to perform calculations relevant to date time information.
    * How many days are between 1/1/19 and 2/4/19? 34

There is one data type that is not defined for fields that can show up in any of these.

* **NULL:** This means there is no value in the cell
    * This data type is useful for showing the absence of data. A blank cell and a Null cell are different. Null is ignored by aggregations and it is easy to filter for. Blank values or 0s would be included in aggregations and can be more difficult to detect
    * What is the Average of 1 + Null + 5? 3
    * What is the Average of 1 + 0 + 5? 2

## Summary

* Databases are used to accommodate a lot of data, make updating easy and accurate, and allowing for more security
* Databases are challenging to work with due to SQL, permissions, and 3rd Normal Form
* Databases are very similar to having multiple spreadsheets but the jargon is slightly different
* There are specific data types for each field in a database
