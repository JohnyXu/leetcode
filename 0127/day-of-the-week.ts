function dayOfTheWeek(day: number, month: number, year: number): string {
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  let c: number = Math.floor(year / 100);
  year = year % 100;
  let week =
    (Math.floor(c / 4) -
      2 * c +
      year +
      Math.floor(year / 4) +
      Math.floor((13 * (month + 1)) / 5) +
      day -
      1 +
      7) %
    7;
  console.log(week);
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
    (week + 7) % 7
  ];
}

// console.log(dayOfTheWeek(31, 8, 2019));
console.log(dayOfTheWeek(7, 3, 2003));
