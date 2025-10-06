# Key Insights

## Sequential Progress Management
- **Active bar tracking** (line 5): `activeBarIndex` ensures only one progress bar fills at a time
- **Completion callback** (lines 13-15, 37): When a bar reaches 100%, it triggers the next bar to become active
- **isActive prop** (line 23): Controls which bar is currently animating

## Interval-Based Animation
- **Precise timing calculation** (lines 40-48): 1% per 20ms = 100% in 2000ms (2 seconds)
- **Progress increment** (lines 44-47): Increments by 1% each interval, with guard to prevent exceeding 100%
- **Cleanup on unmount** (lines 50-52): Clears interval to prevent memory leaks

## Effect Dependencies
- **Dual dependency array** (line 53): `[isActive, progress]` ensures effect reruns when:
  - Bar becomes active/inactive
  - Progress updates (to check for completion at 100%)
- **Early returns** (lines 35, 36-38): Prevents interval creation when inactive or already complete

## Component Architecture
- **Controlled animation**: Parent controls which bar animates via `activeBarIndex`
- **Self-contained progress state**: Each `ProgressBar` manages its own progress internally
- **Dynamic bar creation** (lines 9-11): Adds new bars to array without resetting existing ones

## Potential Issues
- **Key prop warning** (line 22): Using index as key may cause issues if bars can be removed/reordered
- **Effect retriggers** (line 53): Including `progress` in dependencies causes effect to recreate interval every 1% (inefficient)
- **Double completion check** (lines 36, 45): Progress is checked both in effect condition and inside setInterval callback

## CSS-in-JS Styling
- **Percentage-based width** (line 66): `width: ${progress}%` creates smooth visual progression
- **Container pattern** (lines 56-70): Outer div is track, inner div is fill bar
