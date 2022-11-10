/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let newCommand = '';
  for (let index = 0; index < command.length; index++) {
    const key = command[index];
    if (key == 'G') {
      newCommand += key;
    } else if (key == '(') {
      if (index < command.length - 1 && command[index + 1] == ')') {
        newCommand += 'o';
        index++;
      } else if (
        index < command.length - 3 &&
        command[index + 1] != ')' &&
        command[index + 3] == ')'
      ) {
        newCommand += 'al';
        index += 2;
      }
    }
  }
  return newCommand;
};
