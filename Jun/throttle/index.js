/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      return
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
    }, wait);
    func.apply(this, args);
  };
}
