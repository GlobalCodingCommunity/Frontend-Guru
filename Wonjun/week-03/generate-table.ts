import { useState } from "react";

export default function App() {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(5);
  const [table, setTable] = useState([]);

  function generateDiagonalTable(r, c) {
    const result = Array.from({ length: r }, () => Array(c).fill(null));
    let num = 1;

    for (let d = 0; d < r + c - 1; d++) {
      let row = d < c ? 0 : d - (c - 1);
      let col = d < c ? d : c - 1;

      while (row < r && col >= 0) {
        result[row][col] = num++;
        row++;
        col--;
      }
    }

    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTable(generateDiagonalTable(Number(rows), Number(cols)));
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Generate a table of numbers</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "200px",
        }}
      >
        <label>
          Rows
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
          />
        </label>

        <label>
          Columns
          <input
            type="number"
            value={cols}
            onChange={(e) => setCols(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: 20 }}>
        {table.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
            }}
          >
            {row.map((cell, j) => (
              <div
                key={j}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #aaa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  background: "#fafafa",
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
