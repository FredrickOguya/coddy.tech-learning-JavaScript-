/*
For loops are mostly used when we need to do a certain number of iterations. They can be useful in situations where we don't know the exact number, but we need to iterate a variable amount of times. For example, we have a variable called lengthOfString. We can use for loops to iterate exactly lengthOfString times. For example:

for (let i = 0; i < 5; i++) {
    console.log(`Number is ${i}`);
}
The output of this code is:

Number is 0
Number is 1
Number is 2
Number is 3
Number is 4
Let's explain how we got this using the three steps we wrote above.

- Statement 1, aka let i = 0; is executed.

- Then, we check the condition (Statement 2), if i < 5;.

- The condition is true, so we execute the code inside the loop.

- Statement 3 is run, aka i++;. i now has a value of 1.

- Now, we check the condition again. i < 5;

- i is 1, and 1 is still smaller than 5, so the code gets executed again.

- After the code execution, Statement 3: i++; runs. i is now 2.

- These steps repeat until i gets to 4.

- When i is 4 we first check the condition.

- i < 5; is true because i is 4. The code inside gets executed.

- Statement 3 runs and i gets incremented to 5.

- Now, we check the condition and see that 5 < 5 is false.

- The code does not get run and the loop stops because the condition is false.

We can use this to write some interesting programs. Let's say we have a string and want to print it character by character. Using the .length property we know exactly how many iterations we need. We use the variable that we increment as an index to get every character:

const message = "Hello";

for (let i = 0; i < message.length; i++) {
    console.log(message.charAt(i));
}
This will output:

H
e
l
l
o

Challenge

Medium
You are given a number variable called number. Write a program that loops from 0 to that number (not including) and calculates the sum of all even numbers in that range. You will have to use a for loop, and perhaps an if statement inside the for loop to check if the number is even. Try using math to check if the number is even. If you get stuck, Hint 1 will help you with the math.


Hints

Revealed

If you remember, we learned about the modulo operator. It returns the remainder from dividing both of the numbers. For example, 10 % 2 would give 0. 10 % 3 would give 1. Simillarly, 8 % 2 gives 0, 9 % 2 gives 1. Any even number divided by 2 has a reminder of 0. Any odd number divided by 2 has a reminder of 1. Your condition in the if statement should be whether i has a reminder of 0 when dividing with 2.

Hint 2
Revealed

You should loop from 0 to the number by writing something like for (let i = 0; i < number; i++) for the for loop.

Hint 3
Revealed

You should declare a variable called sum before the for loop and give it a value of 0. Then, inside of the for loop you should write an if statement to check if i is even. If i is even, you should add it to the sum by writing sum += i;. Print the sum at the end.

Hint 4
Revealed

You code should look something like this:

let sum = 0;

for (let i = 0; i < number; i++) {
    
    if ( Check if number is even ) {
        // Add i to sum
    }
    
}

// Print sum variable
*/
Solution

//coddy's Solution


function evenSum(number) {
    // Write your code below this line
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 2 === 0) sum += i;
    }

    console.log(sum);
}



// My solution
function evenSum(number) {
    // Write your code below this line
    let total = 0;
    for(let i = 0;i<number;i++){
        if([i]%2==0){
            total+=Number([i])
            console.log(total) 
        }
    }
    console.log(total)
}
evenSum(100)
