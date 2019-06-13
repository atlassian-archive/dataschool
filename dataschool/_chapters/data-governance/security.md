---
section: book
title: Security
meta_title: Security
description: Data Governance protects data from actions of unauthorized users such as cyber attacks and data breaches
number: 50
authors:
- author: _people/rohan-joseph.md
reviewers:
feedback_doc_url:
image: /assets/images/data-governance/security/security_1.png
is_featured: false
img_border_on_default: false

---
![Five Pillars: Security](/assets/images/data-governance/security/security_1.png)

## What is data security?

Data security refers to the digital privacy measures that are applied to prevent unauthorized access to data. A broad range of information security protocols are used to protect databases from security risks. We need data security as there are numerous risks to database systems :

* Misuse by authorized database users and database administrators or by unauthorized users or hackers.
* Malware infections causing incidents such as unauthorized access, leakage or disclosure of personal data.
* Overloads and capacity issues preventing users from utilizing database as intended.
* Physical damage to servers caused by computer room fires, liquid spills or electronic/ equipment failure.
* Data corruption caused by design flaws and programming bugs like entry of invalid data or commands.

A lapse in data security can lead to catastrophic events. For example, in the case of Yahoo, the [data breach](http://money.cnn.com/2017/10/03/technology/business/yahoo-breach-3-billion-accounts/index.html) impacted 3 billion of its users. Sensitive information including names, email id, security questions, answers and passwords were leaked. Yahoo’s delay in discovering these breaches, as well as implementing improved security features was a major point of criticism. Furthermore, this led to a reduction of $350 million from the price that Verizon agreed to pay, to buy Yahoo’s core internet businesses.

## Key measures to implement data security

![](/assets/images/data-governance/security/security_2.png)

### 1. Access control
Access control is the selective restriction of access to data. It consists of two main components : Authentication and Authorization. Authentication is used to verify that someone is who they claim to be. In addition, we need authorization to determine whether a user should be allowed to access the data.

### 2. Auditing

Auditing is the monitoring and recording of a user’s database actions. It is mainly used to:

* Enable accountability for actions taken in schema, table or row.
* Investigate suspicious activity and prevent users from inappropriate actions.
* Detect problems with authorization or authentication.
* Gather data on specific database activities e.g number of tables being updated, number of users connected.

### 3. Data Encryption

It translates data into another form so that only people with a secret key, known as decryption key can access it. Encryption protects the confidentiality of the data so that if an unauthorized person gained access to the storage device or service, they would be unable to view the data.

### 4. Data Backup

It refers to copying data into an archive file of computer data, so that it may be used to restore the original after a data loss event. Backups should be implemented by proper scheduling (using a job scheduler to remove the human element), authentication and establishing a chain of trusted individuals.

## Conclusion

The electronic systems used by businesses operate with all kinds of sensitive and confidential data. Moreover, the number of [data breach incidents](https://www.idtheftcenter.org/2017-data-breaches) in US hit a new record high of 1579 breaches, which is a 45% increase from the previous year. Due to these incidents, governments throughout the world have imposed new stringent regulations on data storage and security. Therefore, data security should be considered an integral part of the data governance process to minimize financial loss, followed by compliance with regulatory requirements and maintaining high levels of productivity.
