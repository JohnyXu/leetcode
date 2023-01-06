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
  for (let i = 0; i < len; i++) {
    let found = false;

    // origin
    for (let j = 0; j < len; j++) {
      if (mat[i][j] !== target[i][j]) {
        break;
      }
      if (j === len - 1) {
        found = true;
      }
    }
    // 90
    if (!found) {
      for (let j = 0; j < len; j++) {
        if (mat[i][j] !== target[j][len - 1 - i]) {
          break;
        }
        if (j === len - 1) {
          found = true;
        }
      }
    }
    // 180
    if (!found) {
      for (let j = 0; j < len; j++) {
        if (mat[i][j] !== target[len - 1 - i][len - 1 - j]) {
          break;
        }
        if (j === len - 1) {
          found = true;
        }
      }
    }

    // 270
    if (!found) {
      for (let j = 0; j < len; j++) {
        if (mat[i][j] !== target[len - 1 - j][i]) {
          break;
        }
        if (j === len - 1) {
          found = true;
        }
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
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
