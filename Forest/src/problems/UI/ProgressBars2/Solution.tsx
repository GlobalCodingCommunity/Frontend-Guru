import { useEffect, useState } from "react";

export default function App() {
  const [bars, setBars] = useState([]);
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  // each bar has to fill in order.
  // set a sequence

  const handleAddBar = () => {
    setBars((prev) => [...prev, 1]);
  };

  const handleBarComplete = () => {
    setActiveBarIndex((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleAddBar}>Add</button>
      {bars.map((_bar, index) => (
        <ProgressBar
          key={index}
          isActive={index === activeBarIndex}
          onComplete={handleBarComplete}
        />
      ))}
    </div>
  );
}

const ProgressBar = ({ isActive, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    if (progress === 100) {
      onComplete();
      return;
    }
    const id = setInterval(() => {
      // 1% > 100%
      // 100% > 2000ms
      // 1% 20ms
      setProgress((prev) => {
        if (prev === 100) return prev;
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(id);
    };
  }, [isActive, progress]);

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        width: "100%",
        height: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          width: `${progress}%`,
          height: "20px",
        }}
      ></div>
    </div>
  );
};
