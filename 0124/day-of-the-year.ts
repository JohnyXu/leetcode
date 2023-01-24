function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function dayOfYear(date: string): number {
  let months: number[] = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const dates: number[] = date.split('-').map((val) => +val);
  let days: number = dates[2];

  if (dates[1] < 2) {
    return days;
  }
  if (dates[1] === 2) {
    return months[dates[1] - 1] + days;
  }
  for (let i = 0; i < dates[1]; i++) {
    days += months[i];
  }
  if (isLeapYear(dates[0])) {
    return days + 1;
  }
  return days;
}
