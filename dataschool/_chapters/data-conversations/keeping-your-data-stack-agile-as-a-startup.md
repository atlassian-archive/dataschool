---
section: book
reading_time: 
title: Keeping your Data Stack Agile as a Startup
meta_title: Agile Data Stack for Startups
description: What considerations you should have while building a modern data stack
  as a startup.
authors:
- _people/jacob-cohen.md
reviewers:
- _people/matt.md
feedback_doc_url: ''
image: "/assets/images/pipes.jpeg"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
faqs: []

---
Change is constant. This is especially true when it comes to data for Startups. New features, new tools, new data sources are constantly emerging. Startups need a data architecture that is flexible so they can keep learning from their data as they grow. They cannot wait for clean data.

The [Modern Data Architecture](https://dataschool.com/data-governance/) separates key functions of the data stack into off the shelf tools and open source software that can handle vast amounts of complex data. This has dramatically reduced the cost and complexity of setup and has made it easy to swap out different pieces.

A Modern Data Architecture is comprised of

* Collecting and/or extracting data from various sources
* Storing all the data somewhere
* Transforming the data to be more useful
* Visualizing the data

![black metal tube lot](https://images.unsplash.com/photo-1543674892-7d64d45df18b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

## Collection/Extraction

First let's talk about where the data comes from. Typically data is either collected raw or extracted from an existing system or off the shelf product. Tools like [Stitch](https://www.stitchdata.com/) and [Fivetran](https://fivetran.com/) have made it trivial to connect and keep various data sources up to date. You can change tools and plug your data in to these [ELT](https://dataschool.com/data-governance/etl-vs-elt/) tools. Do not build your own pipelines if you can avoid it. It is costly to set up and very costly to maintain.

![architectural photography of dome](https://images.unsplash.com/photo-1560320652-6acbefacb0fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

## Storage

Data storage is one of, if not the most critical early decisions required in any startup architecture. Typically once this choice is made there’s no going back on it. Your data is core to any software solution, making your database the foundation of that solution. Once the foundation is established, it becomes an extremely heavy lift to swap it out later. In an agile world you most likely aren’t 100% sure about what the final product will be, that’s why it’s important to choose a flexible database that can easily adapt to a constantly changing design. You also want to look for technologies that are easy to use, resulting in low ramp up time. Finally, it’s important to stay cloud agnostic, preventing vendor lockin and ever increasing costs.

Developers spend too much time supporting and maintaining their database technologies instead of focusing on building their applications. Many times this includes multiple different database products to accomplish transactional/production and analytical loads. A hybrid/transactional analytical processing (HTAP) database technology is designed to accomplish both in a single package. Enter [HarperDB](https://harperdb.io/), an HTAP database designed with simplicity in mind. Users can be up and running in 5 minutes, meaning they can focus on their primary objective: application development. HarperDB supports SQL (including joins) and [NoSQL](https://chartio.com/blog/mongodb-with-chartio/) through a simple REST API, making it easy for developers to ramp up, and is language agnostic. The dynamic schema adapts to any and all data changes in real time, all while being a fully indexed database. This means you can discover and analyze your data as you acquire it. All of your HarperDB instances can be managed through the sleek [HarperDB Studio](http://studio.harperdb.io/) interface.

Ultimately, when it comes to database technologies you want to choose a tool that doesn’t hinder your ability to be innovative, but instead helps accelerate your projects. In other words, pick something developers enjoy using that won’t lock you into a specific vendor.

![black kettle](https://images.unsplash.com/photo-1566792368824-333224d5b5e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

## Transform

[DBT](https://www.getdbt.com/) has burst on the scene with an open source SQL based language making engineers out of analysts. It is a much cheaper option than buying Looker for LookML. Depending on the use case, you may also choose to write your own transformation logic, but this can get complicated over time.

![flat-lay photography of variety of beverage filled glasses](https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

## Visualize

Visualization tools are not created equally. Most were created with the assumption of a clean spreadsheet. This is not the reality today. Data sources change a lot and data will be messy quite often. Chartio excellently handles this by giving you pipeline tools for any query for every chart. This makes it quick to find insights and experiment with [modeling the data](https://chartio.com/product/modeling/) without having to write any code. Once you find helpful transformations you can go back into dbt and update the underlying model making it easier for everyone in your company to work with the data.

Avoid Vendor owned viz tools, these are largely used as sales wedges which is distracting. No one wants to be continually pitched on a type of storage, especially when you might need to change at some point. Will you still receive the same level of customer support if you aren’t fully within their ecosystem? Another thing to avoid when selecting a viz tool is proprietary modeling languages. These create lock in,which makes your company less flexible in switching out pieces of its data stack.

Lastly consider the learning curve for your viz tool. Every insight is super valuable to growth at the beginning of a company, and limiting who can find these insights can limit your growth. Pick a tool that helps people query a database even if they do not know how to write SQL. Chartio built Visual SQL for all the non-technical people to be able to meaningfully explore a company’s data.

Startups need to stay data stack flexible, and with tools available today like Chartio and HarperDB, it has never been easier.