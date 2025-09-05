### Requirements

- The pagination should have "Previous" and "Next" buttons.
- It should display the current page number and the total number of pages.
- A dropdown should control the number of users displayed per page.

### Understanding the Requirements:

I was initially unsure about a couple of points:
- The exact layout of the pagination controls (e.g., "Prev, 1 of 10, Next").
- Whether the dropdown was for the number of page links to show or the number of users per page.

### How I Felt:

The task was more complex and took longer than I anticipated due to the multiple requirements, such as:
- Implementing the "users per page" select field.
- Building the pagination functionality.

### Feedback from others:

- The page calculation logic was a bit messy. I used two separate state variables, `startIndex` and `currentPage`, to manage the user array slicing. If I had more time and was in a less-pressured environment, I could have refactored this to use a single state for `currentPage` and derive the start index from it.
```jsx
const [startIndex, setStartIndex] = useState(0);
const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
    setStartIndex((currentPage - 1) * perPage);
}, [currentPage])
...
``` 
- I felt a bit rushed, which made my explanations difficult to follow.

### Key Learnings & Takeaways

1.  **Use `Math.ceil()` for Pagination:**
    - To correctly calculate the `totalPage` count, I should use `Math.ceil(users.length / perPage)`.

2.  **Handle `<select>` Value Types:**
    - The `value` from a `<select>` element's `onChange` event is always a string. It's crucial to convert it back to a number (e.g., using `+e.target.value` or `Number(e.target.value)`) to prevent unexpected behavior in calculations.
    - Forgetting this caused an issue where the table would display all users after changing the "per page" value and then clicking "next".
```jsx
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(+e.target.value);
            setCurrentPage(1);
          }}
        >
          {perPageSelection.map((num) => (
            <option value={num}>Show {num}</option>
          ))}
        </select>
```
3. When the user changes the number of items per page, the current page should be reset to 1 by calling `setCurrentPage(1)`. This prevents being on a page number that no longer exists.

4. `const startIndex = (currentPage - 1) * perPage;` this part was a bit tricky