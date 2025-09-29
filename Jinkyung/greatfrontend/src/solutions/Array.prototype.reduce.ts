/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    const len = this.length;
    // let acc = initialValue;
    const noInitialValue = initialValue === undefined; //initialValue가 undefined일경우
  
    if (noInitialValue && len === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
  
    let acc = noInitialValue ? this[0] : initialValue; //true면 this[0] false일경우 initialValue
    let startingIndex = noInitialValue ? 1 : 0; //
  
    for (let i = startingIndex; i < len; i++) {
      if (Object.hasOwn(this, i)) {
        acc = callbackFn(acc, this[i], i, this);
      }
    }
  
    return acc;
  };
  