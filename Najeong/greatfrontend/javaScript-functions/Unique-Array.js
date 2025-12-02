/**
 * @param {Array} array
 * @return {Array}
 */
export default function uniqueArray(array) {
  return [...(new Set(array))]
}
