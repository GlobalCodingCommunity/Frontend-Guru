## Calculations for Clock Hands

*   We will use `transform: rotate(Xdeg)` to rotate the clock hands.
*   The `transform-origin: center top` CSS property is key to rotating the hands correctly around the clock's center.

### Second and Minute Hands

*   Each hand completes a full rotation (360 degrees) in 60 seconds/minutes.
*   Therefore, 1 second/minute corresponds to 6 degrees (360 / 60 = 6).
*   To calculate the rotation: `seconds * 6` or `minutes * 6`

### Hour Hand

*   The hour hand completes a full rotation in 12 hours.
*   Therefore, 1 hour corresponds to 30 degrees (360 / 12 = 30).

feedback: useEffect to clean up the interval when the component is unmount
