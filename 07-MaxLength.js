function maxWordLength(params) {
  let longest = "";
  let array = params.split(" ");
  array.forEach((e) => {
    if (longest === "" || longest.length < e.length) {
      longest = e;
    }
  });
  return longest;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
