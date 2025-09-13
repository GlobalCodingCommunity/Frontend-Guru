import { useState } from "react";

type Cell = number | null;
type Board = Cell[];

const winConditions = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6], // diagonal top-right to bottom-left
];

const checkWinner = (board: Board): number | null => {
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // return the winning player (1 or 2)
    }
  }
  return null; // no winner
};

const checkDraw = (board: Board): boolean => {
  return board.every((cell) => cell !== null);
};

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [boardState, setBoardState] = useState<Board>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<number | null>(null);

  const handleGridClick = (index: number) => {
    // Prevent moves if game is over or cell is occupied
    if (gameOver || boardState[index]) return;

    // Create new board with the move
    const newBoard = [...boardState];
    newBoard[index] = currentPlayer;
    setBoardState(newBoard);

    // Check for winner
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
      return;
    }

    // Check for draw
    if (checkDraw(newBoard)) {
      setGameOver(true);
      return;
    }

    // Switch to next player
    setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
  };

  const resetGame = () => {
    setBoardState([null, null, null, null, null, null, null, null, null]);
    setCurrentPlayer(1);
    setGameOver(false);
    setWinner(null);
  };

  const getGameStatus = () => {
    if (winner) {
      return `Player ${winner} (${winner === 1 ? "X" : "O"}) wins!`;
    } else if (gameOver) {
      return "It's a draw!";
    } else {
      return `Current Player: Player ${currentPlayer} (${
        currentPlayer === 1 ? "O" : "X"
      })`;
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>

      <div
        style={{
          fontSize: "20px",
          marginBottom: "20px",
          fontWeight: "bold",
          color: winner ? "#28a745" : gameOver ? "#dc3545" : "#007bff",
        }}
      >
        {getGameStatus()}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gridTemplateRows: "repeat(3, 100px)",
          gap: "2px",
          backgroundColor: "#333",
          padding: "2px",
          margin: "20px auto",
          width: "fit-content",
        }}
      >
        {boardState.map((cell, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: "bold",
              cursor: gameOver || cell ? "default" : "pointer",
              userSelect: "none",
              opacity: gameOver && !winner ? 0.6 : 1,
            }}
            onClick={() => handleGridClick(index)}
          >
            {cell === null ? "" : cell === 1 ? "X" : "O"}
          </div>
        ))}
      </div>

      <button
        onClick={resetGame}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        Reset Game
      </button>
    </div>
  );
}
