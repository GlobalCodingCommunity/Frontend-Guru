# Analog Clock Widget

## Problem Description
Create a widget that displays the current time as an **analog clock**.  
The clock should have **hour, minute, and second hands** that **move in real time**, just like a real clock.

---

## Requirements

1. Implement the component using **React**.
2. Render an **analog clock** with hour, minute, and second hands.
3. The hands should **update according to the current time**.
4. Use **CSS transform** to rotate the hands.
5. Styling is up to you (colors, sizes, background, etc.).

---

## Example

- The clock has three hands: **hour, minute, second**.
- Degree per unit (12-hour clock):
  - 1 hour → 30°
  - 1 minute → 6°
  - 1 second → 6°

```ts
const [hour, setHour] = useState((new Date().getHours() % 12) * 30);
const [minutes, setMinutes] = useState(new Date().getMinutes() * 6);
const [seconds, setSeconds] = useState(new Date().getSeconds() * 6)
```

## Hints

- Use setInterval to update:
- the second hand every 1 second,
- the minute hand every 1 minute,
- the hour hand every 1 hour.
- You can style the hands with different thickness, length, and color using CSS.
- Use transform-origin to rotate the hands around the clock center.
- Utilize React useState and useEffect properly.



## Optional Enhancements

- Make the hands move smoothly with CSS transitions.
- Customize the clock background and hand styles creatively.
- Display a digital clock alongside the analog clock.