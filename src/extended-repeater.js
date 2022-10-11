const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.addition) {
    options.addition = "";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  let res = "";
  let newStr = "";
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    res += options.addition + options.additionSeparator;
  }

  res += options.addition;

  for (let k = 1; k < options.repeatTimes; k++) {
    newStr += str + res + options.separator;
  }
  newStr += str + res;
  return newStr;
}

module.exports = {
  repeater,
};
