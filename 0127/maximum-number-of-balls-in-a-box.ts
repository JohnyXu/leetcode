function countBalls(lowLimit: number, highLimit: number): number {
  let mapping = new Map();
  for (let i = lowLimit; i <= highLimit; i++) {
    let val: number = 0;
    let target: number = i;
    while (target !== 0) {
      val += target % 10;
      target = Math.floor(target / 10);
    }
    mapping.set(val, (mapping.get(val) ?? 0) + 1);
  }
  let maximum: number = -1;
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key);
    if (count > maximum) {
      maximum = count;
    }
  }
  return maximum;
}
