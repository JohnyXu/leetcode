function judgeCircle(moves: string): boolean {
  let origin: number[] = [0, 0];
  const mapping: Map<string, number[]> = new Map<string, number[]>();
  mapping.set('L', [0, -1]);
  mapping.set('R', [0, 1]);
  mapping.set('U', [1, 0]);
  mapping.set('D', [-1, 0]);
  const arr: string[] = moves.split('');
  for (const ch of arr) {
    const pair = mapping.get(ch) as number[];
    origin[0] = origin[0] + pair[0];
    origin[1] = origin[1] + pair[1];
  }
  return origin[0] === origin[1] && origin[0] === 0;
}

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
console.log(judgeCircle('LR'));
