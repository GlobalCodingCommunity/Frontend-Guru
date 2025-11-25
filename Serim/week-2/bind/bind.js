Function.prototype.myBind = function (thisArg, ...argArray) {
  const func = this;

  return function (...newArgs) {
    const finalArgs = argArray.concat(newArgs);

    return func.apply(thisArg, finalArgs);
  };
};
