# Star Rating Widget Challenge

Create an interactive star rating widget that allows users to select and display rating values with smooth hover effects.

## Requirements

### Core Functionality

- **Parameters**: The widget accepts two main parameters:
  - **Maximum stars**: Total number of stars to display
  - **Current rating**: Number of currently filled stars

- **Click Interaction**: 
  - When a star is clicked, it fills along with all stars to its left
  - This becomes the new selected rating value

- **Hover Effects**:
  - Hovering over a star fills that star and all stars to its left
  - Hover state takes priority over the current filled state
  - When cursor leaves the widget, stars revert to the previous filled state (if no new selection was made)

### Technical Requirements

- **Reusability**: Component must be reusable - multiple instances can be rendered on the same page
- **SVG Icons**: Use provided SVG icons for both empty and filled star states
- **Component Structure**: Build using the provided `StarRating.js` skeleton component

## Implementation Notes

- Design component props interface for maximum flexibility
- Handle edge cases (0 stars, maximum rating selection)
- Ensure accessibility with proper ARIA attributes
- Consider keyboard navigation support
- Implement smooth visual transitions for better user experience

## Component Interface

You have full freedom to design the props interface for the `<StarRating />` component. Consider what properties would make it most flexible and reusable.
