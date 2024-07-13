/*
While working with variables, you can change the data type of the variable. This will be useful later on when working with web apps and forms. There are different ways to convert from data type to data type:

Converting to a String
Converting values to a string looks like this:

let value = '';

value = String(55); // Value is: '55'.
value = String(true); // Value is: 'true'.
value = String(5 + 20); // Value is: '25'.
We can also use the toString() method to convert to a String:

let number = 25;
let string = number.toString();
Converting to a Number
Similar to converting to a string, converting to a number looks like this:

let value = 0;
value = Number('5'); // Value is: 5.
value = Number(true); // Value is: 1.
value = Number(false); // Value is: 0.
value = Number(null); // Value is: 0.
value = Number('Hello, World!'); // Value is: NaN.

Whenever converting to a number, we can get the value NaN. NaN means Not a Number and we get NaN whenever we try to turn something that can't be a number into a number.

We can also use the parseInt() and parseFloat() functions:

const someNumber = parseInt('100'); // Value is: 100.
const otherNumber = parseInt('100.25'); // Value is: 100.
const anotherNumber = parseFloat('100.25'); // Value is 100.25.
We use parseInt() for whole numbers and parseFloat() for numbers with decimal places.


Challenge

Easy
You are given two variables of type String. The variables are string1 and string2. They are already declared have a string value like '52'. You can already use them without worrying about declaring them. Your job is to convert them into numbers and calculate their sum. Print the sum to complete the program.


Hints

Hint 1


Try declaring a new variable and using Number() to transform one of the given strings into a number that will be stored in the new variable 

Hint 2


You can transform the one of the variables using the Number() method

const number1 = Number(string1);
Hint 3


Transform the other variable as well

const number2 = Number(string2);

Solution
*/
//Solution


function printSum(string1, string2) {
    // Write your code below this line
    let num1 = Number(string1);
    let num2 = Number(string2);
    const sum = num1 + num2;
    console.log(sum);

}