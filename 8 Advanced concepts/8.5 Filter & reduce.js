/*
Filter
The filter() method creates a new array filled with elements that pass a test provided by a function. It does not modify the original array. The function we pass in can still have three parameters. If we return true inside of the function that is run on an element, that element gets returned to the new array, and if we return false it gets skipped. We can just return a whole condition instead.

const newArr = arr.filter(number => number > 3);
console.log(newArr);
Output: [4, 5]. If number is bigger than 3, the condition returns true, so only 4 and 5 get returned.

Reduce
The reduce() method executes a reducer function for array element. It returns a single value: the function's accumulated result. The reduce method is a bit different. It has the following parameters:

Function - reducer function to run on every element, which has the following parameters:
Total (Required) - the total accumulated value so far;
Element (Required) - the value of the current element;
Index (Optional) - the index of the current element
Arr (Optional) - the whole array
Starting value - the value which is passed to the function as the initial value
To understand it better, we will declare a function instead of writing an arrow function expression.

function reducer(total, currentNumber) {
    return total += currentNumber;
}

const sum = arr.reduce(reducer, 0);
console.log(sum);
Output: 15.


*/