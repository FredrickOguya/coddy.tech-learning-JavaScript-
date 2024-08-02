/*
Sort Colors with Green First


Challenge

Easy
Create a function named sortColors that receives an array of color strings. The function will sort the color 

strings in alphabetical order, but will put the color "green" first if it exists in the array. The function should meet the 
following criteria:
The input array will contain only valid color strings.
The output array should have all the colors sorted alphabetically, with "green" appearing first if it exists.
If there are multiple occurrences of "green", they should all appear at the beginning of the output array.
The sorting should be case-sensitive, so "Green" and "green" are treated as different colors.
Examples:
sortColors(["blue", "red", "yellow"]) => ["blue", "red", "yellow"]
sortColors(["blue", "green", "red"]) => ["green", "blue", "red"]
sortColors(["purple", "orange", "green", "cyan"]) => ["green", "cyan", "orange", "purple"]

function sortColors(colors) {
    
    // Write code here
    let sortedArray= colors.sort()
    let solution = []
    let positionOfGreen = sortedArray.indexOf('green')    
    let noOfGreen = 0

    for(let i=0;i<sortedArray.length-1;i++){
        if (colors[i]==='green'){
            noOfGreen+=1
        }
    }
    let removedSolution = sortedArray.splice(positionOfGreen,noOfGreen)
    for(let i =0;i<noOfGreen;i++){
        sortedArray.unshift('green')
    }
    console.log(sortedArray)
}
sortColors(['red', 'orange', 'yellow', 'green', 'green', 'blue', 'indigo', 'violet'])

let userAge = 24
function celebrateBirthday(){
    return userAge+1
}
console.log(celebrateBirthday())

function calculateSquare (num){
    return num*num
   }
   console.log(calculateSquare(4))
   */
   function isEven(num){
    if (num%2===1){
        return false
    }else{
        return true
    }
}
console.log(isEven(8))
