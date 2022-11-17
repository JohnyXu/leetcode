function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const prev: number = image[sr][sc];
  image[sr][sc] = color;

  const visited: boolean[][] = [];
  for (let i = 0; i < image.length; i++) {
    const row = image[i];
    visited[i] = [];
    for (let j = 0; j < row.length; j++) {
      visited[i][j] = false;
    }
  }

  const dots: number[][] = [];
  dots.push([sr, sc]);
  while (true) {
    const dot: number[] = dots.pop() as number[];
    const [newRow, newCol] = dot;
    //left
    const left: number = newCol - 1;
    if (newCol - 1 >= 0 && image[newRow][left] === prev && !visited[newRow][left]) {
      dots.push([newRow, left]);
      image[newRow][left] = color;
      visited[newRow][left] = true;
    }
    //top
    const top: number = newRow - 1;
    if (top >= 0 && image[top][newCol] === prev && !visited[top][newCol]) {
      dots.push([top, newCol]);
      image[top][newCol] = color;
      visited[top][newCol] = true;
    }
    //right
    const right: number = newCol + 1;
    if (right < image[0].length && image[newRow][right] === prev && !visited[newRow][right]) {
      dots.push([newRow, right]);
      image[newRow][right] = color;
      visited[newRow][right] = true;
    }
    //bottom
    const bottom: number = newRow + 1;
    if (bottom < image.length && image[bottom][newCol] === prev && !visited[bottom][newCol]) {
      dots.push([bottom, newCol]);
      image[bottom][newCol] = color;
      visited[bottom][newCol] = true;
    }
    if (dots.length <= 0) {
      break;
    }
  }
  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
);
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0,
  ),
);
