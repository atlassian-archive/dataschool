---
title: PostgreSQL Functions
meta_title:
description:
section: Extras
number:
authors: []
reviewers: []
image:
img_border_on_default: false
is_featured: false
published: false
---
Once complete link to from
 - functions: full list of functions

reference:
https://www.postgresql.org/docs/9.0/static/functions-math.html



array_agg(expression)	any	array of the argument type	input values, including nulls, concatenated into an arrayavg(expression)		smallint, int, bigint, real, double precision, numeric, or interval    numeric for any integer-type argument, double precision for a floating-point argument, otherwise the same as the argument data type the average (arithmetic mean) of all input values
bit_and(expression)	smallint, int, bigint, or bit	    same as argument data type	       the bitwise AND of all non-null input values, or null if none
bit_or(expression)	smallint, int, bigint, or bit	    same as argument data type	       the bitwise OR of all non-null input values, or null if none
bool_and(expression)	bool	  bool true if all input values are true, otherwise false
bool_or(expression)	bool	  bool true if at least one input value is true, otherwise false
count(*)		 	  bigint    number of input rows
count(expression)		  any	    bigint number of input rows for which the value of expression is not null
every(expression)		  bool	    bool   equivalent to bool_and
max(expression)			  any array, numeric, string, or date/time type	same as argument type	maximum value of expression across all input values
min(expression)			  any array, numeric, string, or date/time type	same as argument type	minimum value of expression across all input values
string_agg(expression, delimiter) text, text text     input values concatenated into a string, separated by delimiter
sum(expression)	       smallint, int, bigint, real, double precision, numeric, interval, or money	 bigint for smallint or int arguments, numeric for bigint arguments, otherwise the same as the argument data type sum of expression across all input values
xmlagg(expression)     xml	 xml  concatenation of XML values (see also Section 9.14.1.7)
