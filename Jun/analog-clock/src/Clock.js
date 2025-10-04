import { useState, useEffect } from 'react';

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() % 12;

  // Calculate the degree of rotation for the second hand
  // Each second represents 6 degrees (360 degrees / 60 seconds = 6 degrees/second)
  const secondDeg = seconds * 6;

  // Calculate the degree of rotation for the minute hand
  // Each minute represents 6 degrees (360 degrees / 60 minutes = 6 degrees/minute)
  // To make the minute hand move smoothly, add a fraction of the degree based on the current seconds
  const minuteDeg = (minutes + seconds / 60) * 6;

  // Calculate the degree of rotation for the hour hand
  // Each hour represents 30 degrees (360 degrees / 12 hours = 30 degrees/hour)
  // To make the hour hand move smoothly, add a fraction of the degree based on the current minutes
  const hourDeg = (hours + minutes / 60) * 30;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="frame">
      <div className="time" style={{ transform: `rotate(${hourDeg}deg)` }} />
      <div className="min" style={{ transform: `rotate(${minuteDeg}deg)` }} />
      <div className="sec" style={{ transform: `rotate(${secondDeg}deg)` }} />
    </div>
  );
}
