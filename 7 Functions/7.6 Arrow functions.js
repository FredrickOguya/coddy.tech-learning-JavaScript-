/*
Arrow functions

Arrow function expressions are an alternative to regular function expressions. They were introduced in the ES6 version of JavaScript. There are minor differences between arrow function expressions and regular function expressions. The main difference is in the syntax.

This is what an arrow function expression looks like:

(parameter1, parameter2) => {
    // Code inside
}
So, it is similar to a regular function expression with some differences. We remove the function keyword and add => between the parentheses and curly braces.

For example:

// Regular
const greet = function() {
    console.log('Hello');
};
// Arrow
const greet = () => {
    console.log('Hello');
};
We can use parameters as well.

const sum = (num1, num2) => {
    return num1 + num2;
}
 

Now, one of the powers of arrow functions is that we can make them much shorter than regular functions. Let's look at this example:

const squared = (num) => {
    return num * num;
}
If the code inside an arrow function is only one line, we can completely remove the curly braces. The above code becomes:

const squared = (num) => return num * num;
If an arrow function has only one parameter, we can remove the parentheses as well. The above code becomes:

const squared = num => return num * num;
If an arrow function has only one line with a return statement, we can get rid of the return (We can get rid of return only if we got rid of the curly braces as well). The above code becomes:

const squared = num => num * num;
If we have two or more parameters, we still have to use parentheses:

const sum = (num1, num2) => num1 + num2;

Challenge

Easy
Turn the following function declarations and function expressions into the shortest versions of arrow functions possible. Make sure to turn the function declarations into expressions!

function calculate(num1, num2) {
    return num1 * num2 + (num1 - num2);
}

const printInfo = function() {
    console.log('Name: John Doe');
    console.log('Age: 31');
    console.log('Occupation: Web Developer');
}

(function() {
    console.log('I am an IIFE!');
    
    let nums = 15;

    for (let i = 0; i < 5; i++) {
        nums *= i;
    }

    console.log(nums);

})();



*/
const calculate = (num1, num2) => num1 * num2 + (num1 - num2);

const printInfo = () => {
    console.log('Name: John Doe');
    console.log('Age: 31');
    console.log('Occupation: Web Developer');
}

(() => {
    console.log('I am an IIFE!');
    
    let nums = 15;

    for (let i = 0; i < 5; i++) {
        nums *= i;
    }

    console.log(nums);

})();
