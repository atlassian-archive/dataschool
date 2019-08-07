---
section: book
title: SQLBox test (DO NOT PUBLISH)
meta_title: ''
description: ''
number: 
authors:
- _people/blake.md
reviewers: []
feedback_doc_url: ''
image: ''
is_featured: false
img_border_on_default: false
is_under_construction: false
is_community_story: false
story_intro_blurb: ''
reading_time: 
published: false

---
Using Charito's SQLBox

======================

 Chartio's SQLBox is a JavaScript tool developed for executing SQL code right from the browser. SQLBox is a tool that will allow developers to test and demonstrate SQL queries, while still giving users the ability to control the input and output of the code.

Creating a basic SQLBox

\-----------------------

To create an SQLBox you use the following code:

\`<sqlbox></sqlbox>\`

This will create an empty text box that has access to the database linked to the given SQLBox.

There are several important keywords that give SQLBox the functionality that makes it useful for web developers.

\### SQLBox Keywords

\-   \`initial\` - "The initial text to put in the text box"

\-   The initial tag is used whenever you want to pre-fill the SQLBox with text, such as providing a query that you want the user to be able to run.

\`\`\`code

<sqlbox 

initial='SELECT * FROM table;' 

></sqlbox>

\`\`\`

<sqlbox 

initial='SELECT * FROM table;' 

></sqlbox>

\-   \`autorun\` - "Automatically run the initial SQL on load"

\-   Autorun allows you to run the query in the SQLBox on page load

\-   To enable this set to \`true\`

\`\`\`code

<sqlbox 

initial='SELECT * FROM table;' 

autorun=true

></sqlbox>

\`\`\`

<sqlbox 

initial='SELECT * FROM table;' 

autorun=true

></sqlbox>

SQLBox can also be used to test people's knowledge of SQL with test conditions:

\-   \`answer\` - "The correct SQL.  This is not matched character by character, but by the resultsets being the same."

\-   Answer allows you to provide a query to compare to the entered query and the returned tables are compared to determine if they match

Example: Return all of the columns in "table".

\`\`\`code

<sqlbox 

answer='SELECT * FROM table;' 

></sqlbox>

\`\`\`

<sqlbox 

answer='SELECT * FROM table;' 

></sqlbox>

\-   \`hint\` - "An optional hint for the person.  Will display a button saying 'show hint'."

\-   Hint allows you to provide a hint for the user that will be displayed after pressing a "show hint" button

\`\`\`code

<sqlbox 

answer='SELECT * FROM table;' 

hint='Try using SELECT *'

></sqlbox>

\`\`\`

<sqlbox 

answer='SELECT * FROM table;' 

hint='Try using SELECT *'

></sqlbox>

\-   \`correct_message\` - "The message to display when the result is correct.  Defaults to 'Correct!'"

\-   Correct Message can be used to provide some feedback after a user has demonstrated that they have learned/understand a topic.

\`\`\`code

<sqlbox 

answer='SELECT * FROM table;' 

hint='Try using SELECT *'

correct_message='Correct! SELECT * can be used to return all of the columns from any table you have access to.'

></sqlbox>

\`\`\`

<sqlbox 

answer='SELECT * FROM table;' 

hint='Try using SELECT *'

correct_message='Correct! SELECT * can be used to return all of the columns from any table you have access to.'

></sqlbox>

\-   \`incorrect_message\` - "The message displayed when the result is incorrect.  'show_incorrect' must also be set to true for this message to be displayed. Defaults to 'Not correct yet.  Keep trying!'"

\-   Incorrect Message can be used to let the user that they have not given the correct query.

\-   \`show_incorrect\` - "A toggle as to whether you should show that a result is not correct.  Defaults to 'false'. Leave blank if you'd like false."

\-   Show incorrect needs to be set to true in order to display the Incorrect Message

\`\`\`code

<sqlbox 

answer='SELECT * FROM table;' 

hint='Try using SELECT *'

correct_message='Correct! SELECT * can be used to return all of the columns from any table you have access to.'

show_incorrect=true

incorrect_message='Not quite, try again.'

></sqlbox>

\`\`\`

<sqlbox 

answer='SELECT * FROM table;' 

hint='Try using SELECT *'

correct_message='Correct! SELECT * can be used to return all of the columns from any table you have access to.'

show_incorrect=true

incorrect_message='Not quite, try again.'

></sqlbox>