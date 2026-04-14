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