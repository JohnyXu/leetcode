/**
 Do not return anything, modify board in-place instead.
 */

function getSurroundMatrix(y: number, x: number, board: number[][]): number[][] {
  let directions: number[][] = [
    // xy
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  const filterCells: number[][] = directions
    .map((pair: number[]) => {
      const [x1, y1] = pair;
      return [x1 + x, y1 + y];
    })
    .filter(([x1, y1]) => {
      return x1 >= 0 && x1 < board[0].length && y1 >= 0 && y1 < board.length;
    });
  // console.log(filterCells);
  return filterCells;
}

function getLiveCount(y: number, x: number, board: number[][]) {
  const surrounds: number[][] = getSurroundMatrix(y, x, board);
  const count = surrounds.reduce((acc: number, pair: number[]) => {
    const [x1, y1] = pair;
    return acc + board[y1][x1];
  }, 0);
  return count;
}

function gameOfLife(board: number[][]): void {
  let newMatrix: number[][] = [];
  for (let y = 0; y < board.length; y++) {
    let ans: number[] = [];
    for (let x = 0; x < board[y].length; x++) {
      let count: number = getLiveCount(y, x, board);
      if (board[y][x] === 1) {
        if (count < 2) {
          ans.push(0);
        } else if (count === 2 || count === 3) {
          ans.push(board[y][x]);
        } else if (count > 3) {
          ans.push(0);
        }
      } else {
        if (count === 3) {
          ans.push(1);
        } else {
          ans.push(board[y][x]);
        }
      }
    }
    newMatrix.push(ans);
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      board[y][x] = newMatrix[y][x];
    }
  }
}

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);

// gameOfLife([
//   [1, 1],
//   [1, 0],
// ]);
