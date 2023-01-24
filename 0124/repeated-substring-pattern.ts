function repeatedSubstringPattern(s: string): boolean {
  const half: number = Math.floor(s.length / 2);
  for (let i = 1; i <= half; i++) {
    const sub: string = s.substring(0, i);
    const next: string = s.substring(i, i + 1);
    if (!sub.includes(next)) {
      continue;
    }

    let acc: string = '';
    let canBuild: boolean = true;
    for (let i = 0; i < s.length; i += sub.length) {
      const ch = s.substring(i, i + sub.length);
      acc += ch;
      if (acc.length === sub.length) {
        if (acc !== sub) {
          canBuild = false;
          break;
        } else {
          acc = '';
        }
      }
    }
    if (acc.length > 0) {
      canBuild = false;
    }
    if (canBuild) {
      return true;
    }
  }
  return false;
}
