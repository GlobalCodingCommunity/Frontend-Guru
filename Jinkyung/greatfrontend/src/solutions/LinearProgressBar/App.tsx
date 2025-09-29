import { useState, useEffect } from "react";
import './styles.css';

function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(100);
    }, 20);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: `${width}%`,
          transition: "width 2s linear",
          height: "15px",
        }}
      ></div>
    </div>
  );
}

export default function App() {
  const [bars, setBars] = useState([]);

  const addBar = () => {
    setBars([...bars, new Date()]);
  };
  return (
    <div>
      <button onClick={addBar}>Add</button>
      {bars.map((bar) => (
        <ProgressBar key={bar} />
      ))}
    </div>
  );
}
