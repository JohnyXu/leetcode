// REVIEW
function intToRoman(num: number): string {
  const mapping: Map<number, string> = new Map<number, string>([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);
  let res: string[] = [];
  for (const key of mapping.keys()) {
    const val = mapping.get(key) as string;
    while (num >= key) {
      num -= key;
      res.push(val);
    }
  }
  return res.join('');
}

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
