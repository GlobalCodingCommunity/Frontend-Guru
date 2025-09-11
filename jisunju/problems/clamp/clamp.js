/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, upper) {
  if (value > upper){
    return upper;
    // value = upper
  } else if (value < lower){
    return lower;
    // value = lower
  } 
  
  // if/if 와 if/else if가 여기서는 같다.
  // 두 조건이 겹칠 일이 없는 배타적인 조건이므로 if/esle if가 읽을때 다만 조건이 배타적이라는걸 의도적으로 드러낼 뿐이다.

  /*
  else {
    value = value
  }
    */

  return value;
}