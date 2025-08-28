import { useState, useCallback } from "react";

type UseBooleanReturn = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

export default function useBoolean(initialValue = false): UseBooleanReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = () => setValue((prev) => !prev);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
}
