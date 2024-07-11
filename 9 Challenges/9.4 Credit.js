/*
Credit

Let's validate some credit cards.

There are different types of credit cards used today. 
Each credit card has a credit card number. Your job today will be to check if that number is valid, 
and if the number is valid, you will have to print what type of credit card it is. 
A credit card number looks like: 4003600000000014

Let's first focus on what makes a credit card number valid. An algorithm called Luhn's 
Algorithm is used. You can determine whether the credit card number is valid using the following steps:

Multiply every other digit by 2, starting with the number’s second-to-last digit, 
and then add those products’ digits together.
Add the sum to the sum of the digits that weren’t multiplied by 2.
If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is 
congruent to 0), the number is valid!
 

That’s kind of confusing, so let’s try an example with this Visa: 4003600000000014.

For the sake of discussion, let’s first underline every other digit, starting 
with the number’s second-to-last digit:

4003600000000014

Okay, let’s multiply each of the underlined digits by 2:

1•2 + 0•2 + 0•2 + 0•2 + 0•2 + 6•2 + 0•2 + 4•2

That gives us:

2 + 0 + 0 + 0 + 0 + 12 + 0 + 8

Now let’s add those products’ digits (i.e., not the products themselves) together:

2 + 0 + 0 + 0 + 0 + 1 + 2 + 0 + 8 = 13

Now let’s add that sum (13) to the sum of the digits that weren’t multiplied by 2 (starting from the end):

13 + 4 + 0 + 0 + 0 + 0 + 0 + 3 + 0 = 20

Yup, the last digit in that sum (20) is a 0, so this card is legit!

 

Also, American Express uses 15-digit numbers and MasterCard uses 16-digit numbers. 
Mastercard numbers always start with 5. American Express card numbers start with 34 or 37. 
Your job is to print AMEX if the card is valid and an American Express card, 
and to print MASTERCARD if the card is valid and a MasterCard. Print INVALID if the card is not valid.


Challenge

Medium
You are given a function called validateCard. It takes in one parameter, cardNumber, 
that contains the card number that should be validated. First, check if the number is 
a valid credit card number using Luhn's Algorithm as shown above. If it is not a valid credit card, 
print INVALID. If the card is valid, check if it is a MasterCard or an American Express card. 
Check this using the number of digits. American Express uses 15-digit numbers and MasterCard 
uses 16-digit numbers. Don't forget to check the starting numbers as well. If American Express 
is correct, print AMEX, and if MasterCard is correct, print MASTERCARD. If it is any other length, 
the card number is invalid.


Hints

Hint 1
Revealed

The length is the easiest to check for now, so that is what you should check first. 
Check if the length is 15 or 16 using a while loop and dividing the number by 10 each 
iteration and rounding it down. If it is not 15 or 16, print Invalid and stop the program using return.

Hint 2
Revealed

If you read Luhn's Algorithm correctly, we are calculating two sums while looping through the number. 
The first sum sum1 is the sum of every other digit multiplied by 2, starting with the second to last digit. 
Keep in mind that if you multiply a digit by 2 and the result is bigger than 10, 
you need to add the digits of that number too, not the actual number. The second sum sum2 is the 
sum of all remaining numbers, aka every other number starting from the last number. So, we can calculate 
both of these sums at the same time. Using a do - while loop that has a condition of cardNumber > 0, 
we can remove the last digit and add it to sum2, then remove the second to last number, multiply it 
by 2 and add it to sum1. Add sum1 and sum2 together. If total % 10 !== 0, print INVALID and stop the program.

Hint 3
Revealed

You also need to check to make sure the cards start with the correct numbers. If the length is 15, you need to check if they start with 34 or 37. Using a while loop remove the last digit while cardNumber > 100. Then check if it is 34 or 37. Do the same if the length is 16, just remove the last digit until cardNumber > 10 and then check if it is equal to 5
*/

//solution
function validateCard(cardnumber){
    let cardnumberStr = cardnumber.toString();
    let sum =''
    let sumNumber = 0;
    let remSum = 0;
    let total = 0;
    
    
    
    for (let i =0;i<cardnumberStr.length;i++){
        
        if (cardnumberStr.length%2===0){
            
            if (i%2===0){
                 sum += cardnumberStr[i]*2
            }else{
                remSum+=Number(cardnumberStr[i])
            }
        } else{
            if (i%2===1){
                sum += cardnumberStr[i]*2
           }else{
               remSum+=Number(cardnumberStr[i])
           }
            
        }
    }
    for(let j= 0;j<sum.length;j++){
        sumNumber+=Number(sum[j])
    }
    total = remSum+sumNumber
    
    if (total%10===0 && cardnumberStr.length===15){
        console.log('AMEX')
    }else if(total%10===0 && cardnumberStr.length===16){
        console.log('MASTERCARD')
    }else{
        console.log('INVALID')
    }
}