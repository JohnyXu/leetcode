function isLeapyear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function countLeapYear(year: number, month: number) {
  if (month <= 2) {
    year--;
  }
  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
}

function daysBetweenDates(date1: string, date2: string): number {
  const date1Arr: number[] = date1.split('-').map((val) => +val);
  const date2Arr: number[] = date2.split('-').map((val) => +val);
  let days1: number = 0;
  let days2: number = 0;

  let [year1, month1, day1] = date1Arr;
  let [year2, month2, day2] = date2Arr;

  let months: number[] = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  days1 += year1 * 365 + day1;
  for (let i = 1; i < month1; i++) {
    days1 += months[i];
  }
  days1 += countLeapYear(year1, month1);

  days2 += year2 * 365 + day2;
  for (let i = 1; i < month2; i++) {
    days2 += months[i];
  }
  days2 += countLeapYear(year2, month2);
  return Math.abs(days1 - days2);
}
