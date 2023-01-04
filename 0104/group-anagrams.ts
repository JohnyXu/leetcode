function groupAnagrams(strs: string[]): string[][] {
  const mapping: Map<string, string[]> = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    const arr: string[] = strs[i].split('');
    arr.sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
    const key = arr.join('');
    if (mapping.has(key)) {
      const list1: string[] = mapping.get(key) as string[];
      list1.push(strs[i]);
    } else {
      const list1: string[] = [];
      list1.push(strs[i]);
      mapping.set(key, list1);
    }
  }

  let ans: string[][] = [];
  for (const list1 of mapping.values()) {
    ans.push(list1);
  }
  return ans;
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
