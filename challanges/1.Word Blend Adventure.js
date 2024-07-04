/*
Create a function named blendWords that receives word1 and word2 as parameters.

This function concatenates the two words, omitting one of the duplicate letters if the last letter of word1 and the first letter of word2 are the same.

Handle the following cases:

If the last letter of word1 and the first letter of word2 are the same, omit one of the duplicate letters.
If either word1 or word2 is empty, return the non-empty string.
If both are empty, return an empty string.
Parameters:

word1 (string): The first word.
word2 (string): The second word.
Returns a string, the result of blending word1 and word2.
*/
//cody's solution
function blendWords(word1, word2) {
    if (word1 === '' && word2 === '') {
      return '';
    }
    
    if (word1 === '') {
      return word2;
    }
    
    if (word2 === '') {
      return word1;
    }
    
    const lastChar1 = word1[word1.length - 1];
    const firstChar2 = word2[0];
    
    if (lastChar1 === firstChar2) {
      return word1 + word2.slice(1);
    }
    
    return word1 + word2;
  }

  //my solution
function blendWords(word1, word2) {
    // Write code here
    let lastLetter = word1.charAt(word1.length-1)
    let firstLetter = word2.charAt(0)
    if (lastLetter === firstLetter){
        let newWord1 = word1.slice(0,word1.length-1)
        console.log(newWord1+word2);
    } else if (word1===''){
        console.log(word2)}
        else if (word2===''){
            console.log(word1)
    }else if(word1 === '' && word2 ===''){
        console.log('')
    }else{
        console.log(word1+word2)
    }
}
blendWords('crisp','potato')