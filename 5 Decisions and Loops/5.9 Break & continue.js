/*
We use the break keyword when we want to stop a loop from inside of the loop. We can use it in every type of loop. The break keyword should be used in a if statement or any other way of checking if a condition is true. If we just write break in the loop, it will stop after the first iteration. That's why you will mostly see it in if statements. For example:

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
  
    console.log('Current number is ' + i);

}
This loop would stop when the counter variable's value gets to 3.

 

Continue keyword
The continue statement "jumps over" one iteration in the loop. In a while loop, it jumps back to the condition. For example:

let counter = 0;

while (counter < 10) {
    counter++;

    if (counter < 5) {
        continue;
    }

    console.log(counter);
}
This would output: 5 6 7 8 9.

 First, counter is 0. The loop starts and counter gets incremented to 1. But, we get to the if statement that checks if counter is less than 5. 1 is less than 5, so the continue; gets executed and we go back to the condition. 1 is still less than 10, so the loop starts again. Counter is incremented to 2. 2 is less than 5 so continue to the condition. This keeps happening until counter gets to 5, when the values start getting printed. The continue keyword doesn't get executed if counter is 5 or more.
 */