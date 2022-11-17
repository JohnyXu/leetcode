function minDeletionSize(strs: string[]): number {
  let count: number = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let acceptNoDelete = true;
    for (let j = 0; j < strs.length - 1; j++) {
      const current: string = strs[j][i];
      const next: string = strs[j + 1][i];
      if (next.charCodeAt(0) - current.charCodeAt(0) < 0) {
        acceptNoDelete = false;
        break;
      }
    }
    if (!acceptNoDelete) {
      count += 1;
    }
  }
  return count;
}

// console.log(minDeletionSize(['cba', 'daf', 'ghi']));
// console.log(minDeletionSize(['a', 'b']));
// console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
