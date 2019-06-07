---
section: book
title: Inner Join - Animated
number: 50
authors:
- author: _people/matt.md
reviewers: []
feedback_doc_url: https://docs.google.com/document/d/1BW7SJQIwigKWFxFe9mf17GCimXZOPKgigRELKteosVE/edit?usp=sharing
image: ''
summary: ''
is_featured: false
img_border_on_default: false
writers:
  writers: []
published: false

---
This is the default type of JOIN in SQL, in fact you do not even need to specify INNER JOIN when writing a query. Only writing JOIN is an INNER JOIN.

SELECT *

FROM facebook

JOIN linkedin

ON facebook.name = linkedin.name

SQL first creates a new table with the columns of both of the tables you are trying to combine.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955f293a3564101c58aeb7_a83UazPdowmpfzxt0GF_oE3Oo3FMeA0abWYK7q2bD4a1BdREqOp0UMvT6d6XvnwuBJB9tfQbpIaqWuyqgjMffVabPl25co9PB342BprqJ3yp0_3o65WaKp5-yg5GPdZ6955ND8-U.png)

It then tries to find values that match between the columns you specify in the ON statement. Putting the table name with a period before the column name makes it clear which two columns of the tables SQL will be looking for matches between.

ON facebook.name = linkedin.name

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955f29855a51018048f883_NaDkL7ei7MsoVIX_mC9iAQ9rYF7bvHMTW7P_YDeF2GH1AWO4OHKxm1KKngL_KQ3eaShoWcqCAEX9giSDYODrrQ4AsP5YFlJzb2N5pJPMDq6Z6ioN8ztVGiJPMEtc13FS2_AiT1ea.jpeg)

SQL then starts with the first value of the specified column in the first table (facebook.name) and then looks through every value in the specified column of the second table (linkedin.name) for a match.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955f2996e83c9277ed05ec_ifC6TjZ2-RbWY4SCIBgauGdkOPwmvc5sDCU2LhoRvQnk9h6Wpm2EhN6miiCxENIyL6ZBPgiT_PQhDull1pb-GW9Za-1Uu26zb_ZtJRsKzDNX-MRz5e98ZlTv5RJCTzJ9RcvmSZC_.gif)

If there is a match it copies the data from both the row of the first table and the row of the second table and puts it into the newly created table. SQL will not add in any rows that did not have a match.

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955f2996e83c5f7ded05db_g8KjvVDZlWk5eDEA6E-JzYQIWWSHOpVaPcx-YMb-0tKA2BpOBUkZfrFtTSQ-Wg18KdcYSxXSq5h-ZA0spWh7Xl6EQxIGJ2F9xpGVA6Opg35Z0Epx2k_C_sip6i6PtYrZ_zY1XhaT.gif)

Be sure to know what data you want in the final table so that the data left out does not affect your analysis.

Another thing to consider is that SQL will join the rows every time there is a match. So if your data in the columns you are joining on are not unique you will get duplicate data in the final table.

Non Unique data in Second table:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955f294cfd2a089638d747_usIuFWn80hJv-m-phI2Kp4PKpvpSIohbSgBPCb6gre85Ox35au159pKeDCn56CRtuQ6n6UgkoBWZAJGXKb-XezXrM8FDgf_ajnMfuxGNvEeM6mwBOUkxa1GvyeEA-nCs6EzWwma2.gif)

Non Unique data in First table:

![](https://assets.website-files.com/5c197923e5851742d9bc835d/5c955f2a855a51fbba48f889_Q2dtrLjtmfbOVdH_WePIEQ9ccN61a_Wvrp-uwNEWlZlgsjxTw6m4c7Jn-NViSxgl86bTpALfi3B6vD-svagYny4HMnNU8qWqhaEe81rP9Icta-tYyuC26wmNUS-ixLRehDgAp-x7.gif)

As we can see the non unique data pulls in the same value from the other table twice. This is a common situation that can cause you to double count data if you are not aware that this is happening.