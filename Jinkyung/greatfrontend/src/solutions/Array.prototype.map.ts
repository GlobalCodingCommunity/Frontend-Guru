/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  // const results = [];
  const results = new Array(len) //미리 결과배열을 원본배열과 동일하게 생성
  const len = this.length;

  for (let i = 0; i < len; i++) {
    let value = this[i];

    if (Object.hasOwn(this, i)) { //값이 존재하면 그 위치에 결과를 저장
      // results.push(callbackFn.call(thisArg, value, i, this)); //push는 그 위치에 결과를 저장하는게 아니라 순서가 밀림
      results[i] = callbackFn.call(thisArg,value,i,this) //이렇게 해야 빈 인덱스에 빈값 유지 (희소배열)
    }
  }
  return results;
};
