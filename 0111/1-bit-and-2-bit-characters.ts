function isOneBitCharacter(bits: number[]): boolean {
  let i: number = 0;
  let num: number = 0;
  let prev: number = 0;

  while (true) {
    num = prev * 2 + bits[i];
    if (num === 0 || num === 2 || num === 3) {
      if (i === bits.length - 1) {
        break;
      }
      prev = 0;
    } else {
      prev = num;
    }
    i += 1;
  }
  return num === 0;
}

console.log(isOneBitCharacter([1, 0, 0]));
console.log(isOneBitCharacter([1, 1, 1, 0]));
