export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
  const result = [];
  let chunk: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);

    if (chunk.length === size) {
      result.push(chunk);
      chunk = [];
    }
  }
  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}
