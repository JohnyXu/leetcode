function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  let ans: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    const ch1 = s1[i];
    const ch2 = s2[i];
    if (ch1 !== ch2) {
      ans.push(i);
    }
  }
  if (ans.length === 0) {
    return true;
  }
  if (ans.length !== 2) {
    return false;
  }
  const [idx0, idx1] = ans;
  return s1[idx0] === s2[idx1] && s1[idx1] === s2[idx0];
}
