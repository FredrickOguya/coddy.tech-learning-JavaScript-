/*
While coding, it is common to compare values and types. We can use the == and === operators for comparison in JavaScript. For example:

let value;

value = 5 == 6; // Output: false
value = 'Hello' == 'Test'; // Output: false
value = true == true; // Output: true 
value = 51 == 51; // Output: true
value = 51 == '51'; // Output: true
value = 51 === '51'; // Output: false
 

So, what's the difference between == and ===? The difference is shown in the last two examples. 

The == operator converts the variables to the same type before comparing the values. So, if we compare 51 (Number) and "51" (String) it will first convert the number into a string, and then compare the values. In that case, 51 is equal to "51". 

If we use the === operator, it compares data types as well. If we compare 51 (Number) and "51" (String), it will return false. When using === only values of the same data type can be equal.

 

Comparing values
We can also compare values with >, <, >=, <=.

Greater than: >,
Lesser than: <,
Greater than or equal to: >=,
Lesser than or equal to: <=.
For example:

let value;
value = 5 > 3; // true
value = 5 < 3; // false
value = 120 >= 200; // false
value = 4 > 4; // false
value = 4 >= 4; // true
value = 5 <= 5; // true
value = 5 < 5; // false 
*/
