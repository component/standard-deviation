
/**
 * Module dependencies.
 */

var variance = require('variance');

/**
 * Return the standard deviation of `arr` with optional callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} [fn]
 * @return {Number}
 * @api public
 */

module.exports = function(arr, fn){
  if (0 == arr.length) return null;
  return Math.sqrt(variance(arr, fn));
};
