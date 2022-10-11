const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let res;
  let str = n.split("-").join("");
  if (str.length == 12) {
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] == "0" ||
        str[i] == "1" ||
        str[i] == "2" ||
        str[i] == "3" ||
        str[i] == "4" ||
        str[i] == "5" ||
        str[i] == "6" ||
        str[i] == "7" ||
        str[i] == "8" ||
        str[i] == "9" ||
        str[i] == "A" ||
        str[i] == "B" ||
        str[i] == "C" ||
        str[i] == "D" ||
        str[i] == "E" ||
        str[i] == "F"
      ) {
        res = true;
      } else {
        res = false;
        break;
      }
    }
  }
  if (res == undefined) {
    return false;
  }
  return res;
}
module.exports = {
  isMAC48Address,
};
