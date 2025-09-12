# Traffic Light Component

## 📋 Problem Description

You are tasked with building a simple traffic light component using React. The traffic light should consist of three lights: red, yellow, and green. The lights should switch from red to green to yellow after predetermined intervals and loop indefinitely.

**한국어**: React를 사용하여 간단한 신호등 컴포넌트를 만들어보세요. 신호등은 빨간색, 노란색, 초록색의 세 개의 불빛으로 구성되어야 하며, 정해진 시간 간격으로 색상이 전환되며 무한히 반복되어야 합니다.

## ⏱️ Traffic Light Timing

| Color     | Duration            |
| --------- | ------------------- |
| 🔴 Red    | 4,000ms (4 seconds) |
| 🟡 Yellow | 500ms (0.5 seconds) |
| 🟢 Green  | 3,000ms (3 seconds) |

**한국어**: 신호등 시간 설정

| 색상      | 지속 시간     |
| --------- | ------------- |
| 🔴 빨간색 | 4,000ms (4초) |
| 🟡 노란색 | 500ms (0.5초) |
| 🟢 초록색 | 3,000ms (3초) |

## ✅ Requirements

- **Component Name**: `TrafficLight`
- **Features**:
  - Display three lights (red, yellow, green)
  - Switch colors at predetermined intervals
  - Loop indefinitely
  - Only one light active at a time
- **Styling**: Visually appealing design (CSS or any other styling method)

**한국어**: 요구사항

- **컴포넌트명**: `TrafficLight`
- **기능**:
  - 세 개의 불빛 표시 (빨간색, 노란색, 초록색)
  - 정해진 시간 간격으로 색상 전환
  - 무한 반복
  - 한 번에 하나의 불빛만 활성화
- **스타일링**: 시각적으로 매력적인 디자인 (CSS 또는 다른 스타일링 방법 사용 가능)

## 🔄 Operation Sequence

1. **Start**: Red light is active
2. **After 4 seconds**: Red → Green transition
3. **After 3 seconds**: Green → Yellow transition
4. **After 0.5 seconds**: Yellow → Red transition
5. **Repeat**: Loop the above sequence indefinitely

**한국어**: 동작 순서

1. **시작**: 빨간색 불빛이 활성화
2. **4초 후**: 빨간색 → 초록색으로 전환
3. **3초 후**: 초록색 → 노란색으로 전환
4. **0.5초 후**: 노란색 → 빨간색으로 전환
5. **반복**: 위 과정을 무한히 반복
