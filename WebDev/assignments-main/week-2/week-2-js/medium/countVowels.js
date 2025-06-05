/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ['a','e','i','o','u']

   let str1 = str.toLowerCase().split("");
   let vcount = 0;
   for (let ch of str1){
    if (vowels.includes(ch)){
      vcount += 1
    }
   }
   return vcount
}

module.exports = countVowels;