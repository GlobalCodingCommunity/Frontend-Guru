type ProblemHeaderProps = {
  category: string;
  page: string;
  children?: React.ReactNode;
};

function ProblemHeader({ category, page, children }: ProblemHeaderProps) {
  return (
    <header className="hero-card">
      <p className="hero-card__eyebrow">
        {category} / {page}
      </p>
      <h1>{page}</h1>
      {children}
    </header>
  );
}

export default ProblemHeader;