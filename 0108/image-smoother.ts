function getAverage(y: number, x: number, img: number[][]): number {
  const directions: number[][] = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];

  let rowN: number = img.length;
  let colN: number = img[0].length;
  let sum: number = 0;
  let count: number = 0;
  for (let i = 0; i < directions.length; i++) {
    const pair: number[] = directions[i];
    const nextY = y + pair[0];
    const nextX = x + pair[1];
    if (nextY >= 0 && nextY < rowN && nextX >= 0 && nextX < colN) {
      sum += img[nextY][nextX];
      count += 1;
    }
  }
  return Math.floor(sum / count);
}

function imageSmoother(img: number[][]): number[][] {
  let newImg: number[][] = [];

  for (let i = 0; i < img.length; i++) {
    let ans: number[] = [];
    for (let j = 0; j < img[i].length; j++) {
      ans.push(getAverage(i, j, img));
    }
    newImg.push(ans);
  }
  return newImg;
}

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ]),
);
