function decrypt(code: number[], k: number): number[] {
  if (k === 0) {
    return code.map((num) => 0);
  }
  const newCodes: number[] = [];
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      const arr: number[] = code.filter((num, index) => {
        if (i + k >= code.length) {
          return (
            (0 <= index && index <= (i + k) % code.length) || (index > i && index < code.length)
          );
        }
        return i < index && index <= i + k;
      });
      newCodes[i] = arr.reduce((sum, current) => {
        return sum + current;
      }, 0);
    }
  }
  if (k < 0) {
    for (let i = 0; i < code.length; i++) {
      const arr: number[] = code.filter((num, index) => {
        if (i + k >= 0) {
          return i > index && index >= i + k;
        }

        return (index < code.length && index >= i + k + code.length) || (index < i && index >= 0);
      });
      newCodes[i] = arr.reduce((sum, current) => {
        return sum + current;
      }, 0);
    }
  }
  return newCodes;
}

console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([2, 4, 9, 3], -2));
