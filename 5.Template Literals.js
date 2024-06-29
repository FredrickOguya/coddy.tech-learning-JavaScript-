/*
Template literals, or template strings were introduced to make working with strings more simple. To explain them, let's first declare some variables.'

const name = 'John Doe';
const age = 31;
const occupation = 'Web Developer';
const city = 'Miami';
 

Let's say we want to create a sentence with this data. Without template literals, that would look something like this.

const sentence = 'Hi, my name is ' + name + ' and I am ' + age + ' years old. I work as a ' + occupation + ' in ' + city + '.';
// Output: "Hi, my name is John Doe and I am 31 years old. I work as a Web Developer in Miami."
 

We can use template literals instead. They are created with `` instead of '' or "". Whenever we want to add a variable inside of a template literal, we don't have to use the usual string + variable + string syntax, but rather we can just write: ${variable}. For example:

const sentence = `Hi, my name is ${name} and i am ${age} years old. I work as a ${occupation} in ${city}.`;
// Output: "Hi, my name is John Doe and I am 31 years old. I work as a Web Developer in Miami."
This might not look like a big difference now, but once you start writing more complex code it will save you lots of time. If you need to write HTML code in JavaScript, template literals are a life saver. Also, once you start learning frameworks like React, you will use them a lot.
*/