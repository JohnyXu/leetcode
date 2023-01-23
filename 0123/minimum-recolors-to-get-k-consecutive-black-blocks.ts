function minimumRecolors(blocks: string, k: number): number {
  let minimum: number = blocks.length;

  for (let i = 0; i <= blocks.length - k; i++) {
    let count: number = 0;
    for (let j = i; j < i + k; j++) {
      if (blocks[j] === 'W') {
        count += 1;
      }
    }
    if (count < minimum) {
      minimum = count;
    }
  }
  return minimum;
}
