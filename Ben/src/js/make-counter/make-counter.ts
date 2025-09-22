export default function makeCounter(initialValue: number = 0): () => number {
  // first approach
  // let value = initialValue;
  // return () => value++;

  // second approach
  return () => initialValue++;
}
