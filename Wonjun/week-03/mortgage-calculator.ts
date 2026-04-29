import { useState } from "react";

export default function MortgageCalculator() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  function isInvalid(value) {
    return value.trim() === "" || Number.isNaN(Number(value));
  }

  function calculate(e) {
    e.preventDefault();
    setError("");
    setResults(null);

    if (isInvalid(loan) || isInvalid(rate) || isInvalid(years)) {
      setError("Please enter valid numeric values.");
      return;
    }

    const P = Number(loan);
    const annualRate = Number(rate) / 100;
    const monthlyRate = annualRate / 12;
    const n = Number(years) * 12;

    if (P <= 0 || annualRate < 0 || n <= 0) {
      setError("Inputs must be positive numbers.");
      return;
    }

    // Mortgage formula
    const M =
      (P * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const totalPayment = M * n;
    const totalInterest = totalPayment - P;

    setResults({
      monthly: M.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Mortgage Calculator</h2>

      <form
        onSubmit={calculate}
        style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "250px" }}
      >
        <label>
          Loan Amount ($)
          <input
            type="text"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
          />
        </label>

        <label>
          Annual Interest Rate (%)
          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>

        <label>
          Loan Term (years)
          <input
            type="text"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </label>

        <button type="submit">Calculate</button>
      </form>

      {error && (
        <div style={{ marginTop: 16, color: "red" }}>
          {error}
        </div>
      )}

      {results && (
        <div style={{ marginTop: 20 }}>
          <h3>Results</h3>
          <p>Monthly Payment: ${results.monthly}</p>
          <p>Total Payment: ${results.totalPayment}</p>
          <p>Total Interest: ${results.totalInterest}</p>
        </div>
      )}
    </div>
  );
}
