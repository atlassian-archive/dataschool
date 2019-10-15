---
section: Data Lake
title: Data Lake Security
meta_title: Setup Security on a Data Lake
description: Learn best practices for ensuring data security on a Data Lake database.
number: 6
authors:
- _people/matt.md
reviewers:
- _people/dave.md
feedback_doc_url: https://docs.google.com/document/d/1zJuiI7_bM9rLMBe5yAiI3H7llHsbDk6FEqjk_Tz9Ki0/edit?usp=sharing
image: "/assets/images/Data Lake Security.png"
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 

---
Prior to having a Data Lake, all analysis had to be done by working with data in many different places. These tools required individual logins which are hard to track and maintain the appropriate levels of access.

Data Lakes provide a way to centralize access to data and make it simpler to manage permissions.

Data coming in to the Data Lake is likely not cleaned yet so there may still be sensitive information coming through. Don’t Extract or Load sensitive data/columns, this is configurable within the ELT tools. Also be wary of who you grant access to the Data Lake since it gives much more access to all of the data than giving access to a particular source.

## Access in central place

Remove access from individual tools, move all access to Data Lake. This will cut down on tickets requesting access and mishaps where people retain access to information they shouldn’t have.

![](https://lh5.googleusercontent.com/b0yUrkc5tvPF8hvUsSI184etgEeTfxmf62ZJeENI8_YzGYLxjBRcHAwMrHBGeROIlnewRSCjkXR9NIjb0hL2MxfkSiI16AQBwBDy2YegUe8Jd31KrryiAq_Mupb10VAgHo7iXaEP)

## Permission tiers

Now that you can easily grant anyone access to data, you will have more people accessing data. While this is advantageous for analysis and exploration you do need to be mindful of what schemas and tables they can see.

Start out by creating two users groups on the Data Lake as follows:

1. For admin and engineers
2. For analysts and business users

You can prevent the second group from accessing sensitive data in the Data Lake by having that group not have access to the schemas or tables with that type of data.

![](https://lh5.googleusercontent.com/EBZLvI4bTX2xhZPvfxfa2esMvquX_lw4aTEo86YdP0S2LFGHW2zHDK9-maTlML1TE4WSsAysisBALWmVm3IZyn_AP1jtMzrXJoMvXJiY_Rvgxo4BmL5EUc72N5Q_T6lsrRV5KzW5)

In general set broad controls so it is easy to manage. As you grow in sophistication and turn your Data Lake into a Data Warehouse and Data Mart you can create more refined permissions settings.