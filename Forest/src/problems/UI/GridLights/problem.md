# Grid Lights 💡

[**View Problem →**](https://www.greatfrontend.com/questions/user-interface/grid-lights/react?framework=react&tab=coding)

Build a **3x3 grid of light cells** (omitting the center cell) where you can click on the cells to activate them, turning them green. When all the cells have been activated, they will be deactivated one by one in the reverse order they were activated with a **300ms interval** in between.

## 🎯 Requirements

- ✅ The grid should be **3x3** with the **center cell omitted** (8 total cells)
- ✅ The cells should be initially **gray**
- ✅ When a cell is clicked, it should turn **green** (activated state)
- ✅ When **all cells** have been activated, they should be deactivated one by one in **reverse order**
- ✅ Use a **300ms interval** between each deactivation

## 🎮 Interaction Flow

1. **Initial State**: 8 gray cells in a 3x3 grid (center empty)
2. **Activation**: Click any cell → turns green
3. **Completion**: When all 8 cells are green → auto-deactivation begins
4. **Deactivation**: Cells turn gray in reverse order of activation (LIFO)

## 📸 Example

![Grid Lights example](https://www.greatfrontend.com/img/questions/grid-lights/grid-lights-example.png)

*Interactive grid showing the activation and deactivation sequence*

## 🔑 Key Concepts

- **State Management**: Track cell states and activation order
- **Event Handling**: Click interactions for cell toggling
- **Timing Control**: Sequential deactivation with delays
- **Grid Layout**: CSS Grid or Flexbox for 3x3 arrangement
- **Conditional Rendering**: Dynamic cell styling based on state

## 💡 Technical Challenges

- Managing activation sequence/order
- Implementing timed deactivation sequence
- Grid layout with omitted center cell
- State synchronization during auto-deactivation
