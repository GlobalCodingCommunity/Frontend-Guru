import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="POST"
      onSubmit={submitForm}
      className="form"
    >
      <div>
        <label for="name">Name: </label>
        <input type="text" required name="name" id="name" />
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="text" required name="email" id="name" />
      </div>

      <div>
        <label for="message">Message: </label>
        <textarea
          type="message"
          required
          name="message"
          id="message"
          rows={4}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
