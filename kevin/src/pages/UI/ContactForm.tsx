import ProblemLayout from '../../components/ProblemLayout';
import ProblemHeader from '../../components/ProblemHeader';
import ProblemDescription from '../../components/ProblemDescription';
import ProblemResult from '../../components/ProblemResult';

function UIContactFormPage() {
  return (
    <ProblemLayout>
      <ProblemHeader category="UI" page="ContactForm">
        <ProblemDescription>
        {`- The form should contain the following elements: Name field. Email field.Message field. Since the message can be long, a <textarea> will be more suitable.
- Submit button Contains the text "Send".
- Clicking on the submit button submits the form.
- The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
- There is no need to do any client-side validation on the fields. Validation will be done on the server side.`}
        </ProblemDescription>
      </ProblemHeader>

      <ProblemResult>
        <form
            action="https://questions.greatfrontend.com/api/questions/contact-form"
            method="POST"
          >
            <div>
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" required />
            </div>

            <br />

            <div>
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" name="email" required />
            </div>

            <br />

            <div>
              <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" rows={5} required></textarea>
            </div>

            <br />

            <button type="submit">Send</button>
          </form>
      </ProblemResult>
    </ProblemLayout>
  );
}

export default UIContactFormPage;