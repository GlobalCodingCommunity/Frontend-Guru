import { useState, useEffect } from "react";

export function App() {
  const [activationOrder, setActivationOrder] = useState<number[]>([]);
  const [running, setRunning] = useState(false);

  // Start deactivation when all 8 cells are filled
  useEffect(() => {
    if (activationOrder.length === 8 && !running) {
      setRunning(true);
    }
  }, [activationOrder, running]);

  // Handle deactivation sequence
  useEffect(() => {
    if (!running || activationOrder.length === 0) {
      if (running && activationOrder.length === 0) {
        setRunning(false);
      }
      return;
    }

    const timeoutId = setTimeout(() => {
      setActivationOrder((prev) => prev.slice(0, -1));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [running, activationOrder]);

  const handleCellClick = (index: number) => {
    // Don't allow clicks if already active or if deactivating
    if (activationOrder.includes(index) || running) return;

    setActivationOrder((prev) => [...prev, index]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "8px",
          padding: "20px",
          border: "2px solid #333",
        }}
      >
        {Array.from({ length: 9 }, (_, index) => {
          if (index === 4) {
            return <GridCell key={index} onClick={undefined} />;
          }

          return (
            <GridCell
              key={index}
              isActive={activationOrder.includes(index)}
              onClick={() => handleCellClick(index)}
            />
          );
        })}
      </div>

      <div>Active: {activationOrder.length}/8</div>
    </div>
  );
}

interface GridCellProps {
  isActive?: boolean;
  onClick?: () => void;
}

const GridCell = ({ isActive = false, onClick }: GridCellProps) => {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: isActive ? "green" : "lightgray",
        border: "2px solid #333",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    />
  );
};
