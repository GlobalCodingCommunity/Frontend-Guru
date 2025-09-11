# 1. 
- **Title**: Number of Arguments — JavaScript 개념이해
- **Week**: Week 03
- **Category**: JavaScript
- **Difficulty**: Easy
- **Source**: https://www.greatfrontend.com/questions/javascript/clamp?language=js&tab=coding

---

## 2. 문제내용
Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.

clamp(number, lower, upper) 라는 함수를 구현하라.
이 함수는 숫자(number)를 주어진 하한(lower)과 상한(upper) 포함 범위 안에 제한해야 한다.
```js
// Within the bounds, return as-is.
clamp(3, 0, 5); // => 3

// Smaller than the lower bound.
clamp(-10, -3, 5); // => -3

// Bigger than the upper bound.
clamp(10, -5, 5); // => 5

```

---

## 3. 사이트에서 제공한 정답
```js
/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, upper) {
  if (value < lower) {
    return lower;
  }

  if (value > upper) {
    return upper;
  }

  return value;
}

```

## 4. 이니셜 코드 
- css에서 사용했던 clamp와 헷갈려 빌트인 함수인줄 알았음
- 자바스크립트에서 clamp는 내장함수가 아니며 value, lower, upper을 활용하여 직접 함수를 작성해야함을 확인 (GPT를 활용하여 힌트를 얻음)
- 그 후에 나온 첫번째 코드임

```js
/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, upper) {
  if (value > upper){
    value = upper
  } else if (value < lower){
    value = lower
  } else {
    value = value
  }

  return(
    value
  );
}
```

## 5. 틀린부분 수정된 코드
```js
none
```

## 6. 추가로 향상시킨 코드
```js
none
```

## 7. 배운점 요약
1) 하나만 return할경우 코드블럭으로 묶지 않아도 된다.
2) 말 그대로 아무 동작도 안하는 코드라 불필요하다. 조건이 맞지 않는 경우엔 그대로 value를 반환하면 되니까 없어도 된다.
```js
else { value = value }
```
3) value = upper vs return upper 
value = upper하고 나서 마지막에 return value 하는것도 동작은 같다.
하지만 함수의 목적은 '조건에 따라 특정값을 돌려주는 것'이니까 굳이 value에 다시 대입할 필요없이 곧장 
return upper; 하는게 더 깔끔하고 직관적이다.

## 8. 학습과정 요약
1) 질문의 의도 다시 확인 (GPT 활용)
2) 문제풀기 1: 혼자서 생각나는 부분 먼저 풀기
3) 문제풀기 2: 사이트에서 제공한 솔루션 확인하기
4) 솔루션 확인후 이해 안되는 부분 다시 공부하기(ai, mdn 활용)