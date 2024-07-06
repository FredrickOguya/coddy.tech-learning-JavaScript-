/*
Returning values

Instead of printing a value every time we write a function, we can make the function return the value instead of printing it.

 

Let's say we want to have a function that calculates the square of a number, but doesn't print it. It should return the value instead. To do that, we use the keyword return.

function square(number) {
return number * number;
}
const sqrdNum = square(5);
console.log(sqrdNum);
Output: 25.

We can return any type of data, even another function. It is important to remember that return stops the function. That means that any code after a return statement will not get executed:

function getData(index) {
    const data = allDatas[index];
    
    return data;
    console.log(123);
}
The console.log(123); statement won't get executed.


Challenge

Easy
You are given two numbers, a and b. Return their sum. Do not print anything.


Solution

*/
function getSum(a, b) {
    // Write your code below this line
    return a + b;
}