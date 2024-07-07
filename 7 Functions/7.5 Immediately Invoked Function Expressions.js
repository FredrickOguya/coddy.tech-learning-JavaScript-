/*
IIFEs

Let's talk about what we can do with function expressions. Immediately Invoked Function Expressions are something you might come across while programming. As the name suggests, this is a function expression that gets invoked (executed) immediately when it is declared without having to call it. The syntax looks like this:

(function() {
    // Code here

})();
To explain the syntax, we will start from the inside out. The main part of the IIFE is the anonymous function. We write an anonymous function first with whatever code we want inside. Then, we wrap the anonymous function in parentheses ( ). We write () next to the parentheses containing the anonymous function in order to "call" the function and make it execute the code.

 

We can store the return value in a variable. For example:

const greeting = function() {
    return 'Hello'; 
}();
We don't have to wrap the anonymous function in ( ) if we do this. This function runs once without us having to call it and the value of greeting becomes 'Hello'.

 

We can pass parameters like this:

(function(app, version) {
    console.log(`Running app ${app}, version ${version}`);
})('Flappy bird', 5);
Output: Running app Flappy bird, version 5.

 

We might use IIFEs for multiple reasons. To avoid polluting the global namespace, executing async functions, using them in design patterns and more. These concepts might not sound familiar to you, but we will cover some of them soon. Do not worry about them for now.
*/