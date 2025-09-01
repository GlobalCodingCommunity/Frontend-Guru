import { useState, useEffect } from "react";
const round4 = (num) => Math.round(num * 10000) / 10000;
export default function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
      return;
    }
    const num = parseFloat(value);
    if (isNaN(num)) {
      setFahrenheit("");
    } else {
      setFahrenheit(round4(celsius * 1.8 + 32));
    }
  };

  const handleFarenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
      return;
    }
    const num = parseFloat(value);
    if (isNaN(num)) {
      setCelsius("");
    } else {
      setCelsius(round4((fahrenheit - 32) / 1.8));
    }
  };
  return (
    <div className="wrapper">
      <h1>Temperature Converter</h1>
      <input
        type="text"
        className="celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      ></input>
      <span>=</span>
      <input
        type="text"
        className="fahrenheit"
        value={fahrenheit}
        onChange={handleFarenheitChange}
      ></input>
    </div>
  );
}

/**
 * 1. two textinput(number) Celsius, Fahrenheit
 * 2. calculated
 * 3. string enter -> blank
 * edgecase :string,
 * round 4 decimal
 * cel -> fa = (x * 1.8) + add
 *
 *
 */


/**
 * 성능 최적화
 * 1. debounce로 리렌더링 최소화
 * 2. useMemo 사용
 *  -> 계산값은 캐싱되지만, 읽기전용으로 밖에 안보임
 *  -> 양방향 전환은 불가능
 * 
 * UX 최적화
 * 1. 입력중 색상변환, 반대쪽 Input 회색처리
 * 2. 잘못된 입력 경고표시 - p태그로 
 */