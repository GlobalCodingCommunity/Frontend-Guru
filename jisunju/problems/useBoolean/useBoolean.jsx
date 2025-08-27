import { useState } from 'react';

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setFalse: () => setValue(false),
    setTrue: () => setValue(true),
    toggle: () => setValue(prev => !prev)
  };
}