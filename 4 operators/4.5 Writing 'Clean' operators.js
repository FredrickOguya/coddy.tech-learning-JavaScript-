/*
There are a few principles to keep in mind when writing operators as well.

 

Don't use too many at once. If you have statements like: !bool1 && bool2 || !bool3 && bool4 && !(bool1 && bool2) your code can get very hard to read. That's why you should split them into groups like:

const johnIsSick = hasCough || sneezesALot;
const johnIsNotHome = johnSaysHeIsAbroad && johnsHouseIsEmpty;
const johnWillGoToSchool = johnIsSick || !johnIsNotHome;
 

Use the shortest operator possible. Instead of writing counter = counter + 1, try writing counter++; Instead of multiplyMe = multiplyMe * 10; write multiplyMe *= 10;.

 

You will get comfortable with operators the more you use them. The more comfortable you are with operators, the cleaner operators you can write.
*/
