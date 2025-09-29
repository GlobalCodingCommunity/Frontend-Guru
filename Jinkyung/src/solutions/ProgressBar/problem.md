# Progress Bar Component

## Problem Description

Implement a `ProgressBar` component in React that displays the completion progress by filling the bar proportionately to a `progress` value (a number between 0 and 100 inclusive).

The component should:

- Render a horizontal bar with a filled portion corresponding to the `progress` value.
- Display the completion percentage centered inside the filled portion.
- Allow customization of the bar's height and colors via props.

### Props

| Prop              | Type     | Description                                             | Default      |
|------------------|----------|---------------------------------------------------------|-------------|
| `progress`        | number   | Progress value between 0 and 100                        | **required** |
| `height`          | string   | Height of the progress bar                               | `"25px"`     |
| `backgroundColor` | string   | Color of the background bar                              | `#c5c5c5`    |
| `progressColor`   | string   | Color of the filled progress bar                         | `#0d6efd`    |

---

## Requirements

1. The filled portion of the bar should reflect the `progress` prop (0–100).
2. The background bar should use a lighter color than the progress color.
3. The percentage should be displayed in the center of the filled bar.
4. Smoothly animate the width change when `progress` updates.

---

## Hints

- Use a parent `div` for the background and a child `div` for the filled bar.
- Center the text with `display: flex; justify-content: center; align-items: center;`.
- Use CSS `transition` for smooth width animation.
- Remember to constrain `progress` between 0 and 100 to avoid overflow.

---

## Optional Enhancements

- Add a striped or gradient effect to the filled portion.
- Allow the progress bar to be vertical instead of horizontal.
- Provide callbacks or events when progress reaches certain thresholds (e.g., 50%, 100%).
- Customize the font style, size, or color of the percentage text.