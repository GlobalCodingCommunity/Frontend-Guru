# Stopwatch Widget

## Problem Description
Build a **stopwatch widget** which measures elapsed time.  
The stopwatch displays the current timer and has two buttons: **Start/Stop** and **Reset**.

Clicking on the timer itself can also toggle start/stop.

---

## Requirements
1. **Start/Stop Button**: Starts or stops the timer depending on its current state.
2. **Reset Button**: Resets the timer to `0` and stops the timer.
3. The timer should display **seconds elapsed down to milliseconds**.
4. Clicking on the timer can also toggle start/stop.
5. Timer format should be displayed as `hh:mm:ss:ms`.
6. Optional: Style the stopwatch creatively. You may refer to Google's stopwatch widget for inspiration.


## Hints
- Use useState to track running state and timer value.
- Use useEffect with setInterval to update the timer every 10ms.
- Remember to clear the interval when stopping or unmounting.
- Clicking the timer can toggle running state.
- Format time using padStart for consistent hh:mm:ss:ms display.

## Optional Enhancements
- Add styling and animations for start/stop transitions.
- Make the stopwatch resizable or themeable.
- Add lap functionality to capture intermediate times.