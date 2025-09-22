/**
 * @param {Array<number>} array - Array from which the elements are all numbers.
 * @return {number} Returns mean.
 */
export default function mean(array: number[]): number {
  //   // first approach
  //   let sum = 0;

  //   for (let i = 0; i < array.length; i++) {
  //     sum += array[i];
  //   }

  //   return sum / array.length;

  // second approach
  return array.reduce((prev, curr) => prev + curr, 0) / array.length;
}
