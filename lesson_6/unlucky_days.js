/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

Iterate over all the months of the given year.
For each month, get the day that falls on the 13th.
Count the 13ths that fall on a Friday.
Return the count.
 */

function fridayThe13ths(year) {
  const FRI = 5;
  let thirteens = [];

  for (let month = 0; month < 12; month++) {
    thirteens.push(new Date(year, month, 13));
  }
  return thirteens.filter(day => day.getDay() === FRI).length;
}
console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));