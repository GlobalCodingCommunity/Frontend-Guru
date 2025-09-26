import { useState } from "react";
import "./styles.css"

const list = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception",
  "The Matrix",
  "Parasite",
  "Spirited Away",
  "The Lord of the Rings: The Return of the King",
  "Star Wars: Episode V - The Empire Strikes Back",
  "Goodfellas",
  "Fight Club",
  "Interstellar",
  "Gladiator",
  "The Lion King",
  "Back to the Future",
  "Jurassic Park",
  "Saving Private Ryan",
  "The Silence of the Lambs",
];

export default function App() {
  const [showDropDown, toogleDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState(list);
  const onSelectHandler = (name) => {
    setInputValue(name);
    toogleDropdown(false);
  };
  const onChangeHandler = (value) => {
    setInputValue(value);
    setFilteredList(
      list.filter((string) =>
        string.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };
  return (
    <div>
      <input
        onFocus={() => toogleDropdown((state) => !state)}
        onBlur={() => {
          setTimeout(() => toogleDropdown(false), 500);
        }}
        value={inputValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      ></input>
      <button onClick={() => setInputValue("")}>clear</button>
      {showDropDown && (
        <ul>
          {filteredList.map((name, id) => {
            return (
              <li key={id}>
                <button onClick={() => onSelectHandler(name)}>{name}</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
