/*
Boolean logic

In JavaScript, it is common to use boolean logic. We mostly use it in decision making, aka when working with if statements. If statement x == 4 is true, do this. We will cover if statements later on.

Booleans can have two values. True or false. We use boolean logic when we want to evaluate if a whole list of statements is true or not. For example, let's evaluate the sentence "It's raining today and the weather is cold". The first part, "It's raining today", might be true. The second part, "The weather is cold", could also be true. But, the sentence as a whole is true only if both parts are true.

 

Boolean logic is centered around three words. "AND", "OR" and "NOT".

As a Boolean operator, “AND” serves to indicate that ALL specified conditions must be met in order for a query to return true.

The Boolean operator “OR” is used to express that as long as one of two or more conditions are, met the value of a specified query is true.

The operator "Not" returns the opposite of the validity of the condition. Returns true if the condition is false and vice versa.

 

We also need to mention that in JavaScript, anything that has a value is seen as true, and anything that doesn't have a value is seen as false. Typically, false is represented as 0, and true as 1. But, true can be other values as well. Values like: 0, undefined, "", null and more are seen as false. Any other values are seen as true:

const var1 = 0;
Boolean(""); // false
Boolean(var1); // false
Boolean(17); // true
Boolean('code'); // true
 

Comparison operators and equality operators are also used in boolean logic. Comparing numbers and values can be done with: >, <, ==, ===, >=, <=. We will talk about these in an upcoming lecture.
*/