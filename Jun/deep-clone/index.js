export default function deepClone(value) {
  if (Array.isArray(value)) {
    return value.map((val) => deepClone(val));
  }
  if (typeof value === "object" && value !== null) {
    const res = {};
    Object.entries(value).forEach(([key, val]) => {
      res[key] = deepClone(val);
    });
    return res;
  }
  return value;
}
