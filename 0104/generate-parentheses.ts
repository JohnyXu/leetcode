function generateParenthesis(n: number): string[] {
  function dfs(left: number, right: number, t: string) {
    if (left > n || right > n || left < right) {
      return;
    }

    if (left === n && right === n) {
      ans.push(t);
      return;
    }
    dfs(left + 1, right, t + '(');
    dfs(left, right + 1, t + ')');
  }
  let ans: string[] = [];
  dfs(0, 0, '');
  return ans;
}
