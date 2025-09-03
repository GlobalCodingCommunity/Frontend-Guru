import { useState, useCallback, useEffect } from "react";

export default function App() {
  const [bars, setBars] = useState<number[]>([]);

  const addBar = useCallback(() => {
    setBars((prev) => [...prev, (prev.length + 1) as number]);
  }, []);

  return (
    <div>
      <button onClick={addBar}>Add</button>
      <div className="bars-container">
        {bars.map((_, index) => (
          <ProgressBar key={index} />
        ))}
      </div>
    </div>
  );
}

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  // width start at zero but goes to 100 inner
  useEffect(() => {
    setWidth(100);
  }, []);

  return (
    <div className="outer-progress">
      <div
        className="inner-progress"
        style={{
          width: `${width}%`,
        }}
      ></div>
    </div>
  );
};
