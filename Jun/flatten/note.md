### Approach

1. loop the array
2. check if item is array
3. then recursion

### Thought Process

How to flatten the array? Do we need to return anything from the recursive helper function? If we do, what is the type of the return? It shouldn't be an array.

Maybe I can pass an empty array into the recursive helper and push the single values into it. So, check if the value is an array, then call the recursive helper.

### Duration
Finished in 10 mins.