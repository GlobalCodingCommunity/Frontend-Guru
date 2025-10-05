import { useState, useEffect } from "react";

const COLORS = {
  white: "#fff",
  gray: "#e9ecef",
  black: "#000",
  red: "#cc0001",
  orange: "#fb940b",
  yellow: "#ffff01",
  green: "#01cc00",
  teal: "#38d9a9",
  blue: "#228be6",
  purple: "#7950f2",
  beige: "#ff8787",
};

export default function App() {
  const [isDrawMode, setIsDrawMode] = useState(true);
  const [currentColor, setCurrentColor] = useState("yellow");
  const [isDragging, setIsDragging] = useState(false);

  const [board, setBoard] = useState(
    Array.from({ length: 15 * 15 }, (num) => num)
  );

  const handleDrawClick = () => {
    setIsDrawMode(true);
  };
  const handleEraseClick = () => {
    setIsDrawMode(false);
  };

  const handleOnClickCellDraw = (index: number) => {
    setBoard((prev) => {
      const copy = [...prev];
      copy[index] = currentColor;
      return copy;
    });
  };

  const handleOnClickErase = (index: number) => {
    setBoard((prev) => {
      const copy = [...prev];
      copy[index] = index; // Reset to original index
      return copy;
    });
  };

  const handleCellInteraction = (index: number) => {
    if (isDrawMode) {
      handleOnClickCellDraw(index);
    } else {
      handleOnClickErase(index);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Listen for mouseup anywhere to stop dragging
  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div>
      {/* BOARD */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto",
          gap: 0,
          justifyContent: "start",
        }}
        onMouseLeave={() => setIsDragging(false)}
      >
        {board.map((boardCell, index) => {
          return (
            <CellComponent
              key={index}
              index={index}
              hex={COLORS?.[boardCell] || null}
              isDragging={isDragging}
              onMouseDown={() => {
                setIsDragging(true);
                handleCellInteraction(index);
              }}
              onMouseEnter={() => {
                if (isDragging) {
                  handleCellInteraction(index);
                }
              }}
            />
          );
        })}
      </div>

      {/* CONTROLS */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <div style={{}}>
          <button
            style={{
              border: `${isDrawMode ? "2px" : "0px"} solid black`,
            }}
            onClick={handleDrawClick}
          >
            Draw
          </button>
          <button
            style={{
              border: `${!isDrawMode ? "2px" : "0px"} solid black`,
            }}
            onClick={handleEraseClick}
          >
            Erase
          </button>
        </div>
        <div>
          {Object.entries(COLORS).map(([color, hex]) => (
            <button
              key={color}
              onClick={() => setCurrentColor(color)}
              style={{
                backgroundColor: hex,
                height: "20px",
                width: "20px",
                border: color === currentColor ? "2px solid black" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CellComponent = ({
  hex,
  index,
  isDragging,
  onMouseDown,
  onMouseEnter,
}: {
  hex: string | undefined | null;
  index: number;
  isDragging: boolean;
  onMouseDown: () => void;
  onMouseEnter: () => void;
}) => {
  const isIndexEven = index % 2;
  return (
    <button
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onDragStart={(e) => e.preventDefault()}
      style={{
        backgroundColor: hex ? hex : isIndexEven ? "white" : "lightgrey",
        height: "20px",
        width: "20px",
        border: "none",
        userSelect: "none",
        cursor: isDragging ? "crosshair" : "pointer",
      }}
    ></button>
  );
};
