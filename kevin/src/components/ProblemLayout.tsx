type ProblemLayoutProps = {
  children: React.ReactNode;
};

function ProblemLayout({ children }: ProblemLayoutProps) {
  return <section className="problem-page">{children}</section>;
}

export default ProblemLayout;