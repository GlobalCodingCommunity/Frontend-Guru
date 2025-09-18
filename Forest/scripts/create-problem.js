#!/usr/bin/env node

import inquirer from 'inquirer';
import figlet from 'figlet';
import boxen from 'boxen';
import ora from 'ora';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    // Display beautiful header
    console.log(
      figlet.textSync('Problem Scaffolder', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    );

    console.log('\n✨ Welcome to the Problem Creation Wizard! ✨\n');

    // Get answers using inquirer
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: '🎯 Select problem type:',
        choices: [
          {
            name: '🎨 UI Problem (React Components)',
            value: 'ui',
            short: 'UI'
          },
          {
            name: '⚡ JavaScript Problem (Functions/Hooks)',
            value: 'js',
            short: 'JS'
          },
          {
            name: '🌐 HTML/JS Problem (Vanilla Web)',
            value: 'htmljs',
            short: 'HTML/JS'
          }
        ]
      },
      {
        type: 'input',
        name: 'problemName',
        message: '📝 Enter problem name:',
        validate: (input) => {
          const trimmed = input.trim();
          if (!trimmed) {
            return '❌ Problem name cannot be empty';
          }
          if (trimmed.length < 3) {
            return '❌ Problem name must be at least 3 characters';
          }
          return true;
        },
        filter: (input) => input.trim()
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: (answers) => `📁 Create "${answers.problemName}" in ${answers.type.toUpperCase()} folder?`,
        default: true
      }
    ]);

    if (!answers.confirm) {
      console.log('\n🚫 Operation cancelled by user.\n');
      return;
    }

    const { type, problemName } = answers;

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

    // Show progress with spinner
    const spinner = ora({
      text: 'Creating problem directory...',
      spinner: 'dots'
    }).start();

    // Create directory
    await mkdir(problemPath, { recursive: true });
    spinner.text = 'Generating template files...';

    // Get appropriate template
    const templateKey = type === 'htmljs' ? 'htmljs' : type;
    const templateFiles = templates[templateKey];

    // Create files
    const fileNames = Object.keys(templateFiles);
    for (let i = 0; i < fileNames.length; i++) {
      const filename = fileNames[i];
      const content = templateFiles[filename];
      const filePath = join(problemPath, filename);

      // Create subdirectory if needed (for src folder in htmljs)
      if (filename.includes('/')) {
        const dir = dirname(filePath);
        await mkdir(dir, { recursive: true });
      }

      // Replace placeholder with actual problem name
      const finalContent = content.replace(/Problem Name/g, problemName);

      await writeFile(filePath, finalContent);
      spinner.text = `Created ${filename} (${i + 1}/${fileNames.length})`;

      // Small delay for visual effect
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    spinner.succeed('All files created successfully! 🎉');

    // Display beautiful success message
    const successMessage = `✨ Problem "${problemName}" created successfully!\n\n` +
      `📂 Type: ${type.toUpperCase()}\n` +
      `📁 Location: ${problemPath}\n` +
      `📄 Files: ${fileNames.join(', ')}`;

    console.log('\n' + boxen(successMessage, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green',
      title: '🎯 Success',
      titleAlignment: 'center'
    }));

    console.log('\n🚀 Happy coding! Run your development server to get started.\n');

  } catch (error) {
    // Handle errors with spinner
    if (typeof spinner !== 'undefined') {
      spinner.fail('Failed to create problem');
    }

    console.log('\n' + boxen(`❌ Error: ${error.message}`, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'red',
      title: '💥 Error',
      titleAlignment: 'center'
    }));
  }
}

createProblem();