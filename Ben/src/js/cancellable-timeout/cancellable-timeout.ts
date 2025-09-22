export default function setCancellableTimeout(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => void,
  delay?: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: Array<any>
): () => void {
  const timeId = setTimeout(callback, delay, ...args);

  return () => clearTimeout(timeId);
}
