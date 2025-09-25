/**
 * @param {number[]} nums
 * @return {boolean}
 */
const findDuplicate = (nums) => {
  // 1. create an object for storing each array element as a key
  const obj = {};
  // 2. iterate over the array nums
  for (const num of nums) {
    // 3. if the object already has the array element as a key, then the array is a duplicate
    if (obj[num]) return true;
    // 4. otherwise, store (num, true) pair in the object.
    else obj[num] = true;
  }
  // 5. if the array has been iterated, that means the array has no duplicate elements.
  return false;
};
