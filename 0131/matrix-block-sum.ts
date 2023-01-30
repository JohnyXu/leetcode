function matrixBlockSum(mat: number[][], k: number): number[][] {
  let newMat: number[][] = [];
  for (let i = 0; i < mat.length; i++) {
    let arr: number[] = [];
    for (let j = 0; j < mat[0].length; j++) {
      arr.push(0);
    }
    newMat.push(arr);
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let rMin = Math.max(i - k, 0);
      let rMax = Math.min(i + k, mat.length - 1);

      let cMin = Math.max(j - k, 0);
      let cMax = Math.min(j + k, mat[i].length - 1);
      let sum: number = 0;
      for (let m = rMin; m <= rMax; m++) {
        for (let n = cMin; n <= cMax; n++) {
          sum += mat[m][n];
        }
      }
      newMat[i][j] = sum;
    }
  }
  return newMat;
}
