// Count only the letters (possibly converted to lowercase) of each word.
// If a word is shorter and the count of each letter is at least the count of that letter in the licensePlate,
// it is the best answer we've seen yet.
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  let filter: string = licensePlate
    .toLowerCase()
    .split('')
    .filter((ch) => {
      let code: number = ch.charCodeAt(0);
      return code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0);
    })
    .sort((a, b) => {
      return a.charCodeAt(0) - b.charCodeAt(0);
    })
    .join('');

  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < filter.length; i++) {
    mapping.set(filter[i], (mapping.get(filter[i]) || 0) + 1);
  }

  let minWordLen: number = 1000;
  let ans: string = '';
  for (let i = 0; i < words.length; i++) {
    const word: string = words[i];

    const mapping1: Map<string, number> = new Map<string, number>();
    for (let i = 0; i < word.length; i++) {
      mapping1.set(word[i], (mapping1.get(word[i]) || 0) + 1);
    }
    let complete: boolean = true;
    for (const key of mapping.keys()) {
      if ((mapping1.get(key) || 0) < (mapping.get(key) as number)) {
        complete = false;
        break;
      }
    }
    // console.log(complete, word, mapping, mapping1);

    if (complete) {
      if (word.length < minWordLen) {
        minWordLen = word.length;
        ans = word;
      }
    }
  }

  return ans;
}

// console.log(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple']));
// console.log(shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show']));
console.log(
  shortestCompletingWord('Ah71752', [
    'suggest',
    'letter',
    'of',
    'husband',
    'easy',
    'education',
    'drug',
    'prevent',
    'writer',
    'old',
  ]),
);
