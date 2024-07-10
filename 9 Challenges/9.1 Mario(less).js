/*
Mario (Less)

Let's dive into some challenges. As you might have seen, there is a (Less) version and a (More) version of this challenge. If you feel comfortable with most of the topics we learned, you should do the (More) version. If you don't feel as comfortable, do the (Less) version. But, it is recommended to just do both!

 

Let's recreate a pyramid we might see in the video game mario. In mario, it is built with tiles, but in our terminals we will use # instead of tiles. A pyramid might look like this:

     #
    ##
   ###
  ####
 #####
######
A pyramid can be any height from 1 to 8. You are given the height of the pyramid in the program. Your job will be to print it. Remember, every time you print in JavaScript, you transfer to a new line. To avoid that, you should create a string with spaces and dashes of the row and then print the string.


Challenge

Hard
You are given a function called pyramid that takes in a parameter called height. You need to complete the code inside the function to make it print a pyramid as shown above. A pyramid of height 3 would look like:

  #
 ##
###

Hints

Hint 1
Revealed

You will have to use nested loops to solve this problem.

You should have a for loop for the rows. In the for loop, you should have two for loops: another that adds the number of spaces you need to the string and another that adds the number of dashes you need to the string. After these two loops you should print the string. Make sure to clear out the string so it doesn't contain the last row!

Hint 2
Revealed

The first for loop (i) should go from 0 to the height of the pyramid. Inside of the loop, you need to add from i + 1 to height spaces to the string with a for loop (The +1 is there because we should print 1 less space than the height). Then, you need to add i dashes (go from 0 to less or equal to i) with a for loop. After that you should print the string. Then, do stringVarName = ''; to clear the string.

Hint 3
Revealed

Your code should look something like this:

// declare string

for (let i = 0; i < height; i++) {
    for ( from i + 1 to height ) {
        // add space to string
    }
    
    for ( from 0 to <= i ) {
       // add dash to string
    }
    
    // print string, clear string
}

*/