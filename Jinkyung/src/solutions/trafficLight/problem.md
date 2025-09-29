# Traffic Light Simulation

## Problem Description
Build a **traffic light** where the lights switch in a loop: **green → yellow → red**.  
Each light should be lit for the following durations:

- **Red light**: 4000ms  
- **Yellow light**: 500ms  
- **Green light**: 3000ms  

The traffic light should loop **indefinitely**.  
You can style the lights creatively (e.g., colored circles).

---

## Requirements
1. Create a **wrapper div** containing **three divs** representing the red, yellow, and green lights.
2. Use state to track the **current light status** (`red`, `yellow`, `green`).
3. Each light should be **on or off** depending on the current state.
4. The light durations should follow the specified timings.
5. The light sequence should **loop indefinitely**.
6. Use `useEffect` with `setTimeout` or `setInterval` to switch lights automatically.

## Hints
- Map the traffic lights to CSS classes for on/off states.
- Use useState to store the current light (red, yellow, green).
- Use useEffect and setTimeout to schedule state changes.
- Remember to clear the timeout on cleanup to prevent memory leaks.


## Optional Enhancements
- Style the traffic lights as realistic circles.
- Add transitions or animations when lights change.
- Make the component resizable or themeable.