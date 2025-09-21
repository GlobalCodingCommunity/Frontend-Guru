# useCycle Hook

> **Category**: React Hooks  
> **Difficulty**: Medium

## 📖 Description

Implement a `useCycle` hook that cycles through a sequence of values each time its function is called.

## 💻 Example Usage

```tsx
export default function Component() {
  const [mode, cycle] = useCycle('low', 'medium', 'high');

  return (
    <div>
      <p>State: {mode}</p>
      <button onClick={cycle}>Cycle</button>
    </div>
  );
}
```

## 📝 Requirements

### Arguments
The `useCycle` hook should accept an indefinite number of arguments, each representing a value in the sequence to cycle through.

### Returns
A tuple containing the following elements:

- **`value`**: The current value
- **`cycle`**: A function that changes the current value to the next one in the sequence, or the first one if the current value is the last in the sequence

## 🎯 Behavior

1. Initialize with the first value in the sequence
2. Each call to `cycle()` advances to the next value
3. After reaching the last value, cycle back to the first value
4. Support any number of values in the cycle
