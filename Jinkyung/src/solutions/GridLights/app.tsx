import { useState, useEffect } from "react";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
export default function App() {
  const [clicked, setClicked] = useState([]);
  const [isResetting, setIsResetting] = useState(false); //원상복구중인지 확인하는 state
  const totalCells = config.flat().filter((v) => v !== 0).length;

  useEffect(() => {
    if (!isResetting && clicked.length === totalCells) {
      setIsResetting(true);

      const interval = setInterval(() => {
        setClicked((prev) => {
          if (prev.length === 0) {
            clearInterval(interval);
            setIsResetting(false);
            return prev;
          }
          return prev.slice(0, -1); //prev.filter((_,i)=>i !==arr.length-1)
        });
      }, 300);
    }
  }, [clicked.length, isResetting, totalCells]);

  const handleOnClickCell = (row, col) => {
    console.log(row, col);
    const isActive = clicked.some(([r, c]) => r === row && c === col); //해당 배열에 값이 있는지 확인

    if (isResetting) return; //원상복구중이면 클릭 금지

    if (config[row][col] === 0) return; //0일때는 클릭못하게 막기

    if (!isActive) setClicked((prev) => [...prev, [row, col]]);
  };

  return (
    <div className="wrapper">
      {config.map((row, i) => (
        <div className="cell-wrapper" key={i}>
          {row.map((col, j) => {
            const isActive = clicked.some(([r, c]) => r === i && c === j);
            if (col === 0) {
              return <div className="cell" key={j}></div>; //0일때는 렌더링x 3번
            }
            return (
              <button
                className={`cell ${isActive ? "active" : ""}`}
                key={j}
                onClick={() => handleOnClickCell(i, j)}
              ></button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/**
 * 1. 버튼만들기
 * 2. css로 버튼 스타일링
 * 3. value가 0인것은 no rendering
 * 4. click -> setColor green
 * 5. 전부 다 색칠되면, 거꾸로 하나씩 빼면서 원상복구 -> useEffect(),setInterval(,300)
 */
