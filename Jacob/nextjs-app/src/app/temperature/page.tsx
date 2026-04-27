"use client";

import Wrapper from "@/components/Wrapper";
import { useState } from "react";

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertFnc = (setState: (value: string) => void, formula: number) => {
    setState(formula.toString());
  };

  const roundTo4Decimal = (temperature: number) => {
    if (isNaN(temperature)) return "";
    return Math.round(temperature * 10000) / 10000;
  };

  return (
    <Wrapper title="Temperature Converter">
      <div className="flex items-center gap-2">
        <input
          className="bg-white text-black p-2"
          type="number"
          value={roundTo4Decimal(Number(celsius))}
          onChange={(e) => {
            const temperature = e.target.value;
            setCelsius(temperature);
            convertFnc(setFahrenheit, (Number(temperature) * 9) / 5 + 32);
          }}
        />
        <label>Celsius</label>
      </div>
      =
      <div className="flex items-center gap-2">
        <input
          className="bg-white text-black p-2"
          type="number"
          value={roundTo4Decimal(Number(fahrenheit))}
          onChange={(e) => {
            const temperature = e.target.value;
            setFahrenheit(temperature);
            convertFnc(setCelsius, ((Number(temperature) - 32) / 9) * 5);
          }}
        />
        <label>Fahrenheit</label>
      </div>
    </Wrapper>
  );
}
