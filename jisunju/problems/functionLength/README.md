# 1. 
- **Title**: Function Length — JavaScript 개념이해
- **Week**: Week 02
- **Category**: JavaScript
- **Difficulty**: Easy
- **Source**: https://www.greatfrontend.com/questions/javascript/function-length?language=js&tab=coding

---

## 2. 문제내용
Implement a function functionLength, to return the number of parameters a function expects. Note that this is a static value defined by the function, not the number of arguments the function is called with (which is determined by arguments.length)
P.S. Practically, there's no need for this function since it is a simple wrapper. However, it is useful to know how to determine the number of parameters a function expects, which is useful for questions like Curry II.

어떤 함수를 입력하면, 그 함수가 정의할 때 매개변수(파라미터)를 몇 개 쓰는지 알려주는 함수를 만들어라.
```js
function foo() {}
function bar(a) {}
function baz(a, b) {}

functionLength(foo); // 0
functionLength(bar); // 1
functionLength(baz); // 2

```

---

## 3. 사이트에서 제공한 정답
Approach 1: Using arguments object
The arguments object is an array-like object that is accessible inside functions and it contains values or arguments passed to that function. Hence we can use arguments.length to determine the number of arguments passed.
```js
/**
 * @param {Function} fn
 * @return {number}
 */
export default function functionLength(fn) {
  return fn.length;
}
// 넘겨받은 함수의 .length 속성을 그대로 반환하라는 뜻
```

## 4. 이니셜 코드 
- 문제 풀때 배경 힌트(가이드라인)을 읽는 방법을 몰랐음
- 안내문 : fn이라는 function을 param으로 받음, number(숫자)를 return함
- numberOfArguments의 argument.length처럼 단순히 계산할수 있을꺼라 생각함

```js
/**
 * @param {Function} fn
 * @return {number}
 */
export default function functionLength() {
  return function.length;
}
```

## 5. 틀린부분 수정된 코드
```js
/**
 * @param {Function} fn
 * @return {number}
 */
export default function functionLength(fn) {
  return fn.length;
}
```

## 6. 추가로 향상시킨 코드
```js
none
```

## 7. 배운점 요약
1) 질문을 먼저 제대로 읽어볼 것.

## 8. 학습과정 요약
1) 아직은 모르는 내용이 많으므로 문제 풀기 전 기본 개념 먼저 공부함(ai 활용)
2) 문제풀기 1: 혼자서 생각나는 부분 먼저 풀기
3) 문제풀기 2: 공부하면서 정리한 노트 찾아보기
4) 문제풀기 3: 사이트에서 제공한 솔루션 확인하기
5) 솔루션 확인후 이해 안되는 부분 다시 공부하기(ai, mdn 활용)