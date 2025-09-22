export default function clamp(
  value: number,
  lower: number,
  upper: number
): number {
  // first approach
  // if (value < lower) return lower;
  // if (value > upper) return upper;
  // return value;

  // second approach
  return Math.max(lower, Math.min(value, upper));
}
