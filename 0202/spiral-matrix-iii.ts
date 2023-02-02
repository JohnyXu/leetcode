function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
  let dr: number[] = [0, 1, 0, -1];
  let dc: number[] = [1, 0, -1, 0];
  let ans: number[][] = [];
  let t: number = 0;
  ans[t++] = [rStart, cStart];
  if (rows * cols === 1) {
    return ans;
  }

  for (let k = 1; k < 2 * (rows + cols); k += 2) {
    for (let i = 0; i < 4; i++) {
      let dk: number = k + Math.floor(i / 2);
      for (let j = 0; j < dk; j++) {
        rStart += dr[i];
        cStart += dc[i];
        if (0 <= rStart && rStart < rows && 0 <= cStart && cStart < cols) {
          ans[t++] = [rStart, cStart];
          if (t === rows * cols) {
            return ans;
          }
        }
      }
    }
  }
  return [];
}
