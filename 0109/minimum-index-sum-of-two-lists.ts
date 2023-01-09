function findRestaurant(list1: string[], list2: string[]): string[] {
  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        const sum: number = i + j;
        if (mapping.has(list1[i]) && (mapping.get(list1[i]) as number) > sum) {
          mapping.set(list1[i], sum);
        } else {
          mapping.set(list1[i], sum);
        }
      }
    }
  }
  let ans: string[] = [];
  let minimum: number = list1.length + list2.length;
  for (const key of mapping.keys()) {
    const value: number = mapping.get(key) as number;
    if (value < minimum) {
      minimum = value;
    }
  }
  for (const key of mapping.keys()) {
    const value: number = mapping.get(key) as number;
    if (value === minimum) {
      ans.push(key);
    }
  }
  return ans;
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'],
  ),
);

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King'],
  ),
);
console.log(findRestaurant(['happy', 'sad', 'good'], ['sad', 'happy', 'good']));
