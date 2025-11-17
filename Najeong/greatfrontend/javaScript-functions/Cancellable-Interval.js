/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
  const interval = setInterval(() => callback(...args), delay)
  return () => clearInterval(interval)
}
