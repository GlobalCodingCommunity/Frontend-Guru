/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
export default function chunk(array, size = 1) {
  const arr = []
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    arr.push(array.slice(size * i, Math.min(size * i + size, array.length)))
  }
  return arr
}
