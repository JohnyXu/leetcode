function titleToNumber(columnTitle: string): number {
  let maps: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < 26; i++) {
    const ch = String.fromCharCode('A'.charCodeAt(0) + i);
    maps.set(ch, i + 1);
  }
  const arr: string[] = columnTitle.split('').reverse();
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    const value: number = maps.get(arr[i]) as number;
    num += value * Math.pow(26, i);
  }
  return num;
}

console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
