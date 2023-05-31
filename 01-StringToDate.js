/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */

function strToDate(s) {
  // Ch
  if (isNaN(Date.parse(s))) {
    return `${s} bad format date`;
  } else {
    const today = new Date(s);
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayIndex = today.getDay();
    const day = weekday[dayIndex].substring(0, 3);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = today.getMonth();
    const month = months[monthIndex];

    const date = today.getDate();
    const year = today.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  }
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date
