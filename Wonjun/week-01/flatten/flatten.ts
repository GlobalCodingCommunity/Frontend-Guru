/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value: Array<any>) {
  const result: any[] = []

  for (let i = 0; i < value.length; i++) {
    const current = value[i]

    if (Array.isArray(current)) {
      result.push(...flatten(current))
    } else {
      result.push(current)
    }
  }

  return result
}

/**
 * iterative solution
 * 
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

 */