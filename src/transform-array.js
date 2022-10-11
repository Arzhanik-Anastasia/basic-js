const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let res = arr.slice();
  for (let i = 0; i < res.length; i++) {
    if (res[i] == "--discard-next") {
      if (i < res.length - 1) {
        res[i] = "false";
        res[i + 1] = "false";
      } else {
        res.pop();
      }
    }
    if (res[i] == "--discard-prev") {
      if (i > 0) {
        res[i] = "false";
        res[i - 1] = "false";
      } else {
        res.shift();
        i--;
      }
    }
    if (res[i] == "--double-next") {
      if (i < res.length - 1) {
        res[i] = res[i + 1];
      } else {
        res.pop();
      }
    }
    if (arr[i] == "--double-prev") {
      if (i > 0) {
        res[i] = res[i - 1];
      } else if (i == 0 && res[i] == "--double-prev") {
        res.shift();
        i--;
      }
    }
  }
  return res.filter((elem) => elem != "false");
}

module.exports = {
  transform,
};
