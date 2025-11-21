## How to handle sparse arrays
As shown in the problem example, an array can contain empty slots such as `[1, 2, , 4]`. 

```js
if (!(i in this)) continue;
```
Using this condition, empty slots evaluate to false, so the loop skips them.
This matches how the native Array.prototype.filter behaves.

## thisArg
In [MDN Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
there is an option called [thisArg](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#thisarg). 

Simply put, thisArg is the value that will be used as this inside the filter callback.

```js
const range = { min: 3, max: 7 };

[1, 4, 6, 8].filter(function (v) {
  return v >= this.min && v <= this.max;
}, range);
```
This works because regular functions have their own this binding.
However, arrow functions do not use thisArg—they inherit this from the surrounding scope.
For that reason, thisArg is rarely used in modern JavaScript, since arrow functions are more common.

To apply thisArg manually, we need to call the callback like this:
```js
const shouldKeep = callbackFn.call(thisArg, value, i, this);
```
Every function has a call method.
func.call(thisValue, arg1, arg2, ...) means:
	•	execute func(arg1, arg2, ...)
	•	but force this inside the function to be thisValue

Because the callback receives (value, index, array),
we pass value, i, this, and use thisArg to set the this binding.