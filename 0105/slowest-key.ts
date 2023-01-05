function slowestKey(releaseTimes: number[], keysPressed: string): string {
  const mapping: Map<string, number> = new Map<string, number>();

  let prev: number = 0;
  for (let i = 0; i < keysPressed.length; i++) {
    const duration: number = releaseTimes[i] - prev;
    if (mapping.has(keysPressed[i])) {
      let prevDuration: number = mapping.get(keysPressed[i]) as number;
      mapping.set(keysPressed[i], Math.max(prevDuration, duration));
    } else {
      mapping.set(keysPressed[i], duration);
    }
    prev = releaseTimes[i];
  }

  let maxDuration: number = 0;
  let prevCh: string = '';

  for (const key of mapping.keys()) {
    const duration: number = mapping.get(key) as number;
    if (duration > maxDuration) {
      maxDuration = duration;
      prevCh = key;
    } else if (duration === maxDuration && key.charCodeAt(0) > prevCh.charCodeAt(0)) {
      maxDuration = duration;
      prevCh = key;
    }
  }
  return prevCh;
}

console.log(slowestKey([9, 29, 49, 50], 'cbcd'));
console.log(slowestKey([12, 23, 36, 46, 62], 'spuda'));
