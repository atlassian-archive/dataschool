---
section: book
reading_time: 10
title:  Five Key Aspects Organizations Should Consider While Deploying An Analytics Stack
meta_title: Legacy vs Cloud Based BI Tools
description: Learn the Advantages and Disadvantages of having legacy on-premise BI tools vs cloud based tools.
authors:
- _people/siddarth-dayama.md
reviewers:
- _people/allen-hillery.md
feedback_doc_url: ''
image: "/assets/images/On-premises-and-Cloud-managed.jpg"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
faqs: []

---
### Background

My career to date has provided me with experiences in both lean tech startup companies as well as a Fortune 15 telecommunications company.  I have intimately worked with multiple and contrasting analytics infrastructure environments. Let me break down the dichotomy of legacy based on-premise analytics systems versus completely cloud-based business intelligence tools for you. As you may have already discovered with the process of deploying an analytics stack, there will be pros and cons for both on-premise as well as cloud based BI tools that will range from cost to organization size. 

I previously worked at a start-up which later grew and merged to form WTA Networks. We built web & mobile apps and generated exclusive behind-the-scenes content for some of the world’s best tennis players & brands including Maria Sharapova, Novak Djokovic, Porsche and Nike etc. We had a completely data driven approach to hack growth and implement strategies to acquire users, increase paid subscribers and engagement on our apps for which we used a host of cloud-based third-party SaaS analytics tools. Cloud-based SaaS analytics tools, fully hosted in the cloud by the service provider including the client’s data, enables the end user to get up and running within minutes without additional hardware. All upgrades and maintenance are automatically managed for you by the service provider. This lean approach to business analytics allowed each team member within the startup to focus on what they do best. The subject-matter experts could self-serve and extract insights to answer their day-to-day questions.

We worked with a ton of web, mobile and social data sourced from the cloud. With such a solution one could perform all analytics actions in the cloud with real time data updates. These solutions enable easy access from the desktop as well as mobile devices for stakeholders both within and outside of the corporate network. Another notable advantage was ease of scalability, when demand on our apps increased, there was no additional negotiating or managing software and hardware configurations.

The analytics environment in my current role at Verizon is in stark contrast to my former organization. With 118 million wireless subscribers and being a tier 1 internet service provider (ISP) powering a large amount of the world's Internet traffic, there is huge amounts of data flowing throughout the organization. Data Science is at the core of decision making at Verizon.  Analytics and business intelligence operations are powered by a massive data tech stack with some legacy on premise data warehouses at the core that not only support traditional BI tools but also leverage third-party API handshakes and integrations with the latest licensed open-source software applications. 

As most data servers are deployed on-premises, Verizon’s IT department is in full control of the configuration, management and scalability of hardware and software in house. On-premise deployments give IT departments tremendous control with respect to data security, governance and user access. However, deploying, implementing and maintaining such legacy based on-premise analytics systems would require a significant capital investment for hardware, real estate acquisition and a long-term project cycle plan that factors in a phased execution. 

So, what are some of the key aspects organizations should be considering while deploying their analytics stack? Ask yourself these five questions to decide which deployment options are best for you. 

#### 1. Where Is Your Data Stored?

Most organizations have data in a variety of formats and systems, and they continue to add more. **Is your data predominantly stored in the cloud or on-premises?** If your data is hosted mostly in the cloud, consider a **_cloud-based solution_** for your analytics platform. If most of your data resides behind your company’s firewall, **_deploying the server on-premises_** is likely the best option. Do not stop at your current data architecture; **consider your future data strategy**. Are you likely to move your data to the cloud in the near or medium term? In this case a hybrid data scenario would be apt, allowing you to connect to your data still on-premises while you add new databases and applications in the cloud. Take into consideration all data-related compliance policies for your industry and region. Is your data mandated to be stored in a specific geographical location? Most public-cloud providers offer availability in many regions around the world. If you need to keep up to date with regulatory compliance but want to avoid incurring the associated costs in-house, the cloud is your solution.

#### 2. What Resources And Skills Do You Have Available For Ongoing Management Of Your Server?

