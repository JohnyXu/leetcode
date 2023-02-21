function removeSubfoldersTLE(folder: string[]): string[] {
  const mapping = new Map();
  const countMap = new Map();
  for (const f of folder) {
    mapping.set(f, false);
    countMap.set(f, f.split('/').length);
  }
  for (let i = 0; i < folder.length; i++) {
    const path = folder[i];
    for (let j = 0; j < folder.length; j++) {
      if (mapping.get(path)) {
        break;
      }

      const nPath = folder[j];
      if (i === j || path.length < nPath.length) {
        continue;
      }
      if (countMap.get(path) <= countMap.get(nPath)) {
        continue;
      }
      if (path.startsWith(nPath) && countMap.get(path) !== countMap.get(nPath)) {
        mapping.set(path, true);
        break;
      }
    }
  }

  let ans: string[] = [];
  for (const key of mapping.keys()) {
    const isSub = mapping.get(key);
    if (!isSub) {
      ans.push(key);
    }
  }
  return ans;
}

function removeSubfolders(folder: string[]): string[] {
  // sort
  folder.sort((a: string, b: string) => {
    let count: number = Math.max(a.length, b.length);
    for (let i = 0; i < count; i++) {
      if (a[i] && b[i]) {
        if (a[i] !== b[i]) {
          return a[i].charCodeAt(0) - b[i].charCodeAt(0);
        }
      } else if (a[i]) {
        return 1;
      } else if (b[i]) {
        return -1;
      }
    }
    return 0;
  });
  let ans: string[] = [folder[0]];
  for (let i = 1; i < folder.length; i++) {
    const last = ans[ans.length - 1];
    let m = last.length;
    const cur = folder[i];
    let n = cur.length;
    if (m > n || !(cur.substring(0, m) === last && cur[m] === '/')) {
      ans.push(cur);
    }
  }
  return ans;
}
console.log(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d']));
console.log(removeSubfolders(['/a', '/a/b/c', '/a/b/d']));
console.log(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']));
