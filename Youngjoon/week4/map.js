/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (!(i in this)) {
      result.length = i + 1;
      continue;
    }

    result.push(callbackFn.call(thisArg, this[i], i, this));
  }

  return result;
};
