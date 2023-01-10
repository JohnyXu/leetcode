function findContentChildren(g: number[], s: number[]): number {
  s.sort((a, b) => b - a);
  g.sort((a, b) => b - a);

  let count: number = 0;
  for (let i = 0; i < g.length; i++) {
    const cur = g[i];
    let findIdx: number = -1;
    for (let j = 0; j < s.length; j++) {
      const size = s[j];
      if (size >= cur) {
        count += 1;
        findIdx = j;
        break;
      }
    }
    s = s.filter((val, index) => {
      return index !== findIdx;
    });
  }
  return count;
}

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
