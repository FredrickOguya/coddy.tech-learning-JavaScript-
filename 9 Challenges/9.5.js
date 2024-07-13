/*
Substitution

Time to encrypt some text! Let's say we want to encrypt the following text: 'Hello, World!'. We will write a program to do just that!

Our program will encrypt text by replacing letters with another letter. A special key will tell us which letters should be replaced with which letters. The special key should be 26 characters, specifying what letter to swap the corresponding letter with.

Let's say we are given the key: NQXPOMAFTRHLZGECYJIUWSKDVB. This means that the letter A should be replaced with N, letter B should be replaced with Q, letter C with X and so on. 

Encrypting the text 'Hello, World!' with the above mentioned key would give us the result: 'Folle, Kejlp!'. Notice how the case of the letters has not changed. Those that were uppercase are still uppercase. Lowercase remains lowercase. Special characters like ,, !,   do not get encrypted.

 

You will be given the key as an array of characters, uppercase or lowercase (or both). Your job will be to go letter by letter and encrypt it if it's a letter or leave it be if it's a special character. You can access string characters the same as an array, using [] and an index inside. Make sure that the encrypted version of the letter is the same case.


Challenge

Hard
You are given a function called substitution that takes in two parameters. Parameter key is an array of 26 letters that should be used as the key to the encryption. Parameter number two, message is the original text that you have to encrypt. Your job is to write code that will encrypt the text and store it in a string. Return the string to complete the function. Feel free to write other functions as well that you will use in the main function. 


Hints

Hint 1
Revealed

The logic of the program would look something like this:

1. Loop through every character

2. Check if character should be encrypted

3. If character is a letter and should be encrypted

3.1 Find what index character is in the alphabet

3.2 Find corresponding encrypted letter from the key

3.3 Make sure letter is the right case

3.4 Add to string

4. If character is a special character and should not be encrypted

4.1 Add to string

5. Return string.

Hint 2
Revealed

It is recommended that you write a function to test if a character is a letter or not. You could do this using an array of all letters sorted alphabetically. If the array includes the character, it should return true. Remember, some characters are uppercase, some are lowercase.

Hint 3
Revealed

In order to find what index the character is in the alphabet, you could use an array of all letters sorted alphabetically. Using this index you can then find the corresponding letter to be added to the encrypted text. Remember, you have to add both uppercase and lowercase letters, so you might have to use two arrays. Or, you could somehow find away around that....
*/
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
            lowerCaseArray.push(message[j])
            lowerCaseArrayPosition.push(j)
        }else if (message[j]>= "A" && message[j]<="Z"){
            UpperCaseArray.push(message[j]);
            UpperCaseArrayPosition.push(j)
        }else{

            characterArray.push(message[j])
            charactersArrayPosition.push(j)
            
        }
        for (let k=0;k<upperCaseAlphabets.length;k++){
            if(message[j]===upperCaseAlphabets[k]){
                newUpperCaseArray+=key[k]
            }
        }
        for (let l=0;l<lowerCaseAlphabets.length;l++){
            if(message[j] === lowerCaseAlphabets[l]){
                newLowerCaseArray.push(key[l].toLowerCase()) 
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
    
    return answer
}