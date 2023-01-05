function halvesAreAlike(s: string): boolean {
  const first: string = s.substring(0, s.length / 2);
  const second: string = s.substring(s.length / 2);

  const sets: Set<string> = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let count1: number = first.split('').reduce((acc, cur) => {
    return acc + (sets.has(cur) ? 1 : 0);
  }, 0);
  let count2: number = second.split('').reduce((acc, cur) => {
    return acc + (sets.has(cur) ? 1 : 0);
  }, 0);
  return count1 === count2;
}

console.log(halvesAreAlike('book'));
console.log(halvesAreAlike('textbook'));
console.log(halvesAreAlike('AbCdEfGh'));
