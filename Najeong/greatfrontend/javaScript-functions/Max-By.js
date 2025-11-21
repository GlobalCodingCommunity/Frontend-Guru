/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export default function maxBy(array, iteratee) {
  let result
  let maxValue
  for (const elem of array) {
    const iterElem = iteratee(elem)
    if (iterElem === null || iterElem === undefined) {
      continue
    }
    if (!maxValue || maxValue < iterElem) {
      result = elem
      maxValue = iterElem
    }
  }
  return result
}
