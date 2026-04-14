type ProblemResultProps = {
  category: string;
  page: string;
  children: React.ReactNode;
};

function ProblemResult({ category, page, children }: ProblemResultProps) {
  return (
    <section className="panel result-panel">
      <div className="panel__header">
        <div>
          <p className="panel__eyebrow">Result</p>
          <h2>
            {category} {page}
          </h2>
        </div>
      </div>

      <div className="result-box">{children}</div>
    </section>
  );
}

export default ProblemResult;