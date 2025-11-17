## spare array를 어떻게 대비할까?
문제의 예시처럼, 배열이 [1, 2, , 4]와 같이 빈칸도 존재할 수 있음.

```js
if (!(i in this)) continue;
```
이렇게 할 경우 빈칸은 false를 내뱉기에 건너뛰게 되는거임.

## thisArg
[MDN Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)을 보면,
[thisArg](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#thisarg)가 있다. 

쉽게 말하면 filter 콜백 안에서 this로 쓰일 값인 것이다.

```js
const range = { min: 3, max: 7 };

[1, 4, 6, 8].filter(function (v) {
  return v >= this.min && v <= this.max;
}, range);
```
이렇게 사용이 가능한데, 화살표 함수는 this를 “상위 환경”에서 가져오기에 thisArg 넣어도 무시가 됨.
따라서 화살표 함수 사용이 불가능하기에 요즘에는 잘 사용하지 않는 옵션이라고 함.

따라서 이 thisArg를 적용하려면
```js
const shouldKeep = callbackFn.call(thisArg, value, i, this);
```
이게 필요함. 모든 함수는 call이라는 메서드를 가지고 있는데, `func.call(this값, arg1, arg2, arg3, ...)`이라고 하면 func(arg1, arg2, arg3, ...) 이렇게 실행하되, 그 함수 안에서 this를 this값으로 강제로 지정해서 실행해주라는 의미이다.
따라서 callbackFn의 인자가 value, index, array를 요하기 때문에 value, i, this를 넣어주고
thisArg로 강제해달라는 의미가 된다.