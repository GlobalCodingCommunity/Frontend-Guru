import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface Problem {
  name: string;
  description: string;
  SolutionComponent: React.ComponentType;
}

export default function ProblemPage() {
  const { name } = useParams<{ name: string }>();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!name) return;
      console.log(name)

      // name에 맞는 solution CSS import
      import(`/src/solutions/${name}/styles.css`).catch(() => {
        console.warn(`No styles.css for ${name}`);
      });
    }, [name]);

  useEffect(() => {
    const loadProblem = async () => {
      if (!name) return;

      try {
        const problemModule = (await import(`/src/solutions/${name}/problem.md?raw`)).default;
         // glob으로 App.tsx/index.tsx/index.js/index.jsx 모두 가져오기
      const solutionModules = import.meta.glob(
        "/src/solutions/*/App.tsx",
        { eager: true }
      );

      const indexModules = import.meta.glob(
        "/src/solutions/*/index.{ts,tsx,js,jsx}",
        { eager: true }
      );

      // name에 맞는 모듈 찾기
      const solutionModule =
        solutionModules[`/src/solutions/${name}/App.tsx`]?.default ||
        indexModules[`/src/solutions/${name}/index.ts`] ?.default ||
        indexModules[`/src/solutions/${name}/index.tsx`] ?.default ||
        indexModules[`/src/solutions/${name}/index.js`] ?.default ||
        indexModules[`/src/solutions/${name}/index.jsx`] ?.default;

      if (!solutionModule) throw new Error("Solution file not found");

      setProblem({
        name,
        description: problemModule,
        SolutionComponent: solutionModule,
      });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, [name]);

  if (loading) return <p>로딩 중...</p>;
  if (!problem) return <p>문제를 찾을 수 없습니다.</p>;

  const Solution = problem.SolutionComponent;

  return (
    <div style={{ padding: 20, width: "90vw", margin: "0 auto" }}>
      <Link to="/">← Back to list</Link>
      <h1>{problem.name}</h1>
     <div style={{ padding: 15, marginTop: 20, border: "1px solid #ddd", borderRadius: 4 }}>
        <ReactMarkdown>{problem.description}</ReactMarkdown>
     </div>
      <div style={{ border: "1px solid #ddd", padding: 15, marginTop: 20 }}>
        <Solution />
      </div>
    </div>
  );
}