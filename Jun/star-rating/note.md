The exercise was estimated to take 20 minutes, but it took me way longer to complete.

I spent significant time considering how to manage the hover state. There are several ways to implement this. My initial thought was to use another `useState` hook, but I was concerned about causing the component to re-render on every hover. However, after some research, I learned that for a small number of elements like 5–10 SVGs, frequent re-renders are perfectly acceptable in React.

The provided solution places the `filledIndex` state in the parent component (`App.js`). I believe my approach of managing state within the `StarRating` component is also valid and maintains reusability. In a real-world application, the initial rating would likely be fetched from a backend in the parent component. The `StarRating` component could then handle its own state and make API requests to update the rating when a user interacts with it.

I initially used `useMemo`, but I realized it was unnecessary for this use case because:

*   The array of stars is so small that the computational cost is negligible.
*   `useMemo` introduces its own overhead (dependency tracking, caching, etc.).
*   Forgetting to include a dependency in the dependency array can lead to bugs.
*   In the interview, it would take longer to look up useMemo syntax

### Rule of Thumb for `useMemo`

Don’t use `useMemo` for simple organization—it’s a performance optimization tool.

For inexpensive computations (like generating a dozen stars), inlining the logic is simpler, clearer, and performs just as well.

Reach for `useMemo` only when:

1.  The computation is expensive (e.g., sorting or filtering a large list, complex calculations).
2.  You need to preserve referential equality to prevent unnecessary re-renders of child components (e.g., when passing arrays or objects as props to memoized components).

👉 In this scenario, omitting `useMemo` results in simpler code with no performance penalty.

```jsx
export default function StarRating({ maxStars, filledStars }) {
  const [filledStarsState, setFilledStarsState] = useState(filledStars - 1);
  const [hoverIndex, setHoveredIndex] = useState(-1);

  return (
    <>
      {Array.from({ length: maxStars }, (_, i) =>
        (i <= filledStarsState && hoverIndex == -1) || i <= hoverIndex
          ? "star-icon-filled"
          : "",
      ).map((filledClass, index) => {
        return (
          <StarIcon
            index={index}
            filledClass={filledClass}
            handleOnClick={setFilledStarsState}
            setHoveredIndex={setHoveredIndex}
          />
        );
      })}
    </>
  );
}
```