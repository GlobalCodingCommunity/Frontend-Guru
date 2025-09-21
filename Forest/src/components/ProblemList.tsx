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
      const problemModules = import.meta.glob('/src/problems/*/*/problem.md', { as: 'raw' });
      const originalTsxModules = import.meta.glob('/src/problems/*/*/Original.tsx');
      const originalTsModules = import.meta.glob('/src/problems/*/*/Original.ts');
      const solutionTsxModules = import.meta.glob('/src/problems/*/*/Solution.tsx');
      const solutionTsModules = import.meta.glob('/src/problems/*/*/Solution.ts');
      
      const loadedProblems: Problem[] = [];
      
      for (const path of Object.keys(problemModules)) {
        const pathParts = path.split('/');
        const category = pathParts[3]; // Category folder (UI, JS, etc.)
        const problemName = pathParts[4]; // Problem name folder
        const displayName = `${category}/${problemName}`;
        
        try {
          const description = await problemModules[path]();
          const originalTsxPath = `/src/problems/${category}/${problemName}/Original.tsx`;
          const originalTsPath = `/src/problems/${category}/${problemName}/Original.ts`;
          const solutionTsxPath = `/src/problems/${category}/${problemName}/Solution.tsx`;
          const solutionTsPath = `/src/problems/${category}/${problemName}/Solution.ts`;
          
          const originalModule = originalTsxModules[originalTsxPath] || originalTsModules[originalTsPath];
          const solutionModule = solutionTsxModules[solutionTsxPath] || solutionTsModules[solutionTsPath];
          
          if (originalModule && solutionModule) {
            const [originalModuleResult, solutionModuleResult] = await Promise.all([
              originalModule(),
              solutionModule()
            ]);
            
            loadedProblems.push({
              name: displayName,
              description: description as string,
              OriginalComponent: (originalModuleResult as { default: React.ComponentType }).default,
              SolutionComponent: (solutionModuleResult as { default: React.ComponentType }).default,
            });
          }
        } catch (error) {
          console.warn(`Failed to load problem ${displayName}:`, error);
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