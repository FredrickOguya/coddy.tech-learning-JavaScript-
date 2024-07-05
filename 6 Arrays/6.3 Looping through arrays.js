/*
Let's say we want to loop through an array and access each element one by one. Even if we don't know how many elements the array has, we can use a for loop to iterate through every element.

We can use the array.length property to get the number of elements an array has. For example:

const arr = [52, 125, 52, 39, 71];
console.log(arr.length);
The output will be: 5. We can use this in a for loop to loop through the array:

const arr = ['Tiger', 'Elephant', 'Cat'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
This outputs:

'Tiger'
'Elephant'
'Cat'
This works because we use the variable i as an index to get the next element every iteration. First, i is 0, giving us the first element. Next iteration it is 1 giving us the second element and next it is 2 giving us the third element. 3 is not smaller than arr.length (3), so the program stops there.


Challenge

Easy
You are given an array called numbers. Print the last 5 elements of the array using a for loop.


Hints

Hint 1
Revealed

The only difference in printing every element and printing the last element is the index at which you start. So, if you can get the number of elements in the array by using arr.length, you can also get the index at which you need to start with using basic math. The index should start at 5 less than the number of elements.

Hint 2
Revealed

Your for loop should look something like: for (let i = arr.length - 5; i < arr.length; i++).



Solution
*/
function printer(numbers) {
    // Write your code below this line
    for (let i = numbers.length - 5; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
    