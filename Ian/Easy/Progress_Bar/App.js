import ProgressBar from './ProgressBar';

export default function App() {
  return (
    <div>
      <ProgressBar value={0} />
      <ProgressBar value={25} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
    </div>
  );
}
