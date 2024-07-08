/*
We will briefly cover the data type called Object. This is one of, if not the most important concept in JavaScript. If you want to learn more about objects and object oriented programming, you can take my next course called "Object Oriented Programming in JavaScript". You will need it.

We learned that variables can hold a value. An object is a variable that can hold many values. They are different than arrays, because every value has a specific name. The values are written as name:value pairs (name and value separated by a colon).

Every value that an object has is called a property. If the value is a function, it is called a method. Let's look at a real life example. A car, for example would have the properties: name, model, weight, color. It would have the methods: start(), drive(), brake(), stop().

This is what the car object would look like in JavaScript.

const car = {
	name: 'Tesla',
	model: 'S',
	weight: 2250
	color: 'white'
};
This is the syntax for declaring an object. We use { } to declare an object. Inside, we can add any properties we want by writing name: value. Properties are separated by a comma.

 

To access a property in an object, we use dot notation .. For example:

console.log(car.name); // Output: 'Tesla'
console.log(car.model); // Output: 'S'
We can also add methods to an object using function expressions:

const cat = {
    meow: () => console.log('MEOWWW');
};
We can access them as follows:

cat.meow(); // Output: 'MEOWWW'
We could also use bracket notation to access values, but it's less common:

console.log(car['name']); // Output: 'Tesla'
 

With this info, we can conclude that JavaScript uses a lot of objects. Examples of objects you have already been using are the console object and the Math object. We can see that console is an object that has a method called log() used to print text to the console. There are lot's of objects you can use in JavaScript. Feel free to explore on your own.

Easy
Declare an object called myObject. Give it a property called name with a value of 'Amazing Data Type'. Give it a method called print that prints 'Hello, World!'. Try giving it other properties as well!
*/