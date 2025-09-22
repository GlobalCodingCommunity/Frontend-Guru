export default function fill<T>(
  array: Array<T>,
  value: unknown,
  start: number = 0,
  end: number = array.length
): Array<T> {
  if (start < 0) start = array.length + start;
  if (end < 0) end = array.length + end;

  for (let i = start; i < end; i++) {
    if (array[i]) {
      array[i] = value as T;
    }
  }

  return array;
}
