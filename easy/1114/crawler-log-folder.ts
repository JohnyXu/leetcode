function minOperations(logs: string[]): number {
  let count: number = 0;
  for (let i = 0; i < logs.length; i++) {
    const current = logs[i];
    if (current === './') {
      continue;
    } else if (current === '../') {
      count--;
    } else {
      count += 1;
    }
    if (count <= 0) {
      count = 0;
    }
  }
  return count;
}

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './']));
console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']));
console.log(minOperations(['d1/', '../', '../', '../']));
