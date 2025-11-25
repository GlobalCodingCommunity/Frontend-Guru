export default function smallestInRotatedArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return numbers[left];
}
