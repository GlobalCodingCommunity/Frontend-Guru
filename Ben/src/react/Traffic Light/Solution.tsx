import { useEffect, useState } from "react";

const timing = [4000, 3000, 500];

export default function TrafficLightSolution() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setCurrent(current + 1);
    }, timing[current % 3]);

    return () => {
      clearTimeout(timeId);
    };
  }, [current]);

  return (
    <div className="App">
      <div style={{ display: "flex", gap: "10px" }}>
        <TrafficLight color={"red"} isOn={current % 3 === 0} />
        <TrafficLight color={"yellow"} isOn={current % 3 === 2} />
        <TrafficLight color={"green"} isOn={current % 3 === 1} />
      </div>
    </div>
  );
}

const TrafficLight = ({ color, isOn }: { color: string; isOn: boolean }) => {
  const trafficColor = isOn ? color : "gray";

  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: trafficColor,
        borderRadius: 50,
      }}
    ></div>
  );
};
