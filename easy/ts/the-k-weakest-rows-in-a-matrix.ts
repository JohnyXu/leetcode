function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((row, index) => {
      const count = row.reduce((sum, cur) => {
        return sum + cur;
      }, 0);
      return {
        count: count,
        index,
      };
    })
    .sort((a, b) => {
      return a.count - b.count;
    })
    .map(({ index }) => {
      return index;
    })
    .filter((num, idx) => {
      return idx < k;
    });
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3,
  ),
);
