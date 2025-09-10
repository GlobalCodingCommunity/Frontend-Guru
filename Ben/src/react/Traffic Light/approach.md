# Traffic Light Implementation Approach

## 🎯 Initial Challenge

When I first encountered this problem, I wasn't immediately sure how to approach it. However, Jay suggested breaking down the problem into steps, which helped me think through the solution systematically.

**한국어**: 처음에 이 문제를 접했을 때 어떻게 만들어야 할지 바로 감이 오지 않았다. 하지만 Jay님께서 이 문제를 단계로 나눠서 풀면 어떻게 풀 것 같은지 질문을 해주셨는데, 단계적으로 정리하면서 문제를 풀면 도움이 될 것 같다.

## 📋 Step-by-Step Planning

I organized my approach into the following steps:

1. **Create the traffic light component**
2. **Implement On/Off state management** - Initially planned to keep state within the component since it has the same appearance with different timing and states
3. **Add color parameters** to the traffic light component
4. **Create a sequence queue** in the parent component
5. **Define timeout values** for each color
6. **Iterate through the sequence queue** to display the traffic light

**한국어**: 단계별 계획

1. **신호등 컴포넌트 생성**
2. **On/Off 상태 관리 구현** - 같은 모양에 시간과 상태만 다르니 처음에는 컴포넌트 안에 상태를 두겠다고 계획
3. **색상 매개변수 추가** 신호등 컴포넌트에
4. **순서 큐 생성** 부모 컴포넌트에서
5. **각 색상의 타임아웃 값 정의**
6. **순서 큐를 순회하며** 신호등 출력

## 🔄 Implementation Evolution

During the actual implementation, my approach evolved:

- **State Management**: Originally planned to keep state within the traffic light component, but ended up managing it in the parent component
- **Color Handling**: Colors are passed as props from outside the component
- **Timing Logic**: Instead of using a sequence queue, I implemented a timing system where each color's timeout value is cycled through, displaying the appropriate color using `setTimeout`

**한국어**: 구현 과정에서의 변화

- **상태 관리**: 신호등 컴포넌트 안에 상태를 두려고 했지만, 부모 컴포넌트에서 관리하게 됨
- **색상 처리**: 색상은 외부에서 props로 전달받도록 구현
- **타이밍 로직**: 순서 큐 대신 각 색상의 타임아웃 값을 순환하며 `setTimeout`을 사용해 적절한 색상을 표시하는 방식으로 구현

## 💡 Key Insights

- Breaking down complex problems into smaller steps makes them more manageable
- State management location can evolve during implementation based on actual needs
- Sometimes a simpler approach (timing-based) can be more effective than complex data structures (queues)

**한국어**: 주요 인사이트

- 복잡한 문제를 작은 단계로 나누면 더 관리하기 쉬워짐
- 상태 관리 위치는 실제 구현 과정에서 필요에 따라 변경될 수 있음
- 때로는 복잡한 데이터 구조(큐)보다 간단한 접근법(타이밍 기반)이 더 효과적일 수 있음
