function distributeCandies(candyType: number[]): number {
  const exSets: Set<number> = new Set<number>();
  for (let i = 0; i < candyType.length; i++) {
    const value: number = candyType[i];
    exSets.add(value);
  }
  return Math.min(candyType.length >> 1, exSets.size);

  // // nType
  // const half: number = candyType.length / 2;
  // let count: number = 0;
  // while (candyType.length > 0) {
  //   const candMap: Map<number, number> = new Map<number, number>();
  //   const exSets: Set<number> = new Set<number>();
  //   for (let i = 0; i < candyType.length; i++) {
  //     const kind = candyType[i];
  //     if (!candMap.get(kind)) {
  //       candMap.set(kind, 1);
  //     } else {
  //       exSets.add(kind);
  //     }
  //     const size: number = Object.values(candMap).length;
  //     if (size >= half || (size >= half - exSets.size && i === candyType.length - 1)) {
  //       count += 1;
  //       break;
  //     }
  //   }
  //   // candyType =
  // }
  // return count;
}

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
