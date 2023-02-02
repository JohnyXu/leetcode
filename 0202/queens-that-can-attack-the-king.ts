function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
  let ans: number[][] = [];
  const sets = new Set();
  for (let i = 0; i < queens.length; i++) {
    const [x, y] = queens[i];
    sets.add(x + ',' + y);
  }
  let dirs: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const n = 8;
  for (const [a, b] of dirs) {
    let [x, y] = king;
    while (0 <= x + a && x + a < n && 0 <= y + b && y + b < n) {
      x += a;
      y += b;
      if (sets.has(x + ',' + y)) {
        ans.push([x, y]);
        break;
      }
    }
  }
  return ans;
}
