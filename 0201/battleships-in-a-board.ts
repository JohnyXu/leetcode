function countBattleships(board: string[][]): number {
  let ans: number = 0;
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let noX: boolean = true;
      if (i >= 1) {
        if (board[i - 1][j] === 'X') {
          noX = false;
        }
      }
      if (j >= 1) {
        if (board[i][j - 1] === 'X') {
          noX = false;
        }
      }
      if (noX && board[i][j] === 'X') {
        ans++;
      }
    }
  }
  return ans;
}
