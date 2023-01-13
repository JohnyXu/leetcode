function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[],
): number {
  let needEnergy: number = 0;
  let needExperience: number = 0;

  let sumEnergy: number = energy.reduce((acc, cur) => acc + cur, 0);
  needEnergy = Math.max(0, sumEnergy + 1 - initialEnergy);

  let sumExp: number = initialExperience;
  for (let i = 0; i < experience.length; i++) {
    const cur: number = experience[i];
    if (sumExp <= cur) {
      let thisExp: number = cur + 1 - sumExp;
      needExperience += thisExp;
      sumExp += cur + thisExp;
    } else {
      sumExp += cur;
    }
  }
  return needEnergy + needExperience;
}

console.log(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1]));
console.log(minNumberOfHours(5, 3, [1, 4], [2, 5]));
console.log(minNumberOfHours(2, 4, [1], [3]));
console.log(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 50]));
console.log(minNumberOfHours(100, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 1, 2, 3, 1, 2, 10]));
