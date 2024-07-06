/*
Declarations vs expressions

In JavaScript, there exists a concept known as function expressions. In a way, function expressions are variables which "store" a function. They can be used the same way as a function, but there are a few fundamental differences between function expressions and a declared function. 

We use anonymous functions and store them in a variable to get a function expression. The syntax looks like this:

const variableName = function() {
    // Code here
    
};
We can still use it as a regular function. We can call it with variableName(). When declaring function expressions, we do not give the function a name. We just write function(). This is called an anonymous function. It can also take in parameters, for example:

const calculator = function(num1, num2) {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;
    
    return [sum, difference, product, quotient];
}

const resultsArr = calculator(10, 5);
console.log(resultsArr);
Output: [15, 5, 50, 2].

Difference
So, what are the main differences between these two methods of creating functions?

Hoisting. Let's say we have a program with lots of code and lots of functions declared. Once we run the program, the code for declaring the functions gets "hoisted" to the top. That means that the declaration of functions is one of the first things that get executed once a program starts. When writing the program, we can call functions even if they are declared further on into the program. Hoisting only works when declaring functions and not with function expressions. That is the first difference.
Scope. We will talk about scope in a later lecture.
 


Challenge

Easy
Turn these functions into function expressions! Make sure to use const.

*/
//Solution
const getSum=function (num1, num2) {
    return num1 + num2;    
}

const printText=function (text) {
    console.log(text);
}