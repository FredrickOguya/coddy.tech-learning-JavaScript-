/*
Type coercion is when JavaScript converts types of data for us automatically. Let's say we are trying to sum up two numbers, 5 and 6, but one of them in our application is of type String and the other of type Number. What do you think would happen then?

const firstNumber = '5';
const secondNumber = 6;
const sum = firstNumber + secondNumber;
Believe it or not, the output from this program will be: '56'. The output will be a string because JavaScript recognizes that one of the variables that we are adding together is a string, so it transforms the other variable into a string as well. Then, because we are adding them together, it adds '5' and '6' and gets '56'.

 

Why doesn't it turn them into numbers? Well, because when one variable is already a string, that string could contain anything. It could be a digit, random text or anything else. We cannot transform random text into a number, so that's why JavaScript decides to turn the number into a string. This is one example of type coercion. There are many more, but you will get to know them as you learn more coding.
*/