# Flatten

## What does it mean to flatten?

Taking a nested array (arrays inside arrays) and converting it into a single‑level array containing all the values in order.

## What built in js method can flatten arrays and what are its limitations?

only flattens one level at a time

## What is the time and space complexity?

time: o(n), visit every element once
space: o(n), create a new flattened array containing n elements

## can you implement this iteratively?

iterative solution

function flatten(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length > 0) {
    const value = stack.pop();

    if (Array.isArray(value)) {
      // push children back onto the stack
      // reversed so order is preserved
      stack.push(...value);
    } else {
      result.push(value);
    }
  }

  return result.reverse(); // because we used pop()
}
