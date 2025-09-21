export default function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  wait: number
): (...args: T) => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return (...args: T) => {
    // Clear any existing timer
    if (timerId) {
      clearTimeout(timerId);
    }

    // Set new timer
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
