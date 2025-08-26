import { useState, useEffect } from 'react';

interface Problem {
  name: string;
  description: string;
  OriginalComponent: React.ComponentType;
  SolutionComponent: React.ComponentType;
}

export default function ProblemList() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);

  useEffect(() => {
    const loadProblems = async () => {
      const problemModules = import.meta.glob('/src/problems/*/problem.md', { as: 'raw' });
      const originalModules = import.meta.glob('/src/problems/*/Original.tsx');
      const solutionModules = import.meta.glob('/src/problems/*/Solution.tsx');
      
      const loadedProblems: Problem[] = [];
      
      for (const path of Object.keys(problemModules)) {
        const problemName = path.split('/')[3]; // Extract folder name
        
        try {
          const description = await problemModules[path]();
          const originalPath = `/src/problems/${problemName}/Original.tsx`;
          const solutionPath = `/src/problems/${problemName}/Solution.tsx`;
          
          if (originalModules[originalPath] && solutionModules[solutionPath]) {
            const [originalModule, solutionModule] = await Promise.all([
              originalModules[originalPath](),
              solutionModules[solutionPath]()
            ]);
            
            loadedProblems.push({
              name: problemName,
              description: description as string,
              OriginalComponent: (originalModule as any).default,
              SolutionComponent: (solutionModule as any).default,
            });
          }
        } catch (error) {
          console.warn(`Failed to load problem ${problemName}:`, error);
        }
      }
      
      setProblems(loadedProblems);
    };

    loadProblems();
  }, []);

  const toggleProblem = (problemName: string) => {
    setExpandedProblem(expandedProblem === problemName ? null : problemName);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#ffffff', color: '#000000' }}>
      <h1>GreatFrontEnd Practice Problems</h1>
      
      {problems.map((problem) => (
        <div key={problem.name} style={{ marginBottom: '30px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <div 
            style={{ 
              padding: '15px', 
              backgroundColor: '#f5f5f5', 
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            onClick={() => toggleProblem(problem.name)}
          >
            <h2 style={{ margin: 0 }}>{problem.name}</h2>
            <span style={{ fontSize: '18px' }}>
              {expandedProblem === problem.name ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedProblem === problem.name && (
            <div style={{ padding: '20px' }}>
              <div style={{ marginBottom: '20px' }}>
                <h3>Problem Description</h3>
                <pre style={{ 
                  whiteSpace: 'pre-wrap', 
                  backgroundColor: '#f8f8f8', 
                  padding: '15px', 
                  borderRadius: '4px',
                  fontFamily: 'inherit'
                }}>
                  {problem.description}
                </pre>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <h3>Original (Starting Point)</h3>
                  <div style={{ 
                    border: '1px solid #ddd', 
                    padding: '15px', 
                    borderRadius: '4px',
                    backgroundColor: '#fafafa'
                  }}>
                    <problem.OriginalComponent />
                  </div>
                </div>
                
                <div>
                  <h3>Solution</h3>
                  <div style={{ 
                    border: '1px solid #ddd', 
                    padding: '15px', 
                    borderRadius: '4px',
                    backgroundColor: '#fafafa'
                  }}>
                    <problem.SolutionComponent />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}