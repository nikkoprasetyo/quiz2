const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false

  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  let aLeft = 0;
  let bRight = 0;
  let bLeft = 0;
  let aRight = 0;
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] === "a") {
      aLeft += 1;
    } else {
      bLeft += 1;
    }
  }
  for (let i = 0; i < stringTwo.length; i++) {
    if (stringTwo[i] === "a") {
      aRight += 1;
    } else {
      bRight += 1;
    }
  }
  if (aLeft === aRight && bLeft === bRight) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;
