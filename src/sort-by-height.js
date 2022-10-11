const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let heigth = [];
  let res = [];
  arr.forEach((item) => {
    if (item != -1) {
      heigth.push(item);
    }
  });
  function compareNumbers(a, b) {
    return a - b;
  }
  heigth.sort(compareNumbers);
  arr.forEach((item) => {
    if (item == -1) {
      res.push(item);
    } else {
      res.push(heigth[0]);
      heigth.shift();
    }
  });
  return res;
}

module.exports = {
  sortByHeight,
};
