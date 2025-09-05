import { useState, useEffect } from "react";
import users from "./data/users";

const perPageSelection = [5, 10, 20];

export default function DataTable() {
  const [message, setMessage] = useState("Data Table");
  const [perPage, setPerPage] = useState(5);
  const totalPage = Math.ceil(users.length / perPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * perPage;

  return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users
            .slice(startIndex, startIndex + perPage)
            .map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination-wrapper">
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(+e.target.value);
            setCurrentPage(1);
          }}
        >
          {perPageSelection.map((num) => (
            <option value={num}>Show {num}</option>
          ))}
        </select>
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((state) => state - 1)}
          >
            prev
          </button>
          <p className="page-info">
            Page {currentPage} of {totalPage}
          </p>
          <button
            disabled={currentPage == totalPage}
            onClick={() => setCurrentPage((state) => state + 1)}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
