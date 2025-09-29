# Image Carousel

## Problem Description
Build an **image carousel** that displays a sequence of images. The carousel should allow navigation through images using left/right buttons and page buttons, and it should **only render one image element at a time**.

---

## Requirements
1. Implement the component using **React**.
2. The component receives an array of images:

- `images: ReadonlyArray<{ src: string; alt: string }>;`

3. Layout and positioning:
   - The carousel should be **centered on the screen** with a maximum size of 600px by 400px.
   - Images should **shrink to fit** within the carousel while keeping the full image visible.
   - Empty areas of the carousel can be filled with **black**.
   - If the screen width is smaller than the image, the carousel should **resize to fit** the available horizontal space.
4. Navigation:
   - Add **left/right buttons** to navigate through the images in a **cycling manner** (after the last image, go back to the first).
   - Add **pagination buttons** at the bottom to jump directly to a specific image (assume fewer than 10 images).
5. Technical restriction: There should **only be one `<img>` element** in the DOM at any time.
6. Animations and transitions are **not required**.

## Hints
- Only **one `<img>` element** should be rendered at any given time.
- Use `useState` to track the **currently visible image index**.
- Use modular functions or calculations to handle **cycling through images**.
- Conditionally style pagination buttons to indicate the **active image**.
- Use CSS to center the carousel and **limit its max size** while maintaining image aspect ratio.

---

## Optional Enhancements
- Add smooth **transition or fade-in/out effects** when navigating between images.
- Style navigation buttons with **icons or hover effects**.
- Add **keyboard navigation** for left/right arrow keys.
- Support **swipe gestures** for touch devices.