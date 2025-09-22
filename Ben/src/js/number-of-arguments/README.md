Implement a function numberOfArguments, to return the number of arguments it was called with. Note that this value is the actual number of arguments, which can be more or less than the defined parameter count (which is determined by Function.prototype.length).

P.S. There's no practical use for this function. However, it is useful to know how to determine the number of arguments, which can be useful for questions that require writing variadic functions like Classnames and Curry II.

```js
numberOfArguments(); // 0
numberOfArguments(1); // 1
numberOfArguments(2, 3); // 2
numberOfArguments("a", "b", "c"); // 3
```
