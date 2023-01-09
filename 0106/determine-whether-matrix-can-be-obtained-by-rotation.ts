// REVIEW
function findRotation(mat: number[][], target: number[][]): boolean {
  let count1: number = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      count1 += mat[i][j] > 0 ? 1 : 0;
    }
  }
  let count2: number = 0;
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < target[i].length; j++) {
      count2 += target[i][j] > 0 ? 1 : 0;
    }
  }
  if (count1 !== count2) {
    return false;
  }

  const len: number = mat.length;

  const finds: boolean[] = Array.from<boolean>({ length: 4 }).fill(true);
  for (let i = 0; i < len; i++) {
    // origin
    for (let j = 0; j < len; j++) {
      if (finds[0] && mat[i][j] !== target[i][j]) {
        finds[0] = false;
      }
    }
    // 90
    for (let j = 0; j < len; j++) {
      if (finds[1] && mat[i][j] !== target[j][len - 1 - i]) {
        finds[1] = false;
      }
    }
    // 180
    for (let j = 0; j < len; j++) {
      if (finds[2] && mat[i][j] !== target[len - 1 - i][len - 1 - j]) {
        finds[2] = false;
      }
    }

    // 270
    for (let j = 0; j < len; j++) {
      if (finds[3] && mat[i][j] !== target[len - 1 - j][i]) {
        finds[3] = false;
      }
    }
  }
  return finds.some((v) => v);
}

console.log(
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  ),
);
console.log(
  findRotation(
    [
      [0, 1],
      [1, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  ),
);
console.log(
  findRotation(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
  ),
);
console.log(
  findRotation(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 0, 1],
    ],
    [
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 1],
    ],
  ),
);
console.log(
  findRotation(
    [
      [1, 1],
      [0, 1],
    ],
    [
      [1, 1],
      [1, 0],
    ],
  ),
);
