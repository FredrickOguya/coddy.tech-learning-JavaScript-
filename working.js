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
*/
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
