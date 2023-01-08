function tictactoe(moves: number[][]): string {
  let first: number[][] = [];
  let second: number[][] = [];
  for (let i = 0; i < 3; i++) {
    let ans1: number[] = [];
    let ans2: number[] = [];
    for (let j = 0; j < 3; j++) {
      ans1.push(0);
      ans2.push(0);
    }
    first.push(ans1);
    second.push(ans2);
  }

  for (let i = 0; i < moves.length; i++) {
    const pair: number[] = moves[i];
    const [y, x] = pair;
    if (i % 2 === 0) {
      first[y][x] = 1;
    } else {
      second[y][x] = 1;
    }
  }

  // A Win
  for (let i = 0; i < first.length; i++) {
    if (first[i][0] + first[i][1] + first[i][2] === 3) {
      return 'A';
    }
    if (first[0][i] + first[1][i] + first[2][i] === 3) {
      return 'A';
    }
  }
  if (first[0][0] + first[1][1] + first[2][2] === 3) {
    return 'A';
  }
  if (first[0][2] + first[1][1] + first[2][0] === 3) {
    return 'A';
  }

  // B win
  for (let i = 0; i < second.length; i++) {
    if (second[i][0] + second[i][1] + second[i][2] === 3) {
      return 'B';
    }
    if (second[0][i] + second[1][i] + second[2][i] === 3) {
      return 'B';
    }
  }
  if (second[0][0] + second[1][1] + second[2][2] === 3) {
    return 'B';
  }
  if (second[0][2] + second[1][1] + second[2][0] === 3) {
    return 'B';
  }
  if (moves.length < 9) {
    return 'Pending';
  }
  return 'Draw';
}

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ]),
);
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ]),
);
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ]),
);
