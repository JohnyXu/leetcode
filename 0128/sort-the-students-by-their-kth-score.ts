function sortTheStudents(score: number[][], k: number): number[][] {
  return score.sort((a, b) => {
    return b[k] - a[k];
  });
}
