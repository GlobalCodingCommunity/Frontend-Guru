/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  let result = [];

  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      result = [...result, ...flatten(value[i])];
    } else {
      result.push(value[i]);
    }
  }

  return result;
}


export default function flattenSolution1(value) {
  let result = [];

  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      result.push(...flatten(value[i]));
    } else {
      result.push(value[i]);
    }
  }

  return result;
}

export default function flattenSolution2(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    [],
  );
}