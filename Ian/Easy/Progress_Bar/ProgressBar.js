export default function ProgressBar({ value = 0 }) {
  const progress = Math.min(100, Math.max(0, value));

  return (
    <div className="progress">
      <div className="progress-width" style={{ width: `${progress}%` }}>
        {progress > 0 && <span className="progress-percent">{progress}%</span>}
      </div>
    </div>
  );
}
