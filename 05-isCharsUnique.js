function isCharsUnique(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] > string[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
