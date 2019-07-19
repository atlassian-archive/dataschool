---
section: book
title: Using Jupyter Notebooks
meta_title: How to use Jupyter Notebooks
description: This article walks through the basics of using a Jupyter notebook. It
  covers how to load data, create a notebook, and begin using that notebook.
number: 50
authors:
- _people/blake.md
reviewers:
- _people/matt.md
- _people/matthew-layne.md
feedback_doc_url: https://docs.google.com/document/d/1CzDVFgPT8CtoFbkt5H58WVRykmCkZO30Uav38IHQVqY/edit
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
reading_time: 
published: false

---
Now that you have learned [how to install Jupyter notebooks on an EC2 server](http://dataschool.com/data-modeling-101/running-jupyter-notebook-on-an-ec2-server), it is time to learn how to use Jupyter notebooks. Jupyter Notebook provides a portable development environment for easy collaboration and sharing of coding projects. Running your notebook on a server allows you to run queries from any computer that has access to your server.

## Copying Databases into an EC2 Server

Before accessing your Jupyter notebook you should transfer the database files that you would like to develop queries for into your server. Once you connect to your EC2 your terminal will be used to control your server.

The easiest way to transfer files into an EC2 server is with \`scp\`, which stands for “Secure copy”. \`scp\` is a function built to securely copy files over SSH. To move your files onto EC2 you will need to run:

\`scp -i /path/to/key.pem /path/to/file user@ec2address\`

\`scp\` works easily with CSV’s and allows for quick deployment of your Jupyter Notebooks.

## Using Jupyter

Before creating a Jupyter Notebook you need to decide what language you are going to be coding in. Jupyter provides many built in languages including R, Julia, and Scala. This article is going to focus on Python3, a high level language that is often used in data analytics.

It is recommended that you organize your notebooks in folders in order to avoid having a messy and confusing notebook structure. When creating your first notebook, navigate to the desired folder, click “New” and then click “Python 3” in the drop down menu:

![](https://lh3.googleusercontent.com/mAax6TztP-ICP7_FZyAolA7cHMb5vjAWJ0aIPZjJZJ0OMPYci-WEpkAxKQ-kvKqqHNkgBLDLOF8KLdZ-sP_lRgcqVS4S6jTLQVe2yqizsuKKKIEhjw1VWQhkcBDhc5xgui0ROzmA =624x431)

Once you click on “Python 3”, your new notebook will open and display in a new window:

![](https://lh6.googleusercontent.com/1ixHOySm70JyYw24DyA8BrXjSxL_sY2TXTyxbjSKnihqbcNHtP5LnfxSWbF2rKMd8MOospUcD5iEeqaKg3AYOHxxP1gRn90sRgEiydgNKQtakwiEYoKX7h9Q59okyr5EbsYwiX5h =624x432)

From here, you can begin writing your Python code to access, process, and analyze your databases.

## Example Notebook

For this example we will be using a notebook called “TestNotebook” and a dataset called “Shop”, which stores values that could be found at a local shop.

TestNotebook in the notebooks folder:

![](https://lh4.googleusercontent.com/rcvDLCnAy3fDPgYnGzORLQ1a1GjxH01ZPBZAix1W4dE_iOVHcqn2tLp8VG1PLLYDGKG5LESQ-RiXVTpoON8UxpT4sKQ4udd_Lo-JOwfUPavlj8aAOtHEbSzEcD0tlvXDPpA6G8yJ =624x432)

Shop.csv in the data folder:

![](https://lh3.googleusercontent.com/Ou5I_C7MBuk55J-Y5iei6BsumBziH28D4SNpTR-py2C84klMi7QUXwabhFI60fFj1h9A_DTaJ2ypMJTMx19FZA2qnrGERP1ebeziSypBXlJPzWj-CyCoJY5aFI4NGFxEasDNUz7A =624x432)

Something to consider when expanding your notebook use is creating folders, as seen above, for storing and organizing your files into groups. The file “shop.csv” is in a folder called “data”, and “TestNotebook.ipynb” is in a folder called “notebooks”.

## \`pandas\` and \`numpy\`

There are two main packages that are necessary for data analytics in Python.

1. The first is \`pandas\` which is a combination of the words “PANel” and “DAta”. \`pandas\` is used to import and create data tables.
2. The second is \`numpy\` which creates the data structures necessary to run data queries in Python. \`numpy\` is also the basis for \`pandas\` which relies on the \`numpy\` data structures to create its tables.

The basic steps of performing a data analytics project in python are:

1. Import Python’s file reader(\`pandas\`) and data analyzer(\`numpy\`).
2. Use \`pandas\` to import your \`.csv\` file.
3. Use \`numpy\` to create a readable array.
4. Use \`numpy\` again to perform an aggregation of that array.

A full [list of \`numpy\` functions can be found here](https://jakevdp.github.io/PythonDataScienceHandbook/02.04-computation-on-arrays-aggregates.html).

### Following Along

Say you wanted to find the average value of items in the Shop. You could write a query like this:

![](https://lh6.googleusercontent.com/hRNZATtF6FMK6MmHdmKTyxl_TVM3llZCDE4RN2fmk-C3GfPJ3gYkvs2R3M_r1YcuQjjiwn4NGaPYZVA67sSHWYDnyiacMJxgD_iWUaH8M_fO33gH4k3CBQ4Uy_jGHKaV8sVaYTrN =624x428)

\`\`\`code

import pandas as pd;

import numpy as np;

\`\`\`

Importing \`pandas\` and \`numpy\` is required to use them to perform data analytics. You can also use \`as\` to change the keyword used to access the given library. This allows you to access the \`pandas\` library by calling \`pd.\[method name\]()\` and the \`numpy\` library by calling \`np.\[method name\]()\`.

\`\`\`code

data = pd.read_csv(‘\~/data/shop.csv’);

prices = np.array(data\[‘price’\]);

\`\`\`

You can then use the \`read_csv()\` method from \`pandas\`to read in a \`.csv\` file. To do this you must specify the location of the file in your file as the parameter for the method.

You can then use \`numpy\` to read from the file and creates an instance of a Python datatype, \`ndarray\`, from one of the columns. In this case we are selecting the price column from the shop.csv. To do that, use the method \`array\` and pass the column you want to perform aggregations on as the parameter of the method.

\`\`\`code

avgPrices = np.mean(prices);

\`\`\`

You can then use the \`mean\` method from \`numpy\` to find the mean of all of the data in the ‘Prices’ column of the table. This value is then saved to the \`avgPrices\` variable.

\`\`\`code

print(avgPrices);

\`\`\`

The value of \`avgPrices\` is then printed to the console with the \`print\` command.

For a full [python data analysis tutorial click here](https://jakevdp.github.io/PythonDataScienceHandbook/).

### References:

[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html")

[https://jakevdp.github.io/PythonDataScienceHandbook/](https://jakevdp.github.io/PythonDataScienceHandbook/ "https://jakevdp.github.io/PythonDataScienceHandbook/")