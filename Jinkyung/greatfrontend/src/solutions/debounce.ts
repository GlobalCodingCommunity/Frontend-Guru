/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timeoutId = null; //클로저 - 외부 스코프(타이머 갱신)
  return function (...args) {   
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      timeoutId = null;
      func.apply(this, args);
    }, wait);
  };
}
