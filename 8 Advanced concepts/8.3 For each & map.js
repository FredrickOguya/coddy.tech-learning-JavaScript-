/*
This is the first part of covering more complex array methods. 
These methods are used a lot and can even replace for loops and other loops. 
You will get used to them when you get more experience.

For each
We will use the following array to explain both methods:

const arr = [1, 2, 3, 4, 5];
The forEach() method calls a function for each element in an array. 
It does not modify the original array.

let sum = 0;
arr.forEach(element => sum += element);
console.log(sum);
Output: 15.

Most of these methods take in a function that can have three parameters, 
the first one is the actual element, the second is the index of the element and the third is the whole array. 
These parameters are optional. Here, we only use the first parameter. 

If we want to get the index as well, we write:

arr.forEach((el, index) => {
    console.log('Running function on element with index ' + index);
});
Map
The map() method creates a new array from calling a function for every array element. 
It does not modify the original array. The function we provide can have three parameters, 
same as last method.

const newArr = arr.map(element => element * 10);
console.log(newArr);
Output: [10, 20, 30, 40, 50]. Runs the function element by element and returns the element to a 
new array.
*/