If you are currently running your software on-premises and plan to keep it that way, you probably already have the people and skills in place to manage and maintain servers on-premises. Alternatively, if you’re already using public-cloud infrastructure or if it’s part of your strategic roadmap, you can choose to deploy the server to your preferred cloud platform. This will eliminate the need to look after your hardware, so your team can focus purely on managing the server and user community. Many IT organizations are increasing the cloud competencies within their teams. Deploying servers to the cloud can be part of these efforts. Documentation and support offered by the SaaS platforms can be leveraged for a low risk start to your cloud journey. **If resources on hardware provisioning or management are limited, an online analytics service hosted in the cloud as a SaaS offering would be best.** You don’t have to manage a server or worry about configuration, scaling, and maintenance. Your own site can be set up in minutes and the Saas platform will do the rest!

#### 3. Who Will Be Using Your data and dashboards?

**It’s important to think about the people who will use your dashboards and data.** Will you have internal users on your corporate network only? Or will you have external users accessing your data and analytics? External users could be clients or customers but also partners or suppliers. If you deploy servers behind your organization's firewall, enabling access for external users should be accounted for when setting up the server architecture. Configuring a secure external-facing server within your on-premises deployment may require some effort and knowledge about additional infrastructure, such as, configuring a reverse proxy server. In contrast, for a cloud-based solution setting the permissions to grant access to users internal or external to your company is more straight-forward. If your users are often on the go and prefer not to use VPN, an online solution would allow them to log on from anywhere.

#### 4. How quickly do you need to deploy a solution?

**Timelines vary for different organizations.** Consider a cloud based solution if timing is constrained.  Your site can be provisioned in a matter of minutes and you can simply add users, dashboards and data sources. There is no hardware and software provisioning or configurations to be concerned about. An on-premise server, on the other hand, is installed and configured by you. Deployed on your own hardware platform. **Getting the right hardware can sometimes take time, so make sure to consider this in your project plan.** Companies that go this route usually have an extended roadmap and time is not an issue. In many instances there is extensive corporate software vetting and infrastructure reviews. 

#### 5. Do you anticipate the need to quickly scale your analytics deployment up/down?

**A cloud-based online instance can take care of all the server and hardware configuration and scaling.** The service provider will provision your site; all you need to do is add new users as needed. All it takes is a few clicks. However, if you need total control of both your hardware and software, deploying your own server either on public cloud or on-premises is the most flexible choice. This gives you the ultimate control over the hardware you use, whether you run on Windows or Linux, and allows you to configure to your exact needs. Scaling up the server might include adding more physical resources to the same server, upgrading to newer and more powerful hardware, or increasing the number of particular processes. Scaling out a server involves adding more server nodes to the environment and load-balancing or distributing the workload. Most companies run a point-and-run load and performance testing tool designed to work seamlessly with their servers. However, to decide whether to deploy the server on the public cloud or on-premises will depend on how fast you need to scale. With servers on the public cloud, you can not only decide on which cloud infrastructure to deploy on e.g. Amazon Web Services, Google Cloud Platform, or Microsoft Azure but you can also scale up and down very quickly making changes when necessary. Switching your hardware becomes much easier when the deployment is in the cloud, as does updating your configuration options. For example, you can go from a single node to multi-node cluster without having to worry about changes to your hardware. It’s as easy as using the CloudFormation templates on AWS that help you set up your cluster automatically. 


![](/assets/images/cloud-vs-server1.png)

In summary, there will be pros and cons for both an on-premise analytics solution vs a cloud based that will range from cost to your organization size. The first thing to consider is where your organization's data is currently stored. You will want your analytics stack to live there be it on-premise or in the cloud. The data stack may live both places so consider a hybrid solution. Next think about your audience and how they will be accessing the data and BI tools. Accessibility is key for a good adoption rate. Last, you want to consider your resources. What does your data team look like and how quickly can they deploy a solution? If you anticipate needing additional support, you might want to consider a cloud solution as there will be less infrastructure to maintain in-house. 
