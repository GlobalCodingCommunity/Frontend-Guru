import { useState } from "react";

export default function App() {
  const [option, setOption] = useState("one-way");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [message, setMessage] = useState("");


  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(event) {
    event.preventDefault();

    if (option === "one-way") {
      setMessage(`You have booked a one-way flight on ${startDate}`);
    } else {
      setMessage(
        `You have booked a round-trip flight, departing on ${startDate} and returning on ${endDate}`
      );
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="option">
                <button type="button"
                onClick={() => {
                    setOption("one-way");
                }}
                >
                One-way Flight
                </button>
                <button type="button"
                onClick={() => {
                    setOption("round-trip");
                }}
                >
                Round-trip Flight
                </button>
            </div>
            {option === "one-way" ? (
                <input
                type="date"
                id="one-way"
                min={today}
                required
                value={startDate}
                onChange={(event) => {
                    setStartDate(event.target.value);
                }}
                />
            ) : (
                <div>
                <input
                    type="date"
                    id="round-trip-start"
                    min={today}
                    required
                    value={startDate}
                    onChange={(event) => {
                    setStartDate(event.target.value);
                    }}
                />
                <input
                    type="date"
                    id="round-trip-end"
                    min={startDate || today}
                    value={endDate}
                    onChange={(event) => {
                    setEndDate(event.target.value);
                    }}
                />
                </div>
            )}
            <button type="submit">Book</button>
        </form>
        {message && <p>{message}</p>}
    </div>
  );
}
