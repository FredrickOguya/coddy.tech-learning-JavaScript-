/*
Recursive functions

There is one more topic we need to cover. Recursion. A recursive function is a function that calls itself within its code. Using recursive algorithms, certain problems can be solved quite easily.

Writing a function that just simply calls itself inside of its code will create an infinite loop. That's why we need to have some condition. You should always make the function call itself inside of an if statement or something similar that includes decision making.

Recursive functions are a bit more complicated and take some time to get used to. Always use them with caution. Any problem that can be solved with recursion could also be solved with some kinds of loops and iterations.

This is what looping through an array might look like with a recursive function:

function recursiveLoop(arr, index = 0) {
    if (index === arr.length) return;
    
    console.log(arr[index]);
    recursiveLoop(arr, index + 1);
}

const arr = [2, 5, 1, 5, 6];
recursiveLoop(arr);
This outputs:

2
5
1
5
6
The first time the function is called, we pass in an array. The default value for the index is 0. We start running the code inside. The index 0 is not the same as the array's length, so we log the element at that index. Then, we call the same function with the same array, but we add 1 to the index. This keeps happening until the index goes out of bounds, aka becomes equal to the array's length. We check if index === arr.length because indexes are 0 based, so the last index of the array is arr.length - 1. So, if it the index has reached arr.length, it means it has gone out of bounds.

 

Recursive functions are a good thing to be familiar with, even though you might not use them very often.


Challenge

Medium
Write the code for the function factorial that calculates the factorial of a number. If you don't know what factorial is, factorial means the product of the number and all numbers below it. For example, 5 factorial would be: 5 * 4 * 3 * 2 * 1 = 120. Use recursion. Your function should return the value. No need to print it, return values are tested automatically.



Let's look at it this way. Factorial is marked with an exclamation point. 5! is the same as 5 * 4!. 4! is the same as 4 * 3!. Try writing the function so it calculates number * factorial of number - 1 instead.

Hint 2
Revealed

In order to stop the recursion we have to have some kind of condition. We need to stop at 1, so when we get to 1 we should just return 1 instead of returning number * factorial of number - 1.
*/

// my solution
function factorial(number) {
    // Write your code below this line
    if (number==0){
        return 1;
    } else {
        return number *factorial( number-1)
    }
}

//coddy's solution

function factorial(number) {
    // Write your code below this line
    if (number === 1) return 1;

    return number * factorial(number - 1);
}