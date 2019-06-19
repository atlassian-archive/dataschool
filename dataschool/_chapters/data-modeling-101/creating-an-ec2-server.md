---
section: book
title: Creating an EC2 Server
meta_title: EC2-server
description: ''
number: 30
authors:
- _people/blake.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1rZJjWr3QnktTxRBUCdS6FIEoh9f8HBaTiUS9ybJtlFk/edit?usp=sharing
image: ''
is_featured: false
img_border_on_default: false
published: false

---
# Creating an EC2 Server

## What is an EC2 Server?

EC2 provides a variety of operating systems and hardware levels for a wide variety of uses that can be easily scaled in the cloud. Whether you are an individual looking to host some small projects on the web or a large company trying to host and automate large databases or websites, EC2 can support you.

EC2 servers are a service provided by [AWS](https://aws.amazon.com/)(Amazon Web Services). These are Amazons way of providing a way to run servers without having to spend the upfront cost of buying the hardware components to host a server. Amazon provides these servers for a low monthly cost, some of them free in your first year of using AWS.

## Creating your EC2

### Step 1: Create an AWS account

If you do not have an AWS account, you will need one for the rest of the steps. If you already have an AWS account, login and navigate to the product page.

### Step 2: Creating an EC2 Instance

On the product page, find the section labeled “Compute” and click on “EC2”:

![](https://lh3.googleusercontent.com/GpEs0FdaF28uHUyHEU-aHg5r7Vo6is7ua9Mr84naOu-ILLB_ptv1m0H9ddnpPHdUZnDEJNC7KjvcRlXwDh4qrd-fJHXY4bL7NL5iTYzzSh7faWb0aUue7ML6XUzDDvBmDHQW0k6U =624x456)

From there click “Launch Instance” to begin creating an EC2 server:

![](https://lh5.googleusercontent.com/_QAWyKDCjRBJB5TvsgxZg7U_USko-eWjaU_Xl6yK8NH7pbDr1EyZrRUYsYtcpq8N9_67InGTSjBXbv-y8UWBCEkcKDG2faYB_BOK6oJ1HNMI3BbEDl9g8QpyyJ9e9YYJO64O0Bu4 =624x456)

### Step 3: Picking an operating system

EC2 has a large variety of operating system available and you are free to pick whichever works best for your needs. The main differences between the operating systems are whether they are based on Windows or Linux. Windows based OS are designed to run several Windows specific programs, while Linux OS’s are designed to be minimal and fast. More information on the specific [operating systems provided by AWS here](https://aws.amazon.com/marketplace/b/2649367011).

For the purpose of this tutorial we will using Ubuntu Server 18.04:

![](https://lh3.googleusercontent.com/dbYQZo7vS8woIP8qmxuTcmYUI77ygmMMkC-54ucpGMEZP-LziTkKnRpDDVZ_sf-2pPo5djfdAY_YhRjWWtxF2c2GsG-xJQ2WiwzNCQe4QAGT1jAoCQYjewD-U_zz_ftOtbp4uQXb =624x453)

### Step 4: Choosing an instance type

The instance type of your server will determine how much hardware is dedicated to your server. The more vCPUs and Memory, the faster your server will process requests. For this example we will be using the free “t2.micro” tier, providing 750 hours (which are the number of hours in a month) of uptime per month for your first year using AWS:

![](https://lh4.googleusercontent.com/oLOWeLvG5mlnXfofGaDUWes8gaF6_jH3ga-lgDaZRVKBzhO11CpDccCv9tCCy08pLpw8zdiIhdGxoNI6WuCb9RHtp-mX47OQvCkzAT7QKr6HTCuTiF6GzD32suoW5Lq9cIhWMuyH =624x453)

### Step 5: Review and Launch

Unless you want to increase the capabilities of your EC2 server or provide more functionality, your basic EC2 instance is ready to launch:

![](https://lh4.googleusercontent.com/wtjpAhDb9qo34eXU7aNIEoNqM7gRXeYwYuUNlOB3PJEgYS6k7PyyGNnPJMrotbbMBsEgvcUYffeCXXAdU6Vf10ucetj9wizbOfSoLS9B1vDjjUyk7hmzgYQD_qU466be-QfrkuvU =624x457)

On this page you will notice that you can edit things:

* Security Groups - will allow you to determine who can access your server
* Storage - will determine how much data you can store on your server.

Once you have changed those to suit your needs click “Launch” on the bottom right hand corner of your browser.

### Step 6: Creating an SSH key

![](https://lh4.googleusercontent.com/Q_m1SNT93u8G_osjQ8bK_sDSDEvTDukva1w6DiodKQ322de_EPWylyhsRI7Qwp4xVfYEhbxVO3sWj7TG-URyPY6gHX9CSqnxBoLPPcfYFQ92gkb5sEdcbfV4xwPJL6rbssDFKMwj =624x455)

When prompted to create an SSH key, you must “Create a new key pair” and download the pair to finish creating your EC2 instance:

![](https://lh4.googleusercontent.com/eD7GfqA3f468j383GN_pjk37mJm1L3hsrhYJ4nE7tVeIQCBws4mfKqNr-qYgEnCArXWks2kujA2QiwEdlkxP9A3H0U_PKYxhtW3rW78c95Oz3waK-qB96FvY1Aa6NRIJlsy1sgXK =624x453)

This SSH key pair will allow you to connect remotely to your server from the command line. In order to do this you may have to change the permissions for your key file. This can be done with:

\`Sudo chmod 400 /Path/Yourkey.pem\`

Potential uses:

(article on running jupyter on EC2)

(any other articles using EC2)

References:

[https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html](https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html "https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html")