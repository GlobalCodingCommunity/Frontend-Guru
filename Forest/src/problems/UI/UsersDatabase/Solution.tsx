import { useState } from "react";

const NAMES_DB = [
  {
    id: 1,
    name: "Hans Emil",
  },
  {
    id: 2,
    name: "Max Mustermann",
  },
  {
    id: 3,
    name: "Roman Tisch",
  },
];

export default function App() {
  const [namesList, setNamesList] = useState(NAMES_DB);
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectedName, setCurrentSelectedName] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const clearFields = () => {
    setCurrentSelectedName(null);
    setFirstName("");
    setLastName("");
  };

  const handleCancelClick = () => {
    clearFields();
  };

  const handleNameClick = (id) => {
    if (currentSelectedName?.id === id) {
      clearFields();
      return;
    }

    const selectedName = namesList.find((name) => name.id === id);
    setCurrentSelectedName(selectedName);
    setFirstName(selectedName.name.split(" ")[0]);
    setLastName(selectedName.name.split(" ")[1]);
  };

  const handleSearchInput = (e) => {
    const searchText = e.target.value;
    setSearchValue(searchText);
  };

  const handleUpdateClick = () => {
    //
    if (!currentSelectedName) return;

    const newName = {
      id: currentSelectedName.id,
      name: `${firstName} ${lastName}`,
    };

    setNamesList((prev) =>
      prev.map((p) => {
        if (p.id === newName.id) {
          return newName;
        }

        return p;
      })
    );
  };

  const handleCreateClick = () => {
    if (currentSelectedName) return;

    const newName = {
      id: Math.random(),
      name: `${firstName} ${lastName}`,
    };

    setNamesList((prev) => [...prev, newName]);
  };

  const handleDeleteClick = () => {
    if (!currentSelectedName) return;
    setNamesList((prev) => prev.filter((p) => p.id !== currentSelectedName.id));
    clearFields();
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Filter the original NAMES_DB based on search value
  const filteredNames = namesList.filter((name) =>
    name.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <input
          placeholder={"Search..."}
          value={searchValue}
          onChange={handleSearchInput}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 50,
        }}
      >
        <div>
          {filteredNames.map((name) => (
            <NameItem
              key={name.id}
              name={name.name}
              isSelected={name.id === currentSelectedName?.id}
              onClick={() => handleNameClick(name.id)}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>First Name</label>
          <input value={firstName} onChange={handleFirstNameChange} />
          <label>Last Name</label>
          <input value={lastName} onChange={handleLastNameChange} />
        </div>
      </div>
      <div>
        <button disabled={currentSelectedName} onClick={handleCreateClick}>
          Create
        </button>
        <button disabled={!currentSelectedName} onClick={handleUpdateClick}>
          Update
        </button>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
}

const NameItem = ({ name, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: 10,
        cursor: "pointer",
        ...(isSelected && { border: "2px solid black", borderRadius: "10px" }),
      }}
    >
      {name}
    </div>
  );
};
