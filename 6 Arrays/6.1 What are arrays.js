/*
Arrays are one of the most important concepts in JavaScript. You will use them all the time. In simple terms, arrays are lists. Let's say you want to store a list of all points students scored on a test. You would use an array for that. Arrays in JavaScript look like:

[52, 21, 92, 86, 82, 90, 57, 29]
You can declare an empty array and add or remove elements as needed. We can also use arrays to loop through them and access all the values one by one. Doing this with single variables, one by one, would be very hard.

We will cover how to declare arrays, add and remove variables, and more in a later section. For now, we will focus on what arrays are and their logic.

Let's say we have an array variable called arr. We will give arr the value: ['Cat', 'Dog', 'Turtle', 'Rabbit', 'Tiger']. So, how can we access the individual values inside the array? We can do it using an index. Every value in an array has an index. The indexes start from 0 and count up. The first element has an index of 0. The second element has an index of 1. The third element has an index of 2, and so on.

 



 

Now, we can use the index to access the value using bracket notation. We use [] to access the elements in the array. For example in the array ['Cat', 'Dog', 'Turtle', 'Rabbit', 'Tiger'] we can use the indexes in the following way:

arr[0] would give us the element 'Cat'.
arr[1] would give us the element 'Dog'.
arr[2] would give us the element 'Turtle'.
arr[3] would give us the element 'Rabbit'.
arr[4] would give us the element 'Tiger'

Challenge

Easy
You are given an array called arr. You job is to print the second element in the array. Then, print the third element as well.


Hints

Hint 1
Revealed

Remember, indexes are 0 based, so in order to print the second element you have to use index 1, and for the third element index 2.



Solution
*/
function elements(arr) {
    // Write your code bellow this line
    console.log(arr[1]);
    console.log(arr[2]);
}
