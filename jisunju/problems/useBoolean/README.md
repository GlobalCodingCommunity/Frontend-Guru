# 1. 
- **Title**: useBoolean — Custom React Hook
- **Week**: Week 01
- **Category**: React
- **Difficulty**: Easy
- **Source**: https://www.greatfrontend.com/questions/javascript/use-boolean?framework=react&tab=coding

---

## 2. 문제내용
Implement a useBoolean hook that manages a boolean state, with additional convenience utility methods.
불린(boolean) 상태를 관리하는 커스텀 훅을 구현하고, 편의 메서드를 제공한다.  
```js
export default function Component() {
  const { value, setTrue, setFalse } = useBoolean();

  return (
    <div>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

---

## 3. 사이트에서 제공한 정답
The useBoolean hook uses useState to manage the boolean state. The setter functions can be implemented in terms of setValue from the useState hook, bound by true and false.
```js
import { useState } from 'react';

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  };
} 
```

## 4. 이니셜 코드 

```js
export default function useBoolean(initialValue) {
  const { value, setValue } = useState(false); 

  const setFalse = setValue(false);    
  const setTrue  = setValue(true);     
  const toggle   = setValue(prev => !prev);  

  return (value, setTrue, setFalse, toggle); 
}
```

## 5. 틀린부분 수정된 코드
```js
import { useState } from 'react';
// useState import 안해서 추가함
export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  // useState는 [state, setState] 형태의 배열을 반환한다.
  // 원래 { }(컬리브라켓)로 잘못 썼던 부분을 [ ](스퀘어브라켓)으로 고침.
  // (초기 버전) 항상 false로 시작했고, initialValue 매개변수를 받아놓고도 사용하지 않았다.
  // (수정 버전) initialValue의 기본값을 false로 두고, useState의 초기값으로 initialValue를 사용해 호출 시 원하는 초기값을 설정할 수 있게 했다.


  const setFalse = () => setValue(false);
  const setTrue = () => setValue(true);
  const toggle = () => setValue(prev => !prev);
  // 원래는 setValue(false)처럼 바로 실행해버려서 undefined가 들어갔음.
  // 지금은 화살표 함수로 감싸서, 나중에 클릭 이벤트 등에서 실행할 수 있게 수정함.

  return { value, setTrue, setFalse, toggle };
  // 여러 값을 반환해야 하므로 ( )가 아니라 { } 객체로 묶어서 반환.
  // 이렇게 하면 구조 분해로 필요한 값만 꺼내 쓸 수 있음.
}
```

## 6. 추가로 향상시킨 코드
```js
import { useState } from 'react';

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  return { value, 
           setFalse: () => setValue(false),
           setTrue: () => setValue(true),
           toggle: () => setValue(prev => !prev)
           };
}
// 간결함과 가독성을 위해 반환 시 객체를 인라인으로 정의함
// 다만 참조 안정화(메모이제이션)가 필요하면 함수들을 변수로 분리하고 useCallback으로 감싼 뒤 반환하는 편이 좋음
```

## 7. 배운점 요약
1) useBoolean은 불린 상태를 다루기 위한 편의 커스텀 훅이다.
2) hook은 컴포넌트와 분리해 재사용할수 있다.
3) 이벤트 핸들러는 즉시 실행이 아니라 함수참조를 넘긴다.

## 8. 학습과정 요약
1) 아직은 모르는 내용이 많으므로 문제 풀기 전 기본 개념 먼저 공부함(ai 활용)
2) 문제풀기 1: 혼자서 생각나는 부분 먼저 풀기
3) 문제풀기 2: 공부하면서 정리한 노트 찾아보기
4) 문제풀기 3: 사이트에서 제공한 솔루션 확인하기
5) 솔루션 확인후 이해 안되는 부분 다시 공부하기(ai 활용)