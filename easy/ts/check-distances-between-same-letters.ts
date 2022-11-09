function checkDistances(s: string, distance: number[]): boolean {
  let sMap: { [key: string]: number[] } = {};
  s.split('').forEach((ch, index) => {
    if (!sMap[ch]) {
      sMap[ch] = [];
    }
    sMap[ch].push(index);
  });
  let res: number[] = Array.from({ length: 26 }, (k, v) => 0);
  for (let i = 0; i < res.length; i++) {
    let ch: string = String.fromCharCode(i + 'a'.charCodeAt(0));
    if (sMap[ch] && sMap[ch].length > 0) {
      res[i] = sMap[ch][1] - sMap[ch][0] - 1;
      if (distance[i] !== res[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  checkDistances(
    'abaccb',
    [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ),
);
console.log(
  checkDistances(
    'aa',
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ),
);
