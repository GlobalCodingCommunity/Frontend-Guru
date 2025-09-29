# Like Button Component

## Problem Description
Create a **Like button** which appearance changes based on the following states:

- Default
- Hovered
- Loading
- Liked
- Error (if request fails)

The **heart and spinner icons** are provided. The focus of this question is **state management**, not exact pixel-perfect design.  
Use **#f00** for red and **#888** for gray colors.

---

## Requirements
1. Implement the component using **React**.
2. Button states:

   - **Default:** Button is clickable. Clicking triggers a **loading state** and sends a request to the API.
   - **Loading:** Shows spinner icon. Disable further clicks until request finishes.
   - **Liked:** If request succeeds, button shows "Liked" state with a red heart.
   - **Error:** If request fails, return to Default/Hovered state depending on cursor and show **error message** below button.
   - **Unlike:** Clicking a "Liked" button should attempt to reverse the action.

3. Submission API:

URL: https://questions.greatfrontend.com/api/questions/like-button
HTTP Method: POST
Content-Type: application/json
Request Body: { action: ‘like’ | ‘unlike’ }

4. Response:

- **Success (HTTP 200):** `{ message: 'Success!' }`
- **Failure (HTTP 500):** `{ message: 'Unknown error during attempted {{action}}. Please try again later.!' }`

5. Simulate API responses with a **50% chance of success/failure** to test error handling.


## Hints
- Track **button state** with `useState`.
- Handle **hover state** separately if you want.
- Use **conditional rendering** for the heart and spinner icons.
- Display the **error message** below the button on failure.
- API requests can use `fetch` or `axios`.
- Remember to **disable clicks while loading** to prevent duplicate requests.


## Optional Enhancements
- Add **animations** for heart color transition or spinner rotation.
- Show **toast notifications** on success or failure.
- Allow **keyboard navigation** (Enter key triggers like/unlike).
