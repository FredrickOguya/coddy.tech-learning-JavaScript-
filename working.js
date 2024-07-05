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
*/

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