# useBoolean Hook

Implement a useBoolean hook that manages a boolean state, with additional convenience utility methods.

## Example Usage

```jsx
export default function Component() {
  const { value, setTrue, setFalse, toggle } = useBoolean();

  return (
    <div>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set True</button>
      <button onClick={setFalse}>Set False</button>
    </div>
  );
}
```

## Arguments

- `initialValue: boolean` - Initial value of the boolean state. If not provided, it should default to `false`.

## Returns

The `useBoolean` hook returns an object with the following properties:

- `value: boolean` - The current boolean state
- `setTrue: () => void` - A function to set the boolean state to `true`
- `setFalse: () => void` - A function to set the boolean state to `false`
- `toggle: () => void` - A function to toggle the boolean state
