/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  return this.map(elem => elem ** 2)
};
