#!/usr/bin/env node

import { createInterface } from 'readline';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Templates
const templates = {
  ui: {
    'Solution.tsx': `import React from 'react';
import './styles.css';

export default function Solution() {
  return (
    <div className="container">
      <h1>Problem Name</h1>
      {/* Your solution here */}
    </div>
  );
}`,
    'Original.tsx': `import React from 'react';
import './styles.css';

export default function Original() {
  return (
    <div className="container">
      <h1>Problem Name</h1>
      {/* Original implementation here */}
    </div>
  );
}`,
    'styles.css': `.container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
}

/* Add your styles here */`,
    'problem.md': `# Problem Name

## Description

[Add problem description here]

## Requirements

- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Example

[Add example or screenshot here]

## Source

[Add source link if applicable]`
  },
  js: {
    'Solution.ts': `// Problem: Problem Name

export function solution() {
  // Your solution here
}

export default solution;`,
    'Original.ts': `// Problem: Problem Name

export function original() {
  // Original implementation here
}

export default original;`,
    'problem.md': `# Problem Name

## Description

[Add problem description here]

## Requirements

- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Examples

\`\`\`typescript
// Example usage
solution();
\`\`\`

## Source

[Add source link if applicable]`
  },
  htmljs: {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Problem Name</title>
    <link rel="stylesheet" href="src/styles.css">
</head>
<body>
    <div class="container">
        <h1>Problem Name</h1>
        <!-- Your HTML here -->
    </div>

    <script src="src/index.js"></script>
</body>
</html>`,
    'src/index.js': `// Problem: Problem Name

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript here
    console.log('Problem Name loaded');
});`,
    'src/styles.css': `.container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: system-ui, -apple-system, sans-serif;
}

/* Add your styles here */`
  }
};

async function createProblem() {
  try {
    console.log('🚀 Problem Scaffolding Tool\n');

    // Get problem type
    const typeAnswer = await question('Select problem type (ui/js/htmljs): ');
    const type = typeAnswer.toLowerCase().trim();

    if (!['ui', 'js', 'htmljs'].includes(type)) {
      console.log('❌ Invalid type. Please choose: ui, js, or htmljs');
      rl.close();
      return;
    }

    // Get problem name
    const nameAnswer = await question('Enter problem name: ');
    const problemName = nameAnswer.trim();

    if (!problemName) {
      console.log('❌ Problem name cannot be empty');
      rl.close();
      return;
    }

    // Clean problem name for folder
    const folderName = problemName.replace(/[^a-zA-Z0-9\\s]/g, '').replace(/\\s+/g, ' ');

    // Determine base path
    const basePath = join(__dirname, '..', 'src', 'problems');
    let problemPath;

    if (type === 'ui') {
      problemPath = join(basePath, 'UI', folderName);
    } else if (type === 'js') {
      problemPath = join(basePath, 'JS', folderName);
    } else {
      problemPath = join(basePath, 'html_js', folderName);
    }

    console.log(`\n📁 Creating folder: ${problemPath}`);

    // Create directory
    await mkdir(problemPath, { recursive: true });

    // Get appropriate template
    const templateKey = type === 'htmljs' ? 'htmljs' : type;
    const templateFiles = templates[templateKey];

    // Create files
    for (const [filename, content] of Object.entries(templateFiles)) {
      const filePath = join(problemPath, filename);

      // Create subdirectory if needed (for src folder in htmljs)
      if (filename.includes('/')) {
        const dir = dirname(filePath);
        await mkdir(dir, { recursive: true });
      }

      // Replace placeholder with actual problem name
      const finalContent = content.replace(/Problem Name/g, problemName);

      await writeFile(filePath, finalContent);
      console.log(`✅ Created: ${filename}`);
    }

    console.log(`\n🎉 Successfully created problem "${problemName}" in ${type.toUpperCase()} folder!`);
    console.log(`📍 Location: ${problemPath}`);

  } catch (error) {
    console.error('❌ Error creating problem:', error.message);
  } finally {
    rl.close();
  }
}

createProblem();