/*
Boolean operators

AND
AND is used when we want to check if multiple statements are true at the same time. The logic looks like this:

AND

false	false	= false
false	true	= false
true	false	= false
true	true	= true
 

In JavaScript we write AND as &&. For example:

const value = true && false; // Output: false
const value = true && true; // Output: true
OR
OR is used when we want to check if at least one statement is correct in a list of statements. The logic looks like this:

OR

false	false	= false
false	true	= true
true	false	= true
true	true	= true
 

In JavaScript, we write OR as ||. For example:

const value = true || false; // Output: true
const value = false || false; // Output: false
NOT
NOT is used when we want to get the opposite value of a statement. IF the statement is true, NOT gets us false and vice versa. The logic looks like:

NOT

true	= false
false	= true
 

In JavaScript, we write NOT as !. For example:

const value = !true; // Output: false
const value = !false; // Output: true
 

These are the basic logical operators that you will use while coding. It is important to remember that you can combine these operators. For example: const value = !true && false && !false || false; This will come in handy later.


Challenge

Easy
You are given two booleans, bool1 and bool2. Print bool1 AND bool2. After that, print bool1 OR bool2.
 */
function bools(bool1, bool2) {
    // Write your code below this line
    let bool = bool1 && bool2;
    console.log(bool)
    let boolOr= bool1 || bool2;
    console.log(boolOr)
}