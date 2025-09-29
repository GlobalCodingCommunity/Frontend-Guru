import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  //계산하는 부분 잘 생각해놓기*
  const formatTime = (timer) => {
    const totalMs = timer * 10; // 10ms 단위라면
    const hh = Math.floor(totalMs / 3600000);
    const mm = Math.floor((totalMs % 3600000) / 60000);
    const ss = Math.floor((totalMs % 60000) / 1000);
    const ms = totalMs % 1000;

    const pad = (num, size = 2) => String(num).padStart(size, "0");

    return `${pad(hh)}:${pad(mm)}:${pad(ss)}.${pad(ms, 3)}`;
  };

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [running]);

  const handleStartClick = () => {
    setRunning(true);
  };
  const handleStopClick = () => {
    setRunning(false);
  };
  const handleResetClick = () => {
    setRunning(false);
    setTimer(0);
  };

  return (
    <div>
      <p>{formatTime(timer)}</p>
      <div>
        {running ? (
          <button onClick={() => handleStopClick()}>Stop</button>
        ) : (
          <button onClick={() => handleStartClick()}>Start</button>
        )}
        <button onClick={() => handleResetClick()}>Reset</button>
      </div>
    </div>
  );
}

/**
 * 1. start/stop button timer
 * 2. reset 0, stop timer
 * 3. seconds elapsed, down to ms
 * 4. format hh:mm:ss:ms
 */
