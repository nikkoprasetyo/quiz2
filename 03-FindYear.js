// Remember, the Date constructor takes a zero-based month number, so a
// month value of 10 corresponds to the eleventh month, November
const dates = [
  new Date(2021, 10, 20),
  new Date(2020, 3, 12),
  new Date(2020, 5, 23),
  new Date(2022, 3, 18),
];
// Find the first date in 2020
function matchingDate(dates, year) {
  //   let date2020 = [];
  //   for (let i = 0; i < dates.length; i++) {
  //     let getYear = dates[i].getFullYear() === year;
  //     if (getYear) {
  //       date2020.push(dates[i]);
  //     }
  //   }
  //   //   Get latest month
  //   let latestMonth = undefined;
  //   for (let i = 0; i < date2020.length; i++) {
  //     let getMonth = date2020[i].getMonth();
  //     if (!latestMonth) {
  //       latestMonth = getMonth;
  //     } else if (latestMonth > getMonth) {
  //       latestMonth = getMonth;
  //     }
  //   }
  let earliestDate = null;

  for (let i = 0; i < dates.length; i++) {
    if (dates[i].getFullYear() === year) {
      if (earliestDate === null || dates[i] < earliestDate) {
        earliestDate = dates[i];
      }
    }
  }

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  let dayIndex = earliestDate.getDay();
  const outputDay = weekday[dayIndex].substring(0, 3);

  let monthIndex = earliestDate.getMonth();
  const outputMonth = months[monthIndex].substring(0, 3);

  const outputDate = earliestDate.getDate();

  let outputYear = earliestDate.getFullYear();

  return `${outputDay} ${outputMonth} ${outputDate} ${outputYear}`;
}

console.log(matchingDate(dates, 2020)); //Sun Apr 12 2020 00:00:00 GMT+0700 (Western Indonesia Time)
