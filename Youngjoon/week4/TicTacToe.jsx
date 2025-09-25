import { useState } from "react";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const DEFAULT_BOARD = [null, null, null, null, null, null, null, null, null];

function App() {
  const [board, setBoard] = useState(DEFAULT_BOARD);
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = idx => {
    if (board[idx] || checkWinner()) {
      return;
    }

    const newBoard = [...board];
    newBoard[idx] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(prev => !prev);
  };

  const resetGame = () => {
    setBoard(DEFAULT_BOARD);
    setIsXTurn(true);
  };

  const winner = checkWinner();
  const isDraw = !winner && board.every(cell => cell !== null);

  return (
    <div>
      <div>
        <span>Status:&nbsp;</span>
        {winner ? (
          <span>{winner} Win!</span>
        ) : isDraw ? (
          <span>Draw!</span>
        ) : (
          <span>{isXTurn ? "X" : "O"} Turn</span>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {board.map((cell, idx) => (
          <button key={idx} onClick={() => handleClick(idx)} disabled={cell || winner || isDraw}>
            {cell}
          </button>
        ))}
      </div>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
