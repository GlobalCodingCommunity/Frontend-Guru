# Debounce Function Explained

## The Core Concept

Debouncing delays function execution until after a period of "quiet time" - if the function gets called again before the wait time expires, the timer resets.

## Step-by-Step Breakdown

### 1. Initial Setup

```typescript
export default function debounce(func: Function, wait: number): Function {
  let timerId: NodeJS.Timeout | null = null;
```

- **`func`**: The original function we want to debounce
- **`wait`**: How long to wait (in milliseconds) before executing
- **`timerId`**: Stores the timer ID (starts as null)

### 2. Return a New Function

```typescript
return (...args: any[]) => {
```

- We return a brand new function (the "debounced version")
- This new function captures the original `func`, `wait`, and `timerId` in its closure
- When someone calls the debounced function, this is what actually runs

### 3. Clear Previous Timer

```typescript
if (timerId) {
  clearTimeout(timerId);
}
```

- **Key insight**: Every time the debounced function is called, we cancel any pending execution
- If there's already a timer running, we stop it
- This is what makes it "debouncing" - new calls reset the countdown

### 4. Start New Timer

```typescript
timerId = setTimeout(() => {
  func(...args);
}, wait);
```

- Start a fresh timer that will execute the original function after `wait` milliseconds
- Store the timer ID so we can cancel it later if needed
- Pass along any arguments that were given to the debounced function

## Visual Example

Let's trace through this scenario:

```typescript
const debouncedFn = debounce(() => console.log("Executed!"), 100);
```

### Timeline:

**t=0ms**: `debouncedFn()` called
- → `timerId = setTimeout(..., 100)`
- → Timer set to fire at t=100ms

**t=50ms**: `debouncedFn()` called again  
- → `clearTimeout(timerId)` // Cancels first timer
- → `timerId = setTimeout(..., 100)`
- → New timer set to fire at t=150ms

**t=75ms**: `debouncedFn()` called again
- → `clearTimeout(timerId)` // Cancels second timer  
- → `timerId = setTimeout(..., 100)`
- → New timer set to fire at t=175ms

**t=175ms**: Timer fires → `"Executed!"` prints

## The "Magic" of Closure

The `timerId` variable is shared across all calls to the debounced function because of closure:

```typescript
let timerId = null; // This variable persists!

return (...args) => {
  // This function "remembers" timerId
  // Each call can see and modify the same timerId
};
```

## Why It Works

- **First call**: Sets a timer to execute after 100ms
- **Subsequent calls**: Cancel the previous timer and set a new one
- **Only executes**: When no new calls happen for the full wait duration
- **Result**: Function only runs after the "storm" of calls has ended
