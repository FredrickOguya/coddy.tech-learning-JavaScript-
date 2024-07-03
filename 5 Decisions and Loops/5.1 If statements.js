/*
It's time to make some decisions. If statements are used in JavaScript when we want to execute some lines of code only if some statement is true. We can also use if - else statements to execute some code if a statement is true and execute another set of code if the statement is false. In simple terms, it would look like this:

If It's raining:

go outside and play

else:

stay inside and read

Only one of the option gets executed. You either go outside and play, or stay inside and read. Not both. That's the logic of if - else statements.

If statements
The syntax for an if statement in JavaScript is as follows:

if (someCondition) {
    // Code inside
}
First we write if, then in parentheses we write some boolean logic that returns true or false, and at the end we wrap the code we want to execute if the condition is true in { }. For example:

const willPrintHello = false;

if (willPrintHello) {
    console.log('Hello');
}

const willPrintGoodbye = true;

if (willPrintGoodbye) {
    console.log('Goodbye');
}
The output of this code will be: "Goodbye". 

The willPrintHello boolean is false, so the code in the first if statement doesn't get executed. The willPrintGoodbye boolean is true, so the code in the second if statement gets executed.

Tip
You can write any boolean logic in if statements. if (true && true), if ((5 > 2) || someCondition), if (10 % 2 === 0) are all valid.


Challenge

Easy
You are given a number called num. Print the number if the number is greater than 5.
*/

function printer(num) {
    // Write your code below this line
    if (num > 5){
        console.log(num)
    }
}
