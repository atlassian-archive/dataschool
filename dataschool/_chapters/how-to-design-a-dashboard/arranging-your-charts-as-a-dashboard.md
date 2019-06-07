---
section: book
title: Arranging Your Charts as a Dashboard
number: 80
authors:
- author: _people/tim.md
reviewers:
- reviewer: _people/dave.md
- reviewer: _people/matt.md
image: ''
summary: ''
is_featured: false
writers:
  writers: []
published: true
img_border_on_default: false
feedback_doc_url: 
---
Arranging the charts is where the science of a dashboard project starts to cede some of its control to art. There are many things to consider when arranging and sizing charts and selecting fonts and colors. How visualizations are composed in a dashboard can either facilitate or hinder the decision making process.

## Alignment & Grouping

In the dashboard that we have been working to create with this book, we ended up with thirteen individual charts, monitoring eight different metrics. Some metrics were monitored twice so the current status, as well as a trend analysis over time, could be analyzed. When we started to create the dashboard we ended up with thirteen charts in three zones. By grouping charts and metrics that are closely associated with each other it gives us a larger picture.

![](https://lh3.googleusercontent.com/MELMV-U3Xh-iZAtd44pP-e8PW-542ovU4Bzb1PSq0mRYFShJ42d4GV6O2Sl7BwYhpwhuE465RvD0XKNmH9qWOK7zVBRo0KVnmHvOEC6mS4fA-mF8CIT0XLk1C1ljyIMStes_WBLR =624x437)

Here we can see revenue and operations metrics shaded in blue, marketing metrics shaded in orange and user metrics shaded in green. Group charts that are about similar topics together.

### Alignment Quick Tips

* If a specific metric is displayed in two ways, these should be right next to each other. For example here we can see both the current Count of Users, and we can see how they have been trending in the graph next to it this year.

![](https://lh4.googleusercontent.com/NWVu0WDztX9TmJ50wZ2JRPcK77BmjnCLpSXJFFq6dPCzMBdie9BA6LWHxPRlJsDXyBS0WdAOM6z-8O3jSGzlQLms68Mg_9VvsQq93M7row7j65GM0_-sNoMpEd2DKsUZUVFUiQaN =348x83)

* Line charts with the same time frame should be stacked vertically to facilitate comparisons. For example below we can see how our MRR (Monthly Recurring Revenue) compares to our operational costs by department.

![](https://lh5.googleusercontent.com/uJ0WtbdotR4fMsmCjs9c8nBCHFkQR_u5362VsILZdDfXhoN88ZmxZ9vpwzyE3w_cIFIDB1voHRhA24Gpmu01Hz6vJ7fgmXpWrQJt9r5XNJjmNPgAaHvZfI0R7WM2Qbgw0mBH0UCd =590x544)

* Put items next to each other with no separation to use the same title for both visualizations. Here you can see that there does not appear to be any separation between these two visualizations. This groups the data and makes it clear they are describing the same thing.

![](https://lh6.googleusercontent.com/Rfh87hPJdEzDzGYBr16j1xwHoBe4FxKtTvRTOrqRA3KDwAFUfvQomEQ5MCUW0p9V5130qurMlp189sBvOBkjes_TiASaTOpQJDsoPEGoBYXWEg2FqyVTxsDvaKYzUpq3lRLtTZ2I =193x152)

## Examine Layouts

Determine the aspect ratio of the device (iphone, laptop, tv, etc) the dashboard you are building will ultimately be delivered on by consulting with the Point Person. View our templates to get ideas about how you could compose visualizations together.

![](https://lh4.googleusercontent.com/lmfhASV0_kMi_8foHAFrih4RyrZGuyRhGJNRZikwzdEzB9ljrAJIXD0L4hzcGHncIBfDX9XnlwV7XIz_OFczgSKzenoFrBTLfBvXysjDftC2lSaHFzA7ZRxH1BylrjjB59HxQO_j =624x429)

View more here: [Dashboard Templates in Figma](https://www.figma.com/file/dTND29GywRZ16tgsv7nORhKx/Dashboard-Templates?node-id=0%3A1)

Also now is a good time to use google and apps that you use with a dashboard interface to get inspired about what combinations work.

Here is a great layout used by Google Analytics:

![](https://lh6.googleusercontent.com/plZiKhtzRY_6YUFocdHVQk0brkvJG5_jwLElBxV4eMa5gtDZTQD6xQtgfNWKhR-aOJRKGbYsoKlSikTAIMWDnIIOsTYQuHRIVlVfAnOK54tUQ3l51amVC7j7MhQpCjx1ntGwkesO =624x253)

[https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812](https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812 "https://medium.freecodecamp.org/how-and-why-to-get-started-with-google-analytics-153dc35b7812")

While being innovative in dashboard design can challenge the way we look at things in a positive way it is also likely to confuse the audience. Stick with simple arrangements that don’t violate the ACES dashboard design qualities in _____

## Limited Variety

At Chartio we have also noticed that dashboards with multiple chart type get more views to a point. Viewership peaks when three different types of charts are used, and it

![](https://lh3.googleusercontent.com/4f8wJuiNeA5bcTkftEcbMMdMeXp40sLZ2BrbIdWlYHBKp8vLn_z_stTaITFcqZ1xRWJPoe2__j4yzrfjXxUAUgnTA7NZas-I77ofJ_T4J9P6LZguA-cGl7SydvzqCNUlR8O2pbhE =624x477)

## Avoid Too Much Information (TMI)

In addition to not including too many cool BI Tool features in your dashboard, remember to not include too many visualizations in your dashboard either. There will be many opportunities to overload the dashboard with too much information. Information overload deteriorates the power of the dashboard.

At Chartio we took a look at the number of visualizations per dashboard and found that it is heavily skewed, the vast majority only use a few charts.

![](https://lh5.googleusercontent.com/jjdQoOSsHDMRxNpuT8qXB4R6Cgd4Q2eXRSWkhx98QEq0ZXTkHU8v7PFnaIBcxXB-ejYPXVG0dWRHIwSZ9KWS4HdprMWOzGnYAsqp8BEzCQGSs8veuhFchT17vygpBH2oI8GVR9iW =624x352)

If information needs to be viewed as is and aggregated at a more granular level, you need a second dashboard containing this has a more drilled down view. Don’t be afraid to link out to other dashboards. This preserves the decisions and goals of the dashboard at hand and let’s people explore the data in more detail if they wish.

## Summary

* Align visualizations to facilitate comparisons
* Group visualizations to facilitate insight
* Familiarize yourself with various dashboard layouts to help develop useful arrangements for your own dashboard.
* Be wary of flashy dashboards arrangements made possible in BI tools
* Do not overcrowd the dashboard with too many visualizations, link out to provide further investigation where appropriate
