# React Autocomplete Component

## Problem Description

Implement a **React Autocomplete** component that suggests options to users as they type in an input field. 

The component should:

- Accept a list of strings as possible options.
- Display a dropdown of suggestions that match the current input value.
- Allow users to select a suggestion either by clicking on it or navigating via the keyboard.
- Update the input value when a suggestion is selected.

### Props

| Prop           | Type     | Description                                        | Default       |
|----------------|----------|---------------------------------------------------|---------------|
| `options`      | string[] | Array of possible suggestions                     | **required**  |
| `onSelect`     | function | Callback when a suggestion is selected           | optional      |
| `placeholder`  | string   | Placeholder text for the input                    | `""`          |
| `minLength`    | number   | Minimum number of characters before showing suggestions | `1`        |

---

## Requirements

1. Suggestions should filter dynamically as the user types.
2. The dropdown should be hidden when the input is empty or no matches are found.
3. Users can navigate suggestions using `ArrowUp` and `ArrowDown` keys.
4. Pressing `Enter` should select the currently highlighted suggestion.
5. Clicking outside the component should close the suggestions dropdown.

---

## Hints

- Use `useState` to track the current input value and the highlighted suggestion index.
- Use `useEffect` or event listeners to detect clicks outside the component to close the dropdown.
- Array filtering can be done using `Array.prototype.filter()` and `String.prototype.includes()` or `startsWith()`.
- Consider accessibility (ARIA attributes) for better UX.
- Manage keyboard events carefully to navigate and select items.

---

## Optional Enhancements

- Allow for case-insensitive matching.
- Highlight the matching part of each suggestion.
- Debounce input changes to improve performance.
- Support multi-word matching (e.g., searching "New York" for "New").
- Add a clear button to reset the input quickly.
- Style the dropdown with hover effects, rounded corners, and shadow for better appearance.