// REVIEW
function canFormArray(arr: number[], pieces: number[][]): boolean {
  for (let i = 0; i < arr.length; ) {
    let found: boolean = false;
    let foundK: number = -1;
    for (let j = 0; j < pieces.length; j++) {
      if (arr[i] === pieces[j][0]) {
        found = true;
        foundK = j;
        break;
      }
    }
    if (found) {
      for (let m = 0; m < pieces[foundK].length; m++) {
        if (arr[i] !== pieces[foundK][m]) {
          return false;
        }
        i = i + 1;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(canFormArray([15, 88], [[88], [15]]));
console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
