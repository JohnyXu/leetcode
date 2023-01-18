function reformatDate(date: string): string {
  const dates: string[] = date.split(' ');
  let day: string = '';
  if (dates[0].endsWith('1st')) {
    day = dates[0].length > 3 ? dates[0].substring(0, 1) + '1' : '1';
  } else if (dates[0].endsWith('2nd')) {
    day = dates[0].length > 3 ? dates[0].substring(0, 1) + '2' : '2';
  } else if (dates[0].endsWith('3rd')) {
    day = dates[0].length > 3 ? dates[0].substring(0, 1) + '3' : '3';
  } else if (dates[0].endsWith('th')) {
    day = dates[0].substring(0, dates[0].length - 2);
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  const mapping: Map<string, string> = new Map<string, string>([
    ['Jan', '01'],
    ['Feb', '02'],
    ['Mar', '03'],
    ['Apr', '04'],
    ['May', '05'],
    ['Jun', '06'],
    ['Jul', '07'],
    ['Aug', '08'],
    ['Sep', '09'],
    ['Oct', '10'],
    ['Nov', '11'],
    ['Dec', '12'],
  ]);
  const month: string = mapping.get(dates[1]) as string;
  let arr: string[] = [dates[2], month, day];
  return arr.join('-');
}
