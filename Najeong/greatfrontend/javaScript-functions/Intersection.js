/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersection(...arrays) {
  let result = new Array(...new Set(arrays[0])) ?? []
  for (let i = 1; i < arrays.length; i++) {
    result = result.filter(elem => arrays[i].includes(elem))
  }
  return result
}
