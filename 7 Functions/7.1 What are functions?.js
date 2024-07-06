/*
What are functions?

Time to cover one of my favorite topics, functions!

A function is simply a block of code that you can use over and over again, rather than writing it out multiple times. Functions enable programmers to break down or decompose a problem into smaller chunks, each of which performs a particular task. Once you write a function, you can forget about the code inside the function. You can just run the block of code in the function using the function name.

Once you define a function, you can then call it whenever you need it, simply using its name. Additionally, in order to work, the function will probably require some inputs or parameters, which are given to the function each time it is called. 

 

Believe it or not, you have already used a lot of functions. Programming languages like JavaScript come with build-in functions that you can use. For example:

console.log('Hello, World!');
This is an example of a method. A method is a function that is attached to a class. We will learn more about classes in the next course.

The console.log() function, used to display messages in the console, is called by giving the name of the function, console.log, followed by a pair of parentheses ( ) which contain the parameters you want to pass to it. In this case, the string "Hello, World!" is the only parameter. Functions can be thought of as little machines that perform a specific task, where the parameters are the inputs to the machine.

 

There are also functions that don't take in parameters. Some functions can also be called with or without parameters. The syntax for calling a function looks like this:

functionName1(parameter1, parameter2); // With two paramaters
functionName2(); // No paramaters
When declaring a function, you can have as many parameters as you want.

 

It is important to mention that functions can also return values. Instead of just calling a function, we can write something like this:

let variable = functionName(parameter);
This will set the value of variable to whatever the function functionName returns.

An example of this is the .toString() function on numbers. It returns the number as a string. For example:

const number = 562;
const string = number.toString();
console.log(string);
Output: "562". The output is of type string.

 

This is an example of what a function might look like in javascript:

function squared(num) {
    return num * num;
}

const squaredNumber = squared(10);
console.log(squaredNumber);
Output: 100.
*/