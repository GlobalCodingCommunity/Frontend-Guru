type ProblemResultProps = {
  children: React.ReactNode;
};

function ProblemResult({ children }: ProblemResultProps) {
  return (
    <section className="panel result-panel">
      <div className="panel__header">
        <div>
          <p className="panel__eyebrow">Result</p>
        </div>
      </div>

      <div className="result-box">{children}</div>
    </section>
  );
}

export default ProblemResult;