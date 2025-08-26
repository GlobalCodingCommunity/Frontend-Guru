// You need to declare the global augmentation for the Function interface in a module scope to let TypeScript recognize your custom 'myCall' method.
declare global {
  interface Function {
    myCall(this: Function, thisArg: any, ...argArray: any[]): any;
  }
}

Function.prototype.myCall = function (thisArg, ...argArray) {
  if (!thisArg) {
    thisArg = globalThis;
  }

  return this.apply(thisArg, argArray);
};

// Example
function multiplyAge(this: any, multiplier: number = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myCall(mary)); // 21
console.log(multiplyAge.myCall(john, 2)); // 84
