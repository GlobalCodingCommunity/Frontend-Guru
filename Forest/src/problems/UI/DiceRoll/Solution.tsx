import { useState, useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  const [numOfDie, setNumOfDie] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    //
    console.log(inputRef.current);
    setNumOfDie(inputRef.current);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          ref={inputRef}
          onChange={(e) => (inputRef.current = e.target.value)}
          type="number"
          min={1}
          max={12}
          style={{
            padding: "10px",
            width: "fit-content",
          }}
        />
        <button type="submit">Roll</button>
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {numOfDie &&
          Array.from({ length: numOfDie }, (_, index) => (
            <DiceComponent key={index} />
          ))}
      </div>
    </div>
  );
}

const DiceComponent = ({ max = 6 }) => {
  const dieNumber = Math.floor(Math.random() * max) + 1;

  return (
    <div
      style={{
        flex: "0 0 33.3%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          width: "150px",
          border: "4px solid darkgray",
          borderRadius: "15px",
          aspectRatio: "1 / 1",
        }}
      >
        {Array.from({ length: 9 }, (_, index) => {
          const dot = DICE_PATTERN[dieNumber].includes(index);
          return (
            <div
              style={{
                // border: "1px solid #333",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {dot ? <DieDot /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DieDot = () => {
  return (
    <div
      style={{
        height: "15px",
        width: "15px",
        background: "black",
        borderRadius: "15px",
      }}
    />
  );
};

const DICE_PATTERN = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

// input num of dices min 1 max 12
// click roll button and display
// 3 die in a row
