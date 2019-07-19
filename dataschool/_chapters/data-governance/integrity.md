---
section: book
title: Integrity
meta_title: How to Maintain Data Integrity
description: Data profiling, standardization, enrichment, and constant monitoring
  is required.
number: 4
authors:
- _people/rohan-joseph.md
reviewers: []
feedback_doc_url:
image: "/assets/images/data-governance/integrity/integrity_1.png"
is_featured: false
img_border_on_default: false

---
![Five Pillars: Integrity](/assets/images/data-governance/integrity/integrity_1.png)

## What is data integrity?

Data integrity refers to the fact that data must be reliable and accurate over its entire lifecycle. Data is expected to have the following features:


* **Attributable:** Data should clearly demonstrate who observed and recorded it, when it was observed and recorded, and what it is about. This can be achieved by maintaining metadata which clearly describes the title, author and abstract.
* **Legible:** Data should be easy to understand, recorded permanently and original entries should be preserved. It should include information regarding the content, format and structure of the database along with relationship between its elements.
* **Contemporaneous:** Data should be recorded as it was observed, and at the time it was executed. Also, data should be ready to access and use as soon as it enters the system.
* **Preserved:** Source data should be accessible and preserved in its original form. It must be stored in a secure location, stored across multiple locations and saved in formats that will have the highest utility in the future.
* **Accurate:** Data should be free from errors, and conform with the protocol. It must be stored in a consistent and unambiguous form.

## Types of data integrity

![The types of data integrity](/assets/images/data-governance/integrity/integrity_2.png)

* **Physical Integrity:** It deals with challenges in correctly storing and fetching data. Key challenges in physical integrity include material corrosion, electromechanical faults and power outages. Ensuring physical integrity includes methods such as redundant hardware, an uninterruptible power supply or use of a clustered file system to avoid a single point of failure.
* **Logical Integrity** It deals with the accuracy and rationality of the data. Key challenges include software bugs, design flaws and human errors. Logical Integrity ensures that the data always makes perfect sense, given its environment.
* **Entity Integrity:** It states that every table must have a primary key (a key to uniquely identify all table records and the column chosen to be the primary key should be unique and not null.
* **Referential Integrity:** It states that every table must contain a foreign key. The foreign-key value refers to a primary key value of some table in the database. Occasionally, a foreign-key value may also be null. In such a case, we are saying that either there is no relationship between the data sources or the relationship is unknown.
* **Domain Integrity:** It states that all the data items in a column fall within a defined set of valid values. It may be as simple as choosing a data type and length for a column.

## Conclusion

Data Integrity is a fundamental component of data governance and it is sometimes used as a proxy term for data quality. The overall intent of any data integrity method is same : to ensure data is recorded exactly as intended. Any changes to data as the result of a storage, retrieval or processing operation, hardware failure or human error is a failure of data integrity.

## References

1. [http://www.itprotoday.com/microsoft-sql-server/sql-design-four-integrities](http://www.itprotoday.com/microsoft-sql-server/sql-design-four-integrities "http://www.itprotoday.com/microsoft-sql-server/sql-design-four-integrities")
2. [https://docs.oracle.com/cd/B19306_01/server.102/b14220/data_int.htm](https://docs.oracle.com/cd/B19306_01/server.102/b14220/data_int.htm "https://docs.oracle.com/cd/B19306_01/server.102/b14220/data_int.htm")
3. [http://www.ofnisystems.com/growing-need-for-good-data-and-record-management/](http://www.ofnisystems.com/growing-need-for-good-data-and-record-management/ "http://www.ofnisystems.com/growing-need-for-good-data-and-record-management/")
4. [https://explorance.com/2015/11/3-strategies-to-maintain-data-integrity/](https://explorance.com/2015/11/3-strategies-to-maintain-data-integrity/ "https://explorance.com/2015/11/3-strategies-to-maintain-data-integrity/")
