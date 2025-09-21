// TODO Q1
const inRange = (input: string, min: number, max: number) => {
  const n = input.length;
  return min <= n && n <= max;
};

export { inRange };
