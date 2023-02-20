function findDuplicate(paths: string[]): string[][] {
  let mapping = new Map();
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const eles: string[] = path.split(' ');

    const [root, ...rest] = eles;
    for (let j = 0; j < rest.length; j++) {
      const e = rest[j];
      let start = e.indexOf('(');
      let end = e.lastIndexOf(')');
      const fName = e.substring(0, start);
      const content = e.substring(start + 1, end);
      mapping.set(content, [...(mapping.get(content) ?? []), root + '/' + fName]);
    }
  }

  let ans: string[][] = [];
  for (const key of mapping.keys()) {
    const val: string[] = mapping.get(key);
    if (val.length > 1) {
      ans.push(val);
    }
  }
  return ans;
}
