/*
Let's work with adding and removing elements from an array. We already looked at the array.length property which gives us the number of elements the array has inside. This will come in handy

Adding elements
Let's use the following array to explain adding elements. const arr = ['Tiger', 'Dog', 'Cat'].

The most commonly used way to add elements is using the .push() method. We can add multiple elements at the same time as well. For example:

arr.push('Elephant');
console.log(arr);
// Output: ['Tiger', 'Dog', 'Cat', 'Elephant']
We could also use the .unshift() method to add an element to the beginning of an array. This will make the new element the first element.

arr.unshift('Bear');
console.log(arr);
// Output: ['Bear', 'Tiger', 'Dog', 'Cat']
Removing elements
We can remove elements by using the .pop() method. This removes the last element of the array. We don't often have to remove elements.

arr.pop();
console.log(arr);
// Output: ['Tiger', 'Dog'];
Similar to .unshift(), we can use .shift() to remove an element from the beginning of an array.

arr.shift();
console.log(arr);
// Output: ['Dog', 'Cat']
 


Challenge

Easy
You are given two arrays, nums1 and nums2. Your job is to get the last element of 
nums1 and insert it as the first element of nums2. Remove the last element of nums1. Print nums1, then print nums2.



Hint 1

You can get the last element of nums1 by using the length property. Store it in a variable to 
be able to insert it into the second array. const lastElement = nums1[nums1.length - 1];
You can get the last element of nums1 by using the length property. Store it in a variable to be able to insert it into the second array. const lastElement = nums1[nums1.length - 1];

Hint 2


You can make the last element of the first array the first element of the second array by using the nums2.unshift() method.

Hint 3


Then, remove the last element of the first array by using the .pop() method.


Solution
*/
//coddy's Solution

function elSwap(nums1, nums2) {
    // Write your code below this line
    const lastEl = nums1.pop();
    nums2.unshift(lastEl);

    console.log(nums1);
    console.log(nums2);
}
//my solution
function elSwap(nums1, nums2) {
    // Write your code below this line
    
        let lastElement = nums1[nums1.length-1]
        let firstElement = nums2[0]
        nums1.pop();
        nums2.unshift(lastElement)
        console.log(nums1)
        console.log(nums2)
    
}
