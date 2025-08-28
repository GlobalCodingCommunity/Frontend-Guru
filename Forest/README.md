# GreatFrontEnd Practice Problems

This repository contains my solutions to GreatFrontEnd practice problems, organized by category. Each problem includes both the original starter code and my implemented solution, with a problem description.

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open browser to view all problems in an interactive format

## Problems Solved

### UI Components

#### Accordion
**Path**: `src/problems/UI/Accordian/`
- **Description**: Build an Accordion component with collapsible sections
- **Requirements**: 
  - All sections collapsed by default
  - Toggle functionality on title click
  - Independent section behavior
- **Asked at**: Amazon

### JavaScript/React Hooks

#### useBoolean Hook
**Path**: `src/problems/JS/useBoolean/`
- **Description**: Custom React hook for managing boolean state with utility methods
- **Features**:
  - `value` - current boolean state
  - `setTrue()` - set state to true
  - `setFalse()` - set state to false
  - `toggle()` - toggle state
- **Default**: Initial value defaults to `false`

## Project Structure

Each problem follows this structure:
```
src/problems/[Category]/[ProblemName]/
├── problem.md      # Problem description and requirements
├── Original.tsx    # Starting point/template code
└── Solution.tsx    # My implemented solution
```

## Tech Stack

- React 19.1.1
- TypeScript
- Vite 7.1.3
- ESLint for code quality

## Features

- **Dynamic Problem Loading**: Automatically discovers and loads all problems
- **Side-by-Side Comparison**: View original vs solution implementations
- **Interactive Problem Browser**: Expandable sections for each problem
- **Clean Design**: Simple white background with black text