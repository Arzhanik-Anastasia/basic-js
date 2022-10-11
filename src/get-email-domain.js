const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let st = email.lastIndexOf("@");
  email = email.slice(st + 1, email.length);
  return email;
}

module.exports = {
  getEmailDomain,
};
