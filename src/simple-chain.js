const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    this.res.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      position == undefined ||
      position <= 0 ||
      position > this.res.length
    ) {
      this.res = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.res.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.res = this.res.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    for (let i = 0; i < this.res.length - 1; i++) {
      result += `( ${this.res[i]} )~~`;
    }
    result += `( ${this.res[this.res.length - 1]} )`;
    this.res = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
