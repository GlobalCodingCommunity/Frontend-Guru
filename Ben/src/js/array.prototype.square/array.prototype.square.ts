import "./types";

// Extend Array prototype with square method
Array.prototype.square = function (this: number[]) {
  return this.map((value: number) => value * value);
};
