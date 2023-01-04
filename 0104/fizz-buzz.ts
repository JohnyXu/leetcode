function fizzBuzz(n: number): string[] {
  const result: string[] = Array.from({ length: n }).map((val, index) => {
    return (index + 1).toString();
  });

  for (let i = 0; i < result.length; i++) {
    let num: number = parseInt(result[i]);
    if (num % 3 === 0 && num % 5 === 0) {
      result[i] = 'FizzBuzz';
    } else if (num % 3 === 0) {
      result[i] = 'Fizz';
    } else if (num % 5 === 0) {
      result[i] = 'Buzz';
    }
  }
  return result;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
