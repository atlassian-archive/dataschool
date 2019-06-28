---
section: book
title: Scheduling dbt
meta_title: ''
description: ''
number: 
authors:
- _people/blake.md
reviewers:
- _people/matthew-layne.md
- _people/matt.md
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: false
published: false

---
Dbt is a great tool for creating, storing, and then running queries against a database. These queries can be for any purpose but we will be talking about how they can be used to create and update simplified tables and views. This allows you to create a set of table and views that are more easily queryable by the rest of your organization so they can find insights faster. Making data easier to use is an important piece of optimizing your SQL and Data Warehouse because this is where most of the time is spent, determining the right query to run.

You can automate these queries that simplify the data to run on a schedule with [dbt Cloud](https://cloud.getdbt.com/). In order to use dbt Cloud you need to set up dbt linked to a GitHub repository and a data warehouse. If you have not done this already you can check out The Data School’s article on dbt and BigQuery here.

## Setting up dbt Repository

Once you have set up your dbt and BigQuery, you need to set up your GitHub repository to store your dbt files. To do this, first go into your GitHub and create a new repository. Copy the link to that new repository and save it, you will need it to link your dbt files.

Now, in your dbt folder run these commands:

\`git init\`

\`git add .\`

\`git commit -m ‘commit message’\`

\`git remote add (the URL you saved)\`

\`git push -u origin master\`

After this you can refresh your GitHub account to make sure you have all your files and you are ready to begin scheduling dbt.

## Using dbt Cloud

Once you have created your dbt Cloud account there are just a few steps between you and automated dbt runs.

1. Link your dbt repository to your dbt Cloud account

In the side menu select “Repositories”:

![](https://lh4.googleusercontent.com/PiCCkRWCD1i8_GfOSxlPUmU7Mq3tr-_pZx5EXJi8ZVkWGx9DQckY0pAKhW2PoayljXahKgo6NNn6fPNb9dkj_0KV2YjIqZbe7OE2f3Du--1kugAKRC_YLCMnrHS2RKiwndGPWXC8 =624x432)

Click “Add New Repository” and link your GitHub account to your dbt account.

2. Create a dbt Cloud connection

In the side menu select “Connections”:

![](https://lh4.googleusercontent.com/hA2UYPe_AG9HuEW-ybEErHVsht7QTT8eQVy_-UHW-sFWyaBYeb-c0ARWJoXmBCQNV-33vKyfm_9qhgqrSL5i-B_9Xw4WWL1mlut4Wy1p9V6K5_qMeLwdf3AxxIE9mzHjm-0N7gts =624x429)

Then click “New Connection”:

![](https://lh3.googleusercontent.com/VXRIUxmrXASNgNV5zdQ8RYhtDvQEgtZPObtLFJHiuhuvr1xfMcDT84ciK5tIGEfEgpgTtTls2vCwSZ6bdo1Qe0y6gPbfg9pPpod-FUNWd6LOVrA979-KlqGbNROMzsaIYy0R4CFX =624x428)

In the “Type” drop down, select the type of database you want to connect. For this example, we will connect a BigQuery database:

![](https://lh3.googleusercontent.com/YwpVd8ondVh1onV7cksMiq0FxlP-aypZcWhHGrtkoBaazlnZvw3Fk_DBbOZlir3LV3vX2yKHdRkyGQ8_Db_-rQ3UeLDpc0jR6sJstEoJYNc-OUOLRS2dpCMrJcDk9iupqCIAUSif =624x431)

The easiest way to fill in the information to build your “Connection” is to “Upload a Service Account JSON file” that you used when linking dbt to your BigQuery account:

![](https://lh6.googleusercontent.com/ENDnVRCntbFUm-qAv92qwgxM0C3ka4y_BeUBk_424bcWw5p39gUlZ4jC0FB72Okc7BVSZ88phdaJ85v0hhSHl7BMtMFNA3HIZBYOX80BG7ngJmp-nr_hEIp4DuA4AnJPwaOhd_dJ =624x431)

Now the only information you should have to fill out for yourself is the “Schema”, the name of the table in your BigQuery to connect to:

![](https://lh5.googleusercontent.com/HcEivS5cNlrKV8SLrr2mwHvFcWR7q7wtKaIBRPmcGmiDTO_9pGnMzEt_e_n3WWMJqYabEWEm4-qUNi9GfQ5t99wu57nyoUaj_xIuv2y8qMkvTIr8UTQZEZjGxkKcDK0Zhi2boMYo =624x431)

and your desired “Timeout in Seconds”, the length of time your query is allowed to run before the system terminates it:

![](https://lh3.googleusercontent.com/myVfdXNQz9njorr4cA--kFvUFQuAieJ88J0zj3g8QoqqhUiw3heAUVR8Xfi9rgLy1RkDEaU_ZL80rZlv6diih1RU_H-A6FjSuZWWbS8Y_r1oaZrC4m79dyttwOvuBE5NoYTwXHPA =624x429)

Once you have filled out those two fields, you can press “Save” in the top right.

3. Create a dbt Cloud environment

In the side menu select “Environments”:

![](https://lh5.googleusercontent.com/aFWsL10K6N-jw-hvi54fbztX9iah_rvE6zpRuFc1sCZvBsnJmzgRC8CZ-CcMVLr0ISXGJ67_BuzNjyAvnaYaXC9c6Yu8yyEj7dzBHTXr6fNDUpLVIaIFomGG7zAOnScwKndN_Qno =624x431)

Then select “New Environment” to create your environment:

![](https://lh5.googleusercontent.com/fh-VYp5mIv3sfV24OIo0RMzxpzzO0fqYbYb8bBRrXVsmtEzyuxq7PGOd7fK8QVQ2RZCupk5ZfnE1eFqnDXhLFXzZE-s2WlWr9MFhyNFFjOBxaV7h_dH5Z3FgCvQGTw9FFmSfZNU4 =624x429)

Then begin filling in the required information. Give your “Environment” a name, select the repository you would like to link it to, and select the database “Connection” you would like this environment to have:

![](https://lh6.googleusercontent.com/h-C3ApIwf-pcqqoyY1YeXMccd9GhxtvRap1DlJRmKRYkXtqoPLU6CHqE5dcI2-YgcbSifTnlTecGPgGrDZTnvqu15VbHFFv7G8OAm00Gw2JyBZMqIEqrx_cwmb9qCadVCHQNGbLi =624x431)

Once you have selected your desired options from the drop down menus, click “Save” to save this “Environment”.

4. Schedule your first job

To schedule your first dbt query, select “Jobs” from the side menu:

![](https://lh6.googleusercontent.com/in0g9m4BC8iTW0t0VBJkVKhpr0YoXb1lHU-64ZvaHoq-d77YFQ6445IVBkvww1yHHFg7O4P_SqxSoE5N0ZKnR7yvCbXJr6rWufT5oC6E3CtCjR_PocD8dvVTU-GqZhoUjMOHDbdB =624x429)

Click on “New Job”:

![](https://lh6.googleusercontent.com/0RhCNCPDkmb407bgndGEb0ZUbYvgfWlDN_Q4dSjCDUx7dyygcradm2oUVFugjQKnJS2GkbC9kN1hAOmeX3Ch1UfRoVVHiqiSf9t7de14zdG9V5QMrwcVKUjbj7tUSabGhRzJc7mZ =624x429)

Give your new “Job” a name, select the “Environment” you want to automate, you can also change the “Run Timeout” by default the query will never timeout:

![](https://lh5.googleusercontent.com/es10QLFUegQbHyFHJ8KegZaBxzshlqxPWTqoNpgizvEjlZccP_rOHPEoy9GCHgnxzkr-vs_W-dI-nvCbOhgK0vwHB4WThdHA0J53PsSj3bLC1xsKeLm1e_mGOwF7e4iBC2Z7w18Q =624x431)

Next, you can tell the “Job” which dbt commands to run, \`dbt run\` is used by default. Finally, you can tell the “Job” when you want it to run:

![](https://lh4.googleusercontent.com/GZGhOoX9dBRLXeDtfotQ9SFGlQUUlLj5H-rJLhp-IVthRMBqM4d6qiVo3ey5NGP3DiSNs1g2RGMf032b43qSnpnr0sxCDvMe5CCGBinLyeeAJL3z9RMZgUEgcXEVtJh5GYk0C2wy =624x429)

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