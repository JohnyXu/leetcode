function displayTable(orders: string[][]): string[][] {
  const mapping = new Map();
  let foods: string[] = [];
  let tables: string[] = [];
  let foodSets = new Set<string>();
  let tableSets = new Set<string>();
  for (let i = 0; i < orders.length; i++) {
    const [name, table, food] = orders[i];
    foodSets.add(food);
    tableSets.add(table);
  }
  for (const food of foodSets.keys()) {
    foods.push(food);
  }
  for (const table of tableSets.keys()) {
    tables.push(table);
  }
  foods.sort();
  tables.sort((a, b) => +a - +b);
  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    mapping.set(food, i + 1);
  }
  let ans: string[][] = [];
  let first: string[] = ['Table', ...foods];
  ans.push(first);
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    let arr: number[] = Array.from<number>({ length: foods.length + 1 }).fill(0);
    arr[0] = +table;
    for (let j = 0; j < orders.length; j++) {
      const [name, tTable, food] = orders[j];
      if (tTable === table) {
        arr[mapping.get(food)] += 1;
      }
    }
    ans.push(arr.map((val) => val.toString()));
  }
  return ans;
}

console.log(
  displayTable([
    ['David', '3', 'Ceviche'],
    ['Corina', '10', 'Beef Burrito'],
    ['David', '3', 'Fried Chicken'],
    ['Carla', '5', 'Water'],
    ['Carla', '5', 'Ceviche'],
    ['Rous', '3', 'Ceviche'],
  ]),
);
