/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  pathParam = typeof pathParam === 'string' ? pathParam.split('.') : pathParam
  for (const param of pathParam) {
    if (typeof objectParam !== 'object' || objectParam === null || objectParam[param] === undefined) {
      return defaultValue
    }
    objectParam = objectParam[param]
  }
  return objectParam
}
