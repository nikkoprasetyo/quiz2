/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let output = [];
  for (let i = year1 + 1; i < year2; i++) {
    let hasil = isKabisat(i);
    if (hasil) {
      output.push(i);
    }
  }
  return output;
}

function isKabisat(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  //   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  //     console.log(year);
  //     return year;
  //   }
}

console.log(howManyKabisat(1997, 2021));
