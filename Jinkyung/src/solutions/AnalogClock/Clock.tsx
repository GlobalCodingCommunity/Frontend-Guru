import { useState, useEffect } from "react";

export default function Clock() {
  const [hour, setHour] = useState((new Date(Date.now()).getHours() % 12) * 30);
  const [minutes, setMinutes] = useState(new Date(Date.now()).getMinutes() * 6);
  const [seconds, setSeconds] = useState(new Date(Date.now()).getSeconds() * 6);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 6);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(minutes);
    const intervalId = setInterval(() => {
      setMinutes((prev) => prev + 6);
    }, 1000 * 60);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setHour((prev) => prev + 6);
      },
      1000 * 60 * 60,
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wrapper" >

      
      <div className="hour" style={{ transform: `rotate(${hour}deg)` }}></div>
      <div
        className="minutes"
        style={{ transform: `rotate(${minutes}deg)` }}
      ></div>
      <div
        className="seconds"
        style={{ transform: `rotate(${seconds}deg)` }}
      ></div>
    </div>
  );
}

/**
 * cal degree
 * 12h - 360degree
 * 1h - 30
 * 1m - 6
 * 1s - 6
 *
 */
//4div - wrapper, hour, minutes,seconds
/**
 * 1. styling css
 * 2. transform
 * 3. current time rendering
 */
