function findArray(pref: number[]): number[] {
  if (pref.length === 1) {
    return pref;
  }
  let prev: number = pref[0];
  let ans: number[] = [prev];

  for (let i = 1; i < pref.length; i++) {
    let cur: number = pref[i];
    let next: number = prev ^ cur;
    ans.push(next);
    prev = prev ^ next;
  }
  return ans;
}
