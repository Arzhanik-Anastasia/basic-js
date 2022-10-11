const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let k = 1;
  let i = 0;
  while (i < names.length) {
    if (names.indexOf(names[i])) {
      let ind = names.indexOf(names[i]);
      names[ind] = names[ind] + `(${k})`;
      k++;
      // console.log(ind);
    }
    // console.log(str[i]);
    i++;
  }
  /*   for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i])) {
      let ind = str.indexOf(str[i]);
      console.log(ind);
      // str[ind] = str[ind] + `(${k})`;
    }
  }*/
  return names;
}

module.exports = {
  renameFiles,
};
