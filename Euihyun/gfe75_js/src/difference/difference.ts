export default function difference<T>(
  array: Array<T>,
  values: Array<T>
): Array<T> {
  // const arrayToSet = new Set<T>(array);
  // const valuesToSet = new Set<T>(values);
  // const differenceSet = arrayToSet.difference(valuesToSet);
  // for (const item of differenceSet) {
  //   if (String(item) === "") {
  //     differenceSet.delete(item);
  //   }
  // }
  // return Array.from(differenceSet);

  // time complexity: O(m), space complexity: O(n + m)
  const arrayToSet = new Set(array);
  const valuesToSet = new Set(values);

  for (const item of valuesToSet) {
    if (arrayToSet.has(item)) {
      arrayToSet.delete(item);
    }
  }
  return Array.from(arrayToSet);
}

console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3] (case of a sparse array)
