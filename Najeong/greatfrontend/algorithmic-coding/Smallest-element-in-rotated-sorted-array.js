/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function smallestInRotatedArray(numbers) {
  let left = 0
  let right = numbers.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if ((mid === numbers.length - 1 || numbers[mid] < numbers[mid + 1]) && (mid === 0 || numbers[mid] < numbers[mid - 1])) {
      return numbers[mid]
    }
    if (numbers[mid] > numbers[numbers.length - 1]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}
