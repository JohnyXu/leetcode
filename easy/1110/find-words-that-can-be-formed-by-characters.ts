function countCharacters(words: string[], chars: string): number {
  const newWords: string[] = words.filter((word) => {
    const chMap: Map<string, number> = new Map<string, number>();
    chars.split('').forEach((ch) => {
      chMap.set(ch, (chMap.get(ch) || 0) + 1);
    });
    return word.split('').every((ch) => {
      return (
        chMap.get(ch) && (chMap.get(ch) as number) > 0 && chMap.set(ch, (chMap.get(ch) || 0) - 1)
      );
    });
  });
  return newWords.reduce((sum: number, word: string) => {
    return sum + word.length;
  }, 0);
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'));
console.log(
  countCharacters(
    [
      'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
      'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
      'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
      'boygirdlggnh',
      'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
      'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
      'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
      'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
      'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
      'oxgaskztzroxuntiwlfyufddl',
      'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
      'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
      'eeilfdaookieawrrbvtnqfzcricvhpiv',
      'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
      'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
      'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
      'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
      'teyygdmmyadppuopvqdodaczob',
      'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
      'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
    ],
    'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp',
  ),
);
