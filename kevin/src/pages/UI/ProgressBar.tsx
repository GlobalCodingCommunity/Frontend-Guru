import ProblemLayout from '../../components/ProblemLayout';
import ProblemHeader from '../../components/ProblemHeader';
import ProblemDescription from '../../components/ProblemDescription';
import ProblemResult from '../../components/ProblemResult';

const ProgressBar = (props) => {
  const { value } = props;
  const filledWidth = value + "%";
  const filledStyle = {
    width: filledWidth,
    backgroundColor: "#0d6efd",
    height: "20px",
    color: "white",
    textAlign: 'center' as const,
  };

  return (
    <div style={{
      width:'400px',
  backgroundColor: 'rgb(233, 236, 239)',
  border: '1px solid #c5c5c5',
  borderRadius: '8px',
  height: '20px',
  marginBottom: '12px',
  overflow: 'hidden'
    }}>
      <div style={filledStyle}>{value ? filledWidth : null}</div>
    </div>
  );
}

const values = [0, 25, 50, 75, 100];

function UIProgressBarPage() {
  return (
    <ProblemLayout>
      <ProblemHeader category="UI" page="ProgressBar">
        <ProblemDescription>
        {`- The filled bar can be of any color. The example uses #c5c5c5 for the background color and #0d6efd for the progress color.
        - The completion % is shown in the center of the filled bar.`}
        </ProblemDescription>
      </ProblemHeader>

      <ProblemResult>
    <div>
      {values.map((value) => (
        <ProgressBar value={value} />
      ))}
    </div>
      </ProblemResult>
    </ProblemLayout>
  );
}

export default UIProgressBarPage;