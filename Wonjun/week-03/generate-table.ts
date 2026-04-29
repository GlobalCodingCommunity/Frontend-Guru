import { useState } from "react";

export default function App() {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(5);
  const [table, setTable] = useState([]);

  function generateZigZagPattern(r, c) {
    const result = Array.from({ length: r }, () => Array(c).fill(null));
    let num = 1;

    for (let col = 0; col < c; col++) {
      if (col % 2 === 0) {
        // top → bottom
        for (let row = 0; row < r; row++) {
          result[row][col] = num++;
        }
      } else {
        // bottom → top
        for (let row = r - 1; row >= 0; row--) {
          result[row][col] = num++;
        }
      }
    }

    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const r = Number(rows);
    const c = Number(cols);

    if (r > 0 && c > 0) {
      setTable(generateZigZagPattern(r, c));
    }
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
          <div key={i} style={{ display: "flex" }}>
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
