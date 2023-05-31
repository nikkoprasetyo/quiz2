function isPalindrome(word) {
  let lowerCase = word.toLowerCase();
  let isPalindrome = word.toLowerCase().split("").reverse().join("");
  return lowerCase === isPalindrome;
}

console.log(isPalindrome("kasur ini rUsak")); //true
