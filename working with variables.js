/* You are given two numbers, num1 and num2. Calculate and print their sum. Then, print the smaller number of the two. At the end, print the first number to the power of 2. Use the Math object for this challenge.*/
function math(num1, num2) {
    // Write your code below this line
    let sum = num1+num2;
    console.log(sum)

    let smallerNo = Math.min(num1,num2)
    console.log(smallerNo)

    let powerTwo = Math.pow(num1, 2)
    console.log(powerTwo)

    
}