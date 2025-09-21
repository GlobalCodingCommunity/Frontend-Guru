export default function objectMap(obj, fn) {
    let result = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = fn.call(obj, obj[key]);
      }
      //     if (Object.hasOwn(obj, key)) { //최신문법에서는 hasOwn을 사용해도 된다.
      //   result[key] = fn.call(obj, obj[key]);
      // }
    }
  
    return result;
  }
  