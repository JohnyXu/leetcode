/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let keyMap = {};

  let count = 0;
  for (let i = 0; i < key.length; i++) {
    const ch = key[i];
    if (!ch.trim() || keyMap[ch]) {
      continue;
    }
    keyMap[ch] = String.fromCharCode('a'.charCodeAt(0) + count);
    count++;
  }

  let newMessage = '';
  for (let i = 0; i < message.length; i++) {
    if (keyMap[message[i]]) {
      newMessage += keyMap[message[i]];
    } else {
      newMessage += message[i];
    }
  }
  return newMessage;
};
