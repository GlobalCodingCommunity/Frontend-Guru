import { useState } from 'react';

function UserList({ data, selectedUser, setSelectedUser }) {
  if (data.length === 0) {
    return null;
  }
  return (
    <ul>
      {data.map(({ firstName, lastName, id }) => (
        <li key={id} className={selectedUser === id && 'selected'}>
          <button onClick={() => setSelectedUser(id)}>
            {firstName} {lastName}
          </button>
        </li>
      ))}
    </ul>
  );
}
const initialUsers = {
  hansemil: { id: 'hansemil', firstName: 'Hans', lastName: 'Emil' },
  maxtisch: { id: 'maxtisch', firstName: 'max', lastName: 'Tisch' },
};
export default function App() {
  const [searchValue, setSearchValue] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userList, setUserList] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const filterdUserList = Object.values(userList).filter(
    ({ firstName, lastName }) =>
      searchValue
        ? `${firstName} ${lastName}`
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        : true
  );

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        value={searchValue}
        onChange={onSearchChangeHandler}
        placeholder="Search"
      />
      <UserList
        data={filterdUserList}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <div>
        <label for="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label for="lastName">Last Name</label>
        <input
          type="text"
          name="lasttName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            const id = `${firstName}${lastName}`;
            setUserList((prev) => ({ ...prev, [id]: { firstName, lastName } }));
            setFirstName(null);
            setLastName(null);
          }}
          disabled={
            selectedUser !== null || firstName === null || lastName === null
          }
        >
          Create
        </button>
        <button
          onClick={() =>
            setUserList((prev) => ({
              ...prev,
              [selectedUser]: { firstName, lastName },
            }))
          }
          disabled={!selectedUser}
        >
          Update
        </button>
        <button
          onClick={() =>
            setUserList((prev) => {
              const newData = { ...prev };
              delete newData[selectedUser];
              return newData;
            })
          }
          disabled={!selectedUser}
        >
          Delete
        </button>
        <button
          disabled={!selectedUser}
          onClick={() => {
            setSelectedUser(null);
            setFirstName(null);
            setLastName(null);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
