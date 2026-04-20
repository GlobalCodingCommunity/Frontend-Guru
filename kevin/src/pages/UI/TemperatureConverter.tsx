import ProblemLayout from '../../components/ProblemLayout';
import ProblemHeader from '../../components/ProblemHeader';
import ProblemDescription from '../../components/ProblemDescription';
import ProblemResult from '../../components/ProblemResult';
import { useState } from 'react';

function UITemperatureConverterPage() {

  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (isNaN(value) || value === '') {
      setFahrenheit('');
      return;
    }

    const fahrenheitValue = (value * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(4));
  }

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (isNaN(value) || value === '') {
      setCelsius('');
      return;
    }

    const celsiusValue = ((value - 32) * 5) / 9;
    setCelsius(celsiusValue.toFixed(4));
  }

  return (
    <ProblemLayout>
      <ProblemHeader category="UI" page="TemperatureConverter">
        <ProblemDescription>
        {`- Initially, both fields are empty. When a number value is entered into a text input, the other input will be calculated and reflected.
        - Round to 4 decimal places where necessary.
        - If a non-numerical string is entered into one input, the other input will be blank.`}
        </ProblemDescription>
      </ProblemHeader>

      <ProblemResult>
        <div style={{ padding: 20 }}>
          <div>
            <label>Celsius: </label>
            <input
              type="text"
              value={celsius}
              onChange={handleCelsiusChange}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label>Fahrenheit: </label>
            <input
              type="text"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
            />
          </div>
        </div>
      </ProblemResult>
    </ProblemLayout>
  );
}

export default UITemperatureConverterPage;