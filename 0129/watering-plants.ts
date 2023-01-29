function wateringPlants(plants: number[], capacity: number): number {
  let steps: number[] = [];
  for (let i = 0; i < plants.length; i++) {
    steps.push(i + 1);
  }
  let count: number = 0;
  let total: number = capacity;
  for (let i = 0; i < plants.length; i++) {
    const n = plants[i];
    if (total >= n) {
      count += 1;
      total -= n;
    } else {
      count += 2 * steps[i] - 1;
      total = capacity - n;
    }
  }
  return count;
}
