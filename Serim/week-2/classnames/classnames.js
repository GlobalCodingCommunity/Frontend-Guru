export default function classNames(...args) {
  let result = "";

  for (const arg of args) {
    if (!arg) {
      continue;
    }

    if (Array.isArray(arg)) {
      const innerClassNames = classNames(...arg);
      if (innerClassNames) {
        result += (result ? " " : "") + innerClassNames;
      }
    } else if (typeof arg === "string" || typeof arg === "number") {
      result += (result ? " " : "") + arg;
    } else if (typeof arg === "object") {
      for (const key in arg) {
        if (arg[key]) {
          result += (result ? " " : "") + key;
        }
      }
    }
  }

  return result.trim();
}
