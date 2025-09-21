# Contact Form

Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

## Requirements

The form should contain the following elements:

- **Name field** - Text input for user's name
- **Email field** - Email input for user's email address
- **Message field** - Since the message can be long, a `<textarea>` will be more suitable
- **Submit button** - Contains the text "Send" and submits the form when clicked

### Implementation Requirements

- The form and submission should be implemented entirely in HTML
- Do not use any JavaScript or framework-specific features for this question
- There is no need to do any client-side validation on the fields (validation will be done server-side)

## Submission API

Upon submission, POST the form data to:
```
https://questions.greatfrontend.com/api/questions/contact-form
```

**Required fields in request body:**
- `name` - User's name
- `email` - User's email address  
- `message` - User's message

If all form fields are correctly filled up, you will see an alert containing a success message. Congratulations!

## Notes

- You do not need JavaScript for this question
- The focus is on HTML form validation and submission
- This is a pure HTML exercise demonstrating form handling fundamentals
