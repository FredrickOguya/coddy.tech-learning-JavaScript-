/*String concatenation

Let's take a look at some of the things we can do with strings. First, let's initialize two strings and a variable which we will use to show the string methods.

const firstName = 'John';
const lastName = 'Williams';
let value;
Concatenation
value = firstName + lastName;
// Output: "JohnWilliams"
We should add a space between the words:

value = firstName + ' ' + lastName;
// Output: "John Williams"
Append
Appending means adding text to a string that already has a value.

val = 'John';
val += ' Williams';
// Output: "John Williams";
Escaping
In most languages, it is common to use apostrophes while writing. If we use ' ' to mark our strings, like let string = 'Hello'; we can run into some problems. For example: let string = 'I'm John Williams';. This would create an error and break the problem because we have three apostrophes. To fix that, we need escaping.

const string = 'That's Awesome!'; // Error

// Use double quotes
const string = "That's Awesome!"; // No error

// Or use a back slash
const string = 'That\'s Awesome!'; // No error

Challenge

Easy
You are given two strings str1 and str2. Concatenate them and print the concatenated string.

*/

function concat(str1, str2) {
    // Write your code below this line
    let conc = str1 + str2

    console.log(conc)
}