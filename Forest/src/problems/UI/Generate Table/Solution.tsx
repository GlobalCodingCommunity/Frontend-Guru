import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
  rows: number;
  cols: number;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    rows: 0,
    cols: 0,
  });
  const [rows, setRows] = useState<number | null>(null);
  const [cols, setCols] = useState<number | null>(null);
  const [grid, setGrid] = useState<number[][] | null>(null);

  const createColumnSnakePattern = (rows: number, cols: number): number[][] => {
    const grid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(0));
    let currentNumber = 1;

    for (let col = 0; col < cols; col++) {
      if (col % 2 === 0) {
        // even
        for (let row = 0; row < rows; row++) {
          grid[row][col] = currentNumber++;
        }
      } else {
        //odd
        for (let row = rows - 1; row >= 0; row--) {
          grid[row][col] = currentNumber++;
        }
      }
    }

    return grid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setRows(Number(formData.rows));
    setCols(Number(formData.cols));

    const matrix = createColumnSnakePattern(
      Number(formData.rows),
      Number(formData.cols)
    );
    console.log("matrix::: ", matrix);
    console.table(matrix);
    setGrid(matrix);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rows</label>
          <input type="number" id="rows" name="rows" onChange={handleChange} />
        </div>
        <div>
          <label>Columns</label>
          <input type="number" name="cols" id="cols" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {rows && cols && grid && (
        <div
          style={{
            display: "inline-block",
            border: "2px solid black",
          }}
        >
          {grid.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
              }}
            >
              {row.map((num, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}{" "}
    </div>
  );
}
