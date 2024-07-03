/*
We can also write if - else statements. For if - else statements we have to write two sections of code, and if the condition is true the first one gets executed, but if it's false the second one gets executed. The syntax is:

if (someCondition) {
    // Code here gets executed if someStatement is true
    
} else {
    // Code here gets executed if someStatement is false
    
}
const passwordIsCorrect = true;

if (passwordIsCorrect) {
    console.log('Welcome to the dashboard.');
} else {
    console.log('Wrong password. Please try again.');
}
The output of this code will be: "Welcome to the dashboard". 

The passwordIsCorrect boolean is true, so the first section of code got executed. The "else" section of code did not get executed because the boolean is true. 

If passwordIsCorrect was false, the output would have been "Wrong password. Please try again.".

if - else if - else statements
When we need to make multiple decisions that are connected to each other we can "combine" if statements using an else if statement. Use the else if statement to specify a new condition if the first condition is false. The syntax looks like this:

if (someCondition) {
    // Code here
} else if (otherCondition) {
    // Code here
} else {
    // Code here
}
We can chain as many else if statements as we want next to one if statement. It is also important to remember that we do not have to add an else statement at the end. We can only have an if statement with chained else if statements. 

For example:

const time = 15;

if (time < 12) {
    console.log('Good Morning');
} else if (time > 12 && time < 20) {
    console.log('Good Afternoon');
} else if (time >= 20) {
    console.log('Good Evening');
} else {
    console.log('It is exactly 12 o\'clock.');
}
The output of this code will be: "Good Afternoon.". The first condition time < 12 is false, so it moves to the next one. The second condition time > 12 && time < 20 is true, so it executes the second block of code and stops. It does not check the other conditions, as it already found one that is true.


Challenge

Easy
You are given a number variable called marks. The value of the variable signifies the marks that some person scored on a test.

Print “S grade” if marks is between 90 and 100.
Print “A grade” if marks is between 80 and 90.
Print “B grade” if marks is between 70 and 80.
Print “C grade” if marks is between 60 and 70.
Print “D grade” if marks is between 50 and 60.
Print “F grade” if marks is between 40 and 50.
Print “Student has failed” if marks is between 0 and 40.
Else print “Invalid marks”.

*/

function getGrade(marks) {
    // Write your code below this line
    if (marks >= 90 && marks <= 100) {
        console.log('S grade');
    } else if (marks >= 80 && marks < 90) {
        console.log('A grade');
    } else if (marks >= 70 && marks < 80) {
        console.log('B grade');
    } else if (marks >= 60 && marks < 70) {
        console.log('C grade');
    } else if (marks >= 50 && marks < 60) {
        console.log('D grade');
    } else if (marks >= 40 && marks < 50) {
        console.log('F grade');
    } else if (marks < 40) {
        console.log('Student has failed');
    } else {
        console.log('Invalid marks');
    }
}
