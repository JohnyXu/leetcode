function findFarmland(land: number[][]): number[][] {
  let ans: number[][] = [];
  let m = land.length;
  let n = land[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 0 || (i > 0 && land[i - 1][j] === 1) || (j > 0 && land[i][j - 1] === 1)) {
        continue;
      }
      let x = i;
      let y = j;
      for (; x + 1 < m && land[x + 1][j] === 1; x++) {}
      for (; y + 1 < n && land[i][y + 1] === 1; y++) {}
      ans.push([i, j, x, y]);
    }
  }
  return ans;
}
