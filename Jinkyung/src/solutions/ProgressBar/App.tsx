import ProgressBar from "./ProgressBar";
import './styles.css';

export default function App() {
  return (
    <div>
      <ProgressBar values={0} />
      <ProgressBar values={25} />
      <ProgressBar values={50} />
      <ProgressBar values={75} />
      <ProgressBar values={100} />
    </div>
  );
}
