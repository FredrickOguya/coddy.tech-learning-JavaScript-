/*
Arithmetic Operators

Arithmetic operations are operations you can do between two numbers.

Other than the common ones, there are operators for incrementing and decrementing a variable that you will often use.

Let's say we have a variable let counter = 0;. After writing some code, we want to increment the value of the variable by 1. We could do counter = 1;, but what if the value changed before that and isn't 0? We could do something like: counter = counter + 1. This is a viable solution, but it can be hard to write. 

There is a shorter version we can use. We can write counter += 1; instead. This is much better, and this shorter version exists with most operators: +=, -=, *=, /=. Writing counter += 1; is the same as counter = counter + 1;. Believe it or not, there is an even shorter version only when we want to increment or decrement by 1.

 Incrementing
We can increment a variable with the operator ++. An example of using it would be:

let value = 5;
value++; // Current value is 6.
value++; // Current value is 7.
Decrementing
We can decrement a variable with the operator --. For example:

let value = 5;
value--; // Current value is 4.
value--; // Current value is 3.
Exponentiation
The exponentiation operator ** raises the first number to the power of the second number. For example:

const value = 5 ** 2; // Ouput: 25
const value = 4 ** 3; // Output: 64
Operator Precedence
JavaScript automatically follows the basic operator precedence. Exponents have higher precedence than multiplication and division. Multiplication and division have higher precedence than addition and subtraction. Operations in parentheses are done first.


Challenge

Easy
You are given two numbers num1 and num2. Increment the first number by 1. Decrement the second number by 1. Then, print the difference between the first number and the second. 


*/

function math(num1, num2) {
    // Write your code below this line
        num1+=1;
        num2-=1;
    console.log(num1 - num2)
}
