/**
 * @param number initialValue
 * @return Object
 */
import { useState } from "react";

export default function useCounter(initialValue) {
  let [count, setCount] = useState(initialValue || 0);

  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count - 1);
  }

  function reset() {
    return setCount(initialValue || 0);
  }

  return { count, increment, decrement, reset, setCount };
}

// type SetCountArg = number | ((prev: number) => number);

// export default function useCounter(initialValue: number) {
//   let count = initialValue || 0;

//   const setCount = (valueOrUpdater: SetCountArg) => {
//     if (typeof valueOrUpdater === "function") {
//       const updater = valueOrUpdater as (prev: number) => number;
//       count = updater(count);
//     } else {
//       count = valueOrUpdater;
//     }
//   };

//   const increment = () => {
//     setCount((x) => x + 1);
//   };

//   const decrement = () => {
//     setCount((x) => x - 1);
//   };

//   const reset = () => {
//     setCount(initialValue || 0);
//   };

//   return {
//     get count() {
//       return count;
//     },
//     increment,
//     decrement,
//     reset,
//     setCount,
//   };
// }
