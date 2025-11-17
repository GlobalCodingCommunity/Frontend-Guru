/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function pairSum(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];
    const need = target - x;

    if (map.has(need)) {
      return [map.get(need), i];
    }

    map.set(x, i);
  }
}
