/*
Writing 'Clean' loops

There are some tips you should keep in mind when writing loops.

 

Don't create infinite loops. Be especially careful of this when writing while and do while loops. Make sure to have something in the code inside of the loop that changes and that will make the condition false after some iterations. If you make an infinite loop, your program will crash and your whole computer might freeze as well.
 

Write for loops instead of while loops. If you need a loop where the main goal of the loop is to have a variable that gets incremented every iteration, don't use while loops. Instead of writing a while loop with a condition like i < 5; and then have i++ inside of the while loop, just write a for loop instead.
 

Avoid loops. This might sound weird, but the less loops you have, the better. It is important for our program to fulfill it's task, but it's also important for it to be fast. Loops are very slow. Try to use as little loops as possible, but definitely use them when necessary.
 

Avoid nested loops. Nested loops are loops inside of one another. If the first loop does n iterations, and the second inside does k iterations, together they will do n * k iterations. This is slow, so try to use them as little as possible. Of course, sometimes you have to use them and that is ok.
 

Write as little code as possible inside of the loop. Again, loops are pretty slow, so the less code inside of the loop the better. Make sure to declare the variables you will use in the loop outside of the loop to avoid pesky bugs. Any logic that can be done outside of the loop should not be done inside of the loop.

*/