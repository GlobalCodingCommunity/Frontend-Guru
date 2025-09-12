// URL: https://www.greatfrontend.com/questions/javascript/use-counter?practice=practice&tab=coding

import React from "react";

/**
 * @param number initialValue
 * @return Object
 */
export default function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset, setCount };
}
