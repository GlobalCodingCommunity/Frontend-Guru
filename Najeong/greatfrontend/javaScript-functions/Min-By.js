/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
  let result, minValue
  for (const elem of array) {
    const iterElem = iteratee(elem)

    if (iterElem === null || iterElem === undefined) {
      continue
    }

    if (minValue === undefined || minValue > iterElem) {
      result = elem
      minValue = iterElem
    }
  }
  return result
}
