function isAnagram(s: string, t: string): boolean {
  const arrs: string[] = s
    .split('')
    .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
  const arrt: string[] = t
    .split('')
    .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));

  return arrs.join('') === arrt.join('');
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
