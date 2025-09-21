import { useState } from "react";

function Table({ row, column }) {
  let cnt = 1;
  return (
    <div>
      <table border="1">
        <tbody>
          {Array.from({ length: row }, (_, i) => (
            <tr key={i}>
              <tr key={i}>
                {Array.from({ length: column }, (_, j) => {
                  const number =
                    j % 2 === 0
                      ? i + 1 + row * j // 짝수 열: 위→아래
                      : row * (j + 1) - i; // 홀수 열: 아래→위
                  return <td key={j}>{number}</td>;
                })}
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function App() {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setRow(Number(formData.get("row")));
    setColumn(Number(formData.get("column")));
  };
  return (
    <div>
      <form type="submit" onSubmit={handleSubmit}>
        <div>
          <label>Rows</label>
          <input
            type="number"
            id="row-input"
            name="row"
            defaultValue={row}
          ></input>
        </div>
        <div>
          <label>Columns</label>
          <input
            type="number"
            id="column-input"
            name="column"
            defaultValue={column}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      {Boolean(row) && Boolean(column) && <Table row={row} column={column} />}
    </div>
  );
}

/**
 * 1. input row, column - form
 * row*column cells sequence 1 to (rows * coumns)
 */
