# Star Rating Widget

## Problem Description
Create a **star rating widget** that allows users to select a rating value.  
The widget should display **max stars**, with a number of them filled based on the **current selection**.

---

## Requirements
1. The widget accepts two props:
   - `max`: maximum number of stars
   - `current`: number of initially filled stars
2. Clicking a star fills **that star and all stars to its left**.
3. Hovering over a star temporarily fills **that star and all stars to its left**, showing a preview.
4. When the cursor leaves the widget without selecting, the stars **revert to the selected state**.
5. The widget should be **reusable**, allowing multiple instances on the same page.
6. Star icons are provided as SVGs. You can style them with CSS classes.


## Hints
- Use useState to track hovered and selected states.
- Use Array.from to generate the star elements.
- During hover, hovered stars take priority over selected state.
- Remember to update the selected state on click.
- Use CSS classes to style empty and filled stars.

## Optional Enhancements
- Add animations when stars fill/unfill.
- Allow half stars for more precise rating.
- Display numeric rating value next to the stars.
- Make the widget accessible, supporting keyboard navigation.