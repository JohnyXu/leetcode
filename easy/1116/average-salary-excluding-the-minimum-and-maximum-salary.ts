function average(salary: number[]): number {
  salary.sort((a, b) => a - b);
  const filterSalary: number[] = salary.filter((num, index) => {
    return index > 0 && index < salary.length - 1;
  });

  const sum = filterSalary.reduce((total, current) => {
    return total + current;
  }, 0);

  return parseFloat((sum / filterSalary.length).toFixed(5));
}

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
