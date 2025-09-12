import { useState, useEffect } from "react";

interface Problem {
  name: string;
  description: string;
  SolutionComponent: React.ComponentType;
}

export default function ProblemList() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProblems = async () => {
      setLoading(true);
      setError(null);
      const loadedProblems: Problem[] = [];

      try {
        console.log("Starting dynamic problem loading...");

        // import.meta.glob을 사용하여 모든 problem.md 파일을 동적으로 가져옴
        const problemModules = import.meta.glob("/src/react/*/problem.md", {
          query: "?raw",
          import: "default",
        });

        // import.meta.glob을 사용하여 모든 Solution.tsx 파일을 동적으로 가져옴
        const solutionModules = import.meta.glob("/src/react/*/Solution.tsx");

        console.log("Found problem modules:", Object.keys(problemModules));
        console.log("Found solution modules:", Object.keys(solutionModules));

        // problem.md 파일들을 기반으로 문제들을 로드
        for (const problemPath of Object.keys(problemModules)) {
          try {
            const pathParts = problemPath.split("/");
            const category = pathParts[3];

            // 해당 문제의 Solution.tsx 경로 생성
            const solutionPath = `/src/react/${category}/Solution.tsx`;
            const solutionModule = solutionModules[solutionPath];

            // 문제 설명과 솔루션을 병렬로 로드
            const [problemText, solutionModuleResult] = await Promise.all([
              problemModules[problemPath](),
              solutionModule(),
            ]);

            loadedProblems.push({
              name: category,
              description: problemText as string,
              SolutionComponent: (
                solutionModuleResult as { default: React.ComponentType }
              ).default,
            });

            console.log(`Successfully loaded: ${category}`);
          } catch (problemError) {
            console.error(
              `Failed to load problem from ${problemPath}:`,
              problemError
            );
            // 개별 문제 로드 실패는 전체를 중단시키지 않음
          }
        }

        // 문제들을 카테고리별로 정렬
        loadedProblems.sort((a, b) => {
          const [aCategory, aProblem] = a.name.split("/");
          const [bCategory, bProblem] = b.name.split("/");

          if (aCategory !== bCategory) {
            return aCategory.localeCompare(bCategory);
          }
          return aProblem.localeCompare(bProblem);
        });

        if (loadedProblems.length === 0) {
          setError(
            "로드된 문제가 없습니다. src/react/*/*/ 디렉토리에 problem.md와 Solution.tsx 파일이 있는지 확인해주세요."
          );
        } else {
          console.log(
            `Successfully loaded ${loadedProblems.length} problems:`,
            loadedProblems.map((p) => p.name)
          );
        }

        setProblems(loadedProblems);
      } catch (error) {
        console.error("Failed to load problems:", error);
        setError(
          "문제를 로드하는 중 오류가 발생했습니다: " + (error as Error).message
        );
      } finally {
        setLoading(false);
      }
    };

    loadProblems();
  }, []);

  const toggleProblem = (problemName: string) => {
    setExpandedProblem(expandedProblem === problemName ? null : problemName);
  };

  if (loading) {
    return (
      <div
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          color: "#000000",
          textAlign: "center",
        }}
      >
        <h1>React Practice Problems</h1>
        <div style={{ marginTop: "50px" }}>
          <div style={{ fontSize: "18px", marginBottom: "10px" }}>
            문제를 로드하는 중...
          </div>
          <div style={{ fontSize: "14px", color: "#666" }}>
            잠시만 기다려주세요.
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <h1>React Practice Problems</h1>
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#ffebee",
            border: "1px solid #f44336",
            borderRadius: "4px",
            color: "#c62828",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0" }}>오류가 발생했습니다</h3>
          <p style={{ margin: 0 }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <h1>React Practice Problems</h1>
      <div style={{ marginBottom: "20px", fontSize: "14px", color: "#666" }}>
        총 {problems.length}개의 문제가 로드되었습니다.
      </div>

      {problems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            color: "#666",
            fontSize: "16px",
          }}
        >
          표시할 문제가 없습니다.
        </div>
      ) : (
        problems.map((problem) => (
          <div
            key={problem.name}
            style={{
              marginBottom: "30px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                padding: "15px",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => toggleProblem(problem.name)}
            >
              <h2 style={{ margin: 0 }}>{problem.name}</h2>
              <span style={{ fontSize: "18px" }}>
                {expandedProblem === problem.name ? "▼" : "▶"}
              </span>
            </div>

            {expandedProblem === problem.name && (
              <div style={{ padding: "20px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <h3>Problem Description</h3>
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      backgroundColor: "#f8f8f8",
                      padding: "15px",
                      borderRadius: "4px",
                      fontFamily: "inherit",
                    }}
                  >
                    {problem.description}
                  </pre>
                </div>

                <div>
                  <h3>Solution</h3>
                  <div
                    style={{
                      border: "1px solid #ddd",
                      padding: "15px",
                      borderRadius: "4px",
                      backgroundColor: "#fafafa",
                    }}
                  >
                    <problem.SolutionComponent />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
