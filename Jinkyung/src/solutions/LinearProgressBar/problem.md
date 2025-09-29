# Progress Bar App

## Problem Description
Build an app where clicking the **"Add" button** adds **progress bars** to the page.  
Each progress bar should **fill up gradually** as soon as it is displayed.

---

## Requirements
1. Clicking on the **"Add" button** adds a new progress bar to the page.
2. Each progress bar **starts filling smoothly** as soon as it is added.
3. Each progress bar takes approximately **2000ms (2 seconds)** to completely fill.
4. Implement using **React**.
5. Use **inline styles or CSS classes** for the progress bar and container.

---


## Hints
- Use useState to track the list of progress bars.
- Use useEffect to trigger the bar fill after mounting.
- Use CSS transitions for smooth filling effect.
- Each bar needs a unique key (e.g., timestamp).
- Inline style width can be updated from 0 → 100% to animate.

## Optional Enhancements
- Allow bars to have different colors or heights.
- Add a remove button for each bar.
- Add staggered animation for multiple bars.
- Show percentage complete inside each bar.