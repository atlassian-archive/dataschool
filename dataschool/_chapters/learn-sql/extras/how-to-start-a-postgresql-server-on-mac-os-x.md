---
section: Extras
title: How to Start a PostgreSQL Server on Mac OS X
number: 
authors:
- author: _people/matthew-layne.md
reviewers:
- reviewer: _people/blake.md
- reviewer: _people/matt.md
image: ''
summary: This article explores starting a PostgreSQL server using both Homebrew and
  the potgres app.
is_featured: false
writers:
  writers:
  - _people/matthew-layne.md

---
# **How to Start a PostgreSQL Server on Mac OS X**

There are two main ways to install PostgreSQL on mac OS X.

1. The homebrew package manager
2. Downloading the app file from [postgresapp.com](https://postgresapp.com/).

## **Using Homebrew**

Homebrew can be installed by running the following command in a terminal:

**_/usr/bin/ruby -e "$(curl -fsSL_** [**_https://raw.githubusercontent.com/Homebrew/install/master/install_**](https://raw.githubusercontent.com/Homebrew/install/master/install "https://raw.githubusercontent.com/Homebrew/install/master/install")**_)"_**

If Homebrew is already installed, make sure that it is up to date by running:

**brew update**

Then ensure there are no conflicts or errors using:

**brew doctor**

Homebrew is a powerful package manager with many uses, including installing and running postgreSQL. This can be done by typing the following command into a terminal: ![Picture showing the command "brew install postgres" running.](https://lh6.googleusercontent.com/pwOapo94MWPdAkVieHQbvc7wPrjnwrZvmw1FU_vHrDPLyklGW3vsfmLoKwe9nMH58cIMEgkiNmmw1V0i1SPfrOFy3MC1_dLan95_6-4X5p5zT75GUJHbwWKPgiHTX5961Yl1GEuN "Installing postgreSQL with Homebrew" =610x273)

Now that postgres is installed the default server can be started by running the command:

**pg_ctl -D /usr/local/var/postgres start**

This will start up a postgres server hosted locally on port 5432. The server will be run out of the directory **/usr/local/var/postgres**.

It can now be accessed by typing the following command:

**psql postgres**

This will connect to the server and access the postgres database. Once this is done:

* Schemas and tables can be created
* Data can be loaded and deleted from the database
* Queries can be run

The process should look like this:![Shows the server being started and then being connected to.](https://lh4.googleusercontent.com/QIJQE-KkewzuOTPabOD1hq5RsTVlXsEoay3sfUk-5lCem1aPhdeM1u_HkIzN9GmRbcSkO6DEpb8fD1NPpqqixWadm_dd0crbWyc41KM5cWM6JZ5Gd7cio9fXpfzi6jFbZM5IDcj4 "Starting the Server" =715x249)

This shows that the server has been started and can be connected to.

### **(Optional) Creating a Custom Data Directory**

A custom data directory can also be used for a server. To do this, first create a directory to be used as the server location. For example, create a directory called myData in the home directory:![Shows the creation of a custom data directory](https://lh5.googleusercontent.com/jOnbDS2m37g2iyrnSyl_fNZU4a7Ek9STiGOjx7h_7Iy6krhmSQ0C3N4t2vuRQuXkfRvC8xEOxRtayH-A2PVi2CjGpPbYLh2oKbB5ZweUlzN7s5hxGyuq9EBhtzmqu2vgNi5VyqNS "Using a Custom Data Directory" =619x197)

Once the directory is created, the server can be initialized. This means that we configure the directory and add the necessary files to run the server. To do this run the _initdb_ command as shown:![shows the execution of initdb on the custom data directory](https://lh6.googleusercontent.com/DNv1Hs_nL3bOWeHPch-NZsk9QnATUayRCTNMHbHalqrmVTiipq8M2Z6Ce3N7bV63XVLdalAgc1RjxoHFcvxDn1rWucs3JNmBzy9UptIsOECzGSn99-lb98c9QMH1MnsggDArxucG "Running initdb" =580x479)

This will fill the myData directory with files necessary to run the server:![shows contents of the data directory after running initdb successfully ](https://lh3.googleusercontent.com/wXBuT7bopeRcywOgCYB5b9E0e_QpnHVvnWAW6xduZHuRAFiTSDfsLv_v1Qo5DWxx18osBTxWh5y5Ojb4di4C0L-dS4iGSmxxjnEg7h3B3ht3DNkWdOXvjDNK3XwVrHpqf93_Cvzk "Succesful initdb" =656x289)

Now that the server is initialized and the log file is created, you can start the server from this directory. To do this use the command and substitute in for the specified values:

**pg_ctl -D \[Data Directory\] -l \[Log file\] start**

The “Data Directory” refers to the directory that was just initialized (in this case myData). The “Log file” is a file that will record server events for later analysis. Generally log files are formatted to contain the date in the file name (e.g. “2018-05-27.log” or “myData-logfile-2018-05-27.log”) and should be stored outside of the database that they are logging so as to avoid unnecessary risks. Log files can be dense to read but are very useful for security and debugging purposes:

![shows the contents of a sample log file.](https://lh5.googleusercontent.com/3zsGIsXLF_j4trRtFsEeFg4t5QIljprFucfALkUnjFL7FdoIP-KI2czoKXuW-8Vmue3ATj2USlk0OXwTBEsspA4Orn6LbKj30knzDApfFiRplYxAdYEeHtBKHEeqnFyQJnmcfBLh "log files" =654x353)

The command above will generate a log file like the one shown, start the server, and tie the log file to the server. If a log file is not specified, events will be logged to the terminal:

![starting a server with a log file using pg](https://lh3.googleusercontent.com/yMdeoYymA8Twnyu1PUr_RaDf-c7S5FKWTULA5tWmA2z9juYmiYMQD-YzVGsus-n9i_QLMJE9IdimOmX1p9M_OMVgFzDTmsUgKI0lai-s1VZjTBx63EHF6Cc4UfpR_7riW8-ipIJi "starting a custom server with a log file " =606x194)

The server will only start if the port is free. If the default server is running it must first be stopped using the **_pg_ctl -D /usr/local/var/postgres stop_** command:

![Shows a conflict between two servers where one is on port 5432 so the second cannot start on port 5432 as well](https://lh4.googleusercontent.com/R7QRDSP05pJD8CtGhtWFGqY9xt-SmWHw4kFlJ7mkg2xH4fIlLddo9i29Hu7wm1SXjKFTXFvrb2TPW_q8f6KVN8mn4UbMsoa9dk_5adWFWBk8i3-oKSpl27moqiFZq-mrU8t-lpM2 "Conflicting servers" =691x353)

Once started, it can be connected to the same way as before using:

**psql postgres**

## **Using PostgreSQL App**

To run a server through the postgres app, the first step is to download the program. The app can be downloaded on [postgresapp.com](https://postgresapp.com/). Once the app is downloaded and moved into the applications folder, the app can be opened.

Open the Postgres app:

![picture of the Postgres app's icon](https://lh4.googleusercontent.com/z__rFj4pYWPFsk4eytocIXJ8sHGX-R8cM2MOA3qRFvcO4apWedwLCI-ihJGKfeb_Vlay5RitA9HmSKUB7faSVrLG4r1OU9hesluXlfFQ2nv4_a_bPKLyq68_0M5H9P5xhDvlqqGC "postgres icon" =141x141)

In order to start the server, click the start button.![shows how to start a server through the postgres app](https://lh6.googleusercontent.com/F92rkzRwvLuonMqRTLlhciNQid6gcQZQ3NHDqcFhJ44NB04gKb6ZBLmgzrfHnVAoxpEPKm-xuILsbD6GKbQRSA8ycLSyJnZ3xnig567tGJiULuYxnkaggxE7Np_ebr1pHiMBwlTT "Starting a postgres server through the app" =555x374)

This will start the server. Details on the server can be found by opening the server settings:![Shows how to edit settings in the postgres app](https://lh4.googleusercontent.com/jA74bkxZm1_DOq0Vd-Q6kAkbSvgYpX4x6fWcUg1kUmrkojjt07DTbjO6UTFxkavQ57174oeni4Jk-0Y19DgeD9DCElkY0gCHWVfB-rU5HZkLYffObCIS4h5AvOFCBzBTwuOuQdHH "Editing settings" =604x453)

This interface shows all the essential information regarding the server. It also allows the port to be changed very easily. This is useful because multiple PostgreSQL servers can

Note: To change the port in the terminal, the ‘postgres.conf’ file (which can be found in the data directory) must be edited. This looks like the following:

![shows how to edit the port in the command line interface by editing the .conf file](https://lh6.googleusercontent.com/d9evPUK-WPqCIaG0tQZe2S1nCicKAHfMNW5mZOhiP4W7vbD1Q0lVDv5eyI-8Ntb7H7J6zJUVAXSgUaD71mBZozu4qceqw6d5YU7Tv_vWOBvTrSHs0FcmrSXW6Zut44fv0U5xE-ob "postgres.conf file" =567x378)

## **Using Terminal with the PostgreSQL App**

Once the app has been downloaded, command line tools can be used as well. These tools can be accessed by typing:

**/Applications/Postgres.app/Contents/Versions/latest/bin/\[Tool Name\] \[Options and/or Arguments\]**

For example, the ‘postgres’ database on the server can be connected to using the psql tool with postgres as an argument:

**/Applications/Postgres.app/Contents/Versions/latest/bin/psql postgres**

Rather than typing out the full path each time however, the path can be added to a file that will allow significantly easier access to the tools, allowing the tools be accessed from any directory on the computer. To do this, the following command can be run in the terminal:

**sudo mkdir -p /etc/paths.d &&**

**echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp**

Once this is done, the ‘postgres’ database can be accessed by simply typing:

**psql postgres**

### **Summary:**

* Homebrew:
  * Download/update Homebrew
  * Use Homebrew to install postgres
  * (Optional) Create New Data Directory
    * initdb
  * Start Server
* App:
  * Download app and move to Applications
  * Run App
  * (Optional) Set different port for multiple servers
  * Start Server
  * (Optional) Add path so that command line tools are easy to access

### **Resources:**

1. [https://www.postgresql.org/docs/10/app-initdb.html](https://www.postgresql.org/docs/10/app-initdb.html "https://www.postgresql.org/docs/10/app-initdb.html")
2. [https://postgresapp.com](https://postgresapp.com "https://postgresapp.com")
3. [https://www.postgresql.org/docs/10/app-pg-ctl.html](https://www.postgresql.org/docs/10/app-pg-ctl.html "https://www.postgresql.org/docs/10/app-pg-ctl.html")

[Give Feedback on our Google Doc](https://docs.google.com/document/d/1MfBqyfJXD9x4iaI_2Lmt-yCoPqD_jDbDEULMJ7NaavU/edit?usp=sharing "Google Doc")