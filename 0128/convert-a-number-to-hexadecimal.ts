function toHex(num: number): string {
  if (num === 0) {
    return '0';
  }
  let acc: string = '';
  while (num !== 0) {
    let x: number = num & 15;
    if (x < 10) {
      acc += x;
    } else {
      acc += String.fromCharCode(x - 10 + 'a'.charCodeAt(0));
    }
    num = num >> 4;
    if (acc.length >= 8) {
      break;
    }
  }
  return acc.split('').reverse().join('');
}

// console.log(toHex(26));
console.log(toHex(-1));
