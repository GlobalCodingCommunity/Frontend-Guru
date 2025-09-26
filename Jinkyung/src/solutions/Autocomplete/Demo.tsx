import * as React from 'react';
import top100Films from './top100Films';

export default function ComboBox() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState('');
  const [filterFilms, setFilterFilms] = React.useState([]);

  function handleChange(e) {
    setSearchFilter(e.target.value);
    setIsOpen(true);
  }

  function handleLabelClick(value) {
    setSearchFilter(value.label);
    setIsOpen(false);
  }

  React.useEffect(() => {
    setFilterFilms(
      top100Films.filter((v) =>
        v.label.toLowerCase().includes(searchFilter.toLowerCase())
      )
    );
  }, [searchFilter]);

  return (
    <div>
      <input
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: '300px',
          height: '30px',
          border: '1px solid black',
          position: 'relative',
        }}
        value={searchFilter}
        onChange={(e) => handleChange(e)}
      ></input>
      {searchFilter && (
        <button
          style={{
            position: 'absolute',
            left: '250px',
            top: '10px',
            border: 'none',
            borderRadius: '100%',
            width: '30px',
            height: '30px',
          }}
          onClick={() => {
            setSearchFilter('');
            setIsOpen(false);
          }}
        >
          X
        </button>
      )}
      <button
        style={{
          position: 'absolute',
          left: '280px',
          top: '10px',
          border: 'none',
          borderRadius: '100%',
          width: '30px',
          height: '30px',
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? '▼' : '▲'}
      </button>

      {isOpen && (
        <ul
          style={{
            backgroundColor: 'gray',
            borderRadius: '10px',
            marginTop: '2px',
            position: 'absolute',
            width: '300px',
            overflow: 'auto',
          }}
        >
          {filterFilms.map((value) => (
            <li
              onClick={() => handleLabelClick(value)}
              style={{
                padding: '10px',
                listStyle: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = 'red')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'gray')
              }
            >
              {value.label}-{value.year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * 1. make input field
 * 2. show top100films list
 * 3. state for list open
 * 4. click event for open
 * 5. input field onChange for filter
 *   -> filter search
 *   -> lowercase, (debounce, throttle)
 * 6. list click event -> change value
 */

