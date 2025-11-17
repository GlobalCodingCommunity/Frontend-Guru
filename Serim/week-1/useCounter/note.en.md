## 1. Why doesn't `return { count }` give me the updated value, even though the closure is managing `count`?

```js
export default function useCounter(initialValue: number) {
  let count = initialValue || 0;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count -= 1;
  };

  const reset = () => {
    count = initialValue || 0;
  };

  const setCount = (value: number) => {
    count = value;
  };

  return { count, increment, decrement, reset, setCount };
}
```

A closure means that an inner function can continue to access variables from its outer scope.

But in this case, return { count } evaluates the variable at that moment and stores the value, not the reference.
So what you return is just a snapshot of the value at the time of calling useCounter, not a live connection to the variable.

This is why the returned count doesn’t update.
To expose the current value, you need to return a getter instead of returning the raw value.

## 2. setCount should accept both a number and an updater function

```js
export default function useCounter(initialValue: number) {
  let count = initialValue || 0;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count -= 1;
  };

  const reset = () => {
    count = initialValue || 0;
  };

  const setCount = (value: number) => {
    count = value;
  };

  return {
    get count() {
      return count;
    },
    increment,
    decrement,
    reset,
    setCount,
  };
}
```

The code above fails when running the test case setCount((x) => x + 2).

setCount assumes the argument is always a number, so it assigns the function itself to count.
Then the getter returns that function, which causes the [Function anonymous] error.

To handle both number values and updater functions (just like React), setCount must accept either a number or a function.

3. Does my implementation behave the same as React’s useState?

```ts
type SetCountArg = number | ((prev: number) => number);

export default function useCounter(initialValue: number) {
  let count = initialValue || 0;

  const setCount = (valueOrUpdater: SetCountArg) => {
    if (typeof valueOrUpdater === "function") {
      const updater = valueOrUpdater as (prev: number) => number;
      count = updater(count);
    } else {
      count = valueOrUpdater;
    }
  };

  const increment = () => {
    setCount((x) => x + 1);
  };

  const decrement = () => {
    setCount((x) => x - 1);
  };

  const reset = () => {
    setCount(initialValue || 0);
  };

  return {
    get count() {
      return count;
    },
    increment,
    decrement,
    reset,
    setCount,
  };
}
```

Not the same!

My custom hook simply updates a variable and exposes it through a getter.
React, however, stores state inside its internal hook slot.
Whenever state is updated, React triggers a re-render, and during that re-render the hook reads the latest value from the hook slot and returns it.

So the mechanism is completely different even though the API surface looks similar.

<details>
<summary>React Hook Slot</summary>

```md
Component Fiber Node
└── hooks = [
      { memoizedState: 0 },      // useState(0)
      { memoizedState: { ... } } // useReducer ...
      { someEffectConfig }       // useEffect ...
   ]
```
</details>