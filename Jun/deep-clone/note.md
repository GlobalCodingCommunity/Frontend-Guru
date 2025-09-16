### Why companies ask this

*   Do you know how **recursion** works?
*   Do you understand the difference between shallow vs. deep copies?
*   Do you recognize that arrays and objects need special handling?
*   Can you reason through transforming entries back into an object (even if you forget `fromEntries`, you could just loop with `{}` and assign manually)?

In other words, it’s less about “write production code” and more about “can you break down a nested structure and rebuild it carefully?”

### key points

1.  **How to form an object**: Use `Object.fromEntries()`. If you forget this method, you can manually assign values to keys on a new object: `newObj[key] = deepClone(value)`.
2.  **How to iterate over an object**: Use `Object.entries()` to get key-value pairs.
3.  **How to check if a value is an object**: Use `typeof value === 'object'`.
4.  **How to check if a value is an Array**: Use `Array.isArray(value)`.
5.  **Handling `null`**: Remember that `typeof null` returns `'object'`.

### Why check for `null`?

You might wonder why we need to check for `null` if we're already checking if something is an object.

*   `typeof null` actually returns `"object"`. This is a well-known quirk in JavaScript.
*   So if you only check `typeof value === "object"`, `null` would pass the test.
*   But `null` isn’t something you can loop over with `Object.entries()`, so you’d get a `TypeError`.

That’s why people write

```js
value !== null && typeof value === 'object'
```

to make sure it’s a **real object** (or array), not `null`.
