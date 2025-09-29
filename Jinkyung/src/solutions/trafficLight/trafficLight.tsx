import { useState, useEffect } from "react";

export default function TrafficLight() {
  const [status, setStatus] = useState("red");
  //state for trafficStatus

  //function for change status
  //green -> yellow -> red -> green -> yellow ->...

  //wrapper, 3div
  useEffect(() => {
    let timeout;
    switch (status) {
      case "red":
        timeout = setTimeout(() => setStatus("green"), 4000);
        break;
      case "yellow":
        timeout = setTimeout(() => setStatus("red"), 500);
        break;
      case "green":
        timeout = setTimeout(() => setStatus("yellow"), 3000);
        break;
    }
    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <div className="wrapper">
      <div className={status == "red" ? "light red" : "light red off"}></div>
      <div
        className={status == "yellow" ? "light yellow" : "light yellow off"}
      ></div>
      <div
        className={status == "green" ? "light green" : "light green off"}
      ></div>
    </div>
  );
}

/**
 * 1. switch green to yellow to red
 * 2. predetermined intervals and loop indefinitely
 *
 *
 * 1. make div for wrapper , 3 div -circle(green,yellow,red)
 * 2. add CSS color
 * 3. setStatus for traffic
 * 4. setInterval
 */
