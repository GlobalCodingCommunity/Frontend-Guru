let i = 0;
function increment() {
  i++;
}

const blockThread = (wait: number) => {
  const end = Date.now() + wait;
  while (Date.now() < end) {}
};

// For main question
function debounce(func: Function, wait: number): Function {
  let timeoutId: number = -1;

  const debouncedFunc = function (this: any, ...args: any[]) {
    if (timeoutId >= 0) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.call(this, ...args);
      console.log(i);
    }, wait);
  };

  return debouncedFunc;
}

const debouncedIncrement = debounce(increment, 1500);

// debouncedIncrement();

// blockThread(100);
// console.log(i); //0
// blockThread(1400);
// console.log(i); //0
// but after 1500ms passed, i is now printed 1.

// Follow up question:
// Debounce with a cancel() method to cancel delayed invocations and a flush() method to immediately invoke them.
class Debounce {
  funcToDebounce: Function;
  timeoutId: number;
  wait: number;

  constructor(func: Function, wait: number) {
    this.funcToDebounce = func;
    this.timeoutId = -1;
    this.wait = wait;
  }

  debounce() {
    const debouncedFunc = (...args: any[]) => {
      if (this.timeoutId >= 0) clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.funcToDebounce.call(this, ...args);
        console.log(i);
      }, this.wait);
    };

    return debouncedFunc;
  }

  cancel() {
    if (this.timeoutId >= 0) clearTimeout(this.timeoutId);
  }

  flush(...args: any[]) {
    if (this.timeoutId >= 0) {
      clearTimeout(this.timeoutId);
      this.funcToDebounce.call(this, ...args);
    }
  }
}

const debounceObject = new Debounce(increment, 1500);
const debouncedIncrement2 = debounceObject.debounce();
debouncedIncrement2();

// blockThread(100);
// console.log(i); //0
// blockThread(1400);
// console.log(i); //0

blockThread(500);
console.log(i); //0
debounceObject.flush();
console.log(i); //1
// debounceObject.cancel();
// console.log(i); //0
