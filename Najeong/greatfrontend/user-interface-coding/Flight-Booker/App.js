import { useState } from "react";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const TODAY = formatDate(new Date());

export default function App() {
  const [type, setType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(TODAY);
  const [returnDate, setReturnDate] = useState(TODAY);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "one-way") {
      alert(`You have booked a one-way flight on ${departureDate}`);
    }
    if (type === "round-trip") {
      alert(
        `You have booked a round-trip flight, departing on ${departureDate} and returning on ${returnDate}`,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="one-way">One-way flight</option>
        <option value="round-trip">Round-trip flight</option>
      </select>
      <input
        aria-label="Departure date"
        type="date"
        value={departureDate}
        min={TODAY}
        onChange={(e) => setDepartureDate(formatDate(new Date(e.target.value)))}
      />
      <input
        aria-label="Return date"
        type="date"
        hidden={type !== "round-trip"}
        value={returnDate}
        min={departureDate}
        onChange={(e) => setReturnDate(formatDate(new Date(e.target.value)))}
      />
      <button>Book</button>
    </form>
  );
}
