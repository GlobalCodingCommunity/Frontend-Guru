const pairSum = (numbers: number[], target: number): number[] => {
  // if numbers has length 2, immediately return the indexes
  if (numbers.length === 2) {
    return [0, 1];
  }

  // first transform the input array into a Map -> O(N)
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < numbers.length; i++) {
    map1.set(i, numbers[i]);
    map2.set(numbers[i], i);
  }

  // Iterate over the entries of map1 -> O(N)
  const iterator = map1.entries();
  for (const entry of iterator) {
    // find in map2 if it has target - value -> O(1)
    const complement = map2.get(target - entry[1]);

    if (complement && complement !== entry[0]) {
      // need to check if the identical entries are not associated
      return [entry[0], complement];
    }
  }

  return [-1, -1]; // just in case no appropriate indices are found
};
