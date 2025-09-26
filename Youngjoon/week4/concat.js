/**
 * @template T
 * @param {...(T | Array<T>)} items
 * @return {Array<T>}
 */
Array.prototype.myConcat = function (...items) {
  let result = [...this];

  for (let i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {
      result.push(...items[i]);
    } else {
      result.push(items[i]);
    }
  }

  return result;
};
