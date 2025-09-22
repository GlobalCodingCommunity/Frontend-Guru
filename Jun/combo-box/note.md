# Combo Box Implementation

Reference: [MUI Autocomplete](https://mui.com/material-ui/react-autocomplete/)

## What I Learned

### 1. Handling `onBlur` and Dropdown Item Clicks

**Problem:** When using `onBlur` on an input field to close a dropdown menu, clicking an item in the dropdown doesn't trigger its `onClick` event. The `onBlur` event fires first, closing the menu before the click is registered.

**Solutions:**
- **Good:** Use `setTimeout` within the `onBlur` handler to delay closing the dropdown, allowing the `onClick` event to fire.
- **Better:** Use the `onMouseDown` event on the dropdown items instead of `onClick`. `onMouseDown` fires before `onBlur`, so the item's action will be triggered before the input field loses focus and closes the dropdown.

### 2. Implementing Case-Insensitive Filtering

**Problem:** The initial filter implementation was case-sensitive.

**Solution:** To handle edge cases, ensure the filtering logic is case-insensitive. A common approach is to convert both the user's input and the items being searched to the same case (e.g., lowercase) before comparing them.

```javascript
// Example of case-insensitive filtering
const filteredOptions = options.filter(option =>
  option.toLowerCase().includes(inputValue.toLowerCase())
);
```