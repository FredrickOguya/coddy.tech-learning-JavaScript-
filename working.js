/*
function math(num1, num2) {
    // Write your code below this line
        num1+=1;
        num2-= 1;

    let ans = Math.abs(num1 - num2)
    console.log(ans)
    
    
}
//6
math(-4,4)
//10
math(4,-4)
//7
math (7,2)
//4
math (1, 7)
//3
math (-2,-3)
//1
math(-3,-2)
//4
math (0, -2)
 //0
math(-2,0)
//2
math (0,4)
//6
math(4,0)


function math(num1, num2) {
    // Write your code below this line
        num1+=1;
        num2-= 1;

    let ans = Math.abs(num1 - num2)
    return(ans)
    
    
}
//6
math(-4,4)
//10
math(4,-4)
//7
math (7,2)
//4
math (1, 7)
//3
math (-2,-3)
//1
math(-3,-2)
//4
math (0, -2)
 //0
math(-2,0)
//2
math (0,4)
//6
math(4,0)

function evenOdd(number) {
    // Write your code below this line
    switch (number){
    case 1,:
        return('odd');
        break;
    case 2:
        return('even');
        break;
    case 3:
        return('odd');
        break;
    case 4:
        return('even');
        break;
    case 5:
        return('odd');
        break;
    case 6:
        return('even');
        break;
    case 7:
        return('odd');
        break;
    case 8:
        return('even');
        break;
    case 9:
        return('odd');
        break;
    case 10:
        return('even');
        break;
    }
}
evenOdd(5)
return('hi')

function digits(num) {
    // Write your code below this line
    let digit= 1;

    while(num >10 ){
        num=Math.round(num/=10)
        digit++
        
        console.log (num)
        console.log(digit)
        
    }
        
        

    
    
}
digits(34909)

function printer(num) {
    // Write your code below this line

       do{ 
        console.log(num)
        num --;
    
       }while (num > 0){
        
       }
      
}

printer(7)
You are given a number variable called number. 
Write a program that loops from 0 to that number (
not including) and calculates the sum of all even 
numbers in that range. You will have to use a for loop, 
and perhaps an if statement inside the for loop to check 
if the number is even. Try using math to check if the 
number is even. If you get stuck, Hint 1 will help you 
with the math.



function evenSum(number) {
    // Write your code below this line
    let total = 0;
    for(let i = 0;i<number;i++){
        if([i]%2==0){
            total+=Number([i])
            console.log(total) 
        }
    }
    console.log(total)
}
evenSum(100)

function printer(numbers) {
    // Write your code below this line
    for (let i =numbers.length-5;i<numbers.length;i++){
        console.log(numbers[i])
        //console.log(theFirstNo)
    }
    
}
printer([1, 2, 3, 4, 5, 6, 7,5,2,8,1])
You are given two arrays, nums1 and nums2. 
Your job is to get the last element of nums1 and 
insert it as the first element of nums2. 
Remove the last element of nums1. Print nums1, 
then print nums2.


function elSwap(nums1, nums2) {
    // Write your code below this line
    
        let lastElement = nums1[nums1.length-1]
        let firstElement = nums2[0]
        nums1.pop();
        nums2.unshift(lastElement)
        console.log(nums1)
        console.log(nums2)
    
}
elSwap([2, 5, 6, 1],[6, 7, 2, 8, 2])
const unionArr = [];

for (/* Looping through first array ) {
    
    // Use the .includes() method and the NOT boolean operator for the condition in the if statement below
    if (/* unionArr doesn't include current element) {
        // Add current element to unionArr
    }
}

for (/* Looping through second array ) {
    
    if (/* unionArr doesn't include current element) {
        // Add current element to unionArr
    }
    
}

console.log(unionArr);

function union(arr1, arr2) {
    // Write your code below this line
    let differntElements=[];
    
    for (let i=0;i<arr1.length;i++){
       
        if (!differntElements.includes(arr1[i])){
             differntElements.push(arr1[i])
           
        }
    }
    for(let i= 0;i<arr2.length;i++){
        if(!differntElements.includes(arr2[i])){
            differntElements.push(arr2[i])
        }
    }
    
   console.log(differntElements)
}

union([2, 5, 3, 6,],[1, 2, 3, 7])
Credit

Let's validate some credit cards.

There are different types of credit cards used today. Each credit card has a credit card number. Your job today will be to check if that number is valid, and if the number is valid, you will have to print what type of credit card it is. A credit card number looks like: 4003600000000014

Let's first focus on what makes a credit card number valid. An algorithm called Luhn's Algorithm is used. You can determine whether the credit card number is valid using the following steps:

Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products’ digits together.
Add the sum to the sum of the digits that weren’t multiplied by 2.
If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!
 

That’s kind of confusing, so let’s try an example with this Visa: 4003600000000014.

For the sake of discussion, let’s first underline every other digit, starting with the number’s second-to-last digit:

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

 

Also, American Express uses 15-digit numbers and MasterCard uses 16-digit numbers. Mastercard numbers always start with 5. American Express card numbers start with 34 or 37. Your job is to print AMEX if the card is valid and an American Express card, and to print MASTERCARD if the card is valid and a MasterCard. Print INVALID if the card is not valid.


Challenge

Medium
You are given a function called validateCard. It takes in one parameter, cardNumber, that contains the card number that should be validated. First, check if the number is a valid credit card number using Luhn's Algorithm as shown above. If it is not a valid credit card, print INVALID. If the card is valid, check if it is a MasterCard or an American Express card. Check this using the number of digits. American Express uses 15-digit numbers and MasterCard uses 16-digit numbers. Don't forget to check the starting numbers as well. If American Express is correct, print AMEX, and if MasterCard is correct, print MASTERCARD. If it is any other length, the card number is invalid.


Hints

Hint 1


function validateCard(cardnumber){
    let cardnumberStr = cardnumber.toString();
    let sum =''
    let sumNumber = 0;
    let remSum = 0;
    let total = 0;
    console.log(cardnumberStr.length)
    
    
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
validateCard(5418878773156819)


function substitution(key, message) {
    // Write your code below this line
    let UpperCaseArrayPosition = [];
    let lowerCaseArrayPosition = [];
    let UpperCaseArray = []
    let lowerCaseArray =[];
    let lowerCaseLetterArray = [];
    let lowerCaseLetterPosition = [];
    let charactersArrayPosition = [];
    let characterArray = [];
    let upperCaseAlphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let newUpperCaseArray = [];
    let newLowerCaseArray = [];
    let lowerCaseAlphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let solution = [];
    let messageArray = message.split('')
    
    for (let j=0;j<message.length;j++){
        if(message[j]>= "a" && message[j]<="z"){
            lowerCaseArray+=message[j]
            lowerCaseArrayPosition.push(j)
        }else if (message[j]>= "A" && message[j]<="Z"){
            UpperCaseArray+=message[j];
            UpperCaseArrayPosition+=j
        }else{

            characterArray+=message[j]
            charactersArrayPosition+=j
            
        }
        for (let k=0;k<upperCaseAlphabets.length;k++){
            if(message[j]===upperCaseAlphabets[k]){
                newUpperCaseArray+=key.at(k)
            }
        }
        for (let l=0;l<lowerCaseAlphabets.length;l++){
            if(message[j] === lowerCaseAlphabets[l]){
                newLowerCaseArray += key.at(l).toLowerCase()
            }
        }
    }
    for (let m = 0;m<UpperCaseArrayPosition.length;m++){
        for(let n=0;n<newUpperCaseArray.length;n++){
            if (m===n){
                messageArray.splice(UpperCaseArrayPosition[m],1,newUpperCaseArray[n])
            }
        }
    }
    for (let p = 0;p<lowerCaseArrayPosition.length;p++){
        for(let q=0;q<newLowerCaseArray.length;q++){
            if (p===q){
                messageArray.splice(lowerCaseArrayPosition[p],1,newLowerCaseArray[q])
            }
        }
    }
    let answer = messageArray.join('')
    
    console.log(answer)
}
substitution(['N', 'Q', 'X', 'P', 'O', 'M', 'A', 'F', 'T', 'R', 'H', 'L', 'Z', 'G', 'E', 'C', 'Y', 'J', 'I', 'U', 'W', 'S', 'K', 'D', 'V', 'B'],'Hello, World!')

var twoSum = function(nums, target) {
    let solution =[]
   for (let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[j]+nums[i]===target&& nums[i]!==nums[j]){
                solution.push(j)
            }
        }
    }
   
     return solution
};

console.log(twoSum([3,2,4],6))

function preparePicnicBasket(currentItems, itemsToAdd) {
    // Write code here
    let number = 0;
    for(let i =0;i<itemsToAdd;i++){
        number+=1
        currentItems += ` item${number}`
    }
    return currentItems
}
console.log(preparePicnicBasket('meat beans',4))

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let xorSum = 0;

    for (let i = 1; i <= n; i++) {
        xorSum ^= i;
    }

    for (let num of arr) {
        xorSum ^= num;
    }

    console.log(xorSum) ;
}
findMissingNumber([1, 2, 3, 4]) 

function areAnagrams(str1, str2) {
    // write your code below
    let arr = str1.split('').sort().join('')
    let arr2 = str2.split('').sort().join('')

    return arr === arr2 ? true:false;
}
console.log(areAnagrams('night','thing'))

function findMax(arr) {
    // write your code below 
    return Math.max(...arr)
}
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6]))

function rotateArray(steps, arr) {
    // write your code below
    let removed = arr.slice(0,steps)
    let afterRe = arr.slice(steps)
    let result = [...afterRe,...removed]
    return result
}

console.log(rotateArray(2,[1,2,3,4,5]))
function findMedianSortedArrays(nums1, nums2) {
    // write your code below 
    let both = [...nums1,...nums2].sort((a,b)=>a-b);
  
    return both%2===1 ? both[Math.floor(both.length/2)] : (both[(both.length/2)-1]+both[both.length/2])/2

}
console.log(findMedianSortedArrays([2, 4, 6],[1, 3, 5]))

function gcd(a, b) {
    // write your code below
    let dividers= []
    for(let i=1;i<a;i++){
        if(a%i===0 && a%i ===0){
            dividers.push(i)
        }
    }
    
    return Math.max(...dividers)
}
console.log(gcd(12,18))

function fizzBuzz(n) {
    // write your code below
    for (let i = 1;i<n;i++){
         if(i%3===0&&i%5===0){
            console.log('FizzBuzz')
        }else if(i%3===0){
            console.log('Fizz')
        }else if(i%5===0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(20)

function twoSum(arr, target) {
    // write your code below 
    let conc = [];
    for (let i= 0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return[i,j]
            }
        }
        
    }
    
}
console.log(twoSum([8, 12, 5, 2, 10, 17],15))

function isValidEmail(email) {
    // write your code below 
    const emailPattern = /^[a-zA-Z0-9,_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z{2,}$]/
    return emailPattern.test(email);
}
console.log(isValidEmail("fredfrick@oguya.com"))
*/
function countCharacters(str) {
    // write your code below
    let obje = {}
    for(char of str){
        obje[char]=(obje[char]||0)+1
    }
    return obje
}
console.log(countCharacters('programming'))