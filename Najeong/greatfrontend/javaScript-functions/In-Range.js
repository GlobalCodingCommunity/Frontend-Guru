/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export default function inRange(value, start, end) {
  if (arguments.length === 2) {
    end = start
    start = 0
  }
  if (start > end) {
    const temp = start
    start = end
    end = temp
  }
  if (start <= value && value < end) {
    return true
  }
  return false
}
