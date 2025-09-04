# Data Table Challenge

Build a users data table that displays users in a paginated format from a given list of users.

## Requirements

### Table Requirements

- **Columns**: Display the following columns in the data table:
  - **Id** - User identifier
  - **Name** - User's full name
  - **Age** - User's age
  - **Occupation** - User's job/profession
- **Rows**: Each row represents a single user with their corresponding data

### Pagination Requirements

- **Navigation Controls**: Provide previous/next buttons to navigate between pages
- **Page Information**: Display current page number and total number of pages
- **Dynamic Updates**: Table content should update automatically when navigating to different pages
- **Page Size Options**: Allow users to select the number of items displayed per page
  - Common options: 5, 10, 20 users per page

## Implementation Notes

- Handle edge cases (first/last page navigation)
- Ensure responsive design for different screen sizes
- Consider loading states and smooth transitions between pages
- Validate page boundaries and handle empty states gracefully
