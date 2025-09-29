const MIN = 0
const MAX = 100
export default function ProgressBar({ values }) {
    const value = Math.min(Math.max(values,MIN),MAX) //values 값이 MIN보다 작으면 MIN으로, MAX보다 크면 MAX로, 그 외에는 그대로 유지하는 클램핑(clamping) 코드
  return (
    <div>
      <div className="progress">
        <div role="progressbar" aria-valuemin={MIN} aria-valuemax={MAX}  aria-valuenow={value} className="progress-bar" style={{ width: `${value}%` }}>
          <span className="progress-value">
            {value > 0 ? `${value}%` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * aria- 값을 주는것이 ux적으로 더 전문적이여 보임
 */