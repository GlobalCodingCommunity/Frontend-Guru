import submitForm from './submitForm';
export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
        action="https://questions.greatfrontend.com/api/questions/contact-form"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "300px",
        }}
      >
        <label for="name">Name</label>
        <input id="name" name="name" type="text" />

        <label for="email">Email</label>
        <input id="email" name="email" type="email" />

        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send</button>
      </form>
  );
}
