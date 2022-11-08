/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const letters = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  let letterMap = {};
  letters.forEach((morse, index) => {
    let newCh = String.fromCharCode('a'.charCodeAt(0) + index);
    letterMap[newCh] = morse;
  });

  let sets = new Set();
  words.forEach((word) => {
    let newMorse = '';
    for (let i = 0; i < word.length; i++) {
      newMorse += letterMap[word[i]];
    }
    sets.add(newMorse);
  });
  return sets.size;
};
