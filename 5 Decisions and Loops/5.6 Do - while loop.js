/*
Do - while loop

There is another loop similar to the while loop. The difference between a do while loop and a while loop is that the do while loop first executes the code inside the loop once, then starts checking if the condition is true on the other iterations. The while loop tests the condition before running the code even once. A do while loop will always execute the code inside the loop at least once. In a while loop, if the condition is false from the beginning, the code wont ever get executed.

The syntax looks like this:

do {
    // Code here
    
} while (condition);
For example:

let result = '';
let nextDigit = 0;

do {
  nextDigit++;
  result += nextDigit;
} while (nextDigit < 5);

console.log(result);
The output of this code will be: "12345".

 


Challenge

Easy
You are given a number called num. Using a do - while loop, print all the numbers smaller than the number until you reach 0. Use a do - while loop, or you will fail some test cases.

Print the numbers with a new line in between, console.log()adds new line in the by default!


Hints

Hint 1
Revealed

You should use a do - while loop that prints the number and decreases it by 1 each iteration. Your condition should check if the number is still larger than 0.


Solution
*/
// coddy's solution === Mine's
Solution

function printer(num) {
    // Write your code below this line
    do {
        console.log(num);
        num--;
    } while (num > 0);
}

