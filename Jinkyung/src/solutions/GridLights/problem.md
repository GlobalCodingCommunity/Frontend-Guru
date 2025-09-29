# Grid Lights Activation

## Problem Description
Build a **3x3 grid of light cells** (omitting the center cell) where you can click on the cells to activate them, turning them green.  
Once all the cells have been activated, they will be **deactivated one by one in the reverse order they were activated**, with a 300ms interval between each deactivation.

---

## Requirements

1. Implement the component using **React**.
2. Create a **3x3 grid of buttons** representing the cells.
3. The **center cell should be omitted** (not clickable and not rendered).
4. Clicking a cell activates it (turns green).
5. Once all cells are activated, they **deactivate automatically in reverse order** with 300ms between each.
6. While the grid is **resetting**, prevent any further clicks.

---

## Example Logic

- Grid configuration (1 = active/clickable, 0 = omitted):

```ts
const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
```
## Hints
- Map through the config array to render rows and cells.
- Check if a cell is already activated using Array.some.
- Use conditional rendering to skip the center cell (0 in the config).
- When all cells are activated, start a reset interval to remove them one by one.
- Remember to clear the interval after all cells have been deactivated.
- Use React useState and useEffect for state management and side effects.


## Optional Enhancements
- Add animations when cells activate or deactivate (e.g., smooth color transition).
- Change cell size, color, or grid layout for visual appeal.
- Allow different grid sizes (4x4, 5x5) while keeping the center cell inactive.