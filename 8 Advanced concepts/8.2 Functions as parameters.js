/*
Functions as parameters

Functions as parameters
To understand complex topics, we will first cover using functions as parameters. Let's look at a function that takes in another function as a parameter and calls it.

function calculatorForTwoNums(num1, num2, calculate) {
    const result = calculate(num1, num2);
    console.log(result);
}

function addNums(num1, num2) {
    return num1 + num2;
}

calculatorForTwoNums(5, 10, addNums);
Output: 15.

Let's take a closer look. We have a calculator function that takes in two numbers as parameters. The third number is the function to run on these two numbers. Then, we declare a function to add two numbers. After that, we pass in two numbers to the calculator function and pass in the declared addNums function as a third parameter. Inside of the calculator function, the addNums function gets called with the two numbers we passed as parameters.


Challenge

Easy
You are given an already written function called modifyElement. Your job is  to write a function called modifyArr that takes in an array and a function as a parameter. Inside of the modifyArr function, you should loop through the array and for every iteration call the modifyElement function with the element as a parameter. You do not need to call the modifyArr function, just write it.


Hints

Hint 1
Revealed

Your function declaration should look something like this: function modifyArr(arr, func).

Hint 2
Revealed

Inside of the function you should have a for loop that loops through the array. Inside the for loop call the function with the current element as a parameter.


Solution
*/
Solution

function modifyElement(el) {
    const newValue = el * 5;
    console.log(newValue);
}

// Write your code below this line
function modifyArr(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}