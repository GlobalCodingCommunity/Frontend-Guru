## 1. 클로저로 count는 관리되고 있는데, 왜 return { count } 하면 최신 값이 안 나오지?

```js
export default function useCounter(initialValue: number) {
  let count = initialValue || 0;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count -= 1;
  };

  const reset = () => {
    count = initialValue || 0;
  };

  const setCount = (value: number) => {
    count = value;
  };

  return { count, increment, decrement, reset, setCount };
}
```

클로저는 “내부 함수가 외부 변수에 계속 접근할 수 있다”는 기능이고
현재 `return { count }`는
그 변수에 접근한 결과(숫자)를 한 번 평가해서 객체에 넣는 것이라서
“살아있는 연결”이 아니라 “한 번 복사한 값” 이 됨.

따라서 단순 값 복사하면 스냅샷한 게 되고, 함수(getter or getCount)를 사용해야 라이브 뷰처럼 동작을 함.

## 2. setCount가 숫자도 받고, 함수도 받도록 해야함

```js
export default function useCounter(initialValue: number) {
  let count = initialValue || 0;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count -= 1;
  };

  const reset = () => {
    count = initialValue || 0;
  };

  const setCount = (value: number) => {
    count = value;
  };

  return {
    get count() {
      return count;
    },
    increment,
    decrement,
    reset,
    setCount,
  };
}
```

위 코드는, `setCount((x) => x + 2)`로 테스트 할 경우 테스트 통과에 실패함.
setCount((x) => x + 2)를 호출했는데 setCount는 “숫자만 올 거”라고 생각하고 count = value 해버림.
그래서 count 안에 숫자 대신 함수가 들어가고 getter는 그 함수(값)를 그대로 내보내서 [Function anonymous] 오류가 발생함.

이를 위해서는 setCount가 숫자와 함수 모두 받을 수 있게 수정해야함.

## 3. 현재 구현한 게 useState와 동일한 동작원리인가?

```ts
type SetCountArg = number | ((prev: number) => number);

export default function useCounter(initialValue: number) {
  let count = initialValue || 0;

  const setCount = (valueOrUpdater: SetCountArg) => {
    if (typeof valueOrUpdater === "function") {
      const updater = valueOrUpdater as (prev: number) => number;
      count = updater(count);
    } else {
      count = valueOrUpdater;
    }
  };

  const increment = () => {
    setCount((x) => x + 1);
  };

  const decrement = () => {
    setCount((x) => x - 1);
  };

  const reset = () => {
    setCount(initialValue || 0);
  };

  return {
    get count() {
      return count;
    },
    increment,
    decrement,
    reset,
    setCount,
  };
}
```

다름!

내가 구현한 훅은 단순하게 값만 변경하기 때문에 변경된 값 반영을 위해 getter 함수로 업데이트를 해주고 있음.
하지만 리액트의 경우, 리액트 내부의 Hook 슬롯에 변경된 값을 반영하고 재렌더를 일으킴. 재렌더 될 때 useState가 Hook 슬롯에 저장된 최신 값을 다시 반환해서 최신 값을 가져다가 사용할 수 있게 됨.

<details>
<summary>React Hook Slot</summary>

```md
Component Fiber Node
└── hooks = [
      { memoizedState: 0 },      // useState(0)
      { memoizedState: { ... } } // useReducer ...
      { someEffectConfig }       // useEffect ...
   ]
```
</details>