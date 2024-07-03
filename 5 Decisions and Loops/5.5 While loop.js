/*
While loop

It's time to cover one of the most used concepts in programming. Loops. Loops are used to repeat a block of code a certain amount of times. It helps us not have to repeat code and we can use them to create some amazing programs. There are a couple types of loops:

While loops
Do - while loops
For loops
While loops
The while loop loops through a block of code as long as a specified condition is true. 

First, it checks if the condition is true. If it is, it executes the code inside the loop. Then, it checks the condition again. If it's true, it runs the code again. It keeps going until the condition is false. 

The syntax looks like:

while (condition) {
    // Code here
    
}
It is important to remember not to use conditions that are true forever for while loops because they will cause an infinite loop and break your program.

An example of a while loop:

let counter = 0;

while (counter < 10) {
    console.log(`This is iteration ${counter}`);
    
    counter++;
}
The output of this code will be:

"This is iteration 0"
"This is iteration 1"
.
.
"This is iteration 9"
It first checks if counter is less than 10. It is, so it executes the print statement. It executes the increment as well and counter is now 1. This repeats until counter gets to 9. Then, after the print and the increment, counter is 10. 10 is not less than 10, so the loop stops there.


Challenge

Medium
You are given a number called num. Your job is to count the number of digits the number consists of using a while loop. Try using a counter to count the iterations while using math to get rid of the last digit of the number every iteration. The iterations should stop once you get through all digits of the number. Use hints as needed.


Hints

Hint 1
Revealed

Let's say you have the number 6721. You can do 6721 / 10 to get rid of the last digit. You will get 672.1. Now, you can use one of the methods in the Math objects that rounds down to the nearest whole number in order to get 672 only. Go back to the Numbers & The Math object lecture if you don't remember.

Hint 2
Revealed

If you already found a way to get rid of the last digit of the number every iteration as mentioned in Hint 1, you might be stuck on when to stop the loop. The loop should stop when you get rid of all digits, aka when the num variable gets to 0. So your condition might look something like: while (num !== 0) or while (num > 0).

Hint 3
Revealed

Your code should follow something like this:

let numOfDigits = 0;

while (// Check if num is 0, use Hint 2) {
    // Get rid of last digit of num, use Hint 1
    
    // Increment numOfDigits
}

console.log(numOfDigits);
*/
// Coddy's solution
function digits(num) {
    // Write your code below this line
    let count=0;
  while(num!=0){
    num=Math.floor(num/10);
    count++;
  }
  console.log(count);
}


//My solution 
function digits(num) {
    // Write your code below this line
    let digit= 1;

    while(num>10){
        num = Math.round(num/=10)
        digit ++;
    }
    console.log(digit)
    
}