function isPathCrossing(path: string): boolean {
  const mapping: Map<string, number> = new Map<string, number>();

  const arr: string[] = path.split('');
  let prev: string = '0,0';
  mapping.set(prev, 1);
  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];
    let curArr: string[] = prev.split(',');
    let curStr: string = '';
    switch (ch) {
      case 'N':
        curArr[1] = (+curArr[1] + 1).toString();
        break;
      case 'S':
        curArr[1] = (+curArr[1] - 1).toString();
        break;
      case 'E':
        curArr[0] = (+curArr[0] + 1).toString();
        break;
      case 'W':
        curArr[0] = (+curArr[0] - 1).toString();
        break;
    }
    curStr = curArr.join(',');
    mapping.set(curStr, (mapping.get(curStr) || 0) + 1);
    prev = curStr;
  }
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) as number;
    if (count > 1) {
      return true;
    }
  }
  return false;
}
