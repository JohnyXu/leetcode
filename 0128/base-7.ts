function convertToBase7(num: number): string {
  if (num === 0) {
    return '0';
  }
  let negSign: boolean = num < 0;
  let acc: string = '';
  num = Math.abs(num);
  while (num !== 0) {
    acc += num % 7;
    num = Math.floor(num / 7);
  }
  return (negSign ? '-' : '') + acc.split('').reverse().join('');
}
