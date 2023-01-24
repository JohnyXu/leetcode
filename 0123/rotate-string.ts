function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  for (let i = 0; i <= s.length; i++) {
    let found: boolean = true;
    for (let j = 0; j < goal.length; j++) {
      let idx: number = i + j >= s.length ? i + j - s.length : i + j;
      const ch = s[idx];
      const gCh = goal[j];
      if (gCh !== ch) {
        found = false;
        break;
      }
    }
    if (found) {
      return true;
    }
  }
  return false;
}
