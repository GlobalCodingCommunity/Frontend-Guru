import { useState } from "react";

export default function Clock() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(new Date(Date.now()).getMinutes());
  const [hurs, setHurs] = useState(new Date(Date.now()).getHours() % 12);
  
  const secInterval = () =>
    setInterval(() => {
      setSec(new Date(Date.now()).getSeconds());
    }, 1000);

  const minInterval = () =>
    setInterval(() => {
      setMin(new Date(Date.now()).getMinutes());
    }, 1000 * 60);

  const hourInterval = () =>
    setInterval(
      () => {
        setHurs(new Date(Date.now()).getHours() % 12);
      },
      1000 * 60 * 60,
    );

  secInterval();
  minInterval();
  hourInterval();
  return (
    <div className="frame">
      <div className="time" style={{ transform: `rotate(${hurs * 30}deg)` }} />
      <div className="min" style={{ transform: `rotate(${min * 3}deg)` }} />
      <div className="sec" style={{ transform: `rotate(${sec * 3}deg)` }} />
    </div>
  );
}

// use transform: rotate(25deg)
// change the pivot of the div
// margin - 50%
// position

// Date TIME to degree
// time we have 12 hrs
// degree we have 360

// 1
// 3
// 1 secs = 3 degree
// sec * 3
// 12
// 360
// 30

// feedback: useEffect