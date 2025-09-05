# Generate Table Challenge

Create a dynamic table generator that produces a numbered grid based on user input for rows and columns.

![Generated table of 4 by 5 columns](https://www.greatfrontend.com/img/questions/generate-table/generate-table-example.png)

*Example: Generated table of 4 rows by 5 columns*

## Requirements

### Form Input
- **Row Input**: Number input field for specifying table rows
- **Column Input**: Number input field for specifying table columns  
- **Submit Button**: Triggers table generation

### Table Generation
- **Dynamic Creation**: Generate table when form is submitted
- **Cell Numbering**: Each cell contains sequential numbers from 1 to (rows × columns)
- **Snake Pattern**: Numbers follow a column-wise snake pattern:
  - Even columns: Top to bottom (1, 2, 3, 4...)
  - Odd columns: Bottom to top (8, 7, 6, 5...)

### Visual Requirements
- **Grid Layout**: Clear table structure with visible borders
- **Cell Styling**: Uniform cell dimensions and centered content
- **Responsive Design**: Table should display properly on different screen sizes

## Implementation Notes

- Validate input to ensure positive integers
- Handle edge cases (0 rows/columns, negative numbers)
- Consider performance for larger table sizes
- Implement clean, accessible form controls
