/*String methods

Let's take a look at some of the methods and properties that are available with strings.

const someString = 'This is some text.';
Length of string

value = someString.length // Output: 18
Concatenating with a method

value = firstName.concat(' ', lastName); // Output: "John Williams"
Converting to upper case

value = someString.toUpperCase(); // Output: "THIS IS SOME TEXT."
To lower case

value = someString.toLowerCase(); // Output: "this is some text."
Letter positions and indexes
Every letter in a string has an index. The indexes start from 0 and go up. For example, in the string 'Time', the letter 'T' has an index of 0, 'i' has an index of 1, 'm' has an index of 2 and 'e' has an index of 3. There are some methods with indexes.

let someString = 'This is some text.';
Get index of letter

value = someString.indexOf('s'); // Output: 3
Get character from index

value = someString.charAt(1) // Output: h
Substring

value = someString.substring(0, 3) // Output: "Thi"
Replace

value = someString.replace('This', 'That'); // Output: "That is some text."
Includes

value = someString.includes('foo'); // Output: false
 


Challenge

Easy
You are given a variable of type string called myString. First, print the length of the string. Then, try to find a way to print the last character of the string. At the end, print the first 3 letters of the string.
*/
function strings(myString) {
    // Write your code below this line
    let length = myString.length
    console.log(length)

    let lastLetter = myString.charAt(length - 1)

    console.log(lastLetter)

    let firstThree = myString.substring(0, 3)

    console.log(firstThree)

}