/*
In JavaScript, you will work with a lot of data. Variables are containers for data. Every variable has a name and a value. We can get the value of the variable by using it's name.

An example for variables is:

let someNumber = 5;
const randomText = 'Hello, World!';
var lightIsOn = false;
Now, in order to use a variable in our application we have to declare the variable. In JavaScript we can declare variables with these three key words: var, let, const.

You can declare variables by writing: 

let/const/var variableName = variableValue

Const
We use const to declare a constant piece of data that we know won't change. For example: const PI = 3.14159. Once we declare a constant with a value, we cannot change it's value. If we try to change it, the program will crash.

Let & var
These two are used to declare variables that can change their value. There are differences between let  and var, but we haven't gotten that far yet. For now, all you need to know is that var is very outdated and should be avoided. You should only use let. For example: let itemPrice = 10.25. In order to change the value of the variable we write: itemPrice = 11.50.

 

Using variables
When you want to get the value from a variable, we can just use the name. Let's print a variable:

const PI = 3.14159;
console.log(PI);
This will output: 3.14159. Notice how we didn't use ' ' or " " in console.log() because we want to print the value of the variable PI, and not the actual text 'PI'. console.log('PI') would output PI.


Challenge

Easy
Let's make some variables. Declare a variable named myNumber and give it a value of 15. Then, print the variable.

Declare a constant named PI with the value 3.1415 and print the constant as well.


Hints

Hint 1
Revealed

You can declare a variable with the syntax: 

let variableName = varaibleValue;
and a constant with this syntax:

const variableName = varaibleValue;
Hint 2


Printing a variable looks like: 

console.log(variableName)

*/

Solution

let myNumber = 15;
console.log(myNumber);
const PI = 3.1415;
console.log(PI);
