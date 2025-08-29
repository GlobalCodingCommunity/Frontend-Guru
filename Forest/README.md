# GreatFrontEnd Practice Problems

This repository contains my solutions to GreatFrontEnd practice problems, organized by category. Each problem includes both the original starter code and my implemented solution, with a problem description.

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open browser to view all problems in an interactive format

## Problems Solved

### 🎨 UI Components

---

#### 🪗 Accordion
> **Path**: `src/problems/UI/Accordian/`  
> **Asked at**: Amazon

**Description**: Build an Accordion component with collapsible sections

**Requirements**: 
- All sections collapsed by default
- Toggle functionality on title click
- Independent section behavior

---

#### 📧 Contact Form
> **Path**: `src/problems/UI/Contact Form/`  
> **API**: POST to `https://questions.greatfrontend.com/api/questions/contact-form`

**Description**: Build a basic "Contact Us" form for marketing websites

**Requirements**:
- Name field (text input)
- Email field (email input)
- Message field (textarea)
- Submit button with "Send" text
- Pure HTML implementation (no JavaScript)

---

#### ✅ Todo List
> **Path**: `src/problems/UI/TodoList/`  
> **Focus**: Functionality over styling, UX improvements encouraged

**Description**: Build a Todo List app with add and remove functionality

**Requirements**:
- Add new tasks on clicking the "Submit" button
- Clear input field upon successful addition
- Remove tasks from the list upon clicking the "Delete" button

---

### ⚛️ JavaScript/React Hooks

---

#### 🔄 useBoolean Hook
> **Path**: `src/problems/JS/useBoolean/`  
> **Default**: Initial value defaults to `false`

**Description**: Custom React hook for managing boolean state with utility methods

**Features**:
- `value` - current boolean state
- `setTrue()` - set state to true
- `setFalse()` - set state to false
- `toggle()` - toggle state

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