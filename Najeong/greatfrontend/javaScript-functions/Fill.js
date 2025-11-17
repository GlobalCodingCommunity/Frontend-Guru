/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  const clampStart = start < 0 ? clamp(array.length + start, 0, array.length) : clamp(start, 0, array.length)
  const clampEnd = end < 0 ? clamp(array.length + end, 0, array.length) : clamp(end, 0, array.length)
  for (let i = clampStart; i < clampEnd; i++) {
    array[i] = value
  }
  return array
}

function clamp(value, start, end) {
  if (value < start) {
    return start
  }
  if (value > end) {
    return end
  }
  return value
}
