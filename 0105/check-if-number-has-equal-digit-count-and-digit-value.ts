function digitCount(num: string): boolean {
  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < num.length; i++) {
    mapping.set(num[i], (mapping.get(num[i]) || 0) + 1);
  }
  for (let i = 0; i < num.length; i++) {
    const cur: number = parseInt(num[i]);
    const count = mapping.get(i.toString()) || 0;
    if (cur !== count) {
      return false;
    }
  }
  return true;
}

console.log(digitCount('1210'));
console.log(digitCount('030'));
