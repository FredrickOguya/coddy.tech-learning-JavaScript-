/*
Now, let's move on to the for loop. For loops are used much more than while or do while loops. Their syntax is a bit more complicated, but we will explain them step by step.

The syntax in JavaScript looks like this:

for (statement1; statement2; statement3) {
    // Code here
    
}
This is what the statements mean:

Statement 1: Statement 1 is executed one time at the start of the for loop. It's the first command executed once the for loop starts and it's executed before the code inside the loop.
Statement 2: Statement 2 is the condition for executing the code in the loop. It's the same as the condition in a while loop. After every execution of the code, the for loop checks the condition. If it false, it stops. Statement 2 is the second thing that gets checked after Statement 1 is executed.
Statement 3: Statement 3 is executed after every iteration, aka after every time the code inside the loop gets executed. It is the fourth thing that gets executed, the third being the actual code inside the loop.
The chain of commands would look something like this:

Get to a for loop in the code
Execute Statement 1
Then, check the condition in Statement 2:
If the condition is true:
Execute the code
Execute Statement 3
Go back to step 3
If the condition is false:
Stop the loop
Tips
In almost every for loop you will write, the statements will look something like this:

Statement 1 initializes a variable with a starting value, most likely 0.

Statement 2 is a condition that checks if that variable is greater than or lesser than some value.

Statement 3 increments or decrements the variable by some value, most likely 1.

 

When writing variable names in for loops, the convention is to use short variable names. We use the name i in a for loop. If we have another for loop inside of a for loop, the second for loop should use the variable name j. The third should use k, then l and onwards. This is just common convention and you do not have to follow it if you think there is a better solution. Just remember to keep them as short as possible.
*/