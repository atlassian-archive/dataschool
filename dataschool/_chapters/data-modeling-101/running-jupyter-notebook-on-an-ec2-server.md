---
section: book
title: Running Jupyter Notebook on an EC2 Server
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
is_under_construction: false
reading_time: 
published: false

---
## What is Jupyter?

[Jupyter](https://jupyter.org/) is an open-source application that allows you to create and share documents that contain live code, equations, visualizations and text. Jupyter can produce a variety of outputs, such as:

* HTML
* Images
* Videos
* [LaTeX](https://www.latex-project.org/)
* [MIME(Multi-purpose Internet Mail Extensions)](https://whatis.techtarget.com/definition/MIME-Multi-Purpose-Internet-Mail-Extensions)

Jupyter can be used to leverage big data tools and works with over 40 different languages.

### **How to use Jupyter**

There are two ways to use Jupyter on your own computer:

* In the browser at [Jupyter.org](https://jupyter.org/)
* On your computer
  * Two ways to install Jupyter to your computer, both can be found [here](https://jupyter.org/install).

These options work just fine for personal use but you can also install Jupyter onto an AWS server so that it can run be accessed from anywhere. To do so requires a little more work on the front end but allows you to access your Jupyter Notebook from any computer as long as you have a network connection.

#### Step 1: Create an EC2 Instance

(link to article on creating EC2 servers)

#### Step 2: Customize your EC2 server for Jupyter

To run your Jupyter Notebook on your EC2 server, you are going to need to add a new security group. On the EC2 instance page go to the “Security Groups” section:

![](https://lh4.googleusercontent.com/XUjEyngC9oTsY44bGS6RcNMdeyp9Ui0-sUvZ1gysDWlgtd5KACYdvbb-YkcYH6T9CCeB3a7b4vx3_B_eMFvFcIQfMMh51Mv8YuZknx62cZAByZrthH-FBKZpDKMmoeGXNc2Z-PdW =624x453)

Here you need to create a new security group by clicking “Create Security Group” on the top of the page.

From there you need to give the group three properties:

![](https://lh4.googleusercontent.com/BQn519jJ2o6roceLoamCLqp6xxu9nZW_Edsn-xXAEVFHkYZIeXIea5ScB6vQuYhmlz2j367QAemUZEdKeZyiGTy56i8A9dO1AQLuKBmQTmgnCvh5UH34s8H4Ok1yPoqEEmlCp5Ft =624x457)

Use “Add Rule” to add new Security Group rules. You will need three new rules:

* The SSH rule will allow us to connect to the server via SSH.
* The HTTPS rule will allow us to connect the EC2 to a website.
* The Custom TCP rule determines which port to run the website on.

Setting the source to anywhere will allow you to access your Jupyter Notebook from any IP address. You can limit access by entering a custom IP into the source.

Once you have all of that set “Create” this new security group.

Next go back to the “Instances” tab:

![](https://lh4.googleusercontent.com/J955gVPW9cYvvd36fzZhVqKwK9_mabCSVJrTbbuW3JW0BB9FL3kXWj4k__pCU3NbWeJZyxTxzIOuIUaTipueJVrLy436adDu5EM1jTOsW5g-HoFHPMhn9SaGS2DVAMvBGOhY0xdb =624x440)

Select the EC2 instance you are going to be using for your Jupyter Notebook, go into “Actions”, “Networking” and click “Change Security Groups”:

![](https://lh4.googleusercontent.com/uvpgJ0g5cT_DZdKbLjrkS_eQT6Cw7np_BS6HItFQa95O7Ew6FvQbnaGSFDESE3TeCtfoNl1z5csvhI_AuyJSDLOob1ToGsYmLsMLsvsflAiWk-ZYY8N55vDmZYW6_IOvBweXR4P_ =624x455)

In this menu, select the security group that you just created and then click “Assign Security Group”:

![](https://lh6.googleusercontent.com/RpdSvcUp-YSRt1wy3wG_VJ1mANuFl8StxCidTINDAWsQdVzIsx2lKgbJHXYvNXVSESq2JAj9-bKObvN_FE2mQhVKmIpCZP2A7LUu2dNeoE3RcGU82U8WTM_GxU9oL8AuZXWW7UcW =624x455)

#### Step 3: Connecting to your EC2

Before you begin, make sure you followed “Step 6” of the “Creating an EC2 Instance” article and changed the permissions for your \`.pem\` file.

`sudo chmod 400 /path/YourKey.pem`

By clicking “Connect” at the top of the instances page, Amazon will provide a list of instructions on connecting to your EC2 server:

![](https://lh3.googleusercontent.com/3undu2te7n8qogubQvXQKPkLyjk42ZIyoEN4jpjf0XQJE50r2FiXcVDbQklK35y_Lhz01oZZDO99pC6ut7GB-fkv5qgaYfKTcSnR4j8QYnZXrmHTA7w6ztrmFr8L3LiklLm0_rhS =624x457)

_Note: you will need to have an SSH client on your computer. All Macbooks come with SSH, Window users may have to install an SSH client. On you command line you can check if you have an SSH client by typing “SSH” and hitting enter and checking if your terminal recognizes the command._

You should be able to connect to your instance by copying the “Example” from the “Connect” tab. If you get an error about not being able to find the Permission File you may have to specify the path to the file. Move information on connect VIA SSH can be found [here on Amazon’s help site.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html?icmpid=docs_ec2_console)

You should be greeted with a message:

`Welcome to Ubuntu 18.04.2 LTS` or whatever Operating System you installed.

![](https://lh6.googleusercontent.com/X3AcZ5H98sh8bPJt86Lh1D0H-eNd2sBw4F9qAVAgLhzlzTuGwtiaXMMbugb7vriP2JnINPSm6uM31oKZMFwp708v33amh4dtokyQMYFzcMV9UaWzKygAmwolJ2dF61wmVUCa4yQ6 =624x405)

#### Step 4: Installing Jupyter Notebook

Once you are connected to your EC2, you now need to install Jupyter. The easiest way to do this is to download the [Anaconda distribution](https://www.anaconda.com/distribution/) that matches your Operating System (if you are following along using Ubuntu, this is the Linux version).

![](https://lh3.googleusercontent.com/koc6EgWeGC6SdeZQtHYITXMuPyHXNJCz2VAiXE3tBgqDW2HhbHXbrqBPoJ7-VeBm35WRfLIpvkKfsRRr80vKJGZxsToFAn_Tr6rAIL4K8nXiL49fxXkIV-wlcSL-W0TEATuEZWvB =624x447)

To download the Anaconda distribution to your EC2, copy the “installer” link and run:

`wget ``[https://repo.anaconda.com/archive/Anaconda3-2019.03-Linux-x86_64.sh](https://repo.anaconda.com/archive/Anaconda3-2019.03-Linux-x86_64.sh "https://repo.anaconda.com/archive/Anaconda3-2019.03-Linux-x86_64.sh")`

(this is the latest version as of writing this article)

Once the file is downloaded run \`bash\` on the file that was downloaded to install it:

`bash Anaconda3-2019.03-Linux-x86_64.sh`

#### Step 5: Configuring Jupyter Notebook’s Path

First, we need to add Jupyter to the system’s path (you can check if it is already on the path by running: `which python`, if no path is returned you need to add the path) To add Jupyter functionality to your terminal, add the following line of code to your `.bashrc` file:

`export PATH=/home/ubuntu/anaconda3/bin:$PATH`

![](https://lh6.googleusercontent.com/elv2Fscjr9LyHUKTDLPAOq-0gBFSI1SoGAfjrkp6ChhAyp289YLTgN1dBz8x4ybg16yRmbkd1WlFHZkXINejS__Xaxj-4fL4HS7WVIqGldud4wJOjj1uvgP6LpeT0P-iP09Ycd3S =624x405)

After saving this change, you now need to run:

`source .bashrc`

To cause these changes to take effect. Now running \`which python\` should return the path to the python folder in Anaconda.

#### Step 6: Configuring Jupyter Notebook settings

First, you need to create our Jupyter configuration file. In order to create that file, you need to run:

`jupyter notebook --generate-config`

After creating your configuration file, you will need to generate a password for your Jupyter Notebook using ipython:

Enter the IPython command line:

`ipython`

Now follow these steps to generate your password:

`export IPython.lib import passwd`

`passwd()`

You will be prompted to enter and re-enter your password. IPython will then generate a hash output, **COPY THIS AND SAVE IT FOR LATER**. We will need this for our configuration file.

Next go into your jupyter config file:

`cd .jupyter`

`vim jupyter_notebookc``_onfig.py_`

And add the following code:

\`\`\`code

conf = get_config()

conf.NotebookApp.ip = '0.0.0.0'

conf.NotebookApp.password = u'**YOUR PASSWORD HASH**'

conf.NotebookApp.port = 8888

\`\`\`

#### Step 7: Create a directory for your notebooks

This step is easy. In order to make a folder to store all of your Jupyter Notebooks simply run:

`mkdir MyNotebooks`

You can call this folder anything, for this example we call it “MyNotebooks”

#### Step 8: Connecting to your EC2 Jupyter Server

After Step 7, you should be ready to run your notebook and access your EC2 server. To run your Notebook simply run the command:

`jupyter notebook`

From there you should be able to access your server by going to:

`https://(``**your aws public dns**``):8888/`

For example it should look like:

`https://``[http://ec2-18-222-233-183.us-east-2.compute.amazonaws.com:8888/](http://ec2-18-222-233-183.us-east-2.compute.amazonaws.com:8888/ "http://ec2-18-222-233-183.us-east-2.compute.amazonaws.com:8888/")`

You should be brought to a page like this:

![](https://lh5.googleusercontent.com/q0D5xBW7MlRpRz_PydfJQ18EV1mXEqSzTolRWYqySHFGdb0FmllJ9qJDEeqZf5r3zFveunYPdybDmJFa7x5SWqg_ekCcIbQWRVnKnfS3su79aBHezzMgY49aqU6vlElsQFzcEoUI =624x457)

Enter the password you created and you should be greeted with your full Jupyter Notebook system:

![](https://lh6.googleusercontent.com/4qv0IFRyFer-sS0r9Zxy4rGU05qmTM6ZtDAM1pcqbERVUaIOFGbcBIhmz00x1UJla9mcEB5B97drZ9leEbbVcQMwszRmytgt05h6GLpPHSYpZQHKld24GpI6QBRiuInPMbPnH7LS =624x457)

References:

[https://jupyter.org/](https://jupyter.org/ "https://jupyter.org/")

[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html?icmpid=docs_ec2_console](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html?icmpid=docs_ec2_console "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html?icmpid=docs_ec2_console")