/*
There are a couple of ways to declare an array. The most simple one is using []. For example:

const arr = [];
This declares an empty array and you can add elements in it as you wish. We will cover adding elements in the next lecture.

If you want to declare an array with values, all you have to do is write the values inside of the brackets [] separated by a comma ,:

const arr = [5, 10, 'Hello', false, 20, 'Turtle'];
There's another way we can declare an array using the new keyword. We haven't learned about objects and classes yet, so I can't explain exactly how they work yet. The syntax looks like this:

const arr = new Array(2, 5, 1, 3, 7);
Keep in mind, when using this method if you write only one number inside of the parentheses, that number will be taken as the length of the array and not a single element. For example:

const arr = new Array(10);
This won't give us an array like: [10]. It will give as an array of length 10 with undefined values, like: [undefined, undefined... undefined].

 

Tips
The new Array() method of declaring arrays is older and should not be used very often. You should use brackets instead.

Arrays can include any type of variable. Strings, numbers, booleans and everything else.

Use const to declare arrays, even when the values inside change. You can still add, remove and change values inside of an array if you declare it with const, because the actual value of the variable doesn't change. It's still the same array.

 


Challenge

Easy
Declare an array called bigArr with 10 elements. Declare an array called smallArr with 3 elements. No need to print them, just declare them with the right names and right number of elements.
*/
// Write your code below this line
const bigArr = ['','','','','','','','','','']
const smallArr = ['','','']