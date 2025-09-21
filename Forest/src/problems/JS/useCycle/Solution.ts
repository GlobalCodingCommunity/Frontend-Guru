import { useState } from "react";

export default function useCycle<T>(...args: T[]) {
  const [current, setCurrent] = useState(args[0]);

  if (!args.length) return 0;

  // mode state

  // cycle function
  const cycle = () => {
    const copyArgs = args;
    const arrayLength = args.length;
    const currentIndex = args.indexOf(current);
    const isArrayEnd = currentIndex === arrayLength - 1;
    if (isArrayEnd) return copyArgs[0];

    if (currentIndex === -1) return 0;

    if (isArrayEnd) return copyArgs[0];

    return setCurrent(copyArgs[currentIndex + 1]);
  };

  return [current, cycle];
}
