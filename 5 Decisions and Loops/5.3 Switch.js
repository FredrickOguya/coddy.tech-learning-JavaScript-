/*
Another way to make decisions in JavaScript is using switch statements. The switch statement is used to perform different actions based on different conditions. The syntax looks like this:

switch (expression) {
    case 1:
        // Code here
        break;
    case 2:
        // Code here
        break;
    case 3:
        // Code here
        break;
    default:
        // Code here
}
This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
 

For example:

const day = 'Saturday';

switch (day) {
    case 'Monday':
        console.log('First day of the week');
        break;
    case 'Tuesday':
        console.log('Second day of the week');
        break;
    case 'Wednesday':
        console.log('Third day of the week');
        break;
    case 'Thursday':
        console.log('Fourth day of the week');
        break;
    case 'Friday':
        console.log('Fifth day of the week');
        break;
    case 'Saturday':
        console.log('Sixth day of the week');
        break;
    case 'Sunday':
        console.log('Last day of the week');
        break;
    default:
        console.log('That day doesn\'t exist!');
}
The output of this code will be: "Sixth day of the week".


Challenge

Easy
You are given a number variable called number from 1 to 10. Print Odd if the number is odd and print Even if the number is even. Print Invalid number if the number is not from 1 to 10. Use a switch statement.
*/
function evenOdd(number) {
    // Write your code below this line
    switch (number){
    case 1:
    case 3:
    case 5:
    case 7: 
    case 9:
        console.log('Odd');
        break;
    case 2:
    case 4:
    case 6:
    case 8: 
    case 10:
        console.log('Even');
        break;
    default:
    console.log('Invalid number')
    
    }
}