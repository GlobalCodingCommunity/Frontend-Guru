# Key Insights

## State Management Strategy
- **Dual-purpose board state** (line 22-24): Array stores both numeric indices (erased cells) and color strings (painted cells), avoiding separate painted/erased tracking
- **Three core states**: `isDrawMode`, `currentColor`, and `isDragging` control all interactions

## Drag Functionality
- **Global mouseup listener** (lines 62-65): Prevents stuck drag state when mouse released outside canvas
- **onMouseLeave handler** (line 78): Stops dragging when cursor leaves grid boundary
- **onDragStart prevention** (line 164): Disables native drag to avoid interference with custom drag behavior

## Performance Optimizations
- **Immutable state updates** (lines 34-38, 42-46): Uses array spread for React's reconciliation
- **Conditional rendering logic** (line 85): `COLORS?.[boardCell]` handles both color strings and numeric indices elegantly

## UX Details
- **Dynamic cursor** (line 171): Changes to crosshair during drag for visual feedback
- **userSelect: none** (line 170): Prevents text selection during drag operations
- **Checkerboard pattern** (line 166): Uses index parity (`index % 2`) for alternating default colors

## Clever Data Structure
The board stores either:
- Color name strings → painted cells
- Numeric indices → erased/default cells

This eliminates need for separate data structures to track state.
