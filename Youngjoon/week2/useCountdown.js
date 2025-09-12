// URL: https://www.greatfrontend.com/questions/javascript/use-countdown?practice=practice&tab=coding

import React from "react";

/**
 * @param {Object} options
 * @param {number} options.countStart
 * @param {number} [options.countStop=0]
 * @param {number} [options.intervalMs=1000]
 * @param {boolean} [options.isIncrement=false]
 */
export default function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1000,
  isIncrement = false,
}) {
  const [count, setCount] = React.useState(countStart);
  const [hasStart, setHasStart] = React.useState(false);

  React.useEffect(() => {
    if (!hasStart) return;

    const id = setInterval(() => {
      if (count === countStop) return stop();

      if (isIncrement) {
        setCount(prev => prev + 1);
      } else {
        setCount(prev => prev - 1);
      }
    }, intervalMs);

    return () => clearInterval(id);
  }, []);

  const start = () => {
    setHasStart(true);
  };

  const stop = () => {
    setHasStart(false);
  };

  const reset = () => {
    setHasStart(false);
    setCount(countStart);
  };

  return { count, start, stop, reset };
}
