function squareIsWhite(coordinates: string): boolean {
  const matrix: number[][] = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
  ];

  const pairs: string[] = coordinates.split('');
  const [col, row] = pairs;
  const y: number = 8 - parseInt(row);
  const x: number = col.charCodeAt(0) - 'a'.charCodeAt(0);
  return matrix[y][x] === 0;
}

console.log(squareIsWhite('a1'));
console.log(squareIsWhite('h3'));
console.log(squareIsWhite('c7'));
