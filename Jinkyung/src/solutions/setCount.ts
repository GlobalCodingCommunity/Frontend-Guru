/**
 * @param number initialValue
 * @return Object
 */
import { useState } from "react";
export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () => {
      setCount((value) => value + 1);
    },
    decrement: () => {
      setCount((value) => value - 1);
    },
    reset: () => {
      setCount(initialValue);
    },
    setCount,
  };
}
