Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array. If array can't be split evenly, the final chunk will be the remaining elements. The function should not modify the original input array.

Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk.
Returns
(Array): Returns the new array of chunks.

Examples

```js
chunk(["a", "b", "c", "d"]); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
```

The function should return an empty array if the array argument is empty.

Constraints
size >= 1
0 <= length of array <= 100
