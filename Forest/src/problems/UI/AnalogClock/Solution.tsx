import { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <span>{currentTime.getHours()}:</span>
      <span>{currentTime.getMinutes()}:</span>
      <span>{currentTime.getSeconds()}</span>

      <div>
        <div
          style={{
            width: "500px",
            height: "500px",
            border: "2px solid darkgrey",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <HourHand
            hours={currentTime.getHours()}
            minutes={currentTime.getMinutes()}
          />
          <br />
          <MinuteHand minutes={currentTime.getMinutes()} />
          <br />
          <SecondHand seconds={currentTime.getSeconds()} />
        </div>
      </div>
    </div>
  );
}

const HourHand = ({ hours, minutes }) => {
  // Calculate precise hour hand position including minutes
  const hourAngle = (hours % 12) * 30 + minutes * 0.5 - 90;

  return (
    <div
      style={{
        width: "120px",
        height: "6px",
        backgroundColor: "black",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(0, -50%) rotate(${hourAngle}deg)`,
        transformOrigin: "0 50%",
        borderRadius: "3px",
        zIndex: 1,
      }}
    />
  );
};

const MinuteHand = ({ minutes }) => {
  const minuteAngle = minutes * 6 - 90;

  return (
    <div
      style={{
        width: "160px",
        height: "4px",
        backgroundColor: "black",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(0, -50%) rotate(${minuteAngle}deg)`,
        transformOrigin: "0 50%",
        borderRadius: "2px",
        zIndex: 2,
      }}
    />
  );
};

const SecondHand = ({ seconds }) => {
  const secondAngle = seconds * 6 - 90;

  return (
    <div
      style={{
        width: "180px",
        height: "2px",
        backgroundColor: "red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(0, -50%) rotate(${secondAngle}deg)`,
        transformOrigin: "0 50%",
        borderRadius: "1px",
        zIndex: 2,
      }}
    />
  );
};
