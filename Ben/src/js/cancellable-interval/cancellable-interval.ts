export default function setCancellableInterval(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => void,
  delay?: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: Array<any>
): () => void {
  const timerId = setInterval(callback, delay, ...args);

  return () => clearInterval(timerId);
}
