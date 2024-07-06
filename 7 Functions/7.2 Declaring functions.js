/*
Declaring functions

Let's learn how to create functions.

Declaration
 We use the function keyword to declare functions in JavaScript. The syntax looks like:

function functionName(parameter1, parameter2) {
    // Code inside here
    
}
We first write the function keyword. Next, the name of the function. We can give it any name we want. Then, in parentheses ( ) we put the names of any parameters we want our function to take in. We can have as many parameters as we want. We put curly brackets { } and write the code inside of them.

 

For example:

function greet() {
    console.log('Hello!');
}
We declared a function called greet. Every time we call the function, the code inside will be executed. We call the function by writing greet();.

It is important to remember that the code inside of the function does not get executed unless it is called. This wont print "Hello" until we write greet();.

Parameters
We already mentioned parameters. When declaring a function, we only want to write the names of the variables that will hold the values of the parameters. We can use the variables inside of the function. Like this:

function sumNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
We input the actual values when calling the function. For example: sumNumbers(5, 4, 9);.

 

If we call a function with less parameters than the function takes in, like sumNumbers(5, 4); the other parameters will be undefined. So, the values for num1, num2 and num3, would be 5, 4 and undefined respectively.

 

If we want the parameters to have a default value, we can use = to give them a default value. For example:

function multiply(num1 = 5, num2 = 7) {
    console.log(num1 * num2);
}
We can still use the function like multiply(10, 52). It would output 520. But, we can also use it like multiply(8), which would give us 56, because num1 is 8 and the default value for num2 is 7. Or, we could write multiply() which would give us 35.


Challenge

Easy
Declare a function called greetWorld that prints the text "Hello, World!" when called. Declare another function called sumArray which takes in an array as a parameter. The function should loop through the array and calculate the sum of the numbers in the array. Remeber how we used to do this. It should print the sum in the end.

Do not call the functions, only declare them, or you wont pass the tests.


Hints

Hint 1
Revealed

Use the function keyword and take a look at the syntax above to declare a function that prints "Hello, World!". Inside of the function you should have a console.log("Hello, World!"); statement. Make sure it is named greetWorld.

Hint 2
Revealed

Declare a function called sumArray. You should start with something like: function sumArray(arr). If you don't remember how to loop through an array, take a look at the previous lectures. Make sure the function is named sumArray.


*/
//coddy's Solution === mine


function greetWorld() {
    console.log("Hello, World!");
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
}




