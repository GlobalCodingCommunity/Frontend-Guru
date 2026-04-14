type ProblemDescriptionProps = {
  children: React.ReactNode;
};

function ProblemDescription({ children }: ProblemDescriptionProps) {
  return (
    <div className="hero-card__description">
      {children}
    </div>
  );
}

export default ProblemDescription;