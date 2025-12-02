import { useState } from "react";

export default function App() {
  const [table, setTable] = useState({
    rows: 0,
    columns: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const rows = Number(data.get("rows"));
    const columns = Number(data.get("columns"));
    setTable({ rows, columns });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rows">Rows</label>
        <input id="rows" name="rows" min={1} type="number" />
        <label htmlFor="columns">Columns</label>
        <input id="columns" name="columns" min={1} type="number" />
        <button>Submit</button>
      </form>
      <table>
        <tbody>
          {Array.from({ length: table.rows }).map((_, row) => {
            return (
              <tr key={`row-${row}`}>
                {Array.from({ length: table.columns }).map((_, column) => (
                  <td key={`column-${column}`}>
                    {column % 2 === 0
                      ? column * table.rows + row + 1
                      : (column + 1) * table.rows - row}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
