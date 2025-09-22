Solution
Approach 1: Using arguments object
The arguments object is an array-like object that is accessible inside functions and it contains values or arguments passed to that function. Hence we can use arguments.length to determine the number of arguments passed.

JavaScript

TypeScript
/\*\*

- @param {...any} args
- @return {number}
  \*/
  export default function numberOfArguments() {
  return arguments.length;
  }
  Approach 2: Using rest parameters
  The rest parameter syntax allows a function to accept a variable number of arguments as an array. It can be used with named parameters before it, but by using it solely as the function's parameters (like in the skeleton code), it captures all arguments passed to the function.

JavaScript

TypeScript
/\*\*

- @param {...any} args
- @return {number}
  \*/
  export default function numberOfArguments(...args) {
  return args.length;
  }
  Edge cases
  Calling a function with undefined. undefined is still counted as a parameter. Default function parameters will be initialized with default values if no value or undefined is passed.

function foo(a = 1) {
return a;
}

foo(undefined); // 1
foo(); // 1
Notes
What happens for functions that have default parameters? The answer is that they behave exactly the same.

function foo(a = 1, b = 2) {
return arguments.length;
}

foo(); // 0
foo(3); // 1
foo(undefined); // 1
Resources
