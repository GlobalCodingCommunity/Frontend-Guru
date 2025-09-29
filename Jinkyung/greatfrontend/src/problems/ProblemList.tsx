import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Problem {
  name: string;
  description: string;
  SolutionComponent: React.ComponentType;
}

export default function ProblemList() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProblems = async () => {
      setLoading(true);
      setError(null);
      const loadedProblems: Problem[] = [];

      try {
        const problemModules = import.meta.glob("/src/solutions/*/problem.md", { query: "?raw" });
        const solutionModules = import.meta.glob("/src/solutions/*/{App,index}.{ts,tsx,js,jsx}");

        for (const problemPath of Object.keys(problemModules)) {
          const category = problemPath.split("/")[3];
            const matchedSolutionPaths = Object.keys(solutionModules).filter((p) =>
          p.includes(`/src/solutions/${category}/`)
        );
        if (matchedSolutionPaths.length === 0) continue;

        const [problemText, solutionModuleResult] = await Promise.all([
          problemModules[problemPath](),
          solutionModules[matchedSolutionPaths[0]](),
        ]);
          loadedProblems.push({
            name: category,
            description: problemText as string,
            SolutionComponent: (solutionModuleResult as { default: React.ComponentType }).default,
          });
        }

        loadedProblems.sort((a, b) => a.name.localeCompare(b.name));
        setProblems(loadedProblems);
      } catch (err) {
        setError("문제를 로드하는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadProblems();
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: 50 }}>로딩 중...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: 50 }}>{error}</p>;


  return (
    <div style={{ padding: "40px 20px", width:'90vw', margin: "0 auto",display:'flex', flexDirection:'column'}}>
      <h1 style={{ fontSize: 36, marginBottom: 30, color: "#fff", textAlign: "center" }}>
        React Practice Problems
      </h1>

      <div
        style={{
          display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        width:'100%',
        boxSizing:'border-box',
        gap: 20, // 카드 사이 간격
        padding: 20,
        }}
      >
        {problems.map((problem) => (
          <Link
            key={problem.name}
            to={`/problem/${problem.name}`}
            style={{
                display: "block",
                textDecoration: "none",
                color: "#333",
                background: "#fff",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-5px)";
              el.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <h2 style={{ margin: "0 0 10px 0", fontSize: 22 }}>{problem.name}</h2>
   
          </Link>
        ))}
      </div>
    </div>
  );
}