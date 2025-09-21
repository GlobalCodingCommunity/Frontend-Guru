# 1. 
- **Title**: Number of Arguments — JavaScript 개념이해
- **Week**: Week 01
- **Category**: JavaScript
- **Difficulty**: Easy
- **Source**: https://www.greatfrontend.com/questions/javascript/number-of-arguments?language=js&tab=coding

---

## 2. 문제내용
Implement a function numberOfArguments, to return the number of arguments it was called with. Note that this value is the actual number of arguments, which can be more or less than the defined parameter count (which is determined by Function.prototype.length).
P.S. There's no practical use for this function. However, it is useful to know how to determine the number of arguments, which can be useful for questions that require writing variadic functions like Classnames and Curry II.

numberOfArguments라는 함수를 구현하라.
이 함수는 호출될 때 전달된 아규먼트(값)의 개수를 반환해야 한다.
주의할 점은, 이 값은 함수에 정의된 패러미터의 개수(Function.prototype.length) 와는 다르다.
실제로 호출될 때 전달된 아규먼트의 수는, 정의된 패러미터 수보다 많을 수도 있고, 적을 수도 있다.
```js
numberOfArguments(); // 0
numberOfArguments(1); // 1
numberOfArguments(2, 3); // 2
numberOfArguments('a', 'b', 'c'); // 3
```

---

## 3. 사이트에서 제공한 정답
Approach 1: Using arguments object
The arguments object is an array-like object that is accessible inside functions and it contains values or arguments passed to that function. Hence we can use arguments.length to determine the number of arguments passed.
```js
/**
 * @param {...any} args
 * @return {number}
 */
export default function numberOfArguments() {
  return arguments.length;
}
// 오래된 문법, 진짜 배열이 아니라서 map, filter 같은 메서드 사용못하며 변환해야함, 화살표함수에서 동작 안함
```
Approach 2: Using rest parameters
The rest parameter syntax allows a function to accept a variable number of arguments as an array. It can be used with named parameters before it, but by using it solely as the function's parameters (like in the skeleton code), it captures all arguments passed to the function.
```js
/**
 * @param {...any} args
 * @return {number}
 */
export default function numberOfArguments(...args) {
  return args.length;
}
// ...args라고 쓰면 함수에 들어온 모든 arguments를 자동으로 진짜 배열에 담아줌
// 진짜 배열이므로 map, filter, reduce 다 바로 사용가능, 화살표한수에서 작동
```

## 4. 이니셜 코드 

```js
none
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
* 개념위주 공부
1) Parameter / Argument / Props
- Parameter : 값의 자리 이름
```js
function greet(name) {   // name = parameter
  console.log("Hello " + name);
}
```
- Argument : Parameter에 들어오는 값
```js
greet("Sunny");   // "Sunny" = argument
```
- Props : React에서만 쓰는 개면으로 컴포넌트 외부에서 전달해주는 데이터(속성), 컴포넌트 함수의 argument라고 볼수 있음

2) Parameter / Argument
- Parameter의 개수와 상관없이 함수가 호출될 때 들어온 모든 값들은 arguments 객체(또는 ...args)에 저장된다.
- Parameter는 이름 붙은 자리라서, 정의된 개수만큼만 변수를 통해 접근할 수 있다.
- 하지만 실제로 전달된 값(Arguments)은 더 많을 수도, 적을 수도 있다.
- 따라서, Parameter 개수와 실제 Argument 개수는 다를 수 있다.
```js
function demo(a, b) {
  console.log("a:", a);       // 첫 번째 값
  console.log("b:", b);       // 두 번째 값
  console.log("arguments:", arguments);
  console.log("arguments.length:", arguments.length);
}

demo(1, 2, 3, 4);

출력
a: 1
b: 2
arguments: [1, 2, 3, 4]
arguments.length: 4
```

3) arguments.length
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments/length

## 8. 학습과정 요약
1) 아직은 모르는 내용이 많으므로 문제 풀기 전 기본 개념 먼저 공부함(ai 활용)
2) 문제풀기 1: 혼자서 생각나는 부분 먼저 풀기
3) 문제풀기 2: 공부하면서 정리한 노트 찾아보기
4) 문제풀기 3: 사이트에서 제공한 솔루션 확인하기
5) 솔루션 확인후 이해 안되는 부분 다시 공부하기(ai, mdn 활용